/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityCondensedNavAppFragment = {
    readonly " $fragmentRefs": FragmentRefs<"InstallationNameFragment">;
    readonly " $refType": "CommunityCondensedNavAppFragment";
};
export type CommunityCondensedNavAppFragment$data = CommunityCondensedNavAppFragment;
export type CommunityCondensedNavAppFragment$key = {
    readonly " $data"?: CommunityCondensedNavAppFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityCondensedNavAppFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityCondensedNavAppFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InstallationNameFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '32adf4780a89062bce8ccf8c6fd3f6e4';
export default node;
