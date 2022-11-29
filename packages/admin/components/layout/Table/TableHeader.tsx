import React, { useEffect } from "react";
import type { CoreHeaderGroup } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import TableHeaderRow from "./TableHeaderRow";
import * as Styled from "./Table.styles";
import TableSortIcon from "./TableSortIcon";
import useTableContext from "./hooks/useTableContext";
import { Checkbox } from "components/forms";

function TableHeader<T extends Record<string, unknown>>({
  headerGroups = [],
  selectable,
  someRowsSelected,
  allRowsSelected,
  toggleAllRowsSelectedHandler,
}: Props<T>) {
  /* eslint-disable react/jsx-key */
  /* keys are injected using the get props functions */
  const { setColumnCount } = useTableContext();

  useEffect(() => {
    if (headerGroups.length > 0 && setColumnCount) {
      const { headers } = headerGroups[0];
      const columnCount = headers.length;
      setColumnCount(columnCount);
    }
  }, [headerGroups, setColumnCount]);

  return (
    <thead>
      {headerGroups.map((headerGroup) => {
        return (
          <TableHeaderRow key={headerGroup.id}>
            {selectable ? (
              <Styled.HeaderCell role="columnheader" data-select-cell="true">
                <Styled.SelectCellInner>
                  <Checkbox
                    {...{
                      checked: allRowsSelected,
                      indeterminate: someRowsSelected,
                      onChange: toggleAllRowsSelectedHandler,
                    }}
                  />
                </Styled.SelectCellInner>
              </Styled.HeaderCell>
            ) : (
              <Styled.HeaderCell role="presentation" />
            )}

            {headerGroup.headers.map((header) => {
              return (
                <Styled.HeaderCell
                  key={header.id}
                  colSpan={header.colSpan}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <Styled.HeaderCellInner>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getCanSort() && (
                      <TableSortIcon
                        desc={header.column.getIsSorted() === "desc"}
                        isSorted={!!header.column.getIsSorted()}
                      />
                    )}
                  </Styled.HeaderCellInner>
                </Styled.HeaderCell>
              );
            })}
            <Styled.HeaderCell role="presentation" />
          </TableHeaderRow>
        );
      })}
    </thead>
  );
  /* eslint-enable react/jsx-key */
}

// type RequiredHeaderProps<T extends Record<string, unknown>> = Column<T>;
//  Pick<
//   Column<T>,
//   "getHeaderProps" | "render" | "canSort"
// >;

// type OptionalHeaderProps<T extends Record<string, unknown>> = Partial<
//   Pick<Column<T>, "getSortByToggleProps" | "isSorted" | "isSortedDesc">
// >;

// type PartialHeader<T extends Record<string, unknown>> = RequiredHeaderProps<T> &
//   OptionalHeaderProps<T>;

interface Props<T extends Record<string, unknown>> {
  headerGroups: CoreHeaderGroup<T>[];
  selectable?: boolean;
  someRowsSelected?: boolean;
  allRowsSelected?: boolean;
  toggleAllRowsSelectedHandler?: (event: unknown) => void;
}

export default TableHeader;
