import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import ModelListPageUnpaginated from "components/composed/model/ModelListPageUnpaginated";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
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

type HarvestRecords = EntityHarvestRecordsListFragment$data["harvestRecords"];
type HarvestRecordNode = HarvestRecords[number];
type HarvestRecordNodes = { nodes: HarvestRecords };

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

  const columns = [
    ModelColumns.NameColumn<HarvestRecordNode>({
      accessor: "identifier",
      header: () => t("lists.identifier_column"),
      route: "harvestRecord",
      enableSorting: false,
      query: backTo ? { backTo, backToSlug } : undefined,
      className: "t-truncate",
    }),
    ModelColumns.CreatedAtColumn<HarvestRecordNode>({ enableSorting: true }),
    ModelColumns.StringColumn<HarvestRecordNode>({
      id: "entityCount",
      header: () => t("lists.entity_count_column"),
    }),
    ModelColumns.StringColumn<HarvestRecordNode>({
      id: "status",
      header: () => t("lists.status_column"),
    }),
    ModelColumns.BooleanColumn<HarvestRecordNode>({
      id: "row.harvestErrors",
      accessorFn: (row) => !!row.harvestErrors.length,
      header: () => t("lists.has_errors_column"),
    }),
  ];

  return (
    <ModelListPageUnpaginated<HarvestRecordNodes, HarvestRecordNode>
      data={{
        nodes: harvestRecords ?? [],
      }}
      columns={columns}
      modelName="harvest_record"
      totalCount={harvestRecords?.length}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
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
