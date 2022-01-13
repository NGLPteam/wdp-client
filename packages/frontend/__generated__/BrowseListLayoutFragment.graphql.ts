/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BrowseListLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"PaginationFragment" | "PageCountFragment">;
    readonly " $refType": "BrowseListLayoutFragment";
};
export type BrowseListLayoutFragment$data = BrowseListLayoutFragment;
export type BrowseListLayoutFragment$key = {
    readonly " $data"?: BrowseListLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BrowseListLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BrowseListLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PaginationFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PageCountFragment"
    }
  ],
  "type": "PageInfo",
  "abstractKey": null
};
(node as any).hash = '140eb0a8c71003d6f4cb5f9443fe31bc';
export default node;
