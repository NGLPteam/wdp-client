import React from "react";
import * as Styled from "./Table.styles";
import TableRow from "./TableRow";
import { Checkbox } from "components/atomic/forms";
import type { Row, Cell } from "react-table";

function TableBody<T extends Record<string, unknown>>({ rows }: Props<T>) {
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
  rows: RowProps<T>[];
}

export default TableBody;
