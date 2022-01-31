import React, { Ref, forwardRef } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import BaseSelect from "../BaseSelect";
import type InputProps from "../inputType";

const Select = forwardRef(
  (
    {
      label,
      name,
      hideLabel,
      description,
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
  }
);

type Props = React.ComponentProps<typeof BaseSelect> & {
  label: InputProps["label"];
};

export default Select;
