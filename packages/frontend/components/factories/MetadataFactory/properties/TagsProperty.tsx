import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { TagsPropertyFragment$key } from "@/relay/TagsPropertyFragment.graphql";
import { MetadataProperty } from "components/layout";

export default function TagsProperty({ data, label, showPlaceholder }: Props) {
  const property = useMaybeFragment(fragment, data);

  return !!property?.tags?.length || (showPlaceholder && label) ? (
    <MetadataProperty label={label ?? property?.label ?? ""}>
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
