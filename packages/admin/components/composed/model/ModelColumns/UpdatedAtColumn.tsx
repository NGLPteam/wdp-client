import { useTranslation } from "react-i18next";
import { formatDate } from "@wdp/lib/helpers";
import { UpdatableNode, PartialColumnish } from "./types";
import type { ColumnDef } from "@tanstack/react-table";

const UpdatedAtColumn = <NodeType extends UpdatableNode>(
  props: PartialColumnish<NodeType> = { enableSorting: false },
): ColumnDef<NodeType> => {
  const { t } = useTranslation();

  return {
    header: () => <>{t("lists.updated_at_column")}</>,
    id: "updatedAt",
    meta: {
      className: "t-truncate",
    },
    accessorFn: (originalRow: NodeType) => {
      if (!originalRow.updatedAt) return null;
      return formatDate(originalRow.updatedAt);
    },
    ...props,
  };
};

export default UpdatedAtColumn;
