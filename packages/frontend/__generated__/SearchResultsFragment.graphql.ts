/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchResultsFragment = {
    readonly nodes: ReadonlyArray<{
        readonly entity: {
            readonly id?: string | undefined;
            readonly " $fragmentRefs": FragmentRefs<"SearchResultFactoryFragment">;
        };
    }>;
    readonly pageInfo: {
        readonly totalCount: number;
        readonly " $fragmentRefs": FragmentRefs<"PaginationFragment">;
    };
    readonly " $refType": "SearchResultsFragment";
};
export type SearchResultsFragment$data = SearchResultsFragment;
export type SearchResultsFragment$key = {
    readonly " $data"?: SearchResultsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchResultsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchResultsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SearchResult",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "entity",
          "plural": false,
          "selections": [
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
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "SearchResultFactoryFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "kind": "LinkedField",
      "name": "pageInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PaginationFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchResultConnection",
  "abstractKey": null
};
(node as any).hash = '9a58ff3a96effe0e3456d09761949dac';
export default node;
