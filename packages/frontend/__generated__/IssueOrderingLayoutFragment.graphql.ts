/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueOrderingLayoutFragment = {
    readonly name: string | null;
    readonly header: string | null;
    readonly children: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly entry: {
                    readonly slug?: string | undefined;
                    readonly " $fragmentRefs": FragmentRefs<"EntitySummaryFactoryFragment">;
                };
            };
        }>;
        readonly pageInfo: {
            readonly " $fragmentRefs": FragmentRefs<"PaginationFragment">;
        };
    };
    readonly " $refType": "IssueOrderingLayoutFragment";
};
export type IssueOrderingLayoutFragment$data = IssueOrderingLayoutFragment;
export type IssueOrderingLayoutFragment$key = {
    readonly " $data"?: IssueOrderingLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueOrderingLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "page"
    },
    {
      "defaultValue": 40,
      "kind": "LocalArgument",
      "name": "perPage"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueOrderingLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "header",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "page",
          "variableName": "page"
        },
        {
          "kind": "Variable",
          "name": "perPage",
          "variableName": "perPage"
        }
      ],
      "concreteType": "OrderingEntryConnection",
      "kind": "LinkedField",
      "name": "children",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "OrderingEntryEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "OrderingEntry",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "entry",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "slug",
                          "storageKey": null
                        }
                      ],
                      "type": "Sluggable",
                      "abstractKey": "__isSluggable"
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "EntitySummaryFactoryFragment"
                    }
                  ],
                  "storageKey": null
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "PaginationFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Ordering",
  "abstractKey": null
};
(node as any).hash = '0ed0f439a92e224104105ddbcb4f68dc';
export default node;
