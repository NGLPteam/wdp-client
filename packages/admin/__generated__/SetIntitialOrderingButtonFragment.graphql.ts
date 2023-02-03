/**
 * @generated SignedSource<<3e31dc67c0cc9ef41e8481ac511de39a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SetIntitialOrderingButtonFragment$data = {
  readonly initOrderings?: {
    readonly pageInfo: {
      readonly totalCount: number;
    };
  };
  readonly " $fragmentSpreads": FragmentRefs<"SetIntitialOrderingModalFragment">;
  readonly " $fragmentType": "SetIntitialOrderingButtonFragment";
};
export type SetIntitialOrderingButtonFragment$key = {
  readonly " $data"?: SetIntitialOrderingButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SetIntitialOrderingButtonFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "SetIntitialOrderingModalFragment"
  },
  {
    "alias": "initOrderings",
    "args": null,
    "concreteType": "OrderingConnection",
    "kind": "LinkedField",
    "name": "orderings",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PageInfo",
        "kind": "LinkedField",
        "name": "pageInfo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          }
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
  "name": "SetIntitialOrderingButtonFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Item",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();

(node as any).hash = "53a9110e82da5dd22857d6927397ecf2";

export default node;
