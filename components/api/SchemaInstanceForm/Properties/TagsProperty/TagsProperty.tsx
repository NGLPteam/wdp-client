import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import Input from "components/forms/Input";
import ScalarProperty from "../ScalarProperty";
import type { TagsPropertyFragment$key } from "@/relay/TagsPropertyFragment.graphql";

/**
 * @todo This needs to be an actual tags input—allowing a user to input an arbitrary
 * array of strings that do not contain the `,` character.
 */
export default function TagsProperty(props: Props) {
  const field = useFragment<TagsPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, register }) => (
        <Input label={label} required={required} {...register} />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: TagsPropertyFragment$key;
}

const fragment = graphql`
  fragment TagsPropertyFragment on TagsProperty {
    ...ScalarPropertyFragment

    tags
  }
`;
