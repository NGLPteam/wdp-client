/**
 * @generated SignedSource<<8f944b79a9dd9620e2e20b9e34ac8007>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityPermalinksListFragment$data = {
  readonly permalinks?: ReadonlyArray<{
    readonly canonical: boolean;
    readonly id: string;
    readonly slug: string;
    readonly uri: string;
  }>;
  readonly slug?: string;
  readonly " $fragmentType": "EntityPermalinksListFragment";
};
export type EntityPermalinksListFragment$key = {
  readonly " $data"?: EntityPermalinksListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityPermalinksListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Permalink",
    "kind": "LinkedField",
    "name": "permalinks",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "uri",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "canonical",
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
  "name": "EntityPermalinksListFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v1/*: any*/),
      "type": "Item",
      "abstractKey": null
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
      "type": "Community",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();

(node as any).hash = "0eccdaad1b15a823a803cda58030ab72";

export default node;
