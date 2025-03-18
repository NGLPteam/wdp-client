import get from "lodash/get";
import { PartialColumnish, Node } from "./types";
import { getAccessorProps } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T> & {
  header: () => string | React.ReactNode;
  id: string;
};

const BooleanColumn = <T extends Node>({
  id,
  enableSorting = false,
  ...props
}: Props<T>): ColumnDef<T> => {
  const { accessorKey, accessorFn: accessorFnProp } =
    getAccessorProps<T>(props);

  const accessorFn = accessorFnProp
    ? accessorFnProp
    : (originalRow: T) => get(originalRow, id);

  return {
    id,
    ...(accessorKey ? { accessorKey } : { accessorFn }),
    enableSorting,
    cell: ({ getValue }) => (getValue() && getValue() === true ? "Yes" : "No"),
    ...props,
  };
};

export default BooleanColumn;
