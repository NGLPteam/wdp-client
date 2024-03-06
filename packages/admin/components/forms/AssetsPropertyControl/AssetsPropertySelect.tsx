import React, { forwardRef, Ref, useCallback, useRef } from "react";
import AssetPropertySelect from "../AssetPropertySelect";
import { OnChangeInput } from "../AssetPropertySelect/AssetPropertySelect";
import AssetsPropertySelectedList from "./AssetsPropertySelectedList";

type BaseProps = React.ComponentProps<typeof AssetPropertySelect>;

/* eslint-disable react/prop-types */
const AssetsPropertySelect = forwardRef(
  (
    { label, required, options, isWide, onChange, value = [], ...props }: Props,
    ref: Ref<HTMLSelectElement>,
  ) => {
    const selectRef = useRef<HTMLSelectElement | null>(null);

    const handleOnChange = useCallback(
      (e: OnChangeInput) => {
        if (!e || !(typeof e === "object" && "target" in e && e.target.value))
          return;

        const selectedValue = e.target.value;

        if (value && !value.includes(selectedValue)) {
          onChange([...value, selectedValue]);
        } else if (!value) {
          onChange([selectedValue]);
        }

        if (selectRef.current) selectRef.current.value = "";
      },
      [onChange, selectRef, value],
    );

    const handleRemove = useCallback(
      (index: number) => {
        const newValue = [...value];
        newValue.splice(index, 1);
        onChange(newValue);
      },
      [onChange, value],
    );

    const handleDragEnd = useCallback(
      (sourceIndex: number, destinationIndex: number) => {
        const newValue = [...value];
        const sourceItem = newValue.splice(sourceIndex, 1)[0];

        newValue.splice(destinationIndex, 0, sourceItem);
        onChange(newValue);
      },
      [onChange, value],
    );

    return (
      <div>
        <AssetPropertySelect
          label={label}
          required={required}
          options={options}
          isWide={isWide}
          onChange={handleOnChange}
          ref={(e) => {
            if (typeof ref === "function") ref(e);
            selectRef.current = e;
          }}
          {...props}
        />
        <AssetsPropertySelectedList
          options={options}
          value={value}
          onRemove={handleRemove}
          onDragEnd={handleDragEnd}
        />
      </div>
    );
  },
);

export type Option = {
  kind: string;
  label: string;
  value: string;
};

export type Value = string[];

type Props = BaseProps & {
  value: Value;
  options: Option[];
};

export default AssetsPropertySelect;
