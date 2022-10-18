import React from "react";
import { Column } from "react-table";
import get from "lodash/get";
import { PartialColumnish, Node } from "./types";

type Props<T extends Node> = PartialColumnish<T> & {
  Header: string | React.ReactNode;
};

const PositionColumn = <T extends Node>(
  { Header, ...props }: Props<T> = {
    Header: "Position",
  }
): Column<T> => {
  return {
    id: "position",
    accessor: (originalRow: T) => get(originalRow, "position"),
    ...props,
  };
};

export default PositionColumn;
