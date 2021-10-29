import React, { Ref, forwardRef } from "react";
import type { FieldValues } from "react-hook-form";
import BaseInputWrapper from "../BaseInputWrapper";
import type InputProps from "../inputType";
import * as Styled from "./Input.styles";

const Input = forwardRef(
  <T extends FieldValues = FieldValues>(
    {
      type = "text",
      label,
      hideLabel,
      description,
      error,
      isWide,
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
        isWide={isWide}
      >
        <Styled.Input type={type} ref={ref} {...inputProps} />
      </BaseInputWrapper>
    );
  }
);

interface Props<T extends FieldValues = FieldValues>
  extends InputProps<T>,
    Partial<Pick<HTMLInputElement, "min" | "max" | "pattern">> {
  type?: string;
}

export default Input;
