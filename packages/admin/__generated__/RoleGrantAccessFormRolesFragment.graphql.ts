/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RoleGrantAccessFormRolesFragment = {
    readonly " $fragmentRefs": FragmentRefs<"RoleSelectFragment">;
    readonly " $refType": "RoleGrantAccessFormRolesFragment";
};
export type RoleGrantAccessFormRolesFragment$data = RoleGrantAccessFormRolesFragment;
export type RoleGrantAccessFormRolesFragment$key = {
    readonly " $data"?: RoleGrantAccessFormRolesFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RoleGrantAccessFormRolesFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoleGrantAccessFormRolesFragment",
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
(node as any).hash = 'a9ad3a46c13cb94ab271c2a6d761008a';
export default node;
