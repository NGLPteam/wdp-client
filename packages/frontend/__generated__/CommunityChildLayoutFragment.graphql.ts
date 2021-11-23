/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityChildLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityNameFragment" | "CommunityCondensedNavFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityCondensedNavFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = 'd63ae7ee11e29cb4fff8ef60458f22de';
export default node;
