import get from "lodash/get";
import { PartialColumnish, Node } from "./types";
import { getAccessorProps } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T> & {
  header: () => string | React.ReactNode;
  id: string;
  capitalize?: boolean;
  cellType?: "url" | "name";
};

const StringColumn = <T extends Node>({
  header,
  id,
  cellType,
  ...props
}: Props<T>): ColumnDef<T> => {
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header,
    id,
    ...(accessorKey
      ? { accessorKey }
      : { accessorFn: (originalRow: T) => get(originalRow, id) }),
    enableSorting: false,
    meta: {
      cellType,
    },
    ...props,
  };
};

export default StringColumn;
