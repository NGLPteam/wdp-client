/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityHTMLHeadFragment = {
    readonly title: string;
    readonly " $refType": "CommunityHTMLHeadFragment";
};
export type CommunityHTMLHeadFragment$data = CommunityHTMLHeadFragment;
export type CommunityHTMLHeadFragment$key = {
    readonly " $data"?: CommunityHTMLHeadFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityHTMLHeadFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityHTMLHeadFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '6287da412415be6b0e4d507244b2083e';
export default node;
