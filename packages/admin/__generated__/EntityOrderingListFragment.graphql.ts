/**
 * @generated SignedSource<<6fa9a8c6c0fa415465a46b99904eba8f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingListFragment$data = {
  readonly orderings?: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingListDataFragment">;
  };
  readonly slug?: string;
  readonly " $fragmentSpreads": FragmentRefs<"SetIntitialOrderingButtonFragment">;
  readonly " $fragmentType": "EntityOrderingListFragment";
};
export type EntityOrderingListFragment$key = {
  readonly " $data"?: EntityOrderingListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "slug",
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

(node as any).hash = "46e39c5673f6726ab99d9fa390492ac8";

export default node;
