import React, { Ref, forwardRef } from "react";
import { useUID } from "react-uid";
import BaseInputWrapper from "../BaseInputWrapper";
import BaseInputLabel from "../BaseInputLabel";
import * as Styled from "./Textarea.styles";
import BaseInputDescription from "../BaseInputDescription";

import type InputProps from "../inputType";

const Textarea = forwardRef(
  (
    {
      label,
      hideLabel,
      description,
      placeholder,
      ...textareaProps
    }: InputProps,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    const uid = useUID();

    return (
      <BaseInputWrapper>
        <BaseInputLabel htmlFor={uid} hideLabel={hideLabel}>
          {label}
        </BaseInputLabel>
        <Styled.TextareaInput
          id={uid}
          ref={ref}
          placeholder={placeholder}
          {...textareaProps}
        />
        {description && (
          <BaseInputDescription>{description}</BaseInputDescription>
        )}
      </BaseInputWrapper>
    );
  }
);

export default Textarea;
