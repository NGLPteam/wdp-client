import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import AssetsPropertySelect from "./AssetsPropertySelect";

type BaseProps = Pick<
  React.ComponentProps<typeof AssetsPropertySelect>,
  "name" | "label" | "required" | "options" | "isWide" | "description"
>;

const AssetsPropertyControl = ({
  name,
  label,
  required,
  options,
  isWide,
  description,
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
          description={description}
          {...props}
        />
      )}
    />
  );
};

type Props = BaseProps;

export default AssetsPropertyControl;
