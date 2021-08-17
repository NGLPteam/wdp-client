import React, { Ref, forwardRef } from "react";
import { useUID } from "react-uid";
import * as Styled from "./Select.styles";

const Select = forwardRef(
  (
    { label, placeholder, ...textareaProps }: Props,
    ref: Ref<HTMLSelectElement>
  ) => {
    const uid = useUID();

    return (
      <Styled.Wrapper>
        <Styled.Label htmlFor={uid}>{label}</Styled.Label>
        <Styled.SelectWrapper>
          <Styled.SelectInput id={uid} ref={ref} {...textareaProps}>
            <option value="">{placeholder}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </Styled.SelectInput>
          <Styled.Icon icon="chevron" rotate={180} />
        </Styled.SelectWrapper>
      </Styled.Wrapper>
    );
  }
);

interface Props {
  label: string;
  placeholder?: string;
  required?: boolean;
}

export default Select;
