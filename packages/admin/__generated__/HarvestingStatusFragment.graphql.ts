/**
 * @generated SignedSource<<c526f97730365a63ca245528a539e489>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestModificationStatus = "MODIFIED" | "PRISTINE" | "UNHARVESTED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestingStatusFragment$data = {
  readonly harvestModificationStatus?: HarvestModificationStatus;
  readonly " $fragmentType": "HarvestingStatusFragment";
};
export type HarvestingStatusFragment$key = {
  readonly " $data"?: HarvestingStatusFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestingStatusFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "harvestModificationStatus",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestingStatusFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();

(node as any).hash = "c8f2a156a67119381f201e81ce4249e8";

export default node;
