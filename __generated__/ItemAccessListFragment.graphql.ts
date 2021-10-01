/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemAccessListFragment = {
    readonly allowedActions: ReadonlyArray<string>;
    readonly assignedUsers: {
        readonly " $fragmentRefs": FragmentRefs<"ItemAccessListDataFragment">;
    };
    readonly " $refType": "ItemAccessListFragment";
};
export type ItemAccessListFragment$data = ItemAccessListFragment;
export type ItemAccessListFragment$key = {
    readonly " $data"?: ItemAccessListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ItemAccessListFragment">;
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
  "name": "ItemAccessListFragment",
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
          "name": "ItemAccessListDataFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '76ef34605b39f3c2817c3dfb8adc9047';
export default node;
