/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutAppFragment = {
    readonly " $fragmentRefs": FragmentRefs<"AppLayoutFragment">;
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
      "name": "AppLayoutFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '82b2c37a5394f6e9c29d2d102e726e53';
export default node;
