import React from "react";
import * as Styled from "./Fieldset.styles";

export default function Fieldset({ legend, children }: Props) {
  return (
    <fieldset>
      <Styled.Legend>{legend}</Styled.Legend>
      <Styled.Fields>{children}</Styled.Fields>
    </fieldset>
  );
}

interface Props {
  legend: string;
  children: React.ReactNode | React.ReactNode[];
}
