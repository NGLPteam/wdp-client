import React from "react";
import { useFragment } from "relay-hooks";
import { graphql } from "relay-runtime";

import { SchemaPropertyFragment$key } from "@/relay/SchemaPropertyFragment.graphql";

import * as Properties from "../../Properties";

/**
 * A factory that dispatches on `__typename` and renders
 * the appropriate property field.
 */
export default function SchemaProperty(props: Props) {
  const field = useFragment(fragment, props.field);

  switch (field.__typename) {
    case "AssetProperty":
      return <Properties.Asset field={field} />;
    case "AssetsProperty":
      return <Properties.Assets field={field} />;
    case "BooleanProperty":
      return <Properties.Boolean field={field} />;
    case "ContributorProperty":
      return <Properties.Contributor field={field} />;
    case "ContributorsProperty":
      return <Properties.Contributors field={field} />;
    case "DateProperty":
      return <Properties.Date field={field} />;
    case "EmailProperty":
      return <Properties.Email field={field} />;
    case "FloatProperty":
      return <Properties.Float field={field} />;
    case "IntegerProperty":
      return <Properties.Integer field={field} />;
    case "MarkdownProperty":
      return <Properties.Markdown field={field} />;
    case "MultiselectProperty":
      return <Properties.Multiselect field={field} />;
    case "SelectProperty":
      return <Properties.Select field={field} />;
    case "StringProperty":
      return <Properties.String field={field} />;
    case "TagsProperty":
      return <Properties.Tags field={field} />;
    default:
      console.warn("Got unknown schema property type: %s", field.__typename);
      return null;
  }
}

interface Props {
  field: SchemaPropertyFragment$key;
}

const fragment = graphql`
  fragment SchemaPropertyFragment on AnyScalarProperty {
    __typename

    ... on AssetProperty {
      ...AssetPropertyFragment
    }

    ... on AssetsProperty {
      ...AssetsPropertyFragment
    }

    ... on BooleanProperty {
      ...BooleanPropertyFragment
    }

    ... on ContributorProperty {
      ...ContributorPropertyFragment
    }

    ... on ContributorsProperty {
      ...ContributorsPropertyFragment
    }

    ... on DateProperty {
      ...DatePropertyFragment
    }

    ... on EmailProperty {
      ...EmailPropertyFragment
    }

    ... on FloatProperty {
      ...FloatPropertyFragment
    }

    ... on IntegerProperty {
      ...IntegerPropertyFragment
    }

    ... on MarkdownProperty {
      ...MarkdownPropertyFragment
    }

    ... on MultiselectProperty {
      ...MultiselectPropertyFragment
    }

    ... on SelectProperty {
      ...SelectPropertyFragment
    }

    ... on StringProperty {
      ...StringPropertyFragment
    }

    ... on TagsProperty {
      ...TagsPropertyFragment
    }
  }
`;
