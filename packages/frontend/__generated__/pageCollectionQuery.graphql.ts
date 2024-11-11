/**
 * @generated SignedSource<<5f523139a681b331dd17a8bc54e61011>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageCollectionQuery$variables = {
  slug: string;
};
export type pageCollectionQuery$data = {
  readonly collection: {
    readonly schemaDefinition: {
      readonly identifier: string;
    };
    readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingLayoutFactoryFragment" | "JournalContentFragment">;
  } | null | undefined;
};
export type pageCollectionQuery = {
  response: pageCollectionQuery$data;
  variables: pageCollectionQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    (v2/*: any*/)
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "disabled",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v9 = [
  (v8/*: any*/)
],
v10 = {
  "kind": "Literal",
  "name": "nodeFilter",
  "value": "DESCENDANTS"
},
v11 = {
  "kind": "Literal",
  "name": "order",
  "value": "PUBLISHED_DESCENDING"
},
v12 = {
  "kind": "Literal",
  "name": "schema",
  "value": "nglp:journal_issue"
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subtitle",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v18 = [
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
          (v16/*: any*/),
          (v17/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "width",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "height",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v19 = {
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
v20 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v21 = {
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
  "selections": [
    (v7/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v13/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    },
    (v20/*: any*/)
  ],
  "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
},
v22 = {
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
},
v23 = {
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
  "selections": [
    (v22/*: any*/)
  ],
  "storageKey": "items(schema:\"nglp:journal_article\")"
},
v24 = [
  (v7/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v9/*: any*/),
    "type": "StringProperty",
    "abstractKey": null
  }
],
v25 = {
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
            (v7/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v13/*: any*/),
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
                  "selections": (v24/*: any*/),
                  "storageKey": "schemaProperty(fullPath:\"id\")"
                }
              ],
              "type": "Collection",
              "abstractKey": null
            },
            (v20/*: any*/)
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
          "selections": (v24/*: any*/),
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
          "selections": (v24/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"volume.id\")"
        }
      ],
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
},
v26 = {
  "kind": "InlineFragment",
  "selections": [
    (v6/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v27 = [
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
      (v7/*: any*/),
      {
        "kind": "TypeDiscriminator",
        "abstractKey": "__isAnyContributor"
      },
      (v26/*: any*/),
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
      (v20/*: any*/)
    ],
    "storageKey": null
  },
  (v5/*: any*/)
],
v28 = [
  (v7/*: any*/),
  (v26/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v13/*: any*/),
      (v14/*: any*/),
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
                  (v17/*: any*/),
                  (v16/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v6/*: any*/),
      (v15/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "ItemContributionConnection",
        "kind": "LinkedField",
        "name": "contributions",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemContribution",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": (v27/*: any*/),
                    "storageKey": null
                  }
                ],
                "type": "ItemContributionConnection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionContribution",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": (v27/*: any*/),
                    "storageKey": null
                  }
                ],
                "type": "CollectionContributionConnection",
                "abstractKey": null
              }
            ],
            "type": "Paginated",
            "abstractKey": "__isPaginated"
          }
        ],
        "storageKey": null
      },
      (v19/*: any*/)
    ],
    "type": "Item",
    "abstractKey": null
  },
  (v20/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pageCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineDataFragmentSpread",
            "name": "EntityOrderingLayoutFactoryFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Ordering",
                    "kind": "LinkedField",
                    "name": "initialOrdering",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v4/*: any*/)
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "JournalContentFragment"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pageCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SchemaDefinition",
            "kind": "LinkedField",
            "name": "schemaDefinition",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/),
          {
            "alias": "description",
            "args": [
              {
                "kind": "Literal",
                "name": "fullPath",
                "value": "description"
              }
            ],
            "concreteType": null,
            "kind": "LinkedField",
            "name": "schemaProperty",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FullText",
                    "kind": "LinkedField",
                    "name": "fullText",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "kind",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lang",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  }
                ],
                "type": "FullTextProperty",
                "abstractKey": null
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isAnySchemaProperty"
              }
            ],
            "storageKey": "schemaProperty(fullPath:\"description\")"
          },
          {
            "alias": "about",
            "args": [
              {
                "kind": "Literal",
                "name": "fullPath",
                "value": "about"
              }
            ],
            "concreteType": null,
            "kind": "LinkedField",
            "name": "schemaProperty",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v9/*: any*/),
                "type": "MarkdownProperty",
                "abstractKey": null
              }
            ],
            "storageKey": "schemaProperty(fullPath:\"about\")"
          },
          {
            "alias": "issues",
            "args": [
              (v10/*: any*/),
              (v11/*: any*/),
              {
                "kind": "Literal",
                "name": "page",
                "value": 1
              },
              {
                "kind": "Literal",
                "name": "perPage",
                "value": 4
              },
              (v12/*: any*/)
            ],
            "concreteType": "CollectionConnection",
            "kind": "LinkedField",
            "name": "collections",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CollectionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v5/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
                      {
                        "alias": "cover",
                        "args": null,
                        "concreteType": "ImageAttachment",
                        "kind": "LinkedField",
                        "name": "thumbnail",
                        "plural": false,
                        "selections": (v18/*: any*/),
                        "storageKey": null
                      },
                      (v19/*: any*/),
                      (v21/*: any*/),
                      (v23/*: any*/),
                      (v25/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "collections(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",page:1,perPage:4,schema:\"nglp:journal_issue\")"
          },
          {
            "alias": "currentIssue",
            "args": [
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/)
            ],
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "firstCollection",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "thumbnail",
                "plural": false,
                "selections": (v18/*: any*/),
                "storageKey": null
              },
              (v19/*: any*/),
              (v21/*: any*/),
              (v23/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "identifier",
                    "value": "articles"
                  }
                ],
                "concreteType": "Ordering",
                "kind": "LinkedField",
                "name": "ordering",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "perPage",
                        "value": 3
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
                                "selections": (v28/*: any*/),
                                "storageKey": null
                              },
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v22/*: any*/)
                    ],
                    "storageKey": "children(perPage:3)"
                  },
                  (v5/*: any*/)
                ],
                "storageKey": "ordering(identifier:\"articles\")"
              },
              {
                "alias": "featuredArticles",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "fullPath",
                    "value": "featured_articles"
                  }
                ],
                "concreteType": null,
                "kind": "LinkedField",
                "name": "schemaProperty",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "entities",
                        "plural": true,
                        "selections": (v28/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "type": "EntitiesProperty",
                    "abstractKey": null
                  }
                ],
                "storageKey": "schemaProperty(fullPath:\"featured_articles\")"
              },
              (v25/*: any*/)
            ],
            "storageKey": "firstCollection(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",schema:\"nglp:journal_issue\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AnnouncementConnection",
            "kind": "LinkedField",
            "name": "announcements",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Announcement",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "teaser",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "header",
                    "storageKey": null
                  },
                  (v6/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Ordering",
                "kind": "LinkedField",
                "name": "initialOrdering",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
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
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "name",
                                "storageKey": null
                              },
                              (v2/*: any*/),
                              (v5/*: any*/)
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
                              (v6/*: any*/),
                              (v13/*: any*/),
                              (v5/*: any*/)
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
    "cacheID": "af2144466b3bdd2d84c0c521db8b6368",
    "id": null,
    "metadata": {},
    "name": "pageCollectionQuery",
    "operationKind": "query",
    "text": "query pageCollectionQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityOrderingLayoutFactoryFragment\n    ...JournalContentFragment\n    id\n  }\n}\n\nfragment ArticleSummaryFragment on Item {\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  slug\n  summary\n  contributions {\n    ...ContributorsListFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on Paginated {\n  __isPaginated: __typename\n  ... on ItemContributionConnection {\n    nodes {\n      role\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on CollectionContributionConnection {\n    nodes {\n      role\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment EntityAnnouncementsFragment on AnnouncementConnection {\n  nodes {\n    teaser\n    header\n    slug\n    id\n  }\n}\n\nfragment EntityOrderSelectFragment on OrderingConnection {\n  edges {\n    node {\n      name\n      identifier\n      id\n    }\n  }\n}\n\nfragment EntityOrderingLayoutFactoryFragment on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  initialOrdering {\n    identifier\n    disabled\n    id\n  }\n  ...IssueSidebarNavFragment\n}\n\nfragment FeaturedIssueFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n  ordering(identifier: \"articles\") {\n    identifier\n    children(perPage: 3) {\n      edges {\n        node {\n          entry {\n            __typename\n            ... on Sluggable {\n              __isSluggable: __typename\n              slug\n            }\n            ...ArticleSummaryFragment\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          id\n        }\n      }\n      pageInfo {\n        totalCount\n      }\n    }\n    id\n  }\n  featuredArticles: schemaProperty(fullPath: \"featured_articles\") {\n    __typename\n    ... on EntitiesProperty {\n      entities {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ArticleSummaryFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ...getEntityDisplayNameFragment\n}\n\nfragment FullTextFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  ... on FullTextProperty {\n    fullText {\n      content\n      kind\n      lang\n    }\n    type\n  }\n}\n\nfragment IssueSidebarNavFragment on Collection {\n  orderings(availability: ENABLED) {\n    ...EntityOrderSelectFragment\n  }\n  ...IssueSidebarNavListFragment\n}\n\nfragment IssueSidebarNavListFragment on Collection {\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment IssueSummaryFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n  ...getEntityDisplayNameFragment\n}\n\nfragment JournalContentFragment on Collection {\n  slug\n  description: schemaProperty(fullPath: \"description\") {\n    __typename\n    ... on FullTextProperty {\n      fullText {\n        content\n      }\n    }\n    ...FullTextFragment\n  }\n  about: schemaProperty(fullPath: \"about\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n  issues: collections(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS, page: 1, perPage: 4) {\n    ...RecentIssuesFragment\n  }\n  currentIssue: firstCollection(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {\n    ...FeaturedIssueFragment\n    id\n  }\n  announcements {\n    ...EntityAnnouncementsFragment\n    nodes {\n      slug\n      id\n    }\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment RecentIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...IssueSummaryFragment\n      id\n    }\n  }\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  thumb: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment getEntityDisplayNameFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issueNumber: schemaProperty(fullPath: \"number\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n  ...getEntityVolumeNumberFragment\n}\n\nfragment getEntityVolumeNumberFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        number: schemaProperty(fullPath: \"id\") {\n          __typename\n          ... on StringProperty {\n            content\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    volumeNumber: schemaProperty(fullPath: \"volume.id\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "56cfb8f91a2c7bde72fb45cce0821b8d";

export default node;
