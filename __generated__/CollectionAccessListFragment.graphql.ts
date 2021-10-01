/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionAccessListFragment = {
    readonly allowedActions: ReadonlyArray<string>;
    readonly assignedUsers: {
        readonly " $fragmentRefs": FragmentRefs<"CollectionAccessListDataFragment">;
    };
    readonly " $refType": "CollectionAccessListFragment";
};
export type CollectionAccessListFragment$data = CollectionAccessListFragment;
export type CollectionAccessListFragment$key = {
    readonly " $data"?: CollectionAccessListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"CollectionAccessListFragment">;
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
  "name": "CollectionAccessListFragment",
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
          "kind": "Literal",
          "name": "order",
          "value": "USER_NAME_ASC"
        },
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
          "name": "CollectionAccessListDataFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = 'bce8acda4ff1d79067ef5524276cb976';
export default node;
