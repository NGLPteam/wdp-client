import React, { Ref, forwardRef, useState, useEffect } from "react";
import { useCombobox, useMultipleSelection } from "downshift";
import BaseInputWrapper from "../BaseInputWrapper";
import type InputProps from "../inputType";
import BaseArrayList from "../BaseArrayList";
import * as Styled from "./Multiselect.styles";

import HiddenMultiselect from "./HiddenMultiselect";

/**
 * A typeahead multi select.
 * Uses `downshift` library for accessibility and state management
 */
const Multiselect = forwardRef(
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
    ref: Ref<HTMLSelectElement>
  ) => {
    const [inputValue, setInputValue] = useState("");

    const {
      getSelectedItemProps,
      getDropdownProps,
      addSelectedItem,
      removeSelectedItem,
      selectedItems,
    } = useMultipleSelection({
      initialSelectedItems: value || [],
    });

    // Pass the selected value back up to react-hook-forms' onChange
    useEffect(() => {
      if (onChange) onChange([...selectedItems]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedItems]); // Only run on selectedItems change

    // Filter items by currently selected items
    const getFilteredOptions = () =>
      options.filter(
        (item) =>
          selectedItems.indexOf(item.value) < 0 &&
          item.label.toLowerCase().startsWith(inputValue.toLowerCase())
      );

    // Return selected item objects for currently selected items list
    const getSelectedItemObjects = () =>
      options.filter((option) => selectedItems.includes(option.value));

    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      getItemProps,
    } = useCombobox({
      inputValue,
      items: getFilteredOptions(),
      itemToString: (item) => (item ? item.label : ""),
      onStateChange: ({ inputValue, type, selectedItem }) => {
        switch (type) {
          case useCombobox.stateChangeTypes.InputChange:
            setInputValue(inputValue || "");
            break;
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
          case useCombobox.stateChangeTypes.InputBlur:
            if (selectedItem) {
              setInputValue("");
              addSelectedItem(selectedItem.value);
            }
            break;
          default:
            break;
        }
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
        <>
          <Styled.InputWrapper {...getComboboxProps()}>
            {/* Hidden input field for react-hook-form or other form control */}
            <HiddenMultiselect
              ref={ref}
              name={name}
              required={required}
              defaultValue={selectedItems}
              options={options}
              {...inputProps}
            />
            {/* Visible input field for typeahead functionality */}
            <Styled.Input
              {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
              required={required}
            />
            <Styled.Button
              type="button"
              {...getToggleButtonProps()}
              aria-label="toggle menu"
            >
              <Styled.Icon icon="chevron" rotate={180} />
            </Styled.Button>
            <Styled.List {...getMenuProps()} open={isOpen}>
              {getFilteredOptions().map((item, index) => (
                <Styled.ListItem
                  key={index}
                  {...getItemProps({ key: item.value, index, item })}
                >
                  {item.label}
                </Styled.ListItem>
              ))}
            </Styled.List>
          </Styled.InputWrapper>
          {selectedItems && (
            <BaseArrayList>
              {getSelectedItemObjects().map((selectedItem, index) => (
                <BaseArrayList.Item
                  key={`selected-item-${index}`}
                  {...getSelectedItemProps({
                    selectedItem: selectedItem.value,
                    index,
                  })}
                  onRemove={() => {
                    removeSelectedItem(selectedItem.value);
                  }}
                >
                  {selectedItem.label}
                </BaseArrayList.Item>
              ))}
            </BaseArrayList>
          )}
        </>
      </BaseInputWrapper>
    );
  }
);

interface Option {
  label: string;
  value: string;
}
interface Props extends Omit<InputProps, "onChange"> {
  options: Option[];
  /** Returns the current selected value */
  onChange?: (value: Option["value"][]) => void;
  /** Default value */
  value?: Option["value"][];
}

export default Multiselect;
