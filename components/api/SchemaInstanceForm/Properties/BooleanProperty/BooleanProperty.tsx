import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import Switch from "components/forms/Switch";
import type { BooleanPropertyFragment$key } from "@/relay/BooleanPropertyFragment.graphql";
import ScalarProperty from "../ScalarProperty";

/**
 * A simple boolean switch.
 */
export default function BooleanProperty(props: Props) {
  const field = useFragment<BooleanPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, register }) => (
        <Switch
          label={label}
          hideLabel
          text={label}
          required={required}
          {...register}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: BooleanPropertyFragment$key;
}

const fragment = graphql`
  fragment BooleanPropertyFragment on BooleanProperty {
    ...ScalarPropertyFragment

    checked
    checkedByDefault
  }
`;
