/**
 * @generated SignedSource<<e4552a7cd3ab0917ae1d7d6f4c43278a>>
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
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();

(node as any).hash = "fc26567ea97f2b036ec4bbea4b3b97cd";

export default node;
