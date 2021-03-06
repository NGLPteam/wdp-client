import { Column } from "react-table";
import { useTranslation } from "react-i18next";
import { PartialColumnish, SchemaVersionableNode } from "./types";

const SchemaColumn = <NodeType extends Partial<SchemaVersionableNode>>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  const { t } = useTranslation();

  return {
    Header: <>{t("lists.schema_column")}</>,
    id: "schema",
    className: "t-truncate",
    accessor: (originalRow: NodeType) => {
      return `${originalRow?.schemaVersion?.name}`;
    },
    ...props,
  };
};

export default SchemaColumn;
