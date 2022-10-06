import React, { useState } from "react";
import * as Styled from "./Table.styles";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableContext from "./contexts/TableContext";
import TableDragDrop from "./TableDragDrop";

const Table = ({
  children,
  "aria-label": ariaLabel,
  withRowSelection = false,
  showCheckboxes = false,
  id,
  onDragEnd,
  ...tableProps
}: Props) => {
  const [columnCount, setColumnCount] = useState(0);

  return (
    <TableDragDrop onDragEnd={onDragEnd}>
      <TableContext.Provider value={{ columnCount, setColumnCount }}>
        <Styled.TableWrapper
          id={id}
          withRowSelection={withRowSelection}
          showCheckboxes={showCheckboxes}
        >
          <Styled.Table aria-label={ariaLabel} role="grid" {...tableProps}>
            {children}
          </Styled.Table>
        </Styled.TableWrapper>
      </TableContext.Provider>
    </TableDragDrop>
  );
};

interface Props {
  children: React.ReactNode[] | Element[];
  "aria-label": string;
  withRowSelection?: boolean;
  showCheckboxes?: boolean;
  id?: string;
  onDragEnd?: (source: number, destination: number) => void;
}

Table.Body = TableBody;
Table.Header = TableHeader;
Table.Cell = TableCell;

export default Table;
