/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityChildLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityNameFragment">;
    readonly " $refType": "CommunityChildLayoutFragment";
};
export type CommunityChildLayoutFragment$data = CommunityChildLayoutFragment;
export type CommunityChildLayoutFragment$key = {
    readonly " $data"?: CommunityChildLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityChildLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityChildLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNameFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '3def7d3dd36b08cf94ce0e31b955a995';
export default node;
