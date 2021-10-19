import { Column } from "react-table";
import { formatDate } from "helpers";
import { useTranslation } from "react-i18next";
import { CreatableNode, PartialColumnish } from "./types";

const CreatedAtColumn = <NodeType extends CreatableNode>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  const { t } = useTranslation();

  return {
    Header: <>{t("columns.createdAt")}</>,
    id: "createdAt",
    disableSortBy: true,
    className: "t-truncate",
    accessor: (originalRow: NodeType) => {
      if (!originalRow.createdAt) return null;
      return formatDate(originalRow.createdAt);
    },
    ...props,
  };
};

export default CreatedAtColumn;
