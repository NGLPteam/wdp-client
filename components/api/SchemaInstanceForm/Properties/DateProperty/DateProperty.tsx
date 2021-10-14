import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import { DatePicker } from "components/forms/Input";
import type { DatePropertyFragment$key } from "@/relay/DatePropertyFragment.graphql";
import ScalarProperty from "../ScalarProperty";

export default function DateProperty(props: Props) {
  const field = useFragment<DatePropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, register }) => (
        <DatePicker label={label} required={required} {...register} />
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
