/**
 * @generated SignedSource<<748079702187feb8a7c4291fde2d72ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoleAccessListFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RoleAccessGrantsListFragment" | "RoleAssignedUsersListFragment">;
  readonly " $fragmentType": "RoleAccessListFragment";
};
export type RoleAccessListFragment$key = {
  readonly " $data"?: RoleAccessListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoleAccessListFragment">;
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

(node as any).hash = "222c3ee0b7e4d01121342b555bf00571";

export default node;
