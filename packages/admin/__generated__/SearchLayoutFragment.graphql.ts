/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchLayoutFragment = {
    readonly search: {
        readonly " $fragmentRefs": FragmentRefs<"SearchResultListFragment">;
    };
    readonly " $refType": "SearchLayoutFragment";
};
export type SearchLayoutFragment$data = SearchLayoutFragment;
export type SearchLayoutFragment$key = {
    readonly " $data"?: SearchLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchLayoutFragment">;
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
  "metadata": null,
  "name": "SearchLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "visibility",
          "value": "ALL"
        }
      ],
      "concreteType": "SearchScope",
      "kind": "LinkedField",
      "name": "search",
      "plural": false,
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
          "name": "SearchResultListFragment"
        }
      ],
      "storageKey": "search(visibility:\"ALL\")"
    }
  ],
  "type": "Searchable",
  "abstractKey": "__isSearchable"
};
(node as any).hash = '6a8b538162f3c7c3ffae01ec3db7edff';
export default node;
