/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BaseLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"AppBodyFragment">;
    readonly " $refType": "BaseLayoutFragment";
};
export type BaseLayoutFragment$data = BaseLayoutFragment;
export type BaseLayoutFragment$key = {
    readonly " $data"?: BaseLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BaseLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BaseLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBodyFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'af355f422aa8a67dbd1833f0895c01b3';
export default node;
