/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BrowseTreeLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"PaginationFragment" | "PageCountFragment">;
    readonly " $refType": "BrowseTreeLayoutFragment";
};
export type BrowseTreeLayoutFragment$data = BrowseTreeLayoutFragment;
export type BrowseTreeLayoutFragment$key = {
    readonly " $data"?: BrowseTreeLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BrowseTreeLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BrowseTreeLayoutFragment",
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
(node as any).hash = '77de87ebcf0893cf1ee37da82fce1341';
export default node;
