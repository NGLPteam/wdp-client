/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityCondensedNavFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityNavListFragment" | "SearchButtonFragment" | "CommunityPickerActiveFragment">;
    readonly " $refType": "CommunityCondensedNavFragment";
};
export type CommunityCondensedNavFragment$data = CommunityCondensedNavFragment;
export type CommunityCondensedNavFragment$key = {
    readonly " $data"?: CommunityCondensedNavFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityCondensedNavFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityCondensedNavFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNavListFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchButtonFragment"
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
(node as any).hash = '5e664209dcbb27542212629a5263bd6a';
export default node;
