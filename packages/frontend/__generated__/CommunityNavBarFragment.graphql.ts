/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityNavBarFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityNameFragment" | "CommunityNavListFragment">;
    readonly " $refType": "CommunityNavBarFragment";
};
export type CommunityNavBarFragment$data = CommunityNavBarFragment;
export type CommunityNavBarFragment$key = {
    readonly " $data"?: CommunityNavBarFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityNavBarFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityNavBarFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNameFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNavListFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '649aea35b64e4fb89635566ca85ccc97';
export default node;
