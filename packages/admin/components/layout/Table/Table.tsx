import React, { useState } from "react";
import * as Styled from "./Table.styles";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableContext from "./contexts/TableContext";

const Table = ({
  children,
  "aria-label": ariaLabel,
  selectable = false,
  showCheckboxes = false,
  id,
  ...tableProps
}: Props) => {
  const [columnCount, setColumnCount] = useState(0);
  return (
    <TableContext.Provider value={{ columnCount, setColumnCount }}>
      <Styled.TableWrapper
        id={id}
        selectable={selectable}
        showCheckboxes={showCheckboxes}
      >
        <Styled.Table aria-label={ariaLabel} role="grid" {...tableProps}>
          {children}
        </Styled.Table>
      </Styled.TableWrapper>
    </TableContext.Provider>
  );
};

interface Props {
  children: React.ReactNode[] | Element[];
  "aria-label": string;
  selectable?: boolean;
  showCheckboxes?: boolean;
  id?: string;
}

Table.Body = TableBody;
Table.Header = TableHeader;
Table.Cell = TableCell;

export default Table;
