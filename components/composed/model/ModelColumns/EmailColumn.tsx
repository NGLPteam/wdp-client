import { Column } from "react-table";
import { PartialColumnish, Node } from "./types";

const EmailColumn = <NodeType extends Node>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  return {
    Header: "Email",
    id: "email",
    accessor: (originalRow: NodeType) => originalRow.email,
    disableSortBy: true,
    ...props,
  };
};

export default EmailColumn;
