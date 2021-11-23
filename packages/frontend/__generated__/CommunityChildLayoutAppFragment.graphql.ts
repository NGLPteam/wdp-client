/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityChildLayoutAppFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityCondensedNavFragment" | "AppBodyFragment">;
    readonly " $refType": "CommunityChildLayoutAppFragment";
};
export type CommunityChildLayoutAppFragment$data = CommunityChildLayoutAppFragment;
export type CommunityChildLayoutAppFragment$key = {
    readonly " $data"?: CommunityChildLayoutAppFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityChildLayoutAppFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityChildLayoutAppFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityCondensedNavFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBodyFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '978854413c6c52a3c5e9451c1e85b269';
export default node;
