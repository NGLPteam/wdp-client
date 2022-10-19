import React from "react";
import type { ColumnDef } from "@tanstack/react-table";
import get from "lodash/get";
import { PartialColumnish, Node } from "./types";

type Props<T extends Node> = PartialColumnish<T> & {
  Header: string | React.ReactNode;
};

const PositionColumn = <T extends Node>(
  { Header, ...props }: Props<T> = {
    Header: "Position",
  }
): ColumnDef<T> => {
  return {
    id: "position",
    accessorFn: (originalRow: T) => get(originalRow, "position"),
    ...props,
  };
};

export default PositionColumn;
