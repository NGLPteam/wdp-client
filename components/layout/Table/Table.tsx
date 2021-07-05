import React from "react";
import * as Styled from "./Table.styles";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableCell from "./TableCell";

const Table = ({
  children,
  "aria-label": ariaLabel,
  withRowSelection,
  ...tableProps
}: Props) => {
  return (
    <Styled.TableWrapper data-multiselect={withRowSelection}>
      <Styled.Table aria-label={ariaLabel} role="grid" {...tableProps}>
        {children}
      </Styled.Table>
    </Styled.TableWrapper>
  );
};

interface Props {
  children: React.ReactNode[] | Element[];
  "aria-label": string;
  withRowSelection?: boolean;
}

Table.Body = TableBody;
Table.Header = TableHeader;
Table.Cell = TableCell;

export default Table;
