/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityNavFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityNameFragment">;
    readonly " $refType": "CommunityNavFragment";
};
export type CommunityNavFragment$data = CommunityNavFragment;
export type CommunityNavFragment$key = {
    readonly " $data"?: CommunityNavFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityNavFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityNavFragment",
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
(node as any).hash = '495d22ae9eca5d1dcd0a6b709859fc72';
export default node;
