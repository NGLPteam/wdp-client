/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityChildLayoutAppFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityCondensedNavAppFragment" | "AppBodyFragment">;
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
      "name": "CommunityCondensedNavAppFragment"
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
(node as any).hash = '5db8aec73ad225e6d9851ab1947aa9ef';
export default node;
