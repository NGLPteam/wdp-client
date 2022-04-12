import React, { forwardRef, InputHTMLAttributes } from "react";
import { MaybeInputRef } from "@castiron/common-types";
import Label from "../Label";
import * as Styled from "./Input.styles";

function Input(
  {
    id,
    block,
    label,
    hideLabel,
    ...props
  }: Props & Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
  ref: MaybeInputRef
) {
  return (
    <div>
      {label && (
        <Label htmlFor={id} className={hideLabel && "a-hidden"}>
          {label}
        </Label>
      )}
      <Styled.Wrapper $block={block}>
        <Styled.Input id={id} ref={ref} {...props} />
      </Styled.Wrapper>
    </div>
  );
}

export default forwardRef(Input);

interface Props {
  id?: string;
  block?: true;
  label?: string;
  hideLabel?: true;
}
