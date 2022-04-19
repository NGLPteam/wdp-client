/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import SearchLayoutCollectionQuery from "./SearchLayoutCollectionQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type searchCollectionQueryFragment = {
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"SearchLayoutFragment">;
    readonly " $refType": "searchCollectionQueryFragment";
};
export type searchCollectionQueryFragment$data = searchCollectionQueryFragment;
export type searchCollectionQueryFragment$key = {
    readonly " $data"?: searchCollectionQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"searchCollectionQueryFragment">;
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
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": SearchLayoutCollectionQuery,
      "identifierField": "id"
    }
  },
  "name": "searchCollectionQueryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
        }
      ],
      "kind": "FragmentSpread",
      "name": "SearchLayoutFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '7dd754bafaf03e84f8b774210b29867e';
export default node;
