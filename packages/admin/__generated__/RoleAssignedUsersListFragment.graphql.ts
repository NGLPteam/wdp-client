/**
 * @generated SignedSource<<99ea3b46088f06d5787a38b9298094b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoleAssignedUsersListFragment$data = {
  readonly assignedUsers: {
    readonly " $fragmentSpreads": FragmentRefs<"RoleAssignedUsersListDataFragment">;
  };
  readonly " $fragmentType": "RoleAssignedUsersListFragment";
};
export type RoleAssignedUsersListFragment$key = {
  readonly " $data"?: RoleAssignedUsersListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoleAssignedUsersListFragment">;
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

(node as any).hash = "9858caa67e6ce4fc488ec4b5698edf39";

export default node;
