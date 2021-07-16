import React from "react";
import * as Styled from "./Table.styles";
import TableRow from "./TableRow";
import { Checkbox } from "components/atomic/forms";
import { Row } from "react-table";

function TableBody<
  T extends Record<string, unknown> = Record<string, unknown>
>({ rows }: Props<T>) {
  /* eslint-disable react/jsx-key */
  /* keys are injected using the get props functions */
  const renderCheckboxCell = (row) => {
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
              <Styled.Cell {...cellProps}>{cell.render("Cell")}</Styled.Cell>
            );
          })}
          <Styled.Cell role="presentation" />
        </TableRow>
      ))}
    </Styled.TableBody>
  );
  /* eslint-enable react/jsx-key */
}

interface Props<T extends Record<string, unknown> = Record<string, unknown>> {
  rows: Row<T>[];
}

export default TableBody;
