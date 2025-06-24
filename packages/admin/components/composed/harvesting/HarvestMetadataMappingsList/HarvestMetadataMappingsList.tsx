import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import ModelListPage from "components/composed/model/ModelListPage";
import { useDestroyer } from "hooks";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import type {
  HarvestMetadataMappingsListFragment$data,
  HarvestMetadataMappingsListFragment$key,
} from "@/relay/HarvestMetadataMappingsListFragment.graphql";
import type { ModelTableActionProps } from "@tanstack/react-table";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

type Props = Pick<HeaderProps, "headerStyle" | "hideHeader"> & {
  data?: HarvestMetadataMappingsListFragment$key;
};

type HarvestMetadataMappingNode =
  HarvestMetadataMappingsListFragment$data["nodes"][number];

function HarvestMetadataMappingsList({ data, headerStyle, hideHeader }: Props) {
  const { t } = useTranslation();
  const destroy = useDestroyer();

  const harvestMetadataMappings =
    useFragment<HarvestMetadataMappingsListFragment$key>(fragment, data);

  const columns = [
    ModelColumns.StringColumn<HarvestMetadataMappingNode>({
      id: "pattern",
      header: () => t("lists.pattern_column"),
    }),
    ModelColumns.StringColumn<HarvestMetadataMappingNode>({
      id: "field",
      header: () => t("lists.field_column"),
      accessorFn: (row) => row.field,
    }),
    ModelColumns.StringColumn<HarvestMetadataMappingNode>({
      id: "targetEntity",
      header: () => t("lists.target_entity_column"),
      accessorFn: (row) => row.targetEntity.title,
    }),
    ModelColumns.CreatedAtColumn<HarvestMetadataMappingNode>({
      enableSorting: true,
    }),
  ];

  const actions = {
    handleDelete: ({
      row,
    }: ModelTableActionProps<HarvestMetadataMappingNode>) => {
      destroy.harvestMetadataMapping({
        harvestMetadataMappingId: row.original.id || "",
      });
    },
  };

  return (
    <ModelListPage<
      HarvestMetadataMappingsListFragment$data,
      HarvestMetadataMappingNode
    >
      modelName="metadata_mapping"
      columns={columns}
      actions={actions}
      data={harvestMetadataMappings}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

export const fragment = graphql`
  fragment HarvestMetadataMappingsListFragment on HarvestMetadataMappingConnection {
    nodes {
      id
      slug
      createdAt
      pattern
      field
      targetEntity {
        slug
        title
      }
    }
    ...ModelListPageFragment
  }
`;

export default HarvestMetadataMappingsList;
