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
  EntityHarvestRecordsListFragment$data,
  EntityHarvestRecordsListFragment$key,
} from "@/relay/EntityHarvestRecordsListFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

type Props = Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
  data?: EntityHarvestRecordsListFragment$key;
  backTo?: string;
  backToSlug?: string;
};

type HarvestRecordNode =
  EntityHarvestRecordsListFragment$data["harvestRecords"][number];

function HarvestRecordsList({
  data,
  headerStyle,
  hideHeader,
  backTo,
  backToSlug = "",
}: Props) {
  const { harvestRecords } =
    useFragment<EntityHarvestRecordsListFragment$key>(fragment, data) ?? {};

  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const columns = [
    ModelColumns.NameColumn<HarvestRecordNode>({
      accessor: "identifier",
      header: () => "Identifier",
      route: "harvestRecord",
      enableSorting: false,
      query: backTo ? { backTo, backToSlug } : undefined,
    }),
    ModelColumns.CreatedAtColumn<HarvestRecordNode>({ enableSorting: true }),
    ModelColumns.StringColumn<HarvestRecordNode>({
      id: "entityCount",
      header: () => "Entity Count",
    }),
    ModelColumns.StringColumn<HarvestRecordNode>({
      id: "status",
      header: () => t("lists.status_column"),
    }),
    ModelColumns.BooleanColumn<HarvestRecordNode>({
      id: "row.harvestErrors",
      accessorFn: (row) => !!row.harvestErrors.length,
      header: () => "Has Errors",
    }),
  ];

  const pageInfo = {
    page: 1,
    pageCount: 1,
    perPage: 20,
    hasNextPage: false,
    hasPreviousPage: false,
    totalCount: harvestRecords?.length,
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
      <ModelList<any, HarvestRecordNode>
        data={{
          nodes: harvestRecords,
        }}
        columns={columns}
        modelName="harvest_entity"
        view={isMobile ? ViewOptions.grid : ViewOptions.table}
      />
    </section>
  );
}

export const fragment = graphql`
  fragment EntityHarvestRecordsListFragment on ChildEntity {
    harvestRecords {
      id
      slug
      createdAt
      updatedAt
      entityCount
      identifier
      harvestErrors {
        code
      }
      status
    }
  }
`;

export default HarvestRecordsList;
