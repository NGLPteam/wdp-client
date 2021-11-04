import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import ScalarProperty from "../ScalarProperty";
import Switch from "components/forms/Switch";
import type { BooleanPropertyFragment$key } from "@/relay/BooleanPropertyFragment.graphql";

/**
 * A simple boolean switch.
 */
export default function BooleanProperty(props: Props) {
  const field = useFragment<BooleanPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, register, isWide }) => (
        <Switch
          label={label}
          hideLabel
          text={label}
          required={required}
          isWide={isWide}
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
