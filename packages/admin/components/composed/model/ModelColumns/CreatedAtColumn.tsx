import { useTranslation } from "react-i18next";
import { formatDate } from "@wdp/lib/helpers";
import { CreatableNode, PartialColumnish } from "./types";
import type { ColumnDef } from "@tanstack/react-table";

const CreatedAtColumn = <NodeType extends CreatableNode>(
  props: PartialColumnish<NodeType> = {},
): ColumnDef<NodeType> => {
  const { t } = useTranslation();

  return {
    header: () => <>{t("lists.created_at_column")}</>,
    id: "createdAt",
    meta: {
      className: "t-truncate",
    },
    accessorFn: (originalRow: NodeType) => {
      if (!originalRow.createdAt) return null;
      return originalRow.createdAt;
    },
    cell: ({ getValue }) => {
      const value = getValue();
      return value ? formatDate(value as string) : null;
    },
    ...props,
  };
};

export default CreatedAtColumn;
