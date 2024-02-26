/**
 * @generated SignedSource<<09634a3c8eefe917d9fbcb9241d51d6e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly createdAt: string;
    readonly email: string | null | undefined;
    readonly globalAdmin: boolean;
    readonly name: string | null | undefined;
    readonly slug: string;
    readonly updatedAt: string;
    readonly " $fragmentSpreads": FragmentRefs<"UserNameColumnFragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "UserListFragment";
};
export type UserListFragment$key = {
  readonly " $data"?: UserListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "globalAdmin",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "updatedAt",
          "storageKey": null
        },
        {
          "kind": "InlineDataFragmentSpread",
          "name": "UserNameColumnFragment",
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "UserNameColumnCellFragment"
            }
          ],
          "args": null,
          "argumentDefinitions": []
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "UserConnection",
  "abstractKey": null
};

(node as any).hash = "8b074f2408b1d4231f8548171afca747";

export default node;
