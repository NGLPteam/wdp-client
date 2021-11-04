import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import ScalarProperty from "../ScalarProperty";
import Textarea from "components/forms/Textarea";
import type { MarkdownPropertyFragment$key } from "@/relay/MarkdownPropertyFragment.graphql";

/**
 * @todo This should be an actual markdown editor. I don't believe that we've
 * solved for that yet, so it's currently a plain textarea.
 */
export default function MarkdownProperty(props: Props) {
  const field = useFragment<MarkdownPropertyFragment$key>(
    fragment,
    props.field
  );

  return (
    <ScalarProperty field={field}>
      {({ label, required, register, isWide }) => (
        <Textarea
          label={label}
          required={required}
          isWide={isWide}
          {...register}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: MarkdownPropertyFragment$key;
}

const fragment = graphql`
  fragment MarkdownPropertyFragment on MarkdownProperty {
    ...ScalarPropertyFragment

    content
    default
  }
`;
