import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useFormContext } from "react-hook-form";
import ScalarProperty from "../ScalarProperty";
import { DatePicker } from "components/forms/Input";
import type { DatePropertyFragment$key } from "@/relay/DatePropertyFragment.graphql";

export default function DateProperty(props: Props) {
  const field = useFragment<DatePropertyFragment$key>(fragment, props.field);

  const { register } = useFormContext();

  return (
    <ScalarProperty field={field}>
      {({ label, required, name, isWide }) => (
        <DatePicker
          label={label}
          required={required}
          isWide={isWide}
          {...register(name)}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: DatePropertyFragment$key;
}

const fragment = graphql`
  fragment DatePropertyFragment on DateProperty {
    ...ScalarPropertyFragment

    date
  }
`;
