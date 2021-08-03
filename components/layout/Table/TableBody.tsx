import React from "react";
import * as Styled from "./Table.styles";
import TableRow from "./TableRow";
import { Checkbox } from "components/atomic/forms";
import type { Row, Cell } from "react-table";
import { ColumnInstance } from "react-table";

function TableBody<T extends object = {}>({ rows }: Props<T>) {
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
      {rows.map((row) => (
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
                className={cell.column?.truncate ? "t-truncate" : undefined}
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

interface RequiredCellProps<T extends object = {}, V = any>
  extends Pick<Cell<T, V>, "getCellProps" | "render"> {}

interface OptionalCellProps<T extends object = {}, V = any>
  extends Partial<Pick<Cell<T, V>, "column">> {}

type CellProps<T extends object = {}> = RequiredCellProps<T> &
  OptionalCellProps<T>;

interface RowProps<T extends object = {}>
  extends Pick<Row<T>, "getToggleRowSelectedProps" | "getRowProps"> {
  cells: CellProps<T>[];
}

interface Props<T extends object = {}> {
  rows: RowProps<T>[];
}

export default TableBody;
