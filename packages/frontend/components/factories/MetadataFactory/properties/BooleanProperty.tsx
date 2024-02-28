import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { MetadataProperty } from "components/layout";
import { BooleanPropertyFragment$key } from "@/relay/BooleanPropertyFragment.graphql";

export default function BooleanProperty({ data, label }: Props) {
  const property = useMaybeFragment(fragment, data);

  return property ? (
    <MetadataProperty label={label || property.label}>
      {property.checked ? "Yes" : "No"}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: BooleanPropertyFragment$key | null;
  label?: string;
}

const fragment = graphql`
  fragment BooleanPropertyFragment on BooleanProperty {
    fullPath
    label
    checked
  }
`;
