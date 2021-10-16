/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoleAccessListFragment = {
    readonly allowedActions: ReadonlyArray<string>;
    readonly allAccessGrants: {
        readonly " $fragmentRefs": FragmentRefs<"RoleAccessListDataFragment">;
    };
    readonly " $refType": "RoleAccessListFragment";
};
export type RoleAccessListFragment$data = RoleAccessListFragment;
export type RoleAccessListFragment$key = {
    readonly " $data"?: RoleAccessListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"RoleAccessListFragment">;
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
          "name": "RoleAccessListDataFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '02339c79a3378df27121d7cb0aa1362c';
export default node;
