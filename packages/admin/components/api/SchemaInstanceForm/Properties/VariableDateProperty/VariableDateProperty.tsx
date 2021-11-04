import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { Controller } from "react-hook-form";
import ScalarProperty from "../ScalarProperty";
import type { VariableDatePropertyFragment$key } from "@/relay/VariableDatePropertyFragment.graphql";
import VariableDatePicker from "components/forms/VariableDatePicker";

export default function VariableDateProperty(props: Props) {
  const field = useFragment<VariableDatePropertyFragment$key>(
    fragment,
    props.field
  );

  return (
    <ScalarProperty field={field}>
      {({ label, required, control, name, isWide }) => (
        <Controller
          name={name}
          control={control}
          defaultValue={field?.dateWithPrecision}
          render={({ field }) => (
            <VariableDatePicker
              label={label}
              required={required}
              isWide={isWide}
              {...field}
            />
          )}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: VariableDatePropertyFragment$key;
}

const fragment = graphql`
  fragment VariableDatePropertyFragment on VariableDateProperty {
    ...ScalarPropertyFragment

    dateWithPrecision {
      precision
      value
    }
  }
`;
