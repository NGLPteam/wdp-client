import React from "react";
import * as Styled from "./Table.styles";

const TableRow = ({ children, ...rowProps }: RowProps) => {
  return (
    <Styled.Row role="row" {...rowProps}>
      {children}
    </Styled.Row>
  );
};

interface RowProps {
  children: React.ReactNode | React.ReactNode[] | Element | Element[];
}

export default TableRow;
