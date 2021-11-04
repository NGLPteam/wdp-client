import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import ScalarProperty from "../ScalarProperty";
import Select from "components/forms/Select";

import type { MultiselectPropertyFragment$key } from "@/relay/MultiselectPropertyFragment.graphql";

export default function MultiselectProperty(props: Props) {
  const field = useFragment<MultiselectPropertyFragment$key>(
    fragment,
    props.field
  );

  return (
    <ScalarProperty field={field}>
      {({ label, required, register, isWide }) => (
        <Select
          label={label}
          required={required}
          options={field.options}
          multiple
          isWide={isWide}
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
