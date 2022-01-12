/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BaseLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"AppBodyFragment" | "CommunityPickerFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityPickerFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'cc4fd7c3010c71107758fca9a59c1efb';
export default node;
