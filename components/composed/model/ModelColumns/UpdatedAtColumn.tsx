import { Column } from "react-table";
import { UpdatableNode, PartialColumnish } from "./types";
import { formatDate } from "helpers";

const UpdatedAtColumn = <NodeType extends UpdatableNode>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  return {
    align: "left",
    Header: "Updated At",
    id: "updatedAt",
    disableSortBy: false,
    truncate: true,
    accessor: (originalRow: NodeType) => {
      if (!originalRow.updatedAt) return null;
      return formatDate(originalRow.updatedAt);
    },
    ...props,
  };
};

export default UpdatedAtColumn;
