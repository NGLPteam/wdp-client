import get from "lodash/get";
import { PartialColumnish, Node } from "./types";
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
  return {
    header,
    id,
    accessorFn: (originalRow: T) => get(originalRow, id),
    enableSorting: false,
    ...props,
  };
};

export default StringColumn;
