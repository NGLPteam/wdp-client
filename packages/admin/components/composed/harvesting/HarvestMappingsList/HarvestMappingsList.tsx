import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { useDestroyer, useRouteSlug } from "hooks";
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

  const columns = [
    ModelColumns.NameColumn<HarvestMappingNode>({
      accessorFn: (row) =>
        `${row.harvestSource?.name}:${
          row.harvestSet?.identifier ?? t("harvesting.set_placeholder")
        }:${row.targetEntity?.title}`,
      header: () => t("lists.identifier_column"),
      enableSorting: false,
      route: "harvestMapping",
    }),
    ModelColumns.StringColumn<HarvestMappingNode>({
      id: "harvestSet.name",
      header: () => t("glossary.harvest_set"),
    }),
    ModelColumns.LinkColumn<HarvestMappingNode>({
      id: "targetEntity.title",
      header: () => t("target_entity_column"),
      slug: "targetEntity.slug",
      route: (row: Row<HarvestMappingNode>) =>
        row.original.targetEntity?.__typename === "COLLECTION"
          ? "collection"
          : "community",
    }),
    ModelColumns.StringColumn<HarvestMappingNode>({
      id: "harvestAttempts.pageInfo.totalCount",
      header: () => t("lists.attempts_count_column"),
    }),
  ];

  const actions = {
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
      harvestSource {
        name
      }
      harvestSet {
        name
        identifier
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
