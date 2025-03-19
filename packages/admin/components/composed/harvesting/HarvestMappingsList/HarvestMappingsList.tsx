import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { useDrawerHelper, useDestroyer } from "hooks";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { ButtonControlGroup, ButtonControlDrawer } from "components/atomic";
import type {
  HarvestMappingsListFragment$key,
  HarvestMappingsListFragment$data,
} from "@/relay/HarvestMappingsListFragment.graphql";
import type { ModelTableActionProps, Row } from "@tanstack/react-table";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

type Props = Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
  data?: HarvestMappingsListFragment$key;
  sourceId?: string;
};

type HarvestMappingNode = HarvestMappingsListFragment$data["nodes"][number];

function HarvestMappingsList({
  data,
  sourceId,
  headerStyle,
  hideHeader,
}: Props) {
  const harvestMappings = useFragment<HarvestMappingsListFragment$key>(
    fragment,
    data,
  );

  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();

  const columns = [
    ModelColumns.LinkColumn<HarvestMappingNode>({
      id: "targetEntity.title",
      header: () => "Target Entity",
      slug: "targetEntity.slug",
      route: (row: Row<HarvestMappingNode>) =>
        row.original.targetEntity?.__typename === "COLLECTION"
          ? "collection"
          : "community",
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
        drawerSourceId: sourceId,
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
        drawerQuery={{ drawerSourceId: sourceId }}
        icon="plus"
      >
        {t("actions.add.harvest_mapping")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return (
    <ModelListPage<HarvestMappingsListFragment$data, HarvestMappingNode>
      modelName="harvest_mapping"
      columns={columns}
      buttons={buttons}
      actions={actions}
      data={harvestMappings}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

const fragment = graphql`
  fragment HarvestMappingsListFragment on HarvestMappingConnection {
    nodes {
      id
      slug
      harvestSet {
        name
      }
      targetEntity {
        __typename
        title
        slug
      }
      harvestAttempts {
        pageInfo {
          totalCount
        }
      }
    }
    ...ModelListPageFragment
  }
`;

export default HarvestMappingsList;
