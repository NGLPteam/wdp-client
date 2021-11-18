import React from "react";
import * as Styled from "./Select.styles";
import { IconFactory } from "components/factories";

export default function Select({ id, children }: Props) {
  return (
    <Styled.SelectWrapper>
      <Styled.Select id={id}>{children}</Styled.Select>
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
