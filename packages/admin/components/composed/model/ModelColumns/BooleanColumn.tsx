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
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    id,
    ...(accessorKey
      ? { accessorKey }
      : { accessorFn: (originalRow: T) => get(originalRow, id) }),
    enableSorting,
    cell: ({ getValue }) => (getValue() && getValue() === true ? "Yes" : "No"),
    ...props,
  };
};

export default BooleanColumn;
