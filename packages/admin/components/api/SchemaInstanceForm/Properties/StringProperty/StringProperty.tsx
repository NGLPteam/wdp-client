import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useFormContext } from "react-hook-form";
import ScalarProperty from "../ScalarProperty";
import Input from "components/forms/Input";
import type { StringPropertyFragment$key } from "@/relay/StringPropertyFragment.graphql";

export default function StringProperty(props: Props) {
  const field = useFragment<StringPropertyFragment$key>(fragment, props.field);
  const { register } = useFormContext();

  return (
    <ScalarProperty field={field}>
      {({ name, label, required, isWide }) => (
        <Input
          label={label}
          required={required}
          isWide={isWide || register.name === "title"}
          {...register(name)}
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
