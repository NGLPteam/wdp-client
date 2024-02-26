import { PropsWithChildren } from "react";
import * as Styled from "./Table.styles";

const TableRow = ({ children, ...rowProps }: PropsWithChildren) => {
  return (
    <Styled.Row role="row" {...rowProps}>
      {children}
    </Styled.Row>
  );
};

export default TableRow;
