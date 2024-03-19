import { PropsWithChildren } from "react";
import * as Styled from "./Table.styles";

function TableCell({
  children,
  role,
  align,
  truncate,
  ...cellProps
}: CellContext) {
  // role should be rowheader if first
  return (
    <Styled.Cell
      className={truncate ? "t-truncate" : undefined}
      role={role}
      align={align}
      {...cellProps}
    >
      {children}
    </Styled.Cell>
  );
}

interface CellContext extends PropsWithChildren {
  role: "gridcell" | "rowheader";
  align?: "left" | "right" | "center";
  truncate?: boolean;
}

export default TableCell;
