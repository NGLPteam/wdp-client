import { Column } from "react-table";
import { PartialColumnish, SchemaVersionableNode } from "./types";
import { useTranslation } from "react-i18next";

const UpdatedAtColumn = <NodeType extends SchemaVersionableNode>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  const { t } = useTranslation();

  return {
    align: "left",
    Header: <>{t("columns.schema")}</>,
    id: "schema",
    disableSortBy: true,
    truncate: true,
    accessor: (originalRow: NodeType) => {
      return `${originalRow.schemaVersion.name}`;
    },
    ...props,
  };
};

export default UpdatedAtColumn;
