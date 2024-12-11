import React, { forwardRef, SelectHTMLAttributes } from "react";
import { MaybeSelectRef } from "@castiron/common-types";
import IconFactory from "@/components/factories/IconFactory";
import Label from "../Label";
import * as Styled from "./Select.styles";

function Select(
  {
    id,
    children,
    block,
    size,
    label,
    hideLabel,
    secondary,
    className,
    ...props
  }: Props & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
  ref: MaybeSelectRef,
) {
  return (
    <div className={className}>
      {label && (
        <Label htmlFor={id} className={hideLabel && "a-hidden"}>
          {label}
        </Label>
      )}
      <Styled.Wrapper $block={block} $size={size} $secondary={secondary}>
        <Styled.Select id={id} ref={ref} $secondary={secondary} {...props}>
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
  secondary?: true;
  className?: string;
}
