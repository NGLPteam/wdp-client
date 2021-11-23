/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityCondensedNavFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityNavListFragment">;
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
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '1302c65337dc38be4d195a260bd7d922';
export default node;
