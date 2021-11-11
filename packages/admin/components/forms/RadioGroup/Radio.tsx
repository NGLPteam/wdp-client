import React, { forwardRef, Ref } from "react";
import type { FieldValues } from "react-hook-form";
import * as Styled from "./RadioGroup.styles";

function Radio(
  { name, value, label, order, id, ...props }: Props,
  ref: Ref<HTMLInputElement>
) {
  return (
    <Styled.Label htmlFor={id}>
      <Styled.Radio
        id={id}
        type="radio"
        value={value}
        name={name}
        ref={ref}
        {...props}
      />
      <Styled.LabelText className="t-copy-sm">{label}</Styled.LabelText>
    </Styled.Label>
  );
}

interface Props extends FieldValues {
  value: string;
  label: string;
  order: number;
  id?: string;
}

export default forwardRef(Radio);
