import React from "react";
import * as Styled from "./Table.styles";
import TableRow from "./TableRow";
import { Checkbox } from "components/atomic";
import { RowProperties } from "types/react-table";

const TableBody = ({ rows }: Props) => {
  /* eslint-disable react/jsx-key */
  /* keys are injected using the get props functions */
  return (
    <Styled.TableBody role="rowgroup">
      {rows.map((row) => (
        <TableRow {...row.getRowProps()}>
          {row.getToggleRowSelectedProps ? (
            <Styled.Cell role="gridcell" data-select-cell="true">
              <Styled.SelectCellInner>
                <Checkbox
                  {...(row.getToggleRowSelectedProps &&
                    row.getToggleRowSelectedProps())}
                />
              </Styled.SelectCellInner>
            </Styled.Cell>
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
};

interface Props {
  rows: RowProperties[];
}

export default TableBody;
