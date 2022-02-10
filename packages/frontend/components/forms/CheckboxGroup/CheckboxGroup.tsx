import React from "react";
import Label from "../Label";
import * as Styled from "./CheckboxGroup.styles";

export default function CheckboxGroup({ children, label, ...props }: Props) {
  return (
    <Styled.Wrapper role="group" {...props}>
      <Label className="t-label-sm a-color-light">{label}</Label>
      {children}
    </Styled.Wrapper>
  );
}

interface Props {
  children: React.ReactNode | React.ReactNode[];
  label: string;
}
