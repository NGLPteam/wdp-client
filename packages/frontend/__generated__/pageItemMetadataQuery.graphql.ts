/**
 * @generated SignedSource<<431f62962b5ea8933aa9adeb0a66bd47>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageItemMetadataQuery$variables = {
  slug: string;
};
export type pageItemMetadataQuery$data = {
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityMetadataFactoryFragment">;
  } | null | undefined;
};
export type pageItemMetadataQuery = {
  response: pageItemMetadataQuery$data;
  variables: pageItemMetadataQuery$variables;
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
  "name": "kind",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/)
  ],
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
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    (v5/*: any*/)
  ],
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
  "name": "title",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullPath",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v11 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "integerValue",
  "storageKey": null
},
v13 = [
  {
    "kind": "InlineFragment",
    "selections": [
      (v9/*: any*/),
      (v10/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "defaultInteger",
            "storageKey": null
          },
          (v12/*: any*/)
        ],
        "type": "IntegerProperty",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "defaultFloat",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "floatValue",
            "storageKey": null
          }
        ],
        "type": "FloatProperty",
        "abstractKey": null
      }
    ],
    "type": "ScalarProperty",
    "abstractKey": "__isScalarProperty"
  }
],
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v16 = [
  (v14/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "precision",
    "storageKey": null
  }
],
v17 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v9/*: any*/),
        (v10/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "asset",
          "plural": false,
          "selections": [
            (v7/*: any*/),
            {
              "kind": "InlineFragment",
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
                  "name": "downloadUrl",
                  "storageKey": null
                }
              ],
              "type": "Asset",
              "abstractKey": "__isAsset"
            },
            (v11/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "AssetProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v9/*: any*/),
        (v10/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "checked",
          "storageKey": null
        }
      ],
      "type": "BooleanProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v9/*: any*/),
        (v10/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "date",
          "storageKey": null
        }
      ],
      "type": "DateProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v9/*: any*/),
        (v10/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "address",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "defaultAddress",
          "storageKey": null
        }
      ],
      "type": "EmailProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v13/*: any*/),
      "type": "FloatProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v13/*: any*/),
      "type": "IntegerProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v9/*: any*/),
        (v10/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "selection",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SelectOption",
          "kind": "LinkedField",
          "name": "options",
          "plural": true,
          "selections": [
            (v10/*: any*/),
            (v14/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "SelectProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v9/*: any*/),
        (v10/*: any*/),
        (v15/*: any*/)
      ],
      "type": "StringProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v9/*: any*/),
        (v10/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "tags",
          "storageKey": null
        }
      ],
      "type": "TagsProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v9/*: any*/),
        (v10/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "URLReference",
          "kind": "LinkedField",
          "name": "url",
          "plural": false,
          "selections": [
            (v10/*: any*/),
            (v8/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "href",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "type": "URLProperty",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v9/*: any*/),
        (v10/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "VariablePrecisionDate",
          "kind": "LinkedField",
          "name": "dateWithPrecision",
          "plural": false,
          "selections": (v16/*: any*/),
          "storageKey": null
        }
      ],
      "type": "VariableDateProperty",
      "abstractKey": null
    }
  ],
  "type": "AnyScalarProperty",
  "abstractKey": "__isAnyScalarProperty"
},
v18 = [
  (v7/*: any*/),
  (v17/*: any*/)
],
v19 = {
  "alias": "ccLicense",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "cc_license"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v18/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"cc_license\")"
},
v20 = [
  (v7/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v15/*: any*/)
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
],
v21 = [
  (v7/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v12/*: any*/)
    ],
    "type": "IntegerProperty",
    "abstractKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pageItemMetadataQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "kind": "InlineDataFragmentSpread",
            "name": "EntityMetadataFactoryFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/)
                    ],
                    "type": "Collection",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "ArticleMetadataFragment"
                      },
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "DissertationMetadataFragment"
                      },
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "PaperMetadataFragment"
                      }
                    ],
                    "type": "Item",
                    "abstractKey": null
                  }
                ],
                "type": "AnyEntity",
                "abstractKey": "__isAnyEntity"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pageItemMetadataQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v6/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "doi",
                    "storageKey": null
                  },
                  {
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
                    "selections": [
                      (v7/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v8/*: any*/)
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v19/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      (v11/*: any*/)
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                  },
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
                                  (v11/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v5/*: any*/)
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
                    "alias": "collectedMeta",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "meta.collected"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"meta.collected\")"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "VariablePrecisionDate",
                    "kind": "LinkedField",
                    "name": "published",
                    "plural": false,
                    "selections": (v16/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": "pageCountMeta",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "meta.page_count"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"meta.page_count\")"
                  },
                  {
                    "alias": "pdfVersion",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "pdf_version"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
                  },
                  {
                    "alias": "onlineVersion",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "online_version"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"online_version\")"
                  },
                  {
                    "alias": "preprintVersion",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "preprint_version"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"preprint_version\")"
                  },
                  {
                    "alias": "volumeIdMeta",
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
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"volume.id\")"
                  },
                  {
                    "alias": "issueTitleMeta",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "issue.title"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v20/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.title\")"
                  },
                  {
                    "alias": "issueNumber",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "issue.number"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v20/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.number\")"
                  },
                  {
                    "alias": "firstPage",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "issue.fpage"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v21/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.fpage\")"
                  },
                  {
                    "alias": "lastPage",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "issue.lpage"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v21/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.lpage\")"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "issn",
                    "storageKey": null
                  },
                  {
                    "alias": "textVersion",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "text_version"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"text_version\")"
                  },
                  {
                    "alias": "publisher",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "publisher"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"publisher\")"
                  },
                  {
                    "alias": "advisor",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "advisor"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"advisor\")"
                  },
                  {
                    "alias": "language",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "language"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"language\")"
                  },
                  (v19/*: any*/),
                  {
                    "alias": "accessioned",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "accessioned"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"accessioned\")"
                  },
                  {
                    "alias": "available",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "available"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"available\")"
                  },
                  {
                    "alias": "media",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "streaming_media"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"streaming_media\")"
                  },
                  {
                    "alias": "keywords",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "keywords"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v18/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"keywords\")"
                  },
                  {
                    "alias": "host",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "host"
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
                            "name": "properties",
                            "plural": true,
                            "selections": [
                              (v7/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "path",
                                    "storageKey": null
                                  },
                                  (v17/*: any*/)
                                ],
                                "type": "ScalarProperty",
                                "abstractKey": "__isScalarProperty"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "GroupProperty",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": "schemaProperty(fullPath:\"host\")"
                  }
                ],
                "type": "Item",
                "abstractKey": null
              }
            ],
            "type": "AnyEntity",
            "abstractKey": "__isAnyEntity"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ab97b4d23eec430f079fc7b4bf915da3",
    "id": null,
    "metadata": {},
    "name": "pageItemMetadataQuery",
    "operationKind": "query",
    "text": "query pageItemMetadataQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    ...EntityMetadataFactoryFragment\n    id\n  }\n}\n\nfragment ArticleIssueMetadataFragment on Item {\n  issueTitleMeta: schemaProperty(fullPath: \"issue.title\") {\n    __typename\n    ... on StringProperty {\n      content\n    }\n  }\n  issueNumber: schemaProperty(fullPath: \"issue.number\") {\n    __typename\n    ... on StringProperty {\n      content\n    }\n  }\n  firstPage: schemaProperty(fullPath: \"issue.fpage\") {\n    __typename\n    ... on IntegerProperty {\n      integerValue\n    }\n  }\n  lastPage: schemaProperty(fullPath: \"issue.lpage\") {\n    __typename\n    ... on IntegerProperty {\n      integerValue\n    }\n  }\n}\n\nfragment ArticleMetadataFragment on Item {\n  doi\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Entity {\n      __isEntity: __typename\n      title\n    }\n    ... on Collection {\n      ccLicense: schemaProperty(fullPath: \"cc_license\") {\n        __typename\n        ...MetadataFactoryFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  contributions {\n    edges {\n      node {\n        role\n        contributor {\n          __typename\n          ...ContributorNameFragment\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n  }\n  collectedMeta: schemaProperty(fullPath: \"meta.collected\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  pageCountMeta: schemaProperty(fullPath: \"meta.page_count\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  onlineVersion: schemaProperty(fullPath: \"online_version\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  preprintVersion: schemaProperty(fullPath: \"preprint_version\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  volumeIdMeta: schemaProperty(fullPath: \"volume.id\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  ...ArticleIssueMetadataFragment\n}\n\nfragment AssetPropertyFragment on AssetProperty {\n  fullPath\n  label\n  asset {\n    __typename\n    ... on Asset {\n      __isAsset: __typename\n      name\n      downloadUrl\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment BooleanPropertyFragment on BooleanProperty {\n  fullPath\n  label\n  checked\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment DatePropertyFragment on DateProperty {\n  fullPath\n  label\n  date\n}\n\nfragment DissertationMetadataFragment on Item {\n  issn\n  contributions {\n    edges {\n      node {\n        role\n        contributor {\n          __typename\n          ...ContributorNameFragment\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  textVersion: schemaProperty(fullPath: \"text_version\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  publisher: schemaProperty(fullPath: \"publisher\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  advisor: schemaProperty(fullPath: \"advisor\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  language: schemaProperty(fullPath: \"language\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  ccLicense: schemaProperty(fullPath: \"cc_license\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  accessioned: schemaProperty(fullPath: \"accessioned\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  available: schemaProperty(fullPath: \"available\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  media: schemaProperty(fullPath: \"streaming_media\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  keywords: schemaProperty(fullPath: \"keywords\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n}\n\nfragment EmailPropertyFragment on EmailProperty {\n  fullPath\n  label\n  address\n  defaultAddress\n}\n\nfragment EntityMetadataFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      kind\n      identifier\n      id\n    }\n  }\n  ... on Item {\n    schemaDefinition {\n      kind\n      identifier\n      id\n    }\n    ...ArticleMetadataFragment\n    ...DissertationMetadataFragment\n    ...PaperMetadataFragment\n  }\n}\n\nfragment MetadataFactoryFragment on AnyScalarProperty {\n  __isAnyScalarProperty: __typename\n  __typename\n  ... on AssetProperty {\n    ...AssetPropertyFragment\n  }\n  ... on BooleanProperty {\n    ...BooleanPropertyFragment\n  }\n  ... on DateProperty {\n    ...DatePropertyFragment\n  }\n  ... on EmailProperty {\n    ...EmailPropertyFragment\n  }\n  ... on FloatProperty {\n    ...NumberPropertyFragment\n  }\n  ... on IntegerProperty {\n    ...NumberPropertyFragment\n  }\n  ... on SelectProperty {\n    ...SelectPropertyFragment\n  }\n  ... on StringProperty {\n    ...StringPropertyFragment\n  }\n  ... on TagsProperty {\n    ...TagsPropertyFragment\n  }\n  ... on URLProperty {\n    ...URLPropertyFragment\n  }\n  ... on VariableDateProperty {\n    ...VariableDatePropertyFragment\n  }\n}\n\nfragment NumberPropertyFragment on ScalarProperty {\n  __isScalarProperty: __typename\n  fullPath\n  label\n  ... on IntegerProperty {\n    defaultInteger\n    integerValue\n  }\n  ... on FloatProperty {\n    defaultFloat\n    floatValue\n  }\n}\n\nfragment PaperMetadataFragment on Item {\n  issn\n  contributions {\n    edges {\n      node {\n        role\n        contributor {\n          __typename\n          ...ContributorNameFragment\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  textVersion: schemaProperty(fullPath: \"text_version\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  accessioned: schemaProperty(fullPath: \"accessioned\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  available: schemaProperty(fullPath: \"available\") {\n    __typename\n    ...MetadataFactoryFragment\n  }\n  host: schemaProperty(fullPath: \"host\") {\n    __typename\n    ... on GroupProperty {\n      properties {\n        __typename\n        ... on ScalarProperty {\n          __isScalarProperty: __typename\n          path\n          ...MetadataFactoryFragment\n        }\n      }\n    }\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment SelectPropertyFragment on SelectProperty {\n  fullPath\n  label\n  selection\n  options {\n    label\n    value\n  }\n}\n\nfragment StringPropertyFragment on StringProperty {\n  fullPath\n  label\n  content\n}\n\nfragment TagsPropertyFragment on TagsProperty {\n  fullPath\n  label\n  tags\n}\n\nfragment URLPropertyFragment on URLProperty {\n  fullPath\n  label\n  url {\n    label\n    title\n    href\n  }\n}\n\nfragment VariableDatePropertyFragment on VariableDateProperty {\n  fullPath\n  label\n  dateWithPrecision {\n    value\n    ...PrecisionDateFragment\n  }\n}\n"
  }
};
})();

(node as any).hash = "eee12dd39cbb781b9196674fd50eea8d";

export default node;
