import React, { Ref, forwardRef } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import type InputProps from "../inputType";
import * as Styled from "./Textarea.styles";

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
        description={description}
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
