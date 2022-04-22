/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppBodyEntityFragment = {
    readonly " $fragmentRefs": FragmentRefs<"AppHeaderEntityFragment">;
    readonly " $refType": "AppBodyEntityFragment";
};
export type AppBodyEntityFragment$data = AppBodyEntityFragment;
export type AppBodyEntityFragment$key = {
    readonly " $data"?: AppBodyEntityFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppBodyEntityFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppBodyEntityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppHeaderEntityFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '63c3696fb51b55649aa792a7a47a98d2';
export default node;
