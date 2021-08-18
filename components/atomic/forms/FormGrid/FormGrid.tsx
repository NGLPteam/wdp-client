import React from "react";
import * as Styled from "./FormGrid.styles";

const FormGrid = ({ twoColumns, children }: Props) => {
  return <Styled.Grid twoColumns={twoColumns}>{children}</Styled.Grid>;
};

interface Props {
  twoColumns?: boolean;
  children: React.ReactNode;
}

export default FormGrid;
