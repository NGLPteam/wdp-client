/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import SearchLayoutItemQuery from "./SearchLayoutItemQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type searchItemQueryFragment = {
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"SearchLayoutFragment">;
    readonly " $refType": "searchItemQueryFragment";
};
export type searchItemQueryFragment$data = searchItemQueryFragment;
export type searchItemQueryFragment$key = {
    readonly " $data"?: searchItemQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"searchItemQueryFragment">;
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
      "operation": SearchLayoutItemQuery,
      "identifierField": "id"
    }
  },
  "name": "searchItemQueryFragment",
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
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = 'c918b453b53a8c05628c0c3186c56586';
export default node;
