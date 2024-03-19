import React, { forwardRef, Ref } from "react";
import InputProps from "../inputType";

function HiddenMultiselect<T extends Record<string, unknown>>(
  { options, value, defaultValue, ...inputProps }: Props<T>,
  ref: Ref<HTMLSelectElement>,
) {
  const stringifiedValue = value?.map((value: Value<T>) =>
    typeof value === "string" ? value : JSON.stringify(value),
  );

  const stringifiedDefault = defaultValue?.map((value: Value<T>) =>
    typeof value === "string" ? value : JSON.stringify(value),
  );

  return (
    <select
      multiple
      {...inputProps}
      ref={ref}
      defaultValue={stringifiedDefault}
      value={stringifiedValue}
      hidden
    >
      {options.map(({ value, label }, i) => (
        <option key={i} value={JSON.stringify(value)}>
          {label}
        </option>
      ))}
    </select>
  );
}

type Value<T> = string | T;

interface Option<T> {
  readonly label: string;
  readonly value: Value<T>;
}

interface Props<T> extends Omit<InputProps, "label" | "defaultValue"> {
  options: readonly Option<T>[];
  defaultValue?: Value<T>[];
  value?: Value<T>[];
}

export default forwardRef(HiddenMultiselect);
