import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import AssetsPropertySelect from "./AssetsPropertySelect";

type BaseProps = Pick<
  React.ComponentProps<typeof AssetsPropertySelect>,
  "name" | "label" | "required" | "options" | "isWide"
>;

const AssetsPropertyControl = ({
  name,
  label,
  required,
  options,
  isWide,
}: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...props } }) => (
        <AssetsPropertySelect
          label={label}
          required={required}
          options={options}
          isWide={isWide}
          value={typeof value === "string" ? [value] : value || []}
          {...props}
        />
      )}
    />
  );
};

type Props = BaseProps;

export default AssetsPropertyControl;
