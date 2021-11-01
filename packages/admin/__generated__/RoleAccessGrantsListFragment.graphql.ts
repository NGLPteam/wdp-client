/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoleAccessGrantsListFragment = {
    readonly allAccessGrants: {
        readonly " $fragmentRefs": FragmentRefs<"RoleAccessGrantsListDataFragment">;
    };
    readonly " $refType": "RoleAccessGrantsListFragment";
};
export type RoleAccessGrantsListFragment$data = RoleAccessGrantsListFragment;
export type RoleAccessGrantsListFragment$key = {
    readonly " $data"?: RoleAccessGrantsListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"RoleAccessGrantsListFragment">;
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
  "name": "RoleAccessGrantsListFragment",
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
      "concreteType": "AnyAccessGrantConnection",
      "kind": "LinkedField",
      "name": "allAccessGrants",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RoleAccessGrantsListDataFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '2827f9762a2aa42b27b05ebea0e6608a';
export default node;
