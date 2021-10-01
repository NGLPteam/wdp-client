import React, { Ref, forwardRef } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./Textarea.styles";

import type InputProps from "../inputType";

const Textarea = forwardRef(
  (
    {
      label,
      name,
      hideLabel,
      description,
      placeholder,
      error,
      isWide,
      ...textareaProps
    }: InputProps,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    return (
      <BaseInputWrapper
        name={name}
        hideLabel={hideLabel}
        label={label}
        required={textareaProps.required}
        isWide={isWide}
      >
        <Styled.TextareaInput
          name={name}
          ref={ref}
          placeholder={placeholder}
          {...textareaProps}
        />
      </BaseInputWrapper>
    );
  }
);

export default Textarea;
