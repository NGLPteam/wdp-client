import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import Input from "components/forms/Input";
import ScalarProperty from "../ScalarProperty";
import type { StringPropertyFragment$key } from "@/relay/StringPropertyFragment.graphql";

export default function StringProperty(props: Props) {
  const field = useFragment<StringPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, register }) => (
        <Input
          label={label}
          required={required}
          isWide={register.name === "title"}
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
