import React, { Ref, forwardRef } from "react";
import { useUID } from "react-uid";
import * as Styled from "./Textarea.styles";

const Textarea = forwardRef(
  (
    { label, placeholder, ...textareaProps }: Props,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    const uid = useUID();

    return (
      <Styled.Wrapper>
        <Styled.Label htmlFor={uid}>{label}</Styled.Label>
        <Styled.TextareaInput
          id={uid}
          ref={ref}
          placeholder={placeholder}
          {...textareaProps}
        />
      </Styled.Wrapper>
    );
  }
);

interface Props {
  label: string;
  placeholder?: string;
  required?: boolean;
}

export default Textarea;
