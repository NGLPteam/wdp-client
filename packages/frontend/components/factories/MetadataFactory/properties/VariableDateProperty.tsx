import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PrecisionDate } from "components/atomic";
import { VariableDatePropertyFragment$key } from "@/relay/VariableDatePropertyFragment.graphql";
import { MetadataProperty } from "components/layout";

export default function VariableDateProperty({
  data,
  label,
  showPlaceholder,
}: Props) {
  const property = useMaybeFragment(fragment, data);

  const hasLabel = label ?? property?.label;

  return hasLabel && (property?.dateWithPrecision?.value || showPlaceholder) ? (
    <MetadataProperty label={hasLabel}>
      {property?.dateWithPrecision?.value && (
        <PrecisionDate data={property.dateWithPrecision} />
      )}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: VariableDatePropertyFragment$key | null;
  label?: string;
  showPlaceholder?: boolean;
}

const fragment = graphql`
  fragment VariableDatePropertyFragment on VariableDateProperty {
    fullPath
    label
    dateWithPrecision {
      value
      ...PrecisionDateFragment
    }
  }
`;
