/**
 * @generated SignedSource<<6a6294002e187f6d359e6c8d7bdd26ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityLinksListFragment$data = {
  readonly links?: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityLinksListDataFragment">;
  };
  readonly slug?: string;
  readonly " $fragmentType": "EntityLinksListFragment";
};
export type EntityLinksListFragment$key = {
  readonly " $data"?: EntityLinksListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityLinksListFragment">;
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
    "concreteType": "EntityLinkConnection",
    "kind": "LinkedField",
    "name": "links",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "EntityLinksListDataFragment"
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
  "name": "EntityLinksListFragment",
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
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();

(node as any).hash = "ccd84ab7c43918048aa6b09cc32b0fd9";

export default node;
