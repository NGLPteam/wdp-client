import React, { Ref, forwardRef } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import type InputProps from "../inputType";
import * as Styled from "./Select.styles";

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
      multiple,
      isWide,
      ...inputProps
    }: Props,
    ref: Ref<HTMLSelectElement>
  ) => {
    return (
      <BaseInputWrapper
        name={name}
        hideLabel={hideLabel}
        label={label}
        required={inputProps.required}
        isWide={isWide}
        description={description}
      >
        {({ uid }) => (
          <Styled.SelectWrapper>
            <Styled.SelectInput
              name={name}
              id={uid}
              ref={ref}
              multiple={multiple}
              {...inputProps}
            >
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
  readonly label: string;
  readonly value: string | number;
}
interface Props extends InputProps {
  options: readonly Option[];
  multiple?: boolean;
}

export default Select;
