/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityChildLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityHTMLHeadFragment" | "CommunityNameFragment" | "CommunityCondensedNavFragment">;
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
      "name": "CommunityHTMLHeadFragment"
    },
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
(node as any).hash = 'c567f4dfd7e65e1e3d5d87e8864a9e86';
export default node;
