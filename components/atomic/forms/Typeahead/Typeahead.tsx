import React, { Ref, forwardRef, useState } from "react";
import { useCombobox } from "downshift";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./Typeahead.styles";

import type InputProps from "../inputType";

/**
 * A typeahead single select.
 * Uses `downshift` library for accessibility and state management
 */
const Typeahead = forwardRef(
  (
    {
      label,
      hideLabel,
      description,
      placeholder,
      options,
      required,
      onChange,
      value,
      error,
      ...inputProps
    }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const [inputOptions, setInputOptions] = useState(options);

    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      getItemProps,
    } = useCombobox({
      items: inputOptions,
      itemToString: (item) => (item ? item.label : ""),
      onInputValueChange: ({ inputValue }) => {
        // If no value is provided, reset options to default
        if (!inputValue) {
          setInputOptions(options);
          return;
        }

        // Filter options by current input value
        setInputOptions(
          options.filter((item) =>
            item.label.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
      },
      onSelectedItemChange: ({ selectedItem }) => {
        // Send the current value to the parent onChange function
        if (onChange) onChange(selectedItem?.value || "");
      },
    });

    return (
      <BaseInputWrapper
        hideLabel={hideLabel}
        label={label}
        labelProps={getLabelProps()}
        error={error}
      >
        <Styled.InputWrapper {...getComboboxProps()}>
          {/* Hidden input field for react-hook-form or other form control */}
          <input
            ref={ref}
            type="hidden"
            required={required}
            defaultValue={value}
            {...inputProps}
          />
          {/* Visible input field for typeahead functionality */}
          <Styled.Input {...getInputProps()} required={required} />
          <Styled.Button
            type="button"
            {...getToggleButtonProps()}
            aria-label="toggle menu"
          >
            <Styled.Icon icon="chevron" rotate={180} />
          </Styled.Button>
          <Styled.List {...getMenuProps()} isOpen={isOpen}>
            {isOpen &&
              inputOptions.map((item, index) => (
                <Styled.ListItem
                  highlighted={highlightedIndex === index}
                  key={index}
                  {...getItemProps({ key: item.value, index, item })}
                >
                  {item.label}
                </Styled.ListItem>
              ))}
          </Styled.List>
        </Styled.InputWrapper>
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
  /** Returns the current selected value */
  onChange?: (value: Option["value"]) => void;
  /** Default value */
  value?: Option["value"];
}

export default Typeahead;
