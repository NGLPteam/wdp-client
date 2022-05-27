import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NumberPropertyFragment$key } from "@/relay/NumberPropertyFragment.graphql";
import { MetadataProperty } from "components/layout";

export default function NumberProperty({
  data,
  label,
  showPlaceholder,
}: Props) {
  const property = useMaybeFragment(fragment, data);

  const hasLabel = label ?? property?.label;
  const value = property
    ? property.integerValue
      ? property.integerValue || property.defaultInteger
      : property.floatValue
      ? property.floatValue || property.defaultFloat
      : null
    : null;

  return hasLabel && (value || showPlaceholder) ? (
    <MetadataProperty label={hasLabel}>{value}</MetadataProperty>
  ) : null;
}

interface Props {
  data?: NumberPropertyFragment$key | null;
  label?: string;
  showPlaceholder?: boolean;
}

const fragment = graphql`
  fragment NumberPropertyFragment on ScalarProperty {
    fullPath
    label
    ... on IntegerProperty {
      defaultInteger
      integerValue
    }
    ... on FloatProperty {
      defaultFloat
      floatValue
    }
  }
`;
