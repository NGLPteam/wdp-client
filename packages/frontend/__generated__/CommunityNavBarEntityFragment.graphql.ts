/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityNavBarEntityFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SearchButtonFragment">;
    readonly " $refType": "CommunityNavBarEntityFragment";
};
export type CommunityNavBarEntityFragment$data = CommunityNavBarEntityFragment;
export type CommunityNavBarEntityFragment$key = {
    readonly " $data"?: CommunityNavBarEntityFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityNavBarEntityFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityNavBarEntityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchButtonFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = 'a02565b5b08761fe840df4ff365a9c74';
export default node;
