/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserLayoutFragment = {
    readonly name: string | null;
    readonly " $refType": "UserLayoutFragment";
};
export type UserLayoutFragment$data = UserLayoutFragment;
export type UserLayoutFragment$key = {
    readonly " $data"?: UserLayoutFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"UserLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'f797ca1075ece1aefa5d4f9698163f57';
export default node;
