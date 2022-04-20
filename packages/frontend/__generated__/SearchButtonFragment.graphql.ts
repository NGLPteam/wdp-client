/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchButtonFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SearchModalFragment">;
    readonly " $refType": "SearchButtonFragment";
};
export type SearchButtonFragment$data = SearchButtonFragment;
export type SearchButtonFragment$key = {
    readonly " $data"?: SearchButtonFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchButtonFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchButtonFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchModalFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '0473a1fc75abe666d8b71bfff42ed689';
export default node;
