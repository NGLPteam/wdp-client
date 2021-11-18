/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityNavBarFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityNameFragment">;
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
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '063cc07d686b0a6fca54c14384b4a9a9';
export default node;
