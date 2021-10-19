/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoleAccessListFragment = {
    readonly allowedActions: ReadonlyArray<string>;
    readonly " $fragmentRefs": FragmentRefs<"RoleAccessGrantsListFragment" | "RoleAssignedUsersListFragment">;
    readonly " $refType": "RoleAccessListFragment";
};
export type RoleAccessListFragment$data = RoleAccessListFragment;
export type RoleAccessListFragment$key = {
    readonly " $data"?: RoleAccessListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"RoleAccessListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoleAccessListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "allowedActions",
      "storageKey": null
    },
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
(node as any).hash = '3d5d0afee6cb3c72832ec4d23426660a';
export default node;
