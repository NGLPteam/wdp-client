import { Column } from "react-table";
import { CreatableNode, PartialColumnish } from "./types";
import { formatDate } from "helpers";

const CreatedAtColumn = <NodeType extends CreatableNode>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  return {
    align: "left",
    Header: "Created At",
    id: "createdAt",
    disableSortBy: true,
    truncate: true,
    accessor: (originalRow: NodeType) => {
      if (!originalRow.createdAt) return null;
      return formatDate(originalRow.createdAt);
    },
    ...props,
  };
};

export default CreatedAtColumn;
