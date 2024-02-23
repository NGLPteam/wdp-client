/**
 * @generated SignedSource<<b652c9653786c26d4cc3d7d5abd683bc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type searchCommunityQueryFragment$data = {
  readonly id?: string;
  readonly " $fragmentSpreads": FragmentRefs<"SearchLayoutFragment">;
  readonly " $fragmentType": "searchCommunityQueryFragment";
};
export type searchCommunityQueryFragment$key = {
  readonly " $data"?: searchCommunityQueryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"searchCommunityQueryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": "PUBLISHED_ASCENDING",
      "kind": "LocalArgument",
      "name": "order"
    },
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "page"
    },
    {
      "defaultValue": [],
      "kind": "LocalArgument",
      "name": "predicates"
    },
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "query"
    },
    {
      "defaultValue": [],
      "kind": "LocalArgument",
      "name": "schema"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./SearchLayoutEntityQuery.graphql'),
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "searchCommunityQueryFragment",
  "selections": [
    {
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
          "kind": "Variable",
          "name": "predicates",
          "variableName": "predicates"
        },
        {
          "kind": "Variable",
          "name": "query",
          "variableName": "query"
        },
        {
          "kind": "Variable",
          "name": "schema",
          "variableName": "schema"
        }
      ],
      "kind": "FragmentSpread",
      "name": "SearchLayoutFragment"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "type": "Node",
      "abstractKey": "__isNode"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "91f4c13b0e95e069787f3f0c12252c3f";

export default node;
