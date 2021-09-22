import { CellProps, Column } from "react-table";
import { PartialColumnish, Node } from "./types";

type Props<T extends Node> = PartialColumnish<T> & {
  Header: string | React.ReactNode;
  id: string;
};

const BooleanColumn = <T extends Node>({
  Header,
  id,
  ...props
}: Props<T>): Column<T> => {
  return {
    Header,
    id,
    accessor: (originalRow: T) => originalRow[id],
    disableSortBy: true,
    Cell: ({ value }: CellProps<T>) => (value && value === true ? "Yes" : "No"),
    ...props,
  };
};

export default BooleanColumn;
