/**
 * @generated SignedSource<<b47982e01e83c2a83a7377157786786a>>
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
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();

(node as any).hash = "cd0926a63906cfdebc812f03bd29ee2b";

export default node;
