import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import type {
  HarvestRecordsListFragment$data,
  HarvestRecordsListFragment$key,
} from "@/relay/HarvestRecordsListFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

type Props = Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
  data?: HarvestRecordsListFragment$key;
};

type HarvestRecordNode = HarvestRecordsListFragment$data["nodes"][number];

function HarvestRecordsList({ data, headerStyle, hideHeader }: Props) {
  const harvestRecords = useFragment<HarvestRecordsListFragment$key>(
    fragment,
    data,
  );

  const { t } = useTranslation();

  const columns = [
    ModelColumns.NameColumn<HarvestRecordNode>({
      accessor: "identifier",
      header: () => "Identifier",
      route: "harvestRecord",
      enableSorting: false,
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

  return (
    <ModelListPage<HarvestRecordsListFragment$data, HarvestRecordNode>
      modelName="harvest_record"
      columns={columns}
      data={harvestRecords}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

export const fragment = graphql`
  fragment HarvestRecordsListFragment on HarvestRecordConnection {
    nodes {
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
    ...ModelListPageFragment
  }
`;

export default HarvestRecordsList;
