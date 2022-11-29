import React, { Ref, forwardRef } from "react";
import { useCombobox } from "downshift";
import type { UseComboboxStateChange } from "downshift";
import BaseInputWrapper from "../BaseInputWrapper";
import type InputProps from "../inputType";
import * as Styled from "./BaseTypeahead.styles";
import { IconFactory } from "components/factories";

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
      options = [],
      required,
      onChange,
      onInputChange,
      value,
      isWide,
      withBrowse,
      isLoading,
      ...inputProps
    }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      getItemProps,
    } = useCombobox({
      items: options,
      initialSelectedItem: options?.find((option) => option.value === value),
      itemToString: (item) => (item ? item.label : ""),
      onInputValueChange: ({ inputValue }: UseComboboxStateChange<Option>) => {
        if (onInputChange) onInputChange(inputValue || "");
      },
      onSelectedItemChange: ({ selectedItem }) => {
        // Send the current value to the parent onChange function
        if (onChange) onChange(selectedItem?.value || "");
      },
    });

    const valueProp = withBrowse
      ? {
          value:
            options?.find((option) => option?.value === value)?.label ?? value,
        }
      : null;

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
            $withBrowse={withBrowse}
            {...valueProp}
          />
          <Styled.Button
            type="button"
            {...getToggleButtonProps()}
            aria-label="toggle menu"
            disabled={inputProps.disabled}
          >
            {isLoading && <Styled.LoadingIcon />}
            <IconFactory icon="chevron" rotate={180} />
          </Styled.Button>
          <Styled.List {...getMenuProps()} open={isOpen}>
            {isOpen &&
              options?.map((item, index) => (
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
  value: number | string;
}
interface Props extends Omit<InputProps, "onChange"> {
  options?: Option[];
  /** Returns the current selected value */
  onChange?: (value: Option["value"]) => void;
  /** Returns the current input value */
  onInputChange?: (value: string) => void;
  /** Default value */
  value?: Option["value"];
  /** Show loading indicator */
  isLoading?: boolean;
  /** Include styles for integrated entity selector */
  withBrowse?: boolean;
}

export default Typeahead;
