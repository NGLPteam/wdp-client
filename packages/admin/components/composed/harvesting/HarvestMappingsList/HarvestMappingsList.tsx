import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { useDrawerHelper, useDestroyer } from "hooks";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { ButtonControlGroup, ButtonControlDrawer } from "components/atomic";
import type { HarvestMappingsListFragment$key } from "@/relay/HarvestMappingsListFragment.graphql";
import type {
  HarvestMappingsListDataFragment$data,
  HarvestMappingsListDataFragment$key,
} from "@/relay/HarvestMappingsListDataFragment.graphql";
import type { ModelTableActionProps } from "@tanstack/react-table";

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
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();

  const columns = [
    ModelColumns.StringColumn<HarvestMappingNode>({
      id: "targetEntity.title",
      header: () => "Target Entity",
    }),
    ModelColumns.StringColumn<HarvestMappingNode>({
      id: "harvestSet.name",
      header: () => "Harvest Set",
    }),
    ModelColumns.StringColumn<HarvestMappingNode>({
      id: "harvestAttempts.pageInfo.totalCount",
      header: () => "Harvest Attempts Count",
    }),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<HarvestMappingNode>) => {
      drawerHelper.open("editHarvestMapping", {
        drawerSlug: row.original.slug,
        drawerSourceId: harvestSource?.id,
      });
    },
    handleDelete: ({ row }: ModelTableActionProps<HarvestMappingNode>) => {
      destroy.harvestMapping({ harvestMappingId: row.original.id || "" });
    },
  };

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
      actions={actions}
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
      slug
      harvestSet {
        name
      }
      targetEntity {
        title
      }
      harvestAttempts {
        pageInfo {
          totalCount
        }
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
