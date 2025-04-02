import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import ModelList from "components/composed/model/ModelList";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { ViewOptions } from "utils/view-options";
import { useIsMobile } from "hooks";
import { PageCountActions } from "components/layout";
import startCase from "lodash/startCase";
import type {
  HarvestEntitiesListFragment$data,
  HarvestEntitiesListFragment$key,
} from "@/relay/HarvestEntitiesListFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

type Props = Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
  data?: HarvestEntitiesListFragment$key;
};

type HarvestEntityNode =
  HarvestEntitiesListFragment$data["harvestEntities"][number];

function HarvestEntitiesList({ data, headerStyle, hideHeader }: Props) {
  const { harvestEntities } =
    useFragment<HarvestEntitiesListFragment$key>(fragment, data) ?? {};

  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const columns = [
    ModelColumns.CreatedAtColumn<HarvestEntityNode>(),
    ModelColumns.NameColumn<HarvestEntityNode>({
      accessorFn: (row) => row.entity?.title,
      enableSorting: false,
      route: (row) =>
        row?.entity?.__typename === "Item" ? "item" : "collection",
    }),
    ModelColumns.StringColumn<HarvestEntityNode>({
      id: "entity.schemaVersion.name",
      header: () => t("lists.schema_column"),
    }),
    ModelColumns.NameColumn<HarvestEntityNode>({
      id: "parent",
      accessorFn: (row) => row.parent?.entity?.title,
      header: () => t("forms.parent.label"),
      enableSorting: false,
    }),
  ];

  const pageInfo = {
    page: 1,
    pageCount: 1,
    perPage: 20,
    hasNextPage: false,
    hasPreviousPage: false,
    totalCount: harvestEntities?.length,
  };

  return (
    <section>
      <PageHeader
        title={startCase(t("glossary.harvest_entity_other"))}
        headerStyle={headerStyle}
        hideHeader={hideHeader}
      />
      <PageCountActions
        loading={typeof pageInfo.totalCount !== "number"}
        pageInfo={pageInfo}
      />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModelList<any, HarvestEntityNode>
        data={{
          nodes: harvestEntities?.map((he) => ({
            slug: he.entity?.slug,
            ...he,
          })),
        }}
        columns={columns}
        modelName="harvest_entity"
        view={isMobile ? ViewOptions.grid : ViewOptions.table}
      />
    </section>
  );
}

export const fragment = graphql`
  fragment HarvestEntitiesListFragment on HarvestRecord {
    harvestEntities {
      createdAt
      entity {
        __typename
        slug
        title
        schemaVersion {
          identifier
          name
        }
      }
      parent {
        entity {
          slug
          title
        }
      }
    }
  }
`;

export default HarvestEntitiesList;
