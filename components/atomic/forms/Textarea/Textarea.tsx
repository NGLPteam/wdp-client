import React, { Ref, forwardRef } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./Textarea.styles";

import type InputProps from "../inputType";

const Textarea = forwardRef(
  (
    {
      label,
      hideLabel,
      description,
      placeholder,
      error,
      ...textareaProps
    }: InputProps,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    return (
      <BaseInputWrapper hideLabel={hideLabel} label={label} error={error}>
        <Styled.TextareaInput
          ref={ref}
          placeholder={placeholder}
          {...textareaProps}
        />
      </BaseInputWrapper>
    );
  }
);

export default Textarea;
