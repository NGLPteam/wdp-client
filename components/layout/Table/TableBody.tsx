import React from "react";
import isFunction from "lodash/isFunction";
import * as Styled from "./Table.styles";
import TableRow from "./TableRow";

const TableBody = ({ children, columns, rows, multiselect }) => {
  const childIsRenderFunc = isFunction(children);

  if (!rows || !columns || !childIsRenderFunc) {
    return null;
  }

  return (
    <Styled.TableBody role="rowgroup">
      {rows.map((row) => (
        <TableRow key={row.key}>
          {multiselect ? (
            <Styled.Cell role="gridcell" data-select-cell="true">
              <Styled.SelectCellInner>
                <input type="checkbox" />
              </Styled.SelectCellInner>
            </Styled.Cell>
          ) : (
            <Styled.Cell role="presentation"></Styled.Cell>
          )}
          {columns.map((column) =>
            childIsRenderFunc ? children({ row, column }) : children
          )}
          <Styled.Cell role="presentation"></Styled.Cell>
        </TableRow>
      ))}
    </Styled.TableBody>
  );
};

export default TableBody;
