import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import ScalarProperty from "../ScalarProperty";
import { DatePicker } from "components/forms/Input";
import type { DatePropertyFragment$key } from "@/relay/DatePropertyFragment.graphql";

export default function DateProperty(props: Props) {
  const field = useFragment<DatePropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, register, isWide }) => (
        <DatePicker
          label={label}
          required={required}
          isWide={isWide}
          {...register}
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
