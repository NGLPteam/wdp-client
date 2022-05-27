import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { DatePropertyFragment$key } from "@/relay/DatePropertyFragment.graphql";
import { MetadataProperty } from "components/layout";

export default function DateProperty({ data, label, showPlaceholder }: Props) {
  const property = useMaybeFragment(fragment, data);

  const hasLabel = label ?? property?.label;

  return hasLabel && (property?.date || showPlaceholder) ? (
    <MetadataProperty label={hasLabel}>{property?.date}</MetadataProperty>
  ) : null;
}

interface Props {
  data?: DatePropertyFragment$key | null;
  label?: string;
  showPlaceholder?: boolean;
}

const fragment = graphql`
  fragment DatePropertyFragment on DateProperty {
    fullPath
    label
    date
  }
`;
