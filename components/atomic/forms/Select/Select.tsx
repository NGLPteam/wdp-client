import React, { Ref, forwardRef } from "react";
import { useUID } from "react-uid";
import BaseInputWrapper from "../BaseInputWrapper";
import BaseInputLabel from "../BaseInputLabel";
import * as Styled from "./Select.styles";
import BaseInputDescription from "../BaseInputDescription";

import type InputProps from "../inputType";

const Select = forwardRef(
  (
    { label, description, placeholder, options, ...inputProps }: Props,
    ref: Ref<HTMLSelectElement>
  ) => {
    const uid = useUID();

    return (
      <BaseInputWrapper>
        <BaseInputLabel htmlFor={uid}>{label}</BaseInputLabel>
        <Styled.SelectWrapper>
          <Styled.SelectInput id={uid} ref={ref} {...inputProps}>
            <option value="">{placeholder}</option>
            {options.map(({ value, label }, i) => (
              <option key={i} value={value}>
                {label}
              </option>
            ))}
          </Styled.SelectInput>
          <Styled.Icon icon="chevron" rotate={180} />
        </Styled.SelectWrapper>
        {description && (
          <BaseInputDescription>{description}</BaseInputDescription>
        )}
      </BaseInputWrapper>
    );
  }
);

interface Option {
  label: string;
  value: string | number;
}
interface Props extends InputProps {
  options: Option[];
}

export default Select;
