/**
 * @generated SignedSource<<c0c2513e48126acd579b0a43d205fbcc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MetadataFactoryFragment$data = {
  readonly __typename: "AssetProperty";
  readonly " $fragmentSpreads": FragmentRefs<"AssetPropertyFragment">;
  readonly " $fragmentType": "MetadataFactoryFragment";
} | {
  readonly __typename: "BooleanProperty";
  readonly " $fragmentSpreads": FragmentRefs<"BooleanPropertyFragment">;
  readonly " $fragmentType": "MetadataFactoryFragment";
} | {
  readonly __typename: "DateProperty";
  readonly " $fragmentSpreads": FragmentRefs<"DatePropertyFragment">;
  readonly " $fragmentType": "MetadataFactoryFragment";
} | {
  readonly __typename: "EmailProperty";
  readonly " $fragmentSpreads": FragmentRefs<"EmailPropertyFragment">;
  readonly " $fragmentType": "MetadataFactoryFragment";
} | {
  readonly __typename: "FloatProperty";
  readonly " $fragmentSpreads": FragmentRefs<"NumberPropertyFragment">;
  readonly " $fragmentType": "MetadataFactoryFragment";
} | {
  readonly __typename: "IntegerProperty";
  readonly " $fragmentSpreads": FragmentRefs<"NumberPropertyFragment">;
  readonly " $fragmentType": "MetadataFactoryFragment";
} | {
  readonly __typename: "SelectProperty";
  readonly " $fragmentSpreads": FragmentRefs<"SelectPropertyFragment">;
  readonly " $fragmentType": "MetadataFactoryFragment";
} | {
  readonly __typename: "StringProperty";
  readonly " $fragmentSpreads": FragmentRefs<"StringPropertyFragment">;
  readonly " $fragmentType": "MetadataFactoryFragment";
} | {
  readonly __typename: "TagsProperty";
  readonly " $fragmentSpreads": FragmentRefs<"TagsPropertyFragment">;
  readonly " $fragmentType": "MetadataFactoryFragment";
} | {
  readonly __typename: "URLProperty";
  readonly " $fragmentSpreads": FragmentRefs<"URLPropertyFragment">;
  readonly " $fragmentType": "MetadataFactoryFragment";
} | {
  readonly __typename: "VariableDateProperty";
  readonly " $fragmentSpreads": FragmentRefs<"VariableDatePropertyFragment">;
  readonly " $fragmentType": "MetadataFactoryFragment";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "MetadataFactoryFragment";
};
export type MetadataFactoryFragment$key = {
  readonly " $data"?: MetadataFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MetadataFactoryFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "NumberPropertyFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MetadataFactoryFragment",
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
      "selections": (v0/*: any*/),
      "type": "FloatProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "IntegerProperty",
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
    }
  ],
  "type": "AnyScalarProperty",
  "abstractKey": "__isAnyScalarProperty"
};
})();

(node as any).hash = "b095761ebbcb6ff121051e6b3ed3d014";

export default node;
