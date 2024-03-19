import { PropsWithChildren } from "react";
import * as Styled from "./Table.styles";

const TableHeaderRow = ({ children, ...rowProps }: PropsWithChildren) => {
  return (
    <Styled.HeaderRow role="row" {...rowProps}>
      {children}
    </Styled.HeaderRow>
  );
};

export default TableHeaderRow;
