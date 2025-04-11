import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import { useDestroyer, useRouteSlug } from "hooks";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import IconFactory from "components/factories/IconFactory";
import { ButtonControlGroup, ButtonControlRoute } from "components/atomic";
import type {
  HarvestMappingsListFragment$key,
  HarvestMappingsListFragment$data,
} from "@/relay/HarvestMappingsListFragment.graphql";
import type { ModelTableActionProps } from "@tanstack/react-table";

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
      accessorFn: () => (
        <span style={{ marginInlineStart: "1rem" }}>
          <IconFactory icon="linkExternal" />
        </span>
      ),
      header: () => t("nav.details"),
      enableSorting: false,
      route: "harvestMapping",
    }),
    ModelColumns.LinkColumn<HarvestMappingNode>({
      accessor: (row) =>
        `${startCase(row.targetEntity?.harvestTargetKind.toLowerCase())}: ${
          row.targetEntity?.title
        }`,
      header: () => t("lists.target_entity_column"),
      slug: "targetEntity.slug",
      route: (row) =>
        row.original.targetEntity?.harvestTargetKind.toLowerCase(),
    }),
    ModelColumns.StringColumn<HarvestMappingNode>({
      id: "harvestSet.name",
      header: () => t("glossary.harvest_set"),
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
        harvestTargetKind
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
