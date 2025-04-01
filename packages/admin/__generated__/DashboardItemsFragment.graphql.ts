/**
 * @generated SignedSource<<4bfdff8755d51b54409c60bd7c9ae8da>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardItemsFragment$data = {
  readonly viewer: {
    readonly items: {
      readonly " $fragmentSpreads": FragmentRefs<"DashboardItemsListFragment">;
    };
  };
  readonly " $fragmentType": "DashboardItemsFragment";
};
export type DashboardItemsFragment$key = {
  readonly " $data"?: DashboardItemsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DashboardItemsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": "RECENT",
      "kind": "LocalArgument",
      "name": "order"
    },
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashboardItemsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "access",
              "value": "UPDATE"
            },
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
              "value": 10
            }
          ],
          "concreteType": "ItemConnection",
          "kind": "LinkedField",
          "name": "items",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "DashboardItemsListFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "7159dd91ca2ab5f4c46b51386790406e";

export default node;
