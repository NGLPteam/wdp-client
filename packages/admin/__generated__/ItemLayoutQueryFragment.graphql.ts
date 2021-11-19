/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemLayoutQueryFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ItemLayoutFragment" | "AuthContextFragment">;
    readonly " $refType": "ItemLayoutQueryFragment";
};
export type ItemLayoutQueryFragment$data = ItemLayoutQueryFragment;
export type ItemLayoutQueryFragment$key = {
    readonly " $data"?: ItemLayoutQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemLayoutQueryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemLayoutQueryFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemLayoutFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AuthContextFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = 'ae008e44b61d6f81ed8c99d4baca8cc4';
export default node;
