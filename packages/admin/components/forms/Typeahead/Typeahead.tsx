import React, { Ref, forwardRef, useState } from "react";
import { useCombobox } from "downshift";
import BaseInputWrapper from "../BaseInputWrapper";
import type InputProps from "../inputType";
import * as Styled from "./Typeahead.styles";

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
      value,
      isWide,
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
      getItemProps,
    } = useCombobox({
      items: inputOptions,
      initialSelectedItem: inputOptions.find(
        (option) => option.value === value
      ),
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
        name={name}
        hideLabel={hideLabel}
        label={label}
        labelProps={getLabelProps()}
        required={required}
        isWide={isWide}
      >
        <Styled.InputWrapper {...getComboboxProps()}>
          {/* Hidden input field for react-hook-form or other form control */}
          <input
            ref={ref}
            name={name}
            type="hidden"
            required={required}
            defaultValue={value}
            {...inputProps}
          />
          {/* Visible input field for typeahead functionality */}
          <Styled.Input
            {...getInputProps()}
            required={required}
            disabled={inputProps.disabled}
          />
          <Styled.Button
            type="button"
            {...getToggleButtonProps()}
            aria-label="toggle menu"
            disabled={inputProps.disabled}
          >
            <Styled.Icon icon="chevron" rotate={180} />
          </Styled.Button>
          <Styled.List {...getMenuProps()} open={isOpen}>
            {isOpen &&
              inputOptions.map((item, index) => (
                <Styled.ListItem
                  key={index}
                  {...getItemProps({ key: item.value, index, item })}
                >
                  {item.node ? item.node : item.label}
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
  node?: React.ReactNode;
  value: string | number;
}
interface Props extends Omit<InputProps, "onChange"> {
  options: Option[];
  /** Returns the current selected value */
  onChange?: (value: Option["value"]) => void;
  /** Default value */
  value?: Option["value"];
}

export default Typeahead;
