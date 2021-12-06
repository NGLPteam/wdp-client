import React, { SelectHTMLAttributes } from "react";
import * as Styled from "./Select.styles";
import { IconFactory } from "components/factories";

export default function Select({
  id,
  children,
  ...props
}: Props & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Styled.SelectWrapper>
      <Styled.Select id={id} {...props}>
        {children}
      </Styled.Select>
      <Styled.SelectIcon>
        <IconFactory icon="chevronDown" />
      </Styled.SelectIcon>
    </Styled.SelectWrapper>
  );
}

interface Props {
  id?: string;
  children: React.ReactNode;
}
