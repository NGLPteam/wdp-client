/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SetIntitialOrderingButtonFragment = {
    readonly orderings?: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    } | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SetIntitialOrderingModalFragment">;
    readonly " $refType": "SetIntitialOrderingButtonFragment";
};
export type SetIntitialOrderingButtonFragment$data = SetIntitialOrderingButtonFragment;
export type SetIntitialOrderingButtonFragment$key = {
    readonly " $data"?: SetIntitialOrderingButtonFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SetIntitialOrderingButtonFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
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
  },
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "SetIntitialOrderingModalFragment"
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
(node as any).hash = 'b08fa88d150d61b67cd297d9120335de';
export default node;
