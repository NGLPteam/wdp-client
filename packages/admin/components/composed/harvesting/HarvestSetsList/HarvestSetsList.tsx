import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import type {
  HarvestSetsListFragment$data,
  HarvestSetsListFragment$key,
} from "@/relay/HarvestSetsListFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

type Props = Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
  data?: HarvestSetsListFragment$key;
};

type HarvestSetNode = HarvestSetsListFragment$data["nodes"][number];

function HarvestSetsList({ data, headerStyle, hideHeader }: Props) {
  const harvestSets = useFragment<HarvestSetsListFragment$key>(fragment, data);

  const { t } = useTranslation();

  const columns = [
    ModelColumns.StringColumn<HarvestSetNode>({
      id: "identifier",
      header: () => "Identifier",
    }),
    ModelColumns.NameColumn<HarvestSetNode>({
      accessor: "name",
      header: () => "Name",
      enableSorting: true,
    }),
    ModelColumns.StringColumn<HarvestSetNode>({
      id: "description",
      header: () => t("lists.description_column"),
    }),
  ];

  return (
    <ModelListPage<HarvestSetsListFragment$data, HarvestSetNode>
      modelName="harvest_set"
      columns={columns}
      data={harvestSets}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

export const fragment = graphql`
  fragment HarvestSetsListFragment on HarvestSetConnection {
    nodes {
      id
      name
      identifier
      slug
      description
    }
    ...ModelListPageFragment
  }
`;

export default HarvestSetsList;
