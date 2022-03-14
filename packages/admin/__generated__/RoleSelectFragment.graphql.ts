/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RoleSelectFragment = {
    readonly assignableRoles: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
    }>;
    readonly " $refType": "RoleSelectFragment";
};
export type RoleSelectFragment$data = RoleSelectFragment;
export type RoleSelectFragment$key = {
    readonly " $data"?: RoleSelectFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RoleSelectFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoleSelectFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Role",
      "kind": "LinkedField",
      "name": "assignableRoles",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = 'ce0c0a1a65ad99592f6af80d58334031';
export default node;
