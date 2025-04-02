import React, { Ref, forwardRef } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./Input.styles";
import type { FieldValues } from "react-hook-form";
import type InputProps from "../inputType";

const Input = forwardRef(
  <T extends FieldValues = FieldValues>(
    {
      type = "text",
      label,
      hideLabel,
      description,
      isWide,
      ...inputProps
    }: Props<T>,
    ref: Ref<HTMLInputElement>,
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
  },
);

type FormTypes = Partial<Pick<HTMLFormElement, "onInvalid" | "onInput">>;

type InputTypes = Partial<Pick<HTMLInputElement, "pattern" | "type">>;

type Props<T extends FieldValues = FieldValues> = InputProps<T> &
  FormTypes &
  InputTypes & {
    min?: string | number;
    max?: string | number;
    value?: string;
  };

export default Input;
