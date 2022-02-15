import { CellProps, Column } from "react-table";
import get from "lodash/get";
import { PartialColumnish, Node } from "./types";

type Props<T extends Node> = PartialColumnish<T> & {
  Header: string | React.ReactNode;
  id: string;
};

const BooleanColumn = <T extends Node>({
  Header,
  id,
  disableSortBy = true,
  ...props
}: Props<T>): Column<T> => {
  return {
    Header,
    id,
    accessor: (originalRow: T) => get(originalRow, id),
    disableSortBy,
    Cell: ({ value }: CellProps<T>) => (value && value === true ? "Yes" : "No"),
    ...props,
  };
};

export default BooleanColumn;
