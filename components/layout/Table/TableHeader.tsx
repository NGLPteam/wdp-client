import React from "react";
import isFunction from "lodash/isFunction";
import TableHeaderRow from "./TableHeaderRow";
import * as Styled from "./Table.styles";

const TableHeader = ({ children, columns, multiselect }) => {
  const childIsRenderFunc = isFunction(children);

  if (!columns || !childIsRenderFunc) {
    return null;
  }

  return (
    <thead>
      <TableHeaderRow>
        {multiselect ? (
          <Styled.HeaderCell role="columnheader" data-select-cell="true">
            <Styled.SelectCellInner>
              <input type="checkbox" />
            </Styled.SelectCellInner>
          </Styled.HeaderCell>
        ) : (
          <Styled.HeaderCell role="presentation"></Styled.HeaderCell>
        )}
        {columns.map((column) =>
          childIsRenderFunc ? children(column) : children
        )}
        <Styled.HeaderCell role="presentation"></Styled.HeaderCell>
      </TableHeaderRow>
    </thead>
  );
};

export default TableHeader;
