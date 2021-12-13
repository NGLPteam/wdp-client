import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { EmailPropertyFragment$key } from "@/relay/EmailPropertyFragment.graphql";
import { MetadataProperty } from "components/layout";

export default function EmailProperty({ data, label }: Props) {
  const property = useMaybeFragment(fragment, data);

  return property ? (
    <MetadataProperty label={label || property.label}>
      {property.address || property.defaultAddress}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: EmailPropertyFragment$key | null;
  label?: string;
}

const fragment = graphql`
  fragment EmailPropertyFragment on EmailProperty {
    fullPath
    label
    address
    defaultAddress
  }
`;
