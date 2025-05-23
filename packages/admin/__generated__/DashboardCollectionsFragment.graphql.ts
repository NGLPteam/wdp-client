/**
 * @generated SignedSource<<f404ef1b4a71545723b915fbe728c22e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardCollectionsFragment$data = {
  readonly viewer: {
    readonly collections: {
      readonly " $fragmentSpreads": FragmentRefs<"DashboardCollectionsListFragment">;
    };
  };
  readonly " $fragmentType": "DashboardCollectionsFragment";
};
export type DashboardCollectionsFragment$key = {
  readonly " $data"?: DashboardCollectionsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DashboardCollectionsFragment">;
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
  "name": "DashboardCollectionsFragment",
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
          "concreteType": "CollectionConnection",
          "kind": "LinkedField",
          "name": "collections",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "DashboardCollectionsListFragment"
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

(node as any).hash = "f128c4e34a4551e65352b3dbcd6c4d83";

export default node;
