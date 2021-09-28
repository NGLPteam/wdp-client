import React from "react";
import { CellProps, Column } from "react-table";
import { PartialColumnish, Node } from "./types";
import get from "lodash/get";

type Props<T extends Node> = PartialColumnish<T> & {
  Header: string | React.ReactNode;
  id: string;
  capitalize?: boolean;
};

const StringColumn = <T extends Node>({
  Header,
  id,
  capitalize,
  ...props
}: Props<T>): Column<T> => {
  return {
    Header,
    id,
    accessor: (originalRow: T) => get(originalRow, id),
    disableSortBy: true,
    Cell: ({ value }: CellProps<T>) =>
      capitalize ? <span className="t-capitalize">{value}</span> : value,
    ...props,
  };
};

export default StringColumn;
