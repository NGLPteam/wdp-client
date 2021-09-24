import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import Select from "components/forms/Select";

import { SelectPropertyFragment$key } from "@/relay/SelectPropertyFragment.graphql";

import ScalarProperty from "../ScalarProperty";

export default function SelectProperty(props: Props) {
  const field = useFragment<SelectPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, register }) => (
        <Select
          label={label}
          required={required}
          options={field.options}
          {...register}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: SelectPropertyFragment$key;
}

const fragment = graphql`
  fragment SelectPropertyFragment on SelectProperty {
    options {
      label
      value
    }

    ...ScalarPropertyFragment
  }
`;
