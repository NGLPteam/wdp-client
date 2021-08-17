import React, { Ref, forwardRef } from "react";
import { useUID } from "react-uid";
import * as Styled from "./Input.styles";

const Input = forwardRef(
  (
    { type = "string", label, ...inputProps }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const uid = useUID();

    return (
      <Styled.Wrapper>
        <Styled.Label htmlFor={uid}>{label}</Styled.Label>
        <Styled.Input id={uid} type={type} ref={ref} {...inputProps} />
      </Styled.Wrapper>
    );
  }
);

interface Props {
  type?: string;
  label: string | React.ReactNode;
  placeholder?: string;
  required?: boolean;
}

export default Input;
