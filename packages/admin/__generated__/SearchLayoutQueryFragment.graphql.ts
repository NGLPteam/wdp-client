/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import SearchLayoutQuery from "./SearchLayoutQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type SearchLayoutQueryFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SearchLayoutFragment">;
    readonly " $refType": "SearchLayoutQueryFragment";
};
export type SearchLayoutQueryFragment$data = SearchLayoutQueryFragment;
export type SearchLayoutQueryFragment$key = {
    readonly " $data"?: SearchLayoutQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchLayoutQueryFragment">;
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
  "name": "SearchLayoutQueryFragment",
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
(node as any).hash = 'efa72a08f6e3f6663047b730d165f790';
export default node;
