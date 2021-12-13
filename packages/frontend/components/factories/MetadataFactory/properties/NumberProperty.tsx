import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { NumberPropertyFragment$key } from "@/relay/NumberPropertyFragment.graphql";
import { MetadataProperty } from "components/layout";

export default function NumberProperty({ data, label }: Props) {
  const property = useMaybeFragment(fragment, data);

  return property ? (
    <MetadataProperty label={label || property.label}>
      {property.integerValue
        ? property.integerValue || property.defaultInteger
        : property.floatValue
        ? property.floatValue || property.defaultFloat
        : null}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: NumberPropertyFragment$key | null;
  label?: string;
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
