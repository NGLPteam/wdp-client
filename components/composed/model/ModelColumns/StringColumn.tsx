import React from "react";
import { Column } from "react-table";
import { PartialColumnish, Node } from "./types";
import get from "lodash/get";

type Props<T extends Node> = PartialColumnish<T> & {
  Header: string | React.ReactNode;
  id: string;
};

const StringColumn = <T extends Node>({
  Header,
  id,
  ...props
}: Props<T>): Column<T> => {
  return {
    Header,
    id,
    accessor: (originalRow: T) => get(originalRow, id),
    disableSortBy: true,
    ...props,
  };
};

export default StringColumn;
