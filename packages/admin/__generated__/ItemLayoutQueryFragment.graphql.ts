/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemLayoutQueryFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ItemLayoutFragment">;
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
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = 'add93fcfc47d87b8a080d6f1e469d69a';
export default node;
