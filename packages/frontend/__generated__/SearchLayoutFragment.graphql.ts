/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SearchLayoutFiltersFragment">;
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
      "name": "SearchLayoutFiltersFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = 'fe398930d3d521299c696bf0d06e7e32';
export default node;
