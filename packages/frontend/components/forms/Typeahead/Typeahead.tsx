import React, { forwardRef, InputHTMLAttributes } from "react";
import { MaybeInputRef } from "@castiron/common-types";
import { useCombobox } from "downshift";
import { IconFactory } from "components/factories";
import Label from "../Label";
import * as Styled from "./Typeahead.styles";

// Redecalare forwardRef
declare module "react" {
  function forwardRef<T, P>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

function Typeahead<T extends Record<string, unknown>>(
  {
    label,
    placeholder,
    options,
    onInputChange,
    onChange,
    ...inputProps
  }: Props<T> & InputHTMLAttributes<HTMLInputElement>,
  ref: MaybeInputRef,
) {
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
  } = useCombobox({
    items: options,
    itemToString: (item) => (item ? item.label : ""),
    onInputValueChange: ({ inputValue }) => {
      if (onInputChange) onInputChange(inputValue || "");
    },
    onSelectedItemChange: ({ selectedItem }) => {
      // Send the current value to the parent onChange function
      if (onChange) onChange(selectedItem?.value || "");
    },
  });

  return (
    <Styled.Wrapper>
      {label && (
        <Label className="t-label-sm a-color-light" {...getLabelProps()}>
          {label}
        </Label>
      )}
      {/* Hidden input field for react-hook-form or other form control */}
      <input ref={ref} type="hidden" {...inputProps} />
      {/* Visible input field for typeahead functionality */}
      <Styled.InputWrapper>
        <Styled.Typeahead placeholder={placeholder} {...getInputProps()} />
        <Styled.IconButton
          type="button"
          aria-label="Toggle menu"
          {...getToggleButtonProps()}
        >
          <IconFactory icon="chevronDown" />
        </Styled.IconButton>
        <Styled.List {...getMenuProps()} open={isOpen} role="group">
          {isOpen &&
            options?.map((item, i) => (
              /* eslint-disable react/jsx-key */
              <Styled.Item
                {...getItemProps({ key: `item${i}`, index: i, item })}
              >
                {item.node ? item.node : item.label}
              </Styled.Item>
            ))}
        </Styled.List>
      </Styled.InputWrapper>
    </Styled.Wrapper>
  );
}

export default forwardRef(Typeahead);

type Value<T> = string | T;

interface Option<T> {
  label: string;
  node?: React.ReactNode;
  value: Value<T>;
}

interface Props<T> {
  /** Field id (used to connect label with input) */
  id: string;
  /** Field label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** List of options */
  options: Option<T>[];
  /** Returns the current selected value */
  onChange?: (value: Option<T>["value"]) => void;
  /** Returns the current input value */
  onInputChange?: (value: string) => void;
  /** Input name */
  name?: string;
  /** Initial value */
  value?: Value<T>;
}
