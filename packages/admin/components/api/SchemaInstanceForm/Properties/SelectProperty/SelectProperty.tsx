import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import ScalarProperty from "../ScalarProperty";
import Select from "components/forms/Select";

import type { SelectPropertyFragment$key } from "@/relay/SelectPropertyFragment.graphql";

export default function SelectProperty(props: Props) {
  const field = useFragment<SelectPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, register, isWide }) => (
        <Select
          label={label}
          required={required}
          options={field.options}
          isWide={isWide}
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
