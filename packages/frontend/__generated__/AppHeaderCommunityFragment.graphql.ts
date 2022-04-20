/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppHeaderCommunityFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityPickerActiveFragment" | "CommunityNavListFragment" | "CommunityNameFragment">;
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
      "name": "CommunityNameFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = 'f9c37e04cd55ab0e004fb58e161357a9';
export default node;
