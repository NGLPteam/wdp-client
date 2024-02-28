import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { MetadataProperty } from "components/layout";
import { EmailPropertyFragment$key } from "@/relay/EmailPropertyFragment.graphql";

export default function EmailProperty({ data, label, showPlaceholder }: Props) {
  const property = useMaybeFragment(fragment, data);

  const hasLabel = label ?? property?.label;

  return hasLabel &&
    (property?.defaultAddress || property?.address || showPlaceholder) ? (
    <MetadataProperty label={hasLabel}>
      {property?.address || property?.defaultAddress}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: EmailPropertyFragment$key | null;
  label?: string;
  showPlaceholder?: boolean;
}

const fragment = graphql`
  fragment EmailPropertyFragment on EmailProperty {
    fullPath
    label
    address
    defaultAddress
  }
`;
