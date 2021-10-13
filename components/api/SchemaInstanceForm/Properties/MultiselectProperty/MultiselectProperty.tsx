import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import Select from "components/forms/Select";

import type { MultiselectPropertyFragment$key } from "@/relay/MultiselectPropertyFragment.graphql";

import ScalarProperty from "../ScalarProperty";

export default function MultiselectProperty(props: Props) {
  const field = useFragment<MultiselectPropertyFragment$key>(
    fragment,
    props.field
  );

  return (
    <ScalarProperty field={field}>
      {({ label, required, register }) => (
        <Select
          label={label}
          required={required}
          options={field.options}
          multiple
          {...register}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: MultiselectPropertyFragment$key;
}

const fragment = graphql`
  fragment MultiselectPropertyFragment on MultiselectProperty {
    ...ScalarPropertyFragment

    options {
      label
      value
    }
  }
`;
