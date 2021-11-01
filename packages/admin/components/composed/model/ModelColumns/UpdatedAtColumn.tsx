import { Column } from "react-table";
import { formatDate } from "helpers";
import { useTranslation } from "react-i18next";
import { UpdatableNode, PartialColumnish } from "./types";

const UpdatedAtColumn = <NodeType extends UpdatableNode>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  const { t } = useTranslation();

  return {
    Header: <>{t("lists.updated_at_column")}</>,
    id: "updatedAt",
    disableSortBy: false,
    className: "t-truncate",
    accessor: (originalRow: NodeType) => {
      if (!originalRow.updatedAt) return null;
      return formatDate(originalRow.updatedAt);
    },
    ...props,
  };
};

export default UpdatedAtColumn;