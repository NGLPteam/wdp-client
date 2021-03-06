/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RoleEditAccessFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"RoleSelectFragment">;
    readonly " $refType": "RoleEditAccessFormFragment";
};
export type RoleEditAccessFormFragment$data = RoleEditAccessFormFragment;
export type RoleEditAccessFormFragment$key = {
    readonly " $data"?: RoleEditAccessFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RoleEditAccessFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoleEditAccessFormFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoleSelectFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '3fa9e436fd358033f0f9ee6ae8e5fe8f';
export default node;
