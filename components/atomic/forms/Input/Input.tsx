import React, { Ref, forwardRef } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./Input.styles";

import type InputProps from "../inputType";

const Input = forwardRef(
  (
    {
      type = "string",
      label,
      hideLabel,
      description,
      error,
      ...inputProps
    }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <BaseInputWrapper
        error={error}
        label={label}
        hideLabel={hideLabel}
        description={description}
      >
        <Styled.Input type={type} ref={ref} {...inputProps} />
      </BaseInputWrapper>
    );
  }
);

interface Props extends InputProps {
  type?: string;
}

export default Input;
