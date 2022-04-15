/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import SearchLayoutQuery from "./SearchLayoutQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type searchQueryFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SearchLayoutFragment">;
    readonly " $refType": "searchQueryFragment";
};
export type searchQueryFragment$data = searchQueryFragment;
export type searchQueryFragment$key = {
    readonly " $data"?: searchQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"searchQueryFragment">;
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
      "fragmentPathInResult": [],
      "operation": SearchLayoutQuery
    }
  },
  "name": "searchQueryFragment",
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
        }
      ],
      "kind": "FragmentSpread",
      "name": "SearchLayoutFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '4d9e3cea76b564710b7ac49a78fc3c5e';
export default node;
