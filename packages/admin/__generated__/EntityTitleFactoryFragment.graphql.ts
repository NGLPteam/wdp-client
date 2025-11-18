/**
 * @generated SignedSource<<2d67c03d4820eeb38050d784b759d184>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityTitleFactoryFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"getEntityTitleFragment">;
  readonly " $fragmentType": "EntityTitleFactoryFragment";
};
export type EntityTitleFactoryFragment$key = {
  readonly " $data"?: EntityTitleFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityTitleFactoryFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "NamedAncestor",
    "kind": "LinkedField",
    "name": "namedAncestors",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "ancestor",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityTitleFactoryFragment",
  "selections": [
    {
      "kind": "InlineDataFragmentSpread",
      "name": "getEntityTitleFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "SchemaVersion",
          "kind": "LinkedField",
          "name": "schemaVersion",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "identifier",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v1/*: any*/),
          "type": "Collection",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v1/*: any*/),
          "type": "Item",
          "abstractKey": null
        }
      ],
      "args": null,
      "argumentDefinitions": []
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();

(node as any).hash = "81b9ae1337d3f472ff9b89e7bb0022df";

export default node;
