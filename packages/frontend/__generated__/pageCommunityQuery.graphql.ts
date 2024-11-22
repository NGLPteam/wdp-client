/**
 * @generated SignedSource<<ca8844dd3670beaf1679e2bc503ce100>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageCommunityQuery$variables = {
  slug: string;
};
export type pageCommunityQuery$data = {
  readonly community: {
    readonly " $fragmentSpreads": FragmentRefs<"CommunityLandingLayoutFragment">;
  } | null | undefined;
};
export type pageCommunityQuery = {
  response: pageCommunityQuery$data;
  variables: pageCommunityQuery$variables;
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
  "name": "slug",
  "storageKey": null
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
  "name": "summary",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = {
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subtitle",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
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
            (v6/*: any*/),
            (v13/*: any*/),
            (v7/*: any*/),
            (v8/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v15 = {
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
v16 = [
  (v15/*: any*/)
],
v17 = {
  "kind": "InlineFragment",
  "selections": [
    (v11/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v18 = {
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
v19 = [
  (v3/*: any*/)
],
v20 = [
  (v9/*: any*/),
  (v10/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v3/*: any*/),
      (v12/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageAttachment",
        "kind": "LinkedField",
        "name": "thumbnail",
        "plural": false,
        "selections": [
          (v5/*: any*/),
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
                  (v13/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v2/*: any*/),
      (v4/*: any*/),
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
                  (v9/*: any*/),
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isAnyContributor"
                  },
                  (v10/*: any*/),
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
                  (v17/*: any*/)
                ],
                "storageKey": null
              },
              (v11/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v18/*: any*/)
    ],
    "type": "Item",
    "abstractKey": null
  },
  (v17/*: any*/)
],
v21 = [
  (v9/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pageCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityLandingLayoutFragment"
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
    "name": "pageCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tagline",
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "heroImage",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              {
                "alias": "image",
                "args": null,
                "concreteType": "ImageSize",
                "kind": "LinkedField",
                "name": "hero",
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
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/)
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
                      (v6/*: any*/)
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
            "kind": "ScalarField",
            "name": "heroImageLayout",
            "storageKey": null
          },
          {
            "alias": "featuredJournals",
            "args": [
              {
                "kind": "Literal",
                "name": "fullPath",
                "value": "featured.journals"
              }
            ],
            "concreteType": null,
            "kind": "LinkedField",
            "name": "schemaProperty",
            "plural": false,
            "selections": [
              (v9/*: any*/),
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
                    "selections": [
                      (v9/*: any*/),
                      (v10/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v11/*: any*/),
                          (v3/*: any*/),
                          (v12/*: any*/),
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "updatedAt",
                            "storageKey": null
                          },
                          (v14/*: any*/),
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
                            "selections": (v16/*: any*/),
                            "storageKey": "descendants(schema:[\"nglp:journal_issue\"],scope:\"COLLECTION\")"
                          }
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "EntitiesProperty",
                "abstractKey": null
              }
            ],
            "storageKey": "schemaProperty(fullPath:\"featured.journals\")"
          },
          {
            "alias": "featuredSeries",
            "args": [
              {
                "kind": "Literal",
                "name": "fullPath",
                "value": "featured.series"
              }
            ],
            "concreteType": null,
            "kind": "LinkedField",
            "name": "schemaProperty",
            "plural": false,
            "selections": [
              (v9/*: any*/),
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
                    "selections": [
                      (v9/*: any*/),
                      (v10/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ImageAttachment",
                            "kind": "LinkedField",
                            "name": "heroImage",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
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
                                      (v13/*: any*/),
                                      (v6/*: any*/),
                                      (v7/*: any*/),
                                      (v8/*: any*/)
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
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "EntitiesProperty",
                "abstractKey": null
              }
            ],
            "storageKey": "schemaProperty(fullPath:\"featured.series\")"
          },
          {
            "alias": "featuredIssue",
            "args": [
              {
                "kind": "Literal",
                "name": "fullPath",
                "value": "featured.issue"
              }
            ],
            "concreteType": null,
            "kind": "LinkedField",
            "name": "schemaProperty",
            "plural": false,
            "selections": [
              (v9/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "entity",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v11/*: any*/),
                          (v3/*: any*/),
                          (v12/*: any*/),
                          (v2/*: any*/),
                          (v14/*: any*/),
                          (v18/*: any*/),
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
                            "selections": [
                              (v9/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v19/*: any*/),
                                "type": "Collection",
                                "abstractKey": null
                              },
                              (v17/*: any*/)
                            ],
                            "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                          },
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
                            "selections": (v16/*: any*/),
                            "storageKey": "items(schema:\"nglp:journal_article\")"
                          },
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
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "identifier",
                                "storageKey": null
                              },
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
                                            "selections": (v20/*: any*/),
                                            "storageKey": null
                                          },
                                          (v11/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  (v15/*: any*/)
                                ],
                                "storageKey": "children(perPage:3)"
                              },
                              (v11/*: any*/)
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
                              (v9/*: any*/),
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
                                    "selections": (v20/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "type": "EntitiesProperty",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": "schemaProperty(fullPath:\"featured_articles\")"
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
                                      (v9/*: any*/),
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v3/*: any*/),
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
                                            "selections": (v21/*: any*/),
                                            "storageKey": "schemaProperty(fullPath:\"id\")"
                                          }
                                        ],
                                        "type": "Collection",
                                        "abstractKey": null
                                      },
                                      (v17/*: any*/)
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
                                    "selections": (v21/*: any*/),
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
                                    "selections": (v21/*: any*/),
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
                      },
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "EntityProperty",
                "abstractKey": null
              }
            ],
            "storageKey": "schemaProperty(fullPath:\"featured.issue\")"
          },
          {
            "alias": "featuredUnits",
            "args": [
              {
                "kind": "Literal",
                "name": "fullPath",
                "value": "featured.units"
              }
            ],
            "concreteType": null,
            "kind": "LinkedField",
            "name": "schemaProperty",
            "plural": false,
            "selections": [
              (v9/*: any*/),
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
                    "selections": [
                      (v9/*: any*/),
                      (v10/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v19/*: any*/),
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "EntitiesProperty",
                "abstractKey": null
              }
            ],
            "storageKey": "schemaProperty(fullPath:\"featured.units\")"
          },
          (v11/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ea4e561c0eb295255731567001a8f168",
    "id": null,
    "metadata": {},
    "name": "pageCommunityQuery",
    "operationKind": "query",
    "text": "query pageCommunityQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    ...CommunityLandingLayoutFragment\n    id\n  }\n}\n\nfragment ArticleSummaryFragment on Item {\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  slug\n  summary\n  contributions {\n    ...ContributorsListFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n}\n\nfragment CommunityHeroFragment on Community {\n  title\n  tagline\n  summary\n  heroImage {\n    storage\n    image: hero {\n      webp {\n        url\n        width\n        height\n      }\n    }\n    placeholder: thumb {\n      webp {\n        url\n      }\n    }\n  }\n  heroImageLayout\n}\n\nfragment CommunityLandingLayoutFragment on Community {\n  slug\n  ...CommunityHeroFragment\n  featuredJournals: schemaProperty(fullPath: \"featured.journals\") {\n    __typename\n    ...FeaturedJournalsFragment\n  }\n  featuredSeries: schemaProperty(fullPath: \"featured.series\") {\n    __typename\n    ...FeaturedCollectionsGridFragment\n  }\n  featuredIssue: schemaProperty(fullPath: \"featured.issue\") {\n    __typename\n    ... on EntityProperty {\n      entity {\n        __typename\n        ...FeaturedIssueFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  featuredUnits: schemaProperty(fullPath: \"featured.units\") {\n    __typename\n    ...FeaturedUnitsFragment\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  nodes {\n    role\n    contributor {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ...ContributorNameFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment FeaturedCollectionsGridFragment on EntitiesProperty {\n  entities {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ...FeaturedCollectionsGridImageFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment FeaturedCollectionsGridImageFragment on Entity {\n  __isEntity: __typename\n  heroImage {\n    storage\n    image: large {\n      webp {\n        alt\n        url\n        width\n        height\n      }\n    }\n  }\n}\n\nfragment FeaturedIssueFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n  ordering(identifier: \"articles\") {\n    identifier\n    children(perPage: 3) {\n      edges {\n        node {\n          entry {\n            __typename\n            ... on Sluggable {\n              __isSluggable: __typename\n              slug\n            }\n            ...ArticleSummaryFragment\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          id\n        }\n      }\n      pageInfo {\n        totalCount\n      }\n    }\n    id\n  }\n  featuredArticles: schemaProperty(fullPath: \"featured_articles\") {\n    __typename\n    ... on EntitiesProperty {\n      entities {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ArticleSummaryFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ...getEntityDisplayNameFragment\n}\n\nfragment FeaturedJournalFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  updatedAt\n  thumbnail {\n    ...CoverImageFragment\n  }\n  issues: descendants(scope: COLLECTION, schema: [\"nglp:journal_issue\"]) {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment FeaturedJournalsFragment on EntitiesProperty {\n  entities {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ...FeaturedJournalFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment FeaturedUnitsFragment on EntitiesProperty {\n  entities {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  thumb: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment getEntityDisplayNameFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issueNumber: schemaProperty(fullPath: \"number\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n  ...getEntityVolumeNumberFragment\n}\n\nfragment getEntityVolumeNumberFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        number: schemaProperty(fullPath: \"id\") {\n          __typename\n          ... on StringProperty {\n            content\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    volumeNumber: schemaProperty(fullPath: \"volume.id\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0dee540d64498f298d7d7e0a0d4f394f";

export default node;
