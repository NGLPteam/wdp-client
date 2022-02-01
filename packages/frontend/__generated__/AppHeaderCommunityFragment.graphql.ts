/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppHeaderCommunityFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityPickerActiveFragment" | "CommunityNavListFragment" | "SearchButtonFragment">;
    readonly " $refType": "AppHeaderCommunityFragment";
};
export type AppHeaderCommunityFragment$data = AppHeaderCommunityFragment;
export type AppHeaderCommunityFragment$key = {
    readonly " $data"?: AppHeaderCommunityFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppHeaderCommunityFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppHeaderCommunityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityPickerActiveFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNavListFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchButtonFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '95250a8711b4fea1795d77bb43f373a8';
export default node;
