import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useDestroyer, useRouteSlug } from "hooks";
import { RouteHelper } from "routes";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { ButtonControlGroup, ButtonControlRoute } from "components/atomic";
import type {
  HarvestMappingsListFragment$key,
  HarvestMappingsListFragment$data,
} from "@/relay/HarvestMappingsListFragment.graphql";
import type { ModelTableActionProps, Row } from "@tanstack/react-table";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

type Props = Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
  data?: HarvestMappingsListFragment$key;
  sourceSlug?: string;
};

type HarvestMappingNode = HarvestMappingsListFragment$data["nodes"][number];

function HarvestMappingsList({ data, headerStyle, hideHeader }: Props) {
  const harvestMappings = useFragment<HarvestMappingsListFragment$key>(
    fragment,
    data,
  );

  const { t } = useTranslation();
  const destroy = useDestroyer();
  const sourceSlug = useRouteSlug();
  const router = useRouter();

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
      router.push({
        pathname: RouteHelper.findRouteByName("harvestMapping.details")?.path,
        query: { slug: row.original.slug },
      });
    },
    handleDelete: ({ row }: ModelTableActionProps<HarvestMappingNode>) => {
      destroy.harvestMapping({ harvestMappingId: row.original.id || "" });
    },
  };

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      {sourceSlug && (
        <ButtonControlRoute
          route="harvestSource.mappings.new"
          query={{ slug: sourceSlug }}
          icon="plus"
        >
          {t("actions.add.harvest_mapping")}
        </ButtonControlRoute>
      )}
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
