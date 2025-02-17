import React, { Ref, forwardRef } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import BaseSelect from "../BaseSelect";
import type InputProps from "../inputType";

/* eslint-disable react/prop-types */
const Select = forwardRef(
  (
    {
      label,
      name,
      hideLabel,
      description,
      options,
      multiple,
      isWide,
      errorPath,
      ...inputProps
    }: Props,
    ref: Ref<HTMLSelectElement>,
  ) => {
    return (
      <BaseInputWrapper
        name={name}
        hideLabel={hideLabel}
        label={label}
        required={inputProps.required}
        isWide={isWide}
        description={description}
        errorPath={errorPath}
      >
        {({ uid }) => (
          <BaseSelect
            name={name}
            id={uid}
            ref={ref}
            multiple={multiple}
            options={options}
            {...inputProps}
          />
        )}
      </BaseInputWrapper>
    );
  },
);

type Props = React.ComponentProps<typeof BaseSelect> & {
  label: InputProps["label"];
  errorPath?: string;
};

export default Select;
