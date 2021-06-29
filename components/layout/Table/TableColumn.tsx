import { useCallback } from "react";
import { SortProps } from "helpers/sharedTypes";
import * as Styled from "./Table.styles";
import TableSortButton from "./TableSortButton";

const TableColumn = ({
  columnKey,
  children,
  allowsSorting,
  sort,
  onSortChange,
  align,
  ...cellProps
}: ColumnProps) => {
  const handleSort = useCallback(() => {
    if (onSortChange && sort) {
      onSortChange({
        column: columnKey,
        direction:
          sort.direction === "none"
            ? "ascending"
            : sort.direction === "descending"
            ? "ascending"
            : "descending",
      });
    }
  }, [onSortChange, sort, columnKey]);

  return (
    <Styled.HeaderCell
      role="columnheader"
      {...cellProps}
      aria-sort={sort?.direction || "none"}
      align={align}
    >
      <Styled.HeaderCellInner>
        {allowsSorting ? (
          <TableSortButton
            sort={sort?.column === columnKey ? sort : null}
            onClick={handleSort}
          >
            {children}
          </TableSortButton>
        ) : (
          <span>{children}</span>
        )}
      </Styled.HeaderCellInner>
    </Styled.HeaderCell>
  );
};

interface ColumnProps {
  columnKey: string;
  children: string | JSX.Element | JSX.Element[];
  allowsSorting?: boolean;
  sort?: SortProps;
  onSortChange?: (sort) => void;
  align?: "left" | "right" | "center";
}

export default TableColumn;
