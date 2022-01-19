/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppLayoutCommunityFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityHTMLHeadFragment" | "CommunityNameFragment" | "CommunityNavBarFragment" | "CommunityCondensedNavFragment" | "CommunityPickerActiveFragment">;
    readonly " $refType": "AppLayoutCommunityFragment";
};
export type AppLayoutCommunityFragment$data = AppLayoutCommunityFragment;
export type AppLayoutCommunityFragment$key = {
    readonly " $data"?: AppLayoutCommunityFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppLayoutCommunityFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppLayoutCommunityFragment",
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
(node as any).hash = '301d9a7c26b4329f9f8d03edbc3694b7';
export default node;
