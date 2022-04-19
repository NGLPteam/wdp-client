import React from "react";
import { graphql } from "relay-runtime";
import { Controller, useFormContext } from "react-hook-form";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Forms } from "components/api/MutationForm";
import type { VariablePrecisionDateControlFragment$key } from "@/relay/VariablePrecisionDateControlFragment.graphql";

export default function VariablePrecisionDateControl({
  data,
  name,
  label,
  required,
  isWide,
}: Props) {
  const defaultValue =
    useMaybeFragment<VariablePrecisionDateControlFragment$key>(fragment, data);

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...props } }) => (
        // If we set "defaultValue" on the Controller, the returned value object is a string.
        // Instead, we'll set the default value here.
        <Forms.VariableDatePicker
          label={label}
          required={required}
          isWide={isWide}
          defaultValue={defaultValue}
          {...props}
        />
      )}
    />
  );
}

type InputProps = Pick<
  React.ComponentProps<typeof Forms.VariableDatePicker>,
  "name" | "label" | "required" | "isWide"
>;

interface Props extends InputProps {
  data?: VariablePrecisionDateControlFragment$key | null;
}

const fragment = graphql`
  fragment VariablePrecisionDateControlFragment on VariablePrecisionDate {
    precision
    value
  }
`;
