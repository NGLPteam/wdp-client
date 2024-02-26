/**
 * @generated SignedSource<<74a9542a9a150a224a16e6c22927c111>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SchemaPropertyFragment$data = {
  readonly __typename: "AssetProperty";
  readonly " $fragmentSpreads": FragmentRefs<"AssetPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "AssetsProperty";
  readonly " $fragmentSpreads": FragmentRefs<"AssetsPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "BooleanProperty";
  readonly " $fragmentSpreads": FragmentRefs<"BooleanPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "ContributorProperty";
  readonly " $fragmentSpreads": FragmentRefs<"ContributorPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "ContributorsProperty";
  readonly " $fragmentSpreads": FragmentRefs<"ContributorsPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "DateProperty";
  readonly " $fragmentSpreads": FragmentRefs<"DatePropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "EmailProperty";
  readonly " $fragmentSpreads": FragmentRefs<"EmailPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "EntitiesProperty";
  readonly " $fragmentSpreads": FragmentRefs<"EntitiesPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "EntityProperty";
  readonly " $fragmentSpreads": FragmentRefs<"EntityPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "FloatProperty";
  readonly " $fragmentSpreads": FragmentRefs<"FloatPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "FullTextProperty";
  readonly " $fragmentSpreads": FragmentRefs<"FullTextPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "IntegerProperty";
  readonly " $fragmentSpreads": FragmentRefs<"IntegerPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "MarkdownProperty";
  readonly " $fragmentSpreads": FragmentRefs<"MarkdownPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "MultiselectProperty";
  readonly " $fragmentSpreads": FragmentRefs<"MultiselectPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "SelectProperty";
  readonly " $fragmentSpreads": FragmentRefs<"SelectPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "StringProperty";
  readonly " $fragmentSpreads": FragmentRefs<"StringPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "TagsProperty";
  readonly " $fragmentSpreads": FragmentRefs<"TagsPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "URLProperty";
  readonly " $fragmentSpreads": FragmentRefs<"URLPropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  readonly __typename: "VariableDateProperty";
  readonly " $fragmentSpreads": FragmentRefs<"VariableDatePropertyFragment">;
  readonly " $fragmentType": "SchemaPropertyFragment";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "SchemaPropertyFragment";
};
export type SchemaPropertyFragment$key = {
  readonly " $data"?: SchemaPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AssetPropertyFragment"
        }
      ],
      "type": "AssetProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AssetsPropertyFragment"
        }
      ],
      "type": "AssetsProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BooleanPropertyFragment"
        }
      ],
      "type": "BooleanProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorPropertyFragment"
        }
      ],
      "type": "ContributorProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorsPropertyFragment"
        }
      ],
      "type": "ContributorsProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "DatePropertyFragment"
        }
      ],
      "type": "DateProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EmailPropertyFragment"
        }
      ],
      "type": "EmailProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FloatPropertyFragment"
        }
      ],
      "type": "FloatProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "IntegerPropertyFragment"
        }
      ],
      "type": "IntegerProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MarkdownPropertyFragment"
        }
      ],
      "type": "MarkdownProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MultiselectPropertyFragment"
        }
      ],
      "type": "MultiselectProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SelectPropertyFragment"
        }
      ],
      "type": "SelectProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "StringPropertyFragment"
        }
      ],
      "type": "StringProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TagsPropertyFragment"
        }
      ],
      "type": "TagsProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FullTextPropertyFragment"
        }
      ],
      "type": "FullTextProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "URLPropertyFragment"
        }
      ],
      "type": "URLProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "VariableDatePropertyFragment"
        }
      ],
      "type": "VariableDateProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityPropertyFragment"
        }
      ],
      "type": "EntityProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntitiesPropertyFragment"
        }
      ],
      "type": "EntitiesProperty",
      "abstractKey": null
    }
  ],
  "type": "AnyScalarProperty",
  "abstractKey": "__isAnyScalarProperty"
};

(node as any).hash = "71e8ded7627f77515decc8d1b02f35cb";

export default node;
