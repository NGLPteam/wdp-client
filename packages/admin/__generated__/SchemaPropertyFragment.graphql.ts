/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaPropertyFragment = {
    readonly __typename: "AssetProperty";
    readonly " $fragmentRefs": FragmentRefs<"AssetPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "AssetsProperty";
    readonly " $fragmentRefs": FragmentRefs<"AssetsPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "BooleanProperty";
    readonly " $fragmentRefs": FragmentRefs<"BooleanPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "ContributorProperty";
    readonly " $fragmentRefs": FragmentRefs<"ContributorPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "ContributorsProperty";
    readonly " $fragmentRefs": FragmentRefs<"ContributorsPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "DateProperty";
    readonly " $fragmentRefs": FragmentRefs<"DatePropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "EmailProperty";
    readonly " $fragmentRefs": FragmentRefs<"EmailPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "FloatProperty";
    readonly " $fragmentRefs": FragmentRefs<"FloatPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "IntegerProperty";
    readonly " $fragmentRefs": FragmentRefs<"IntegerPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "MarkdownProperty";
    readonly " $fragmentRefs": FragmentRefs<"MarkdownPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "MultiselectProperty";
    readonly " $fragmentRefs": FragmentRefs<"MultiselectPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "SelectProperty";
    readonly " $fragmentRefs": FragmentRefs<"SelectPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "StringProperty";
    readonly " $fragmentRefs": FragmentRefs<"StringPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "TagsProperty";
    readonly " $fragmentRefs": FragmentRefs<"TagsPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "FullTextProperty";
    readonly " $fragmentRefs": FragmentRefs<"FullTextPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "URLProperty";
    readonly " $fragmentRefs": FragmentRefs<"URLPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "VariableDateProperty";
    readonly " $fragmentRefs": FragmentRefs<"VariableDatePropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "EntityProperty";
    readonly " $fragmentRefs": FragmentRefs<"EntityPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    readonly __typename: "EntitiesProperty";
    readonly " $fragmentRefs": FragmentRefs<"EntitiesPropertyFragment">;
    readonly " $refType": "SchemaPropertyFragment";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "SchemaPropertyFragment";
};
export type SchemaPropertyFragment$data = SchemaPropertyFragment;
export type SchemaPropertyFragment$key = {
    readonly " $data"?: SchemaPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SchemaPropertyFragment">;
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
(node as any).hash = '71e8ded7627f77515decc8d1b02f35cb';
export default node;
