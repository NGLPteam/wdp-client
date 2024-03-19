import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { MetadataProperty } from "components/layout";
import { StringPropertyFragment$key } from "@/relay/StringPropertyFragment.graphql";

export default function StringProperty({
  data,
  label,
  showPlaceholder,
}: Props) {
  const property = useMaybeFragment(fragment, data);

  const hasLabel = label ?? property?.label;

  return hasLabel && (property?.content || showPlaceholder) ? (
    <MetadataProperty label={hasLabel}>{property?.content}</MetadataProperty>
  ) : null;
}

interface Props {
  data?: StringPropertyFragment$key | null;
  label?: string;
  showPlaceholder?: boolean;
}

const fragment = graphql`
  fragment StringPropertyFragment on StringProperty {
    fullPath
    label
    content
  }
`;
