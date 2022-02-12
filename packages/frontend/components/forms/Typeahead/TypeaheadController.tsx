import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import Typeahead from "./Typeahead";

type TypeaheadProps = React.ComponentProps<typeof Typeahead>;

export default function TypeaheadController({
  name,
  label,
  placeholder,
  id,
  options,
}: Props & InputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Typeahead
          label={label}
          placeholder={placeholder}
          id={id}
          options={options}
          {...field}
        />
      )}
    />
  );
}

type InputProps = Pick<
  TypeaheadProps,
  "label" | "placeholder" | "id" | "options"
>;

interface Props {
  name: string;
}
