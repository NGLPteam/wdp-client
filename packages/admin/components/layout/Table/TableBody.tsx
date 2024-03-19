import { flexRender } from "@tanstack/react-table";
import times from "lodash/times";
import { LoadingSkeleton } from "components/atomic";
import { Checkbox } from "components/forms";
import * as Styled from "./Table.styles";
import TableRow from "./TableRow";
import useTableContext from "./hooks/useTableContext";
import type { Row } from "@tanstack/react-table";

function TableBody<T extends Record<string, unknown>>({
  loading = false,
  rows,
}: Props<T>) {
  const { columnCount } = useTableContext();

  /* eslint-disable react/jsx-key */
  /* keys are injected using the get props functions */
  const renderCheckboxCell = (row: Row<T>) => {
    return (
      <Styled.SelectCell role="gridcell">
        <Styled.SelectCellInner>
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
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
            <TableRow key={row.id}>
              {row.getCanMultiSelect() ? (
                renderCheckboxCell(row)
              ) : (
                <Styled.Cell role="presentation" />
              )}
              {row.getVisibleCells().map((cell) => {
                return (
                  <Styled.Cell
                    key={cell.id}
                    data-cell-type={cell.column.columnDef.meta?.cellType}
                    className={cell.column.columnDef.meta?.className}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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

// type RequiredCellContext<T extends Record<string, unknown>> = Pick<
//   Cell<T, Record<string, unknown>>,
//   "getCellContext" | "render"
// >;

// type OptionalCellContext<T extends Record<string, unknown>> = Partial<
//   Pick<Cell<T, Record<string, unknown>>, "column">
// >;

// type CellContext<T extends Record<string, unknown>> = RequiredCellContext<T> &
//   OptionalCellContext<T>;

// interface RowProps<T extends Record<string, unknown>>
//   extends Pick<Row<T>, "getToggleRowSelectedProps" | "getRowProps"> {
//   cells[];
// }

interface Props<T extends Record<string, unknown>> {
  loading?: boolean;
  rows: Row<T>[];
}

export default TableBody;
