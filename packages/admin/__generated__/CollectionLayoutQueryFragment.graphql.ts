/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionLayoutQueryFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CollectionLayoutFragment">;
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
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '6da787d1d8668a66a70270b012d529fe';
export default node;
