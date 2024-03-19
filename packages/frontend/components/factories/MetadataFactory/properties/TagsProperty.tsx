import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { MetadataProperty } from "components/layout";
import { TagsPropertyFragment$key } from "@/relay/TagsPropertyFragment.graphql";

export default function TagsProperty({ data, label, showPlaceholder }: Props) {
  const property = useMaybeFragment(fragment, data);

  const hasLabel = label ?? property?.label;

  return hasLabel && (!!property?.tags?.length || showPlaceholder) ? (
    <MetadataProperty label={hasLabel}>
      {property?.tags.join(", ")}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: TagsPropertyFragment$key | null;
  label?: string;
  showPlaceholder?: boolean;
}

const fragment = graphql`
  fragment TagsPropertyFragment on TagsProperty {
    fullPath
    label
    tags
  }
`;
