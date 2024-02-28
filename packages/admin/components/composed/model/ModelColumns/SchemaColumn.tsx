import { useTranslation } from "react-i18next";
import { PartialColumnish, SchemaVersionableNode } from "./types";
import type { ColumnDef } from "@tanstack/react-table";

const SchemaColumn = <NodeType extends Partial<SchemaVersionableNode>>(
  props: PartialColumnish<NodeType> = {},
): ColumnDef<NodeType> => {
  const { t } = useTranslation();

  return {
    header: () => <>{t("lists.schema_column")}</>,
    id: "schema",
    meta: {
      className: "t-truncate",
    },
    accessorFn: (originalRow: NodeType) => {
      return `${originalRow?.schemaVersion?.name}`;
    },
    ...props,
  };
};

export default SchemaColumn;
