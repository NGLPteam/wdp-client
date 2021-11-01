import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import Input from "components/forms/Input";
import type { IntegerPropertyFragment$key } from "@/relay/IntegerPropertyFragment.graphql";
import ScalarProperty from "../ScalarProperty";

export default function IntegerProperty(props: Props) {
  const field = useFragment<IntegerPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, register, isWide }) => (
        <Input
          label={label}
          required={required}
          type="number"
          isWide={isWide}
          {...register}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: IntegerPropertyFragment$key;
}

const fragment = graphql`
  fragment IntegerPropertyFragment on IntegerProperty {
    ...ScalarPropertyFragment

    integerValue
    defaultInteger
  }
`;
