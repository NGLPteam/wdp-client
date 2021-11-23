/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutAppFragment = {
    readonly " $fragmentRefs": FragmentRefs<"AppBodyFragment">;
    readonly " $refType": "CommunityLayoutAppFragment";
};
export type CommunityLayoutAppFragment$data = CommunityLayoutAppFragment;
export type CommunityLayoutAppFragment$key = {
    readonly " $data"?: CommunityLayoutAppFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutAppFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLayoutAppFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBodyFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'e117eaf8f1184ad3fb1339a1a7a020f0';
export default node;
