import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { MetadataProperty } from "components/layout";
import { BooleanPropertyFragment$key } from "@/relay/BooleanPropertyFragment.graphql";

export default function BooleanProperty({ data, label, showIfFalse }: Props) {
  const property = useMaybeFragment(fragment, data);

  if (!property) return null;

  const showProperty = showIfFalse ? !!property : property.checked;

  return showProperty ? (
    <MetadataProperty label={label || property.label}>
      {property.checked ? "Yes" : "No"}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: BooleanPropertyFragment$key | null;
  label?: string;
  showIfFalse?: boolean;
}

const fragment = graphql`
  fragment BooleanPropertyFragment on BooleanProperty {
    fullPath
    label
    checked
  }
`;
