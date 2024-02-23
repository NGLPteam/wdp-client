import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import {
  TagsProperty,
  StringProperty,
  DateProperty,
  VariableDateProperty,
  AssetProperty,
  EmailProperty,
  NumberProperty,
  BooleanProperty,
  URLProperty,
  SelectProperty,
} from "./properties";
import type { MetadataFactoryFragment$key } from "@/relay/MetadataFactoryFragment.graphql";

/**
 * A factory that dispatches on `__typename` and renders
 * the appropriate property field.
 */
export default function MetadataFactory({
  data,
  label,
  showPlaceholder = false,
}: Props) {
  const field = useMaybeFragment(fragment, data);

  if (!field) return null;

  switch (field.__typename) {
    case "AssetProperty":
      return (
        <AssetProperty
          data={field}
          label={label}
          showPlaceholder={showPlaceholder}
        />
      );
    case "BooleanProperty":
      return <BooleanProperty data={field} label={label} />;
    case "DateProperty":
      return (
        <DateProperty
          data={field}
          label={label}
          showPlaceholder={showPlaceholder}
        />
      );
    case "EmailProperty":
      return (
        <EmailProperty
          data={field}
          label={label}
          showPlaceholder={showPlaceholder}
        />
      );
    case "FloatProperty":
    case "IntegerProperty":
      return (
        <NumberProperty
          data={field}
          label={label}
          showPlaceholder={showPlaceholder}
        />
      );
    case "StringProperty":
      return (
        <StringProperty
          data={field}
          label={label}
          showPlaceholder={showPlaceholder}
        />
      );
    case "SelectProperty":
      return (
        <SelectProperty
          data={field}
          label={label}
          showPlaceholder={showPlaceholder}
        />
      );
    case "TagsProperty":
      return (
        <TagsProperty
          data={field}
          label={label}
          showPlaceholder={showPlaceholder}
        />
      );
    case "URLProperty":
      return (
        <URLProperty
          data={field}
          label={label}
          showPlaceholder={showPlaceholder}
        />
      );
    case "VariableDateProperty":
      return (
        <VariableDateProperty
          data={field}
          label={label}
          showPlaceholder={showPlaceholder}
        />
      );
    default:
      return null;
  }
}

interface Props {
  data?: MetadataFactoryFragment$key | null;
  label?: string;
  showPlaceholder?: boolean;
}

const fragment = graphql`
  fragment MetadataFactoryFragment on AnyScalarProperty {
    __typename

    ... on AssetProperty {
      ...AssetPropertyFragment
    }

    #... on AssetsProperty {
    #  ...AssetsPropertyFragment
    #}

    ... on BooleanProperty {
      ...BooleanPropertyFragment
    }

    ... on DateProperty {
      ...DatePropertyFragment
    }

    ... on EmailProperty {
      ...EmailPropertyFragment
    }

    ... on FloatProperty {
      ...NumberPropertyFragment
    }

    ... on IntegerProperty {
      ...NumberPropertyFragment
    }

    #... on MultiselectProperty {
    #  ...MultiselectPropertyFragment
    #}

    ... on SelectProperty {
      ...SelectPropertyFragment
    }

    ... on StringProperty {
      ...StringPropertyFragment
    }

    ... on TagsProperty {
      ...TagsPropertyFragment
    }

    ... on URLProperty {
      ...URLPropertyFragment
    }

    ... on VariableDateProperty {
      ...VariableDatePropertyFragment
    }
  }
`;
