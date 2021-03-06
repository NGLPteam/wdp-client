import { CellProps, Column } from "react-table";
import { useTranslation } from "react-i18next";
import { formatDate } from "@wdp/lib/helpers";
import { CreatableNode, PartialColumnish } from "./types";

const CreatedAtColumn = <NodeType extends CreatableNode>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  const { t } = useTranslation();

  return {
    Header: <>{t("lists.created_at_column")}</>,
    id: "createdAt",
    className: "t-truncate",
    accessor: (originalRow: NodeType) => {
      if (!originalRow.createdAt) return null;
      return originalRow.createdAt;
    },
    Cell: ({ value }: CellProps<NodeType>) => value && formatDate(value),
    ...props,
  };
};

export default CreatedAtColumn;
