import { Column } from "react-table";
import { useTranslation } from "react-i18next";
import { formatDate } from "@wdp/lib/helpers";
import { UpdatableNode, PartialColumnish } from "./types";

const UpdatedAtColumn = <NodeType extends UpdatableNode>(
  props: PartialColumnish<NodeType> = { disableSortBy: true }
): Column<NodeType> => {
  const { t } = useTranslation();

  return {
    Header: <>{t("lists.updated_at_column")}</>,
    id: "updatedAt",
    className: "t-truncate",
    accessor: (originalRow: NodeType) => {
      if (!originalRow.updatedAt) return null;
      return formatDate(originalRow.updatedAt);
    },
    ...props,
  };
};

export default UpdatedAtColumn;
