import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { Controller } from "react-hook-form";

import TagsInput from "components/forms/TagsInput";
import type { TagsPropertyFragment$key } from "@/relay/TagsPropertyFragment.graphql";
import ScalarProperty from "../ScalarProperty";

/**
 * @todo This needs to be an actual tags input—allowing a user to input an arbitrary
 * array of strings that do not contain the `,` character.
 */
export default function TagsProperty(props: Props) {
  const field = useFragment<TagsPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, control, name, isWide }) => (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TagsInput
              label={label}
              required={required}
              isWide={isWide}
              {...field}
            />
          )}
        />
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
