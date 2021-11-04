import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import ScalarProperty from "../ScalarProperty";
import Input from "components/forms/Input";
import type { StringPropertyFragment$key } from "@/relay/StringPropertyFragment.graphql";

export default function StringProperty(props: Props) {
  const field = useFragment<StringPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, register, isWide }) => (
        <Input
          label={label}
          required={required}
          isWide={isWide || register.name === "title"}
          {...register}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: StringPropertyFragment$key;
}

const fragment = graphql`
  fragment StringPropertyFragment on StringProperty {
    ...ScalarPropertyFragment

    content
    default
  }
`;
