/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type MetadataFactoryFragment = {
    readonly __typename: "AssetProperty";
    readonly " $fragmentRefs": FragmentRefs<"AssetPropertyFragment">;
    readonly " $refType": "MetadataFactoryFragment";
} | {
    readonly __typename: "BooleanProperty";
    readonly " $fragmentRefs": FragmentRefs<"BooleanPropertyFragment">;
    readonly " $refType": "MetadataFactoryFragment";
} | {
    readonly __typename: "DateProperty";
    readonly " $fragmentRefs": FragmentRefs<"DatePropertyFragment">;
    readonly " $refType": "MetadataFactoryFragment";
} | {
    readonly __typename: "EmailProperty";
    readonly " $fragmentRefs": FragmentRefs<"EmailPropertyFragment">;
    readonly " $refType": "MetadataFactoryFragment";
} | {
    readonly __typename: "FloatProperty";
    readonly " $fragmentRefs": FragmentRefs<"NumberPropertyFragment">;
    readonly " $refType": "MetadataFactoryFragment";
} | {
    readonly __typename: "IntegerProperty";
    readonly " $fragmentRefs": FragmentRefs<"NumberPropertyFragment">;
    readonly " $refType": "MetadataFactoryFragment";
} | {
    readonly __typename: "SelectProperty";
    readonly " $fragmentRefs": FragmentRefs<"SelectPropertyFragment">;
    readonly " $refType": "MetadataFactoryFragment";
} | {
    readonly __typename: "StringProperty";
    readonly " $fragmentRefs": FragmentRefs<"StringPropertyFragment">;
    readonly " $refType": "MetadataFactoryFragment";
} | {
    readonly __typename: "TagsProperty";
    readonly " $fragmentRefs": FragmentRefs<"TagsPropertyFragment">;
    readonly " $refType": "MetadataFactoryFragment";
} | {
    readonly __typename: "URLProperty";
    readonly " $fragmentRefs": FragmentRefs<"URLPropertyFragment">;
    readonly " $refType": "MetadataFactoryFragment";
} | {
    readonly __typename: "VariableDateProperty";
    readonly " $fragmentRefs": FragmentRefs<"VariableDatePropertyFragment">;
    readonly " $refType": "MetadataFactoryFragment";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "MetadataFactoryFragment";
};
export type MetadataFactoryFragment$data = MetadataFactoryFragment;
export type MetadataFactoryFragment$key = {
    readonly " $data"?: MetadataFactoryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
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
(node as any).hash = 'b095761ebbcb6ff121051e6b3ed3d014';
export default node;
