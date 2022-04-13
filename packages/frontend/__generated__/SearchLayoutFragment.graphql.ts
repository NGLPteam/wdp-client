/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchLayoutFragment = {
    readonly search: {
        readonly results: {
            readonly " $fragmentRefs": FragmentRefs<"SearchResultsFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"SearchFiltersFragment">;
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
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SearchScope",
      "kind": "LinkedField",
      "name": "search",
      "plural": false,
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
          "concreteType": "SearchResultConnection",
          "kind": "LinkedField",
          "name": "results",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "SearchResultsFragment"
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SearchFiltersFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Searchable",
  "abstractKey": "__isSearchable"
};
(node as any).hash = '164a7fa6efd7919400c79cae171d39a0';
export default node;
