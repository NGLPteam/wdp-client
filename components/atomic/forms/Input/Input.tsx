import React, { Ref, forwardRef } from "react";
import { useUID } from "react-uid";
import BaseInputWrapper from "../BaseInputWrapper";
import BaseInputLabel from "../BaseInputLabel";
import * as Styled from "./Input.styles";
import BaseInputDescription from "../BaseInputDescription";

import type InputProps from "../inputType";

const Input = forwardRef(
  (
    { type = "string", label, hideLabel, description, ...inputProps }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const uid = useUID();

    return (
      <BaseInputWrapper>
        <BaseInputLabel htmlFor={uid} hideLabel={hideLabel}>
          {label}
        </BaseInputLabel>
        <Styled.Input id={uid} type={type} ref={ref} {...inputProps} />
        {description && (
          <BaseInputDescription>{description}</BaseInputDescription>
        )}
      </BaseInputWrapper>
    );
  }
);

interface Props extends InputProps {
  type?: string;
}

export default Input;
