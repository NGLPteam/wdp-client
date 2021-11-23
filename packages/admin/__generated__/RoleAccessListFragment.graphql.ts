/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RoleAccessListFragment = {
    readonly " $fragmentRefs": FragmentRefs<"RoleAccessGrantsListFragment" | "RoleAssignedUsersListFragment">;
    readonly " $refType": "RoleAccessListFragment";
};
export type RoleAccessListFragment$data = RoleAccessListFragment;
export type RoleAccessListFragment$key = {
    readonly " $data"?: RoleAccessListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RoleAccessListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoleAccessListFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoleAccessGrantsListFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoleAssignedUsersListFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '222c3ee0b7e4d01121342b555bf00571';
export default node;
