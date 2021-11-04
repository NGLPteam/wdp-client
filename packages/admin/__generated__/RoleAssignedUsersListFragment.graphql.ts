/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RoleAssignedUsersListFragment = {
    readonly assignedUsers: {
        readonly " $fragmentRefs": FragmentRefs<"RoleAssignedUsersListDataFragment">;
    };
    readonly " $refType": "RoleAssignedUsersListFragment";
};
export type RoleAssignedUsersListFragment$data = RoleAssignedUsersListFragment;
export type RoleAssignedUsersListFragment$key = {
    readonly " $data"?: RoleAssignedUsersListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RoleAssignedUsersListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoleAssignedUsersListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "page",
          "variableName": "page"
        },
        {
          "kind": "Literal",
          "name": "perPage",
          "value": 20
        }
      ],
      "concreteType": "ContextualPermissionConnection",
      "kind": "LinkedField",
      "name": "assignedUsers",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RoleAssignedUsersListDataFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '9858caa67e6ce4fc488ec4b5698edf39';
export default node;
