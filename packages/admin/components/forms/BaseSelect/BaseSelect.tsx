import React, { forwardRef, Ref } from "react";
import type InputProps from "../inputType";
import * as Styled from "./BaseSelect.styles";

/**
 * A styled select without the form input wrapper.
 * For when you only need a styled select.
 */
const BaseSelect = forwardRef(
  (
    { id, placeholder, options, ...inputProps }: Props,
    ref: Ref<HTMLSelectElement>
  ) => {
    return (
      <Styled.SelectWrapper>
        <Styled.SelectInput id={id} ref={ref} {...inputProps}>
          <option value="">{placeholder}</option>
          {options.map(({ value, label }, i) => (
            <option key={i} value={value}>
              {label}
            </option>
          ))}
        </Styled.SelectInput>
        <Styled.Icon icon="chevron" rotate={180} />
      </Styled.SelectWrapper>
    );
  }
);

interface Option {
  readonly label: string;
  readonly value: string | number;
}

interface Props extends Omit<InputProps, "label"> {
  options: readonly Option[];
  multiple?: boolean;
  id?: string;
}

export default BaseSelect;
