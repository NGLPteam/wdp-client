/**
 * @generated SignedSource<<043657e1f9ac50ff9cd7bac62e7f0446>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type OrderingRenderMode = "FLAT" | "TREE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingLayoutFragment$data = {
  readonly children: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly entry: {
          readonly slug?: string;
          readonly " $fragmentSpreads": FragmentRefs<"EntitySummaryFactoryFragment">;
        };
        readonly id: string;
      };
    }>;
    readonly pageInfo: {
      readonly " $fragmentSpreads": FragmentRefs<"BrowseListLayoutFragment">;
    };
    readonly " $fragmentSpreads": FragmentRefs<"BrowseTreeLayoutFragment">;
  };
  readonly entity: {
    readonly __typename: string;
    readonly slug?: string;
  };
  readonly header: string | null | undefined;
  readonly name: string | null | undefined;
  readonly render: {
    readonly mode: OrderingRenderMode;
  };
  readonly " $fragmentType": "EntityOrderingLayoutFragment";
};
export type EntityOrderingLayoutFragment$key = {
  readonly " $data"?: EntityOrderingLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingLayoutFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
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
v1 = [
  {
    "kind": "Variable",
    "name": "showJournal",
    "variableName": "showJournal"
  }
];
return {
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
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entity",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        (v0/*: any*/)
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
                    (v0/*: any*/),
                    {
                      "kind": "InlineDataFragmentSpread",
                      "name": "EntitySummaryFactoryFragment",
                      "selections": [
                        {
                          "kind": "InlineFragment",
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "SchemaDefinition",
                              "kind": "LinkedField",
                              "name": "schemaDefinition",
                              "plural": false,
                              "selections": [
                                {
                                  "alias": null,
                                  "args": null,
                                  "kind": "ScalarField",
                                  "name": "identifier",
                                  "storageKey": null
                                }
                              ],
                              "storageKey": null
                            },
                            {
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "EntitySummaryFragment"
                            },
                            {
                              "args": (v1/*: any*/),
                              "kind": "FragmentSpread",
                              "name": "ArticleSummaryFragment"
                            },
                            {
                              "args": (v1/*: any*/),
                              "kind": "FragmentSpread",
                              "name": "IssueSummaryFragment"
                            },
                            {
                              "args": (v1/*: any*/),
                              "kind": "FragmentSpread",
                              "name": "VolumeSummaryFragment"
                            },
                            {
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "JournalSummaryFragment"
                            },
                            {
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "DissertationSummaryFragment"
                            }
                          ],
                          "type": "Entity",
                          "abstractKey": "__isEntity"
                        }
                      ],
                      "args": null,
                      "argumentDefinitions": [
                        {
                          "defaultValue": false,
                          "kind": "LocalArgument",
                          "name": "showJournal"
                        }
                      ]
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
})();

(node as any).hash = "5761e0a1e0d6339a6e8283f4df86929e";

export default node;
