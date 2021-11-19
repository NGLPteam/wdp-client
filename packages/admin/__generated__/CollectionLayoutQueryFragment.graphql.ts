/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionLayoutQueryFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CollectionLayoutFragment" | "AuthContextFragment">;
    readonly " $refType": "CollectionLayoutQueryFragment";
};
export type CollectionLayoutQueryFragment$data = CollectionLayoutQueryFragment;
export type CollectionLayoutQueryFragment$key = {
    readonly " $data"?: CollectionLayoutQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionLayoutQueryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionLayoutQueryFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollectionLayoutFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AuthContextFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '614c237c4893094ac2513ab91a64c73a';
export default node;
