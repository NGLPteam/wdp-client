/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppHeaderEntityFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SearchButtonFragment">;
    readonly " $refType": "AppHeaderEntityFragment";
};
export type AppHeaderEntityFragment$data = AppHeaderEntityFragment;
export type AppHeaderEntityFragment$key = {
    readonly " $data"?: AppHeaderEntityFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppHeaderEntityFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppHeaderEntityFragment",
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
(node as any).hash = 'd4c31338f5e65611b1ccaa5ca0c03526';
export default node;
