/**
 * @generated SignedSource<<c69b57adbd6826be86eea3b7fe423db4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchResultsFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly entity: {
      readonly id?: string;
      readonly " $fragmentSpreads": FragmentRefs<"EntitySummaryFragment">;
    };
  }>;
  readonly pageInfo: {
    readonly totalCount: number;
    readonly " $fragmentSpreads": FragmentRefs<"PaginationFragment">;
  };
  readonly " $fragmentType": "SearchResultsFragment";
};
export type SearchResultsFragment$key = {
  readonly " $data"?: SearchResultsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchResultsFragment">;
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
              "name": "EntitySummaryFragment"
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

(node as any).hash = "dcdefb7505495721cea58ed03dcc4b43";

export default node;
