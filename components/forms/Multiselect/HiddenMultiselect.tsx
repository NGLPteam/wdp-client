import React, { forwardRef, Ref } from "react";
import InputProps from "../inputType";

const HiddenMultiselect = forwardRef(
  (
    { options, defaultValue, ...inputProps }: Props,
    ref: Ref<HTMLSelectElement>
  ) => {
    return (
      <select
        hidden
        multiple
        {...inputProps}
        ref={ref}
        defaultValue={defaultValue}
      >
        {options.map(({ value, label }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  }
);

interface Option {
  readonly label: string;
  readonly value: string;
}

interface Props extends Omit<InputProps, "label"> {
  options: readonly Option[];
  value?: string[];
}

export default HiddenMultiselect;
