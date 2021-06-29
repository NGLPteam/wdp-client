import React from "react";
import * as Styled from "./Table.styles";

const TableCell = ({ children, role, align, ...cellProps }: CellProps) => {
  // role should be rowheader if first
  return (
    <Styled.Cell role={role} align={align} {...cellProps}>
      {children}
    </Styled.Cell>
  );
};

interface CellProps {
  children?: React.ReactNode | React.ReactNode[] | Element | Element[];
  role: "gridcell" | "rowheader";
  align?: "left" | "right" | "center";
}

export default TableCell;
