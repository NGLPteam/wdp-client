import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import type {
  HarvestAttemptsListFragment$data,
  HarvestAttemptsListFragment$key,
} from "@/relay/HarvestAttemptsListFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

type Props = Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
  data?: HarvestAttemptsListFragment$key;
  backTo?: string;
};

type HarvestAttemptNode = HarvestAttemptsListFragment$data["nodes"][number];

function HarvestAttemptsList({ data, headerStyle, hideHeader, backTo }: Props) {
  const harvestAttempts = useFragment<HarvestAttemptsListFragment$key>(
    fragment,
    data,
  );

  const { t } = useTranslation();

  const columns = [
    ModelColumns.NameColumn<HarvestAttemptNode>({
      accessor: () => "[Attempt Id Here]",
      header: () => "Identifier",
      enableSorting: false,
      route: "harvestAttempt",
      query: backTo ? { backTo } : undefined,
    }),
    ModelColumns.BeganAtColumn<HarvestAttemptNode>({ enableSorting: false }),
    ModelColumns.EndedAtColumn<HarvestAttemptNode>({ enableSorting: false }),
    ModelColumns.StringColumn<HarvestAttemptNode>({
      id: "harvestSet.identifier",
      header: () => t("glossary.harvest_set"),
    }),
    ModelColumns.StringColumn<HarvestAttemptNode>({
      id: "recordCount",
      header: () => t("lists.record_count_column"),
    }),
    ModelColumns.BooleanColumn<HarvestAttemptNode>({
      id: "row.harvestErrors",
      accessorFn: (row) => !!row.harvestErrors.length,
      header: () => "Has Errors",
    }),
  ];

  return (
    <ModelListPage<HarvestAttemptsListFragment$data, HarvestAttemptNode>
      modelName="harvest_attempt"
      columns={columns}
      data={harvestAttempts}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

export const fragment = graphql`
  fragment HarvestAttemptsListFragment on HarvestAttemptConnection {
    nodes {
      id
      slug
      beganAt
      endedAt
      harvestSet {
        identifier
      }
      recordCount
      harvestErrors {
        code
      }
    }
    ...ModelListPageFragment
  }
`;

export default HarvestAttemptsList;
