/**
 * @generated SignedSource<<2b532fa2873e3d3229087102ea447d9c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityDescendantOrder = "PUBLISHED_ASCENDING" | "PUBLISHED_DESCENDING" | "TITLE_ASCENDING" | "TITLE_DESCENDING" | "%future added value";
export type pageCommunityItemsQuery$variables = {
  order: EntityDescendantOrder;
  page?: number | null | undefined;
  schema: string;
  schemaSlug: string;
  slug: string;
};
export type pageCommunityItemsQuery$data = {
  readonly community: {
    readonly descendants: {
      readonly " $fragmentSpreads": FragmentRefs<"EntityDescendantsLayoutFragment">;
    };
    readonly orderingForSchema: {
      readonly count: number;
      readonly identifier: string;
      readonly name: string | null | undefined;
      readonly slug: string;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingLayoutFactoryFragment">;
  } | null | undefined;
};
export type pageCommunityItemsQuery = {
  response: pageCommunityItemsQuery$data;
  variables: pageCommunityItemsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "order"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "schema"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "schemaSlug"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v5 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v6 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "schemaSlug"
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v11 = [
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
    "items": [
      {
        "kind": "Variable",
        "name": "schema.0",
        "variableName": "schema"
      }
    ],
    "kind": "ListValue",
    "name": "schema"
  },
  {
    "kind": "Literal",
    "name": "scope",
    "value": "ITEM"
  }
],
v12 = {
  "kind": "InlineFragment",
  "selections": [
    (v8/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    (v9/*: any*/)
  ],
  "storageKey": null
},
v14 = [
  {
    "kind": "Variable",
    "name": "showJournal",
    "variableName": "showJournal"
  }
],
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "disabled",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    (v9/*: any*/),
    (v16/*: any*/)
  ],
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "precision",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v28 = {
  "kind": "InlineFragment",
  "selections": [
    (v16/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v29 = [
  (v17/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v19/*: any*/)
    ],
    "type": "Collection",
    "abstractKey": null
  },
  (v28/*: any*/)
],
v30 = {
  "alias": "journal",
  "args": [
    {
      "kind": "Literal",
      "name": "schema",
      "value": "nglp:journal"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v29/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v31 = {
  "alias": "image",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "large",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageDerivative",
      "kind": "LinkedField",
      "name": "webp",
      "plural": false,
      "selections": [
        (v22/*: any*/),
        (v21/*: any*/),
        (v23/*: any*/),
        (v24/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v33 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      (v32/*: any*/)
    ],
    "storageKey": null
  }
],
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v35 = [
  (v17/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v34/*: any*/)
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageCommunityItemsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v6/*: any*/),
            "concreteType": "Ordering",
            "kind": "LinkedField",
            "name": "orderingForSchema",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v11/*: any*/),
            "concreteType": "EntityDescendantConnection",
            "kind": "LinkedField",
            "name": "descendants",
            "plural": false,
            "selections": [
              {
                "kind": "InlineDataFragmentSpread",
                "name": "EntityDescendantsLayoutFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EntityDescendantEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "EntityDescendant",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "descendant",
                            "plural": false,
                            "selections": [
                              (v12/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "kind": "InlineDataFragmentSpread",
                                    "name": "EntitySummaryFactoryFragment",
                                    "selections": [
                                      (v13/*: any*/),
                                      {
                                        "args": null,
                                        "kind": "FragmentSpread",
                                        "name": "EntitySummaryFragment"
                                      },
                                      {
                                        "args": (v14/*: any*/),
                                        "kind": "FragmentSpread",
                                        "name": "ArticleSummaryFragment"
                                      },
                                      {
                                        "args": (v14/*: any*/),
                                        "kind": "FragmentSpread",
                                        "name": "IssueSummaryFragment"
                                      },
                                      {
                                        "args": (v14/*: any*/),
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
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "showJournal",
                                        "value": true
                                      }
                                    ],
                                    "argumentDefinitions": [
                                      {
                                        "defaultValue": false,
                                        "kind": "LocalArgument",
                                        "name": "showJournal"
                                      }
                                    ]
                                  }
                                ],
                                "type": "Entity",
                                "abstractKey": "__isEntity"
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
                  }
                ],
                "args": null,
                "argumentDefinitions": []
              }
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "EntityOrderingLayoutFactoryFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v13/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Ordering",
                    "kind": "LinkedField",
                    "name": "initialOrdering",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "IssueSidebarNavFragment"
                  }
                ],
                "type": "Entity",
                "abstractKey": "__isEntity"
              }
            ],
            "args": null,
            "argumentDefinitions": []
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v4/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "pageCommunityItemsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v6/*: any*/),
            "concreteType": "Ordering",
            "kind": "LinkedField",
            "name": "orderingForSchema",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v16/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v11/*: any*/),
            "concreteType": "EntityDescendantConnection",
            "kind": "LinkedField",
            "name": "descendants",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "EntityDescendantEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EntityDescendant",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "descendant",
                        "plural": false,
                        "selections": [
                          (v17/*: any*/),
                          (v12/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v18/*: any*/),
                              (v19/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "subtitle",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": [
                                  (v20/*: any*/),
                                  {
                                    "alias": "image",
                                    "args": null,
                                    "concreteType": "ImageSize",
                                    "kind": "LinkedField",
                                    "name": "large",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ImageDerivative",
                                        "kind": "LinkedField",
                                        "name": "webp",
                                        "plural": false,
                                        "selections": [
                                          (v21/*: any*/),
                                          (v22/*: any*/),
                                          (v23/*: any*/),
                                          (v24/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": "placeholder",
                                    "args": null,
                                    "concreteType": "ImageSize",
                                    "kind": "LinkedField",
                                    "name": "thumb",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ImageDerivative",
                                        "kind": "LinkedField",
                                        "name": "webp",
                                        "plural": false,
                                        "selections": [
                                          (v22/*: any*/)
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
                                "concreteType": "HierarchicalSchemaRank",
                                "kind": "LinkedField",
                                "name": "schemaRanks",
                                "plural": true,
                                "selections": [
                                  (v10/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "namespace",
                                    "storageKey": null
                                  },
                                  (v9/*: any*/),
                                  (v16/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v25/*: any*/)
                                ],
                                "type": "ReferencesGlobalEntityDates",
                                "abstractKey": "__isReferencesGlobalEntityDates"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v26/*: any*/),
                                  (v27/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ImageAttachment",
                                    "kind": "LinkedField",
                                    "name": "thumbnail",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": "thumb",
                                        "args": null,
                                        "concreteType": "ImageSize",
                                        "kind": "LinkedField",
                                        "name": "medium",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "ImageDerivative",
                                            "kind": "LinkedField",
                                            "name": "webp",
                                            "plural": false,
                                            "selections": [
                                              (v21/*: any*/),
                                              (v22/*: any*/)
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  (v8/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ItemContributionConnection",
                                    "kind": "LinkedField",
                                    "name": "contributions",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ItemContribution",
                                        "kind": "LinkedField",
                                        "name": "nodes",
                                        "plural": true,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "role",
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": null,
                                            "kind": "LinkedField",
                                            "name": "contributor",
                                            "plural": false,
                                            "selections": [
                                              (v17/*: any*/),
                                              {
                                                "kind": "TypeDiscriminator",
                                                "abstractKey": "__isAnyContributor"
                                              },
                                              (v12/*: any*/),
                                              {
                                                "kind": "InlineFragment",
                                                "selections": [
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "familyName",
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "givenName",
                                                    "storageKey": null
                                                  }
                                                ],
                                                "type": "PersonContributor",
                                                "abstractKey": null
                                              },
                                              {
                                                "kind": "InlineFragment",
                                                "selections": [
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
                                              (v28/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v16/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  (v25/*: any*/),
                                  (v30/*: any*/),
                                  (v16/*: any*/),
                                  {
                                    "alias": "cover",
                                    "args": null,
                                    "concreteType": "ImageAttachment",
                                    "kind": "LinkedField",
                                    "name": "thumbnail",
                                    "plural": false,
                                    "selections": [
                                      (v20/*: any*/),
                                      (v31/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "type": "Item",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v26/*: any*/),
                                  (v27/*: any*/),
                                  (v16/*: any*/),
                                  (v8/*: any*/),
                                  {
                                    "alias": "cover",
                                    "args": null,
                                    "concreteType": "ImageAttachment",
                                    "kind": "LinkedField",
                                    "name": "thumbnail",
                                    "plural": false,
                                    "selections": [
                                      (v31/*: any*/),
                                      (v20/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v25/*: any*/),
                                  {
                                    "alias": "volume",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "schema",
                                        "value": "nglp:journal_volume"
                                      }
                                    ],
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "ancestorOfType",
                                    "plural": false,
                                    "selections": (v29/*: any*/),
                                    "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                                  },
                                  (v30/*: any*/),
                                  {
                                    "alias": "articles",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "schema",
                                        "value": "nglp:journal_article"
                                      }
                                    ],
                                    "concreteType": "ItemConnection",
                                    "kind": "LinkedField",
                                    "name": "items",
                                    "plural": false,
                                    "selections": (v33/*: any*/),
                                    "storageKey": "items(schema:\"nglp:journal_article\")"
                                  },
                                  {
                                    "alias": "properties",
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "schemaProperties",
                                    "plural": true,
                                    "selections": [
                                      (v17/*: any*/),
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v34/*: any*/),
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "path",
                                            "storageKey": null
                                          }
                                        ],
                                        "type": "StringProperty",
                                        "abstractKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": "issues",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "schema",
                                        "value": [
                                          "nglp:journal_issue"
                                        ]
                                      },
                                      {
                                        "kind": "Literal",
                                        "name": "scope",
                                        "value": "COLLECTION"
                                      }
                                    ],
                                    "concreteType": "EntityDescendantConnection",
                                    "kind": "LinkedField",
                                    "name": "descendants",
                                    "plural": false,
                                    "selections": (v33/*: any*/),
                                    "storageKey": "descendants(schema:[\"nglp:journal_issue\"],scope:\"COLLECTION\")"
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          {
                                            "alias": "vol",
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "name",
                                                "value": "volume"
                                              }
                                            ],
                                            "concreteType": null,
                                            "kind": "LinkedField",
                                            "name": "ancestorByName",
                                            "plural": false,
                                            "selections": [
                                              (v17/*: any*/),
                                              {
                                                "kind": "InlineFragment",
                                                "selections": [
                                                  (v19/*: any*/),
                                                  {
                                                    "alias": "number",
                                                    "args": [
                                                      {
                                                        "kind": "Literal",
                                                        "name": "fullPath",
                                                        "value": "id"
                                                      }
                                                    ],
                                                    "concreteType": null,
                                                    "kind": "LinkedField",
                                                    "name": "schemaProperty",
                                                    "plural": false,
                                                    "selections": (v35/*: any*/),
                                                    "storageKey": "schemaProperty(fullPath:\"id\")"
                                                  }
                                                ],
                                                "type": "Collection",
                                                "abstractKey": null
                                              },
                                              (v28/*: any*/)
                                            ],
                                            "storageKey": "ancestorByName(name:\"volume\")"
                                          },
                                          {
                                            "alias": "issueNumber",
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "fullPath",
                                                "value": "number"
                                              }
                                            ],
                                            "concreteType": null,
                                            "kind": "LinkedField",
                                            "name": "schemaProperty",
                                            "plural": false,
                                            "selections": (v35/*: any*/),
                                            "storageKey": "schemaProperty(fullPath:\"number\")"
                                          },
                                          {
                                            "alias": "volumeNumber",
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "fullPath",
                                                "value": "volume.id"
                                              }
                                            ],
                                            "concreteType": null,
                                            "kind": "LinkedField",
                                            "name": "schemaProperty",
                                            "plural": false,
                                            "selections": (v35/*: any*/),
                                            "storageKey": "schemaProperty(fullPath:\"volume.id\")"
                                          }
                                        ],
                                        "type": "Collection",
                                        "abstractKey": null
                                      }
                                    ],
                                    "type": "AnyEntity",
                                    "abstractKey": "__isAnyEntity"
                                  }
                                ],
                                "type": "Collection",
                                "abstractKey": null
                              }
                            ],
                            "type": "Entity",
                            "abstractKey": "__isEntity"
                          },
                          (v28/*: any*/)
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
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "page",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "pageCount",
                    "storageKey": null
                  },
                  (v32/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "perPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v16/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v18/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Ordering",
                "kind": "LinkedField",
                "name": "initialOrdering",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/)
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "availability",
                        "value": "ENABLED"
                      }
                    ],
                    "concreteType": "OrderingConnection",
                    "kind": "LinkedField",
                    "name": "orderings",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "OrderingEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Ordering",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v7/*: any*/),
                              (v9/*: any*/),
                              (v16/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "orderings(availability:\"ENABLED\")"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageConnection",
                    "kind": "LinkedField",
                    "name": "pages",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PageEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Page",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v8/*: any*/),
                              (v19/*: any*/),
                              (v16/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "Collection",
                "abstractKey": null
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d0cf5a345710f049b5a16fb0a82ace2d",
    "id": null,
    "metadata": {},
    "name": "pageCommunityItemsQuery",
    "operationKind": "query",
    "text": "query pageCommunityItemsQuery(\n  $slug: Slug!\n  $schema: String!\n  $schemaSlug: Slug!\n  $page: Int\n  $order: EntityDescendantOrder!\n) {\n  community(slug: $slug) {\n    orderingForSchema(slug: $schemaSlug) {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n    descendants(scope: ITEM, order: $order, schema: [$schema], page: $page) {\n      ...EntityDescendantsLayoutFragment\n    }\n    ...EntityOrderingLayoutFactoryFragment\n    id\n  }\n}\n\nfragment ArticleSummaryFragment_2PIB2P on Item {\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  slug\n  summary\n  contributions {\n    ...ContributorsListFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment BrowseListLayoutFragment on PageInfo {\n  ...PaginationFragment\n  ...PageCountFragment\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  nodes {\n    role\n    contributor {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ...ContributorNameFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DissertationSummaryFragment on Item {\n  __typename\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n}\n\nfragment EntityDescendantsLayoutFragment on EntityDescendantConnection {\n  edges {\n    node {\n      descendant {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ... on Entity {\n          __isEntity: __typename\n          ...EntitySummaryFactoryFragment_2PIB2P\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  pageInfo {\n    ...BrowseListLayoutFragment\n  }\n}\n\nfragment EntityOrderSelectFragment on OrderingConnection {\n  edges {\n    node {\n      name\n      identifier\n      id\n    }\n  }\n}\n\nfragment EntityOrderingLayoutFactoryFragment on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  initialOrdering {\n    identifier\n    disabled\n    id\n  }\n  ...IssueSidebarNavFragment\n}\n\nfragment EntitySummaryFactoryFragment_2PIB2P on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  ...EntitySummaryFragment\n  ...ArticleSummaryFragment_2PIB2P\n  ...IssueSummaryFragment_2PIB2P\n  ...VolumeSummaryFragment_2PIB2P\n  ...JournalSummaryFragment\n  ...DissertationSummaryFragment\n}\n\nfragment EntitySummaryFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n  schemaRanks {\n    count\n    namespace\n    identifier\n    id\n  }\n  ... on ReferencesGlobalEntityDates {\n    __isReferencesGlobalEntityDates: __typename\n    published {\n      value\n      ...PrecisionDateFragment\n    }\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Item {\n    summary\n    updatedAt\n  }\n  ... on Collection {\n    summary\n    updatedAt\n  }\n}\n\nfragment IssueSidebarNavFragment on Collection {\n  orderings(availability: ENABLED) {\n    ...EntityOrderSelectFragment\n  }\n  ...IssueSidebarNavListFragment\n}\n\nfragment IssueSidebarNavListFragment on Collection {\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment IssueSummaryFragment_2PIB2P on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n  ...getEntityDisplayNameFragment\n}\n\nfragment JournalSummaryFragment on Collection {\n  __typename\n  id\n  slug\n  title\n  subtitle\n  updatedAt\n  summary\n  cover: thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  issues: descendants(scope: COLLECTION, schema: [\"nglp:journal_issue\"]) {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment PageCountFragment on PageInfo {\n  totalCount\n  page\n  perPage\n}\n\nfragment PaginationFragment on PageInfo {\n  page\n  pageCount\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  thumb: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment VolumeSummaryFragment_2PIB2P on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  properties: schemaProperties {\n    __typename\n    ... on StringProperty {\n      content\n      path\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment getEntityDisplayNameFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issueNumber: schemaProperty(fullPath: \"number\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n  ...getEntityVolumeNumberFragment\n}\n\nfragment getEntityVolumeNumberFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        number: schemaProperty(fullPath: \"id\") {\n          __typename\n          ... on StringProperty {\n            content\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    volumeNumber: schemaProperty(fullPath: \"volume.id\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0c9bcfc0cd4eee7737335a73dc3b0b9c";

export default node;
