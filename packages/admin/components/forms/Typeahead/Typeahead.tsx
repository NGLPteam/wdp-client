import React, { Ref, forwardRef, useState } from "react";
import BaseTypeahead from "../BaseTypeahead";
type BaseProps = React.ComponentProps<typeof BaseTypeahead>;

/**
 * A typeahead single select.
 * Uses `downshift` library for accessibility and state management
 */
const Typeahead = forwardRef(
  (
    {
      label,
      name,
      hideLabel,
      description,
      placeholder,
      options,
      required,
      onChange,
      onInputChange,
      value,
      isWide,
      ...inputProps
    }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const [inputOptions, setInputOptions] = useState(options);

    const handleInputChange = (value: string) => {
      // If no value is provided, reset options to default
      if (!value) {
        setInputOptions(options);
        return;
      }

      // Filter options by current input value
      setInputOptions(
        options?.filter((item) =>
          item.label.toLowerCase().includes(value.toLowerCase())
        )
      );

      if (onInputChange) onInputChange(value);
    };

    return options ? (
      <BaseTypeahead
        ref={ref}
        name={name}
        hideLabel={hideLabel}
        label={label}
        required={required}
        isWide={isWide}
        options={inputOptions}
        onInputChange={handleInputChange}
        {...inputProps}
      />
    ) : null;
  }
);

type Props = BaseProps;

export default Typeahead;
