import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { ButtonControlGroup, ButtonControlDrawer } from "components/atomic";
import type { HarvestMappingsListFragment$key } from "@/relay/HarvestMappingsListFragment.graphql";
import type {
  HarvestMappingsListDataFragment$data,
  HarvestMappingsListDataFragment$key,
} from "@/relay/HarvestMappingsListDataFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

type Props = Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
  data?: HarvestMappingsListFragment$key;
};

type HarvestMappingNode =
  HarvestMappingsListDataFragment$data["harvestMappings"][number];

function HarvestMappingsList({ data, headerStyle, hideHeader }: Props) {
  const harvestSource = useFragment<HarvestMappingsListFragment$key>(
    fragment,
    data,
  );

  const { harvestMappings } =
    useFragment<HarvestMappingsListDataFragment$key>(
      listFragment,
      harvestSource,
    ) ?? {};

  const { t } = useTranslation();

  const columns = [
    ModelColumns.StringColumn<HarvestMappingNode>({
      id: "harvestSet.name",
      header: () => "Harvest Set",
    }),
    ModelColumns.StringColumn<HarvestMappingNode>({
      id: "harvestRecords.pageInfo.totalCount",
      header: () => "Harvest Records",
    }),
    ModelColumns.StringColumn<HarvestMappingNode>({
      id: "targetEntity.title",
      header: () => "Target Entity",
    }),
  ];

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        drawer="addHarvestMapping"
        drawerQuery={{ drawerSourceId: harvestSource?.id }}
        icon="plus"
      >
        {t("actions.add.harvest_mapping")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  const listData = {
    ...harvestSource?.harvestSets,
    nodes: harvestMappings ?? [],
  };

  return harvestSource?.harvestSets ? (
    <ModelListPage<any, HarvestMappingNode> //eslint-disable-line @typescript-eslint/no-explicit-any
      modelName="harvest_mapping"
      columns={columns}
      buttons={buttons}
      data={listData}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  ) : null;
}

const listFragment = graphql`
  fragment HarvestMappingsListDataFragment on HarvestSource {
    harvestMappings {
      id
      harvestSet {
        name
      }
      targetEntity {
        title
      }
    }
  }
`;

const fragment = graphql`
  fragment HarvestMappingsListFragment on HarvestSource {
    id
    harvestSets(order: $order, page: $page, perPage: 20) {
      ...ModelListPageFragment
    }
    ...HarvestMappingsListDataFragment
  }
`;

export default HarvestMappingsList;
