import React, { Ref, forwardRef } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./Select.styles";

import type InputProps from "../inputType";

const Select = forwardRef(
  (
    {
      label,
      name,
      hideLabel,
      description,
      placeholder,
      options,
      error,
      ...inputProps
    }: Props,
    ref: Ref<HTMLSelectElement>
  ) => {
    return (
      <BaseInputWrapper name={name} hideLabel={hideLabel} label={label}>
        {({ uid }) => (
          <Styled.SelectWrapper>
            <Styled.SelectInput name={name} id={uid} ref={ref} {...inputProps}>
              <option value="">{placeholder}</option>
              {options.map(({ value, label }, i) => (
                <option key={i} value={value}>
                  {label}
                </option>
              ))}
            </Styled.SelectInput>
            <Styled.Icon icon="chevron" rotate={180} />
          </Styled.SelectWrapper>
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
