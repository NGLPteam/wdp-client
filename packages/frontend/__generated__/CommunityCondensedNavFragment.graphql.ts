/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityCondensedNavFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityNavListFragment" | "SearchButtonFragment">;
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
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = 'd7a2e25e449af2244c2022cdcc6901f4';
export default node;
