import React from "react";
import * as Styled from "./Table.styles";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableColumn from "./TableColumn";
import TableCell from "./TableCell";

const Table = ({
  children,
  "aria-label": ariaLabel,
  multiselect,
  ...tableProps
}: Props) => {
  return (
    <Styled.TableWrapper data-multiselect={multiselect}>
      <Styled.Table aria-label={ariaLabel} role="grid" {...tableProps}>
        {children}
      </Styled.Table>
    </Styled.TableWrapper>
  );
};

interface Props {
  children: React.ReactNode[] | Element[];
  "aria-label": string;
  multiselect?: boolean;
}

Table.Body = TableBody;
Table.Header = TableHeader;
Table.Column = TableColumn;
Table.Cell = TableCell;

export default Table;
