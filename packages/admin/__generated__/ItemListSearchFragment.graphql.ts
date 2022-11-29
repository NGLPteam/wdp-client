/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemListSearchFragment = {
    readonly results?: {
        readonly nodes: ReadonlyArray<{
            readonly slug: string;
            readonly entity: {
                readonly id?: string | undefined;
                readonly slug?: string | undefined;
                readonly title?: string | undefined;
                readonly schemaVersion?: {
                    readonly name: string;
                    readonly number: string;
                } | undefined;
                readonly allowedActions?: ReadonlyArray<string> | undefined;
                readonly items?: {
                    readonly pageInfo: {
                        readonly totalCount: number;
                    };
                } | undefined;
                readonly " $fragmentRefs": FragmentRefs<"ContributorsColumnFragment" | "EntityThumbnailColumnFragment" | "PublishedDateColumnFragment">;
            };
        }>;
        readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    } | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageSearchFragment">;
    readonly " $refType": "ItemListSearchFragment";
};
export type ItemListSearchFragment$data = ItemListSearchFragment;
export type ItemListSearchFragment$key = {
    readonly " $data"?: ItemListSearchFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemListSearchFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = {
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
v2 = {
  "kind": "InlineFragment",
  "selections": [
    (v0/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
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
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "hasQuery"
    },
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
  "name": "ItemListSearchFragment",
  "selections": [
    {
      "condition": "hasQuery",
      "kind": "Condition",
      "passingValue": true,
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
              "kind": "Literal",
              "name": "perPage",
              "value": 20
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
            },
            {
              "kind": "Literal",
              "name": "scope",
              "value": "ITEM"
            }
          ],
          "concreteType": "SearchResultConnection",
          "kind": "LinkedField",
          "name": "results",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "SearchResult",
              "kind": "LinkedField",
              "name": "nodes",
              "plural": true,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "entity",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
                    (v2/*: any*/),
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        (v3/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "SchemaVersion",
                          "kind": "LinkedField",
                          "name": "schemaVersion",
                          "plural": false,
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
                              "name": "number",
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "allowedActions",
                          "storageKey": null
                        },
                        {
                          "kind": "InlineDataFragmentSpread",
                          "name": "ContributorsColumnFragment",
                          "selections": [
                            {
                              "kind": "InlineFragment",
                              "selections": [
                                {
                                  "kind": "InlineFragment",
                                  "selections": [
                                    (v0/*: any*/),
                                    {
                                      "alias": null,
                                      "args": [
                                        {
                                          "kind": "Literal",
                                          "name": "page",
                                          "value": 1
                                        },
                                        {
                                          "kind": "Literal",
                                          "name": "perPage",
                                          "value": 1
                                        }
                                      ],
                                      "concreteType": "ItemContributionConnection",
                                      "kind": "LinkedField",
                                      "name": "contributions",
                                      "plural": false,
                                      "selections": [
                                        {
                                          "alias": null,
                                          "args": null,
                                          "concreteType": "ItemContributionEdge",
                                          "kind": "LinkedField",
                                          "name": "edges",
                                          "plural": true,
                                          "selections": [
                                            {
                                              "alias": null,
                                              "args": null,
                                              "concreteType": "ItemContribution",
                                              "kind": "LinkedField",
                                              "name": "node",
                                              "plural": false,
                                              "selections": [
                                                {
                                                  "alias": null,
                                                  "args": null,
                                                  "concreteType": null,
                                                  "kind": "LinkedField",
                                                  "name": "contributor",
                                                  "plural": false,
                                                  "selections": [
                                                    (v4/*: any*/),
                                                    {
                                                      "kind": "InlineFragment",
                                                      "selections": [
                                                        (v0/*: any*/),
                                                        {
                                                          "alias": null,
                                                          "args": null,
                                                          "kind": "ScalarField",
                                                          "name": "legalName",
                                                          "storageKey": null
                                                        }
                                                      ],
                                                      "type": "OrganizationContributor",
                                                      "abstractKey": null
                                                    },
                                                    {
                                                      "kind": "InlineFragment",
                                                      "selections": [
                                                        (v0/*: any*/),
                                                        {
                                                          "alias": null,
                                                          "args": null,
                                                          "kind": "ScalarField",
                                                          "name": "givenName",
                                                          "storageKey": null
                                                        },
                                                        {
                                                          "alias": null,
                                                          "args": null,
                                                          "kind": "ScalarField",
                                                          "name": "familyName",
                                                          "storageKey": null
                                                        }
                                                      ],
                                                      "type": "PersonContributor",
                                                      "abstractKey": null
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
                                        (v5/*: any*/)
                                      ],
                                      "storageKey": "contributions(page:1,perPage:1)"
                                    }
                                  ],
                                  "type": "Item",
                                  "abstractKey": null
                                }
                              ],
                              "type": "AnyEntity",
                              "abstractKey": "__isAnyEntity"
                            }
                          ]
                        },
                        {
                          "kind": "InlineDataFragmentSpread",
                          "name": "EntityThumbnailColumnFragment",
                          "selections": [
                            (v4/*: any*/),
                            (v3/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "ImageAttachment",
                              "kind": "LinkedField",
                              "name": "thumbnail",
                              "plural": false,
                              "selections": [
                                {
                                  "alias": null,
                                  "args": null,
                                  "kind": "ScalarField",
                                  "name": "storage",
                                  "storageKey": null
                                },
                                {
                                  "args": null,
                                  "kind": "FragmentSpread",
                                  "name": "CoverImageFragment"
                                }
                              ],
                              "storageKey": null
                            },
                            (v1/*: any*/),
                            (v2/*: any*/)
                          ]
                        },
                        {
                          "kind": "InlineDataFragmentSpread",
                          "name": "PublishedDateColumnFragment",
                          "selections": [
                            {
                              "kind": "InlineFragment",
                              "selections": [
                                {
                                  "alias": null,
                                  "args": null,
                                  "concreteType": "VariablePrecisionDate",
                                  "kind": "LinkedField",
                                  "name": "published",
                                  "plural": false,
                                  "selections": [
                                    {
                                      "args": null,
                                      "kind": "FragmentSpread",
                                      "name": "PrecisionDateFragment"
                                    }
                                  ],
                                  "storageKey": null
                                }
                              ],
                              "type": "ReferencesGlobalEntityDates",
                              "abstractKey": "__isReferencesGlobalEntityDates"
                            }
                          ]
                        }
                      ],
                      "type": "Entity",
                      "abstractKey": "__isEntity"
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "ItemConnection",
                          "kind": "LinkedField",
                          "name": "items",
                          "plural": false,
                          "selections": [
                            (v5/*: any*/)
                          ],
                          "storageKey": null
                        }
                      ],
                      "type": "Item",
                      "abstractKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ModelListPageFragment"
            }
          ],
          "storageKey": null
        }
      ]
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageSearchFragment"
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};
})();
(node as any).hash = 'cf6d78c19ce1cfb530d2e1db23c0ccd2';
export default node;
