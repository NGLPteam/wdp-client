import type { ColumnDef } from "@tanstack/react-table";
import get from "lodash/get";
import { PartialColumnish, Node } from "./types";

type Props<T extends Node> = PartialColumnish<T> & {
  header: () => string | React.ReactNode;
  id: string;
};

const BooleanColumn = <T extends Node>({
  id,
  enableSorting = false,
  ...props
}: Props<T>): ColumnDef<T> => {
  return {
    id,
    accessorFn: (originalRow: T) => get(originalRow, id),
    enableSorting,
    cell: ({ getValue }) => (getValue() && getValue() === true ? "Yes" : "No"),
    ...props,
  };
};

export default BooleanColumn;
