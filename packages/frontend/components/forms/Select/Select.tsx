import React, { forwardRef, SelectHTMLAttributes } from "react";
import { MaybeSelectRef } from "@wdp/lib/types/ref";
import * as Styled from "./Select.styles";
import { IconFactory } from "components/factories";

function Select(
  { id, children, ...props }: Props & SelectHTMLAttributes<HTMLSelectElement>,
  ref: MaybeSelectRef
) {
  return (
    <Styled.SelectWrapper>
      <Styled.Select id={id} ref={ref} {...props}>
        {children}
      </Styled.Select>
      <Styled.SelectIcon>
        <IconFactory icon="chevronDown" />
      </Styled.SelectIcon>
    </Styled.SelectWrapper>
  );
}

export default forwardRef(Select);

interface Props {
  id?: string;
  children: React.ReactNode;
}
