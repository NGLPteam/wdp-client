/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AuthContextFragment = {
    readonly allowedActions: ReadonlyArray<string>;
    readonly " $refType": "AuthContextFragment";
};
export type AuthContextFragment$data = AuthContextFragment;
export type AuthContextFragment$key = {
    readonly " $data"?: AuthContextFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AuthContextFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuthContextFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "allowedActions",
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '61bde179b6fd8b20067e0c6b1f7d97e9';
export default node;
