import React from "react";
import { Column } from "react-table";
import get from "lodash/get";
import { PartialColumnish, Node } from "./types";

type Props<T extends Node> = PartialColumnish<T> & {
  Header: string | React.ReactNode;
  id: string;
  capitalize?: boolean;
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
