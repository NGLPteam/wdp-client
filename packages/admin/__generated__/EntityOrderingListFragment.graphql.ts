/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityOrderingListFragment = {
    readonly id?: string | undefined;
    readonly slug?: string | undefined;
    readonly title?: string | undefined;
    readonly orderings?: {
        readonly " $fragmentRefs": FragmentRefs<"EntityOrderingListDataFragment">;
    } | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SetIntitialOrderingButtonFragment">;
    readonly " $refType": "EntityOrderingListFragment";
};
export type EntityOrderingListFragment$data = EntityOrderingListFragment;
export type EntityOrderingListFragment$key = {
    readonly " $data"?: EntityOrderingListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityOrderingListFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "slug",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
      }
    ],
    "concreteType": "OrderingConnection",
    "kind": "LinkedField",
    "name": "orderings",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "EntityOrderingListDataFragment"
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderingListFragment",
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SetIntitialOrderingButtonFragment"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = '58878865d0d88ee9202df7d0f248bf3b';
export default node;
