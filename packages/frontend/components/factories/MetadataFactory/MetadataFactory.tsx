import React from "react";
import { graphql } from "relay-runtime";
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
} from "./properties";
import type { MetadataFactoryFragment$key } from "@/relay/MetadataFactoryFragment.graphql";

/**
 * A factory that dispatches on `__typename` and renders
 * the appropriate property field.
 */
export default function MetadataFactory({ data, label }: Props) {
  const field = useMaybeFragment(fragment, data);

  if (!field) return null;

  switch (field.__typename) {
    case "AssetProperty":
      return <AssetProperty data={field} label={label} />;
    case "BooleanProperty":
      return <BooleanProperty data={field} label={label} />;
    case "DateProperty":
      return <DateProperty data={field} label={label} />;
    case "EmailProperty":
      return <EmailProperty data={field} label={label} />;
    case "FloatProperty":
    case "IntegerProperty":
      return <NumberProperty data={field} label={label} />;
    case "StringProperty":
      return <StringProperty data={field} label={label} />;
    case "TagsProperty":
      return <TagsProperty data={field} label={label} />;
    case "URLProperty":
      return <URLProperty data={field} label={label} />;
    case "VariableDateProperty":
      return <VariableDateProperty data={field} label={label} />;
    default:
      return null;
  }
}

interface Props {
  data: MetadataFactoryFragment$key;
  label?: string;
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

    #... on ContributorProperty {
    #  ...ContributorPropertyFragment
    #}

    #... on ContributorsProperty {
    #  ...ContributorsPropertyFragment
    #}

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

    #... on MarkdownProperty {
    #  ...MarkdownPropertyFragment
    #}

    #... on MultiselectProperty {
    #  ...MultiselectPropertyFragment
    #}

    #... on SelectProperty {
    #  ...SelectPropertyFragment
    #}

    ... on StringProperty {
      ...StringPropertyFragment
    }

    ... on TagsProperty {
      ...TagsPropertyFragment
    }

    #... on FullTextProperty {
    #  ...FullTextFragment
    #}

    ... on URLProperty {
      ...URLPropertyFragment
    }

    ... on VariableDateProperty {
      ...VariableDatePropertyFragment
    }
  }
`;
