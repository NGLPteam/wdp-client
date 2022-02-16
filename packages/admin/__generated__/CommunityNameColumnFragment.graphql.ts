/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityNameColumnFragment = {
    readonly name: string;
    readonly slug: string;
    readonly " $refType": "CommunityNameColumnFragment";
};
export type CommunityNameColumnFragment$data = CommunityNameColumnFragment;
export type CommunityNameColumnFragment$key = {
    readonly " $data"?: CommunityNameColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityNameColumnFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityNameColumnFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '8e53ce6274dd66696c0f48f1e205e7d8';
export default node;
