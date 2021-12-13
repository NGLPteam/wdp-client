import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { DatePropertyFragment$key } from "@/relay/DatePropertyFragment.graphql";
import { MetadataProperty } from "components/layout";

export default function DateProperty({ data, label }: Props) {
  const property = useMaybeFragment(fragment, data);

  return property ? (
    <MetadataProperty label={label || property.label}>
      {property.date}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: DatePropertyFragment$key | null;
  label?: string;
}

const fragment = graphql`
  fragment DatePropertyFragment on DateProperty {
    fullPath
    label
    date
  }
`;
