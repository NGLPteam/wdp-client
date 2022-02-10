import React, { forwardRef, SelectHTMLAttributes } from "react";
import { MaybeSelectRef } from "@wdp/lib/types/ref";
import Label from "../Label";
import * as Styled from "./Typeahead.styles";
import { IconFactory } from "components/factories";

function Typeahead(
  {
    id,
    children,
    label,
    ...props
  }: Props & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
  ref: MaybeSelectRef
) {
  return (
    <div>
      {label && (
        <Label htmlFor={id} className="t-label-sm a-color-light">
          {label}
        </Label>
      )}
      <Styled.Wrapper>
        <Styled.Typeahead id={id} ref={ref} {...props}>
          {children}
        </Styled.Typeahead>
        <Styled.Icon>
          <IconFactory icon="chevronDown" />
        </Styled.Icon>
      </Styled.Wrapper>
    </div>
  );
}

export default forwardRef(Typeahead);

interface Props {
  id: string;
  children: React.ReactNode;
  label?: string;
}
