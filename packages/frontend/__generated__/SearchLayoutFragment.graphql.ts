/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SearchLayoutFilterFragment">;
    readonly " $refType": "SearchLayoutFragment";
};
export type SearchLayoutFragment$data = SearchLayoutFragment;
export type SearchLayoutFragment$key = {
    readonly " $data"?: SearchLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchLayoutFilterFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '1f982c6a61af3adcf535c21cc6bacb3e';
export default node;
