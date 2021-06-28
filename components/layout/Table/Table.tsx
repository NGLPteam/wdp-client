import React, { useRef } from "react";
import {
  useTableState,
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
} from "@react-stately/table";
import { useTable } from "@react-aria/table";

import TableRowGroup from "./TableRowGroup";
import TableHeaderRow from "./TableHeaderRow";
import TableColumnHeader from "./TableColumnHeader";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import * as Styled from "./Table.styles";

const Table = (props) => {
  const state = useTableState({
    ...props,
    showSelectionCheckboxes: props.selectionMode === "multiple",
  });
  const ref = useRef();
  const { collection } = state;
  const { gridProps } = useTable(props, state, ref);

  return (
    <Styled.Table {...gridProps} ref={ref}>
      <TableRowGroup type="thead">
        {collection.headerRows.map((headerRow) => (
          <TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
            {[...headerRow.childNodes].map((column) => (
              <TableColumnHeader
                key={column.key}
                column={column}
                state={state}
              />
            ))}
          </TableHeaderRow>
        ))}
      </TableRowGroup>
      {collection?.body?.childNodes && (
        <TableRowGroup type={Styled.TableBody}>
          {[...collection.body.childNodes].map((row) => (
            <TableRow key={row.key} item={row} state={state}>
              {[...row.childNodes].map((cell) => (
                <TableCell key={cell.key} cell={cell} state={state} />
              ))}
            </TableRow>
          ))}
        </TableRowGroup>
      )}
    </Styled.Table>
  );
};

Table.Cell = Cell;
Table.Column = Column;
Table.Row = Row;
Table.Body = TableBody;
Table.Header = TableHeader;

export default Table;
