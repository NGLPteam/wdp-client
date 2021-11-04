/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserLayoutQueryFragment = {
    readonly " $fragmentRefs": FragmentRefs<"UserLayoutFragment">;
    readonly " $refType": "UserLayoutQueryFragment";
};
export type UserLayoutQueryFragment$data = UserLayoutQueryFragment;
export type UserLayoutQueryFragment$key = {
    readonly " $data"?: UserLayoutQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserLayoutQueryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserLayoutQueryFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "UserLayoutFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '3f5ebc24be9d6462f7716d36163e9a65';
export default node;
