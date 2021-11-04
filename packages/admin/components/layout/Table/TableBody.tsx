import React from "react";
import type { Row, Cell } from "react-table";
import times from "lodash/times";
import * as Styled from "./Table.styles";
import TableRow from "./TableRow";
import useTableContext from "./hooks/useTableContext";
import { LoadingSkeleton } from "components/atomic";
import { Checkbox } from "components/forms";

function TableBody<T extends Record<string, unknown>>({
  loading = false,
  rows,
}: Props<T>) {
  const { columnCount } = useTableContext();

  /* eslint-disable react/jsx-key */
  /* keys are injected using the get props functions */
  const renderCheckboxCell = (row: RowProps<T>) => {
    if (!row.getToggleRowSelectedProps) return;
    const props = row.getToggleRowSelectedProps();

    return (
      <Styled.SelectCell role="gridcell">
        <Styled.SelectCellInner>
          <Checkbox {...props} />
        </Styled.SelectCellInner>
      </Styled.SelectCell>
    );
  };

  return (
    <Styled.TableBody role="rowgroup">
      {loading
        ? times(20, (i) => {
            return (
              <Styled.LoadingRow key={i}>
                <Styled.Cell role="presentation" />
                <Styled.LoadingCell colSpan={columnCount}>
                  <LoadingSkeleton />
                </Styled.LoadingCell>
                <Styled.Cell role="presentation" />
              </Styled.LoadingRow>
            );
          })
        : rows.map((row) => (
            <TableRow {...row.getRowProps()}>
              {row.getToggleRowSelectedProps ? (
                renderCheckboxCell(row)
              ) : (
                <Styled.Cell role="presentation" />
              )}
              {row.cells.map((cell) => {
                const cellProps = {
                  ...(cell.getCellProps && cell.getCellProps()),
                };
                return (
                  <Styled.Cell
                    {...cellProps}
                    data-cell-type={cell.column?.cellType}
                    className={cell.column?.className}
                  >
                    {cell.render("Cell")}
                  </Styled.Cell>
                );
              })}
              <Styled.Cell role="presentation" />
            </TableRow>
          ))}
    </Styled.TableBody>
  );
  /* eslint-enable react/jsx-key */
}

type RequiredCellProps<T extends Record<string, unknown>> = Pick<
  Cell<T, Record<string, unknown>>,
  "getCellProps" | "render"
>;

type OptionalCellProps<T extends Record<string, unknown>> = Partial<
  Pick<Cell<T, Record<string, unknown>>, "column">
>;

type CellProps<T extends Record<string, unknown>> = RequiredCellProps<T> &
  OptionalCellProps<T>;

interface RowProps<T extends Record<string, unknown>>
  extends Pick<Row<T>, "getToggleRowSelectedProps" | "getRowProps"> {
  cells: CellProps<T>[];
}

interface Props<T extends Record<string, unknown>> {
  loading?: boolean;
  rows: RowProps<T>[];
}

export default TableBody;
