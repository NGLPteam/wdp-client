import get from "lodash/get";
import { PartialColumnish, Node } from "./types";
import { getAccessorProps } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T> & {
  header: () => string | React.ReactNode;
  id: string;
  capitalize?: boolean;
};

const StringColumn = <T extends Node>({
  header,
  id,
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
    ...props,
  };
};

export default StringColumn;
