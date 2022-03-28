/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type OrderingRenderMode = "FLAT" | "TREE" | "%future added value";
export type EntityOrderingLayoutFragment = {
    readonly name: string | null;
    readonly header: string | null;
    readonly render: {
        readonly mode: OrderingRenderMode;
    };
    readonly children: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly entry: {
                    readonly slug?: string | undefined;
                    readonly " $fragmentRefs": FragmentRefs<"EntitySummaryFactoryFragment">;
                };
            };
        }>;
        readonly pageInfo: {
            readonly " $fragmentRefs": FragmentRefs<"BrowseListLayoutFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"BrowseTreeLayoutFragment">;
    };
    readonly " $refType": "EntityOrderingLayoutFragment";
};
export type EntityOrderingLayoutFragment$data = EntityOrderingLayoutFragment;
export type EntityOrderingLayoutFragment$key = {
    readonly " $data"?: EntityOrderingLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityOrderingLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderingLayoutFragment",
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
      "args": null,
      "concreteType": "OrderingRenderDefinition",
      "kind": "LinkedField",
      "name": "render",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "mode",
          "storageKey": null
        }
      ],
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
          "kind": "Literal",
          "name": "perPage",
          "value": 10
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
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
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
              "name": "BrowseListLayoutFragment"
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BrowseTreeLayoutFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Ordering",
  "abstractKey": null
};
(node as any).hash = '2015b1e33c622ae0e2e8e889b69f74fc';
export default node;
