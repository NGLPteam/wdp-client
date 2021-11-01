import React from "react";
import * as Styled from "./Table.styles";

const TableHeaderRow = ({ children, ...rowProps }: HeaderRowProps) => {
  return (
    <Styled.HeaderRow role="row" {...rowProps}>
      {children}
    </Styled.HeaderRow>
  );
};

interface HeaderRowProps {
  children: React.ReactNode | React.ReactNode[] | Element | Element[];
}

export default TableHeaderRow;
