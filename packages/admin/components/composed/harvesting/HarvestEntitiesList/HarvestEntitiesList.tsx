import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import ModelListPageUnpaginated from "components/composed/model/ModelListPageUnpaginated";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import type {
  HarvestEntitiesListFragment$data,
  HarvestEntitiesListFragment$key,
} from "@/relay/HarvestEntitiesListFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

type Props = Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
  data?: HarvestEntitiesListFragment$key;
};

type HarvestEntities = HarvestEntitiesListFragment$data["harvestEntities"];
type HarvestEntityNode = HarvestEntities[number];
type HarvestEntityNodes = { nodes: (HarvestEntityNode & { slug?: string })[] };

function HarvestEntitiesList({ data, headerStyle, hideHeader }: Props) {
  const { harvestEntities } =
    useFragment<HarvestEntitiesListFragment$key>(fragment, data) ?? {};

  const { t } = useTranslation();

  const columns = [
    ModelColumns.CreatedAtColumn<HarvestEntityNode>({ enableSorting: false }),
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

  const nodes =
    harvestEntities?.map((he) => ({
      slug: he.entity?.slug,
      ...he,
    })) ?? [];

  return (
    <ModelListPageUnpaginated<HarvestEntityNodes, HarvestEntityNode>
      data={{ nodes }}
      columns={columns}
      modelName="harvest_entity"
      totalCount={harvestEntities?.length}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
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
