import React, { Ref, forwardRef } from "react";
import type { FieldValues } from "react-hook-form";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./Input.styles";

import type InputProps from "../inputType";

const Input = forwardRef(
  <T extends FieldValues = FieldValues>(
    {
      type = "text",
      label,
      hideLabel,
      description,
      error,
      ...inputProps
    }: Props<T>,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <BaseInputWrapper
        name={inputProps.name}
        label={label}
        hideLabel={hideLabel}
        description={description}
        required={inputProps.required}
      >
        <Styled.Input type={type} ref={ref} {...inputProps} />
      </BaseInputWrapper>
    );
  }
);

interface Props<T extends FieldValues = FieldValues> extends InputProps<T> {
  type?: string;
}

export default Input;
