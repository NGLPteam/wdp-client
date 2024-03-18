/**
 * @generated SignedSource<<a6346532e1c9e3d1c52794d050b5c9a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserListFragment$data = {
  readonly users: {
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
  };
  readonly " $fragmentType": "UserListFragment";
};
export type UserListFragment$key = {
  readonly " $data"?: UserListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "order"
    },
    {
      "kind": "RootArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "order",
          "variableName": "order"
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
      "concreteType": "UserConnection",
      "kind": "LinkedField",
      "name": "users",
      "plural": false,
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
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "cc089eddd5a775d27cdbe3f1c4b0c739";

export default node;
