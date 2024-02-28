import React, { forwardRef, Ref } from "react";
import * as Styled from "./BaseSelect.styles";
import type InputProps from "../inputType";

/**
 * A styled select without the form input wrapper.
 * For when you only need a styled select.
 */
const BaseSelect = forwardRef(
  (
    { id, placeholder, options, ...inputProps }: Props,
    ref: Ref<HTMLSelectElement>,
  ) => {
    return (
      <Styled.SelectWrapper>
        <Styled.SelectInput id={id} ref={ref} {...inputProps}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map(({ value, label }, i) => (
            <option key={i} value={value}>
              {label}
            </option>
          ))}
        </Styled.SelectInput>
        <Styled.Icon
          icon="chevron"
          rotate={180}
          $disabled={inputProps.disabled}
        />
      </Styled.SelectWrapper>
    );
  },
);

export interface Option {
  readonly label: string;
  readonly value: string | number;
}

interface Props extends Omit<InputProps, "label"> {
  options: readonly Option[];
  multiple?: boolean;
  id?: string;
  onChange?: (valOrEvent: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default BaseSelect;
