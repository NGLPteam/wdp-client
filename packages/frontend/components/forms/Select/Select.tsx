import React, { forwardRef, SelectHTMLAttributes } from "react";
import { MaybeSelectRef } from "@castiron/common-types";
import Label from "../Label";
import * as Styled from "./Select.styles";
import { IconFactory } from "components/factories";

function Select(
  {
    id,
    children,
    block,
    size,
    label,
    hideLabel,
    ...props
  }: Props & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
  ref: MaybeSelectRef
) {
  return (
    <div>
      {label && (
        <Label htmlFor={id} className={hideLabel && "a-hidden"}>
          {label}
        </Label>
      )}
      <Styled.Wrapper $block={block} $size={size}>
        <Styled.Select id={id} ref={ref} {...props}>
          {children}
        </Styled.Select>
        <Styled.Icon>
          <IconFactory icon="chevronDown" />
        </Styled.Icon>
      </Styled.Wrapper>
    </div>
  );
}

export default forwardRef(Select);

interface Props {
  id?: string;
  children: React.ReactNode;
  block?: true;
  size?: "lg";
  label?: string;
  hideLabel?: true;
}
