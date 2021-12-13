import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PrecisionDate } from "components/atomic";
import { VariableDatePropertyFragment$key } from "@/relay/VariableDatePropertyFragment.graphql";
import { MetadataProperty } from "components/layout";

export default function VariableDateProperty({ data, label }: Props) {
  const property = useMaybeFragment(fragment, data);

  return property ? (
    <MetadataProperty label={label || property.label}>
      {property.dateWithPrecision && (
        <PrecisionDate data={property.dateWithPrecision} />
      )}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: VariableDatePropertyFragment$key | null;
  label?: string;
}

const fragment = graphql`
  fragment VariableDatePropertyFragment on VariableDateProperty {
    fullPath
    label
    dateWithPrecision {
      ...PrecisionDateFragment
    }
  }
`;
