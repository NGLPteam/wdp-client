/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppBodyFragment = {
    readonly " $fragmentRefs": FragmentRefs<"AppHeaderFragment">;
    readonly " $refType": "AppBodyFragment";
};
export type AppBodyFragment$data = AppBodyFragment;
export type AppBodyFragment$key = {
    readonly " $data"?: AppBodyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppBodyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppBodyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppHeaderFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '7290a97ac7198a5ea57944938e0b2703';
export default node;
