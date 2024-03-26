/**
 * @generated SignedSource<<d2a100c4bd50a07bce7c203e664819a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueOrderingLayoutFragment$data = {
  readonly children: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly entry: {
          readonly slug?: string;
          readonly " $fragmentSpreads": FragmentRefs<"EntitySummaryFactoryFragment">;
        };
      };
    }>;
    readonly pageInfo: {
      readonly " $fragmentSpreads": FragmentRefs<"PaginationFragment">;
    };
  };
  readonly header: string | null | undefined;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "IssueOrderingLayoutFragment";
};
export type IssueOrderingLayoutFragment$key = {
  readonly " $data"?: IssueOrderingLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueOrderingLayoutFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
                              "args": (v0/*: any*/),
                              "kind": "FragmentSpread",
                              "name": "ArticleSummaryFragment"
                            },
                            {
                              "args": (v0/*: any*/),
                              "kind": "FragmentSpread",
                              "name": "IssueSummaryFragment"
                            },
                            {
                              "args": (v0/*: any*/),
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
})();

(node as any).hash = "0ed0f439a92e224104105ddbcb4f68dc";

export default node;
