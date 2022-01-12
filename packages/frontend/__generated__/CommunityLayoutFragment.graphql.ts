/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityHTMLHeadFragment" | "CommunityNameFragment" | "CommunityNavBarFragment" | "CommunityCondensedNavFragment" | "CommunityPickerActiveFragment">;
    readonly " $refType": "CommunityLayoutFragment";
};
export type CommunityLayoutFragment$data = CommunityLayoutFragment;
export type CommunityLayoutFragment$key = {
    readonly " $data"?: CommunityLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLayoutFragment",
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
      "name": "CommunityNavBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityCondensedNavFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityPickerActiveFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '8f229a85104fcb6f9e0d1ee1e531c410';
export default node;
