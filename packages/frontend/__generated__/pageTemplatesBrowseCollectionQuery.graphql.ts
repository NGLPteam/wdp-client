/**
 * @generated SignedSource<<37d3ecd21235207dc77477d7fa836e3a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageTemplatesBrowseCollectionQuery$variables = {
  identifier: string;
  page?: number | null | undefined;
  slug: string;
};
export type pageTemplatesBrowseCollectionQuery$data = {
  readonly collection: {
    readonly ordering: {
      readonly disabled: boolean;
      readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingLayoutFragment">;
    } | null | undefined;
  } | null | undefined;
};
export type pageTemplatesBrowseCollectionQuery = {
  response: pageTemplatesBrowseCollectionQuery$data;
  variables: pageTemplatesBrowseCollectionQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "identifier"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v3 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v4 = [
  {
    "kind": "Variable",
    "name": "identifier",
    "variableName": "identifier"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "disabled",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
  "name": "slug",
  "storageKey": null
},
v9 = {
  "kind": "InlineFragment",
  "selections": [
    (v8/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v11 = [
  (v10/*: any*/)
],
v12 = {
  "kind": "InlineFragment",
  "selections": (v11/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
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
  "name": "hierarchicalDepth",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
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
  "name": "width",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v19 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v16/*: any*/),
      (v17/*: any*/)
    ],
    "storageKey": null
  }
],
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    {
      "alias": null,
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
            (v15/*: any*/),
            (v16/*: any*/),
            (v17/*: any*/),
            (v18/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "medium",
      "plural": false,
      "selections": (v19/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "thumb",
      "plural": false,
      "selections": (v19/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v21 = {
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
            (v16/*: any*/),
            (v15/*: any*/),
            (v17/*: any*/),
            (v18/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v22 = [
  (v21/*: any*/)
],
v23 = {
  "kind": "InlineFragment",
  "selections": (v22/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v24 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ControlledVocabularyItem",
    "kind": "LinkedField",
    "name": "roles",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
        "storageKey": null
      },
      (v10/*: any*/)
    ],
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
      (v8/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": [
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
          }
        ],
        "type": "AnyContributor",
        "abstractKey": "__isAnyContributor"
      },
      (v12/*: any*/)
    ],
    "storageKey": null
  }
],
v25 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v21/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "EntityBreadcrumb",
          "kind": "LinkedField",
          "name": "breadcrumbs",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "crumb",
              "plural": false,
              "selections": [
                (v7/*: any*/),
                (v23/*: any*/),
                (v12/*: any*/)
              ],
              "storageKey": null
            },
            (v10/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CollectionAttribution",
          "kind": "LinkedField",
          "name": "attributions",
          "plural": true,
          "selections": (v24/*: any*/),
          "storageKey": null
        }
      ],
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v21/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "EntityBreadcrumb",
          "kind": "LinkedField",
          "name": "breadcrumbs",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "crumb",
              "plural": false,
              "selections": [
                (v7/*: any*/),
                (v23/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": (v22/*: any*/),
                  "type": "Item",
                  "abstractKey": null
                },
                (v12/*: any*/)
              ],
              "storageKey": null
            },
            (v10/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemAttribution",
          "kind": "LinkedField",
          "name": "attributions",
          "plural": true,
          "selections": (v24/*: any*/),
          "storageKey": null
        }
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "empty",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "valid",
  "storageKey": null
},
v30 = [
  (v26/*: any*/),
  (v27/*: any*/),
  (v28/*: any*/),
  (v29/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hidesTemplate",
    "storageKey": null
  }
],
v31 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "entry",
  "plural": false,
  "selections": [
    (v7/*: any*/),
    (v9/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "EntityLayouts",
          "kind": "LinkedField",
          "name": "layouts",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ListItemLayoutInstance",
              "kind": "LinkedField",
              "name": "listItem",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ListItemTemplateInstance",
                  "kind": "LinkedField",
                  "name": "template",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "ListItemTemplateDefinition",
                      "kind": "LinkedField",
                      "name": "definition",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "seeAllOrderingIdentifier",
                          "storageKey": null
                        },
                        (v10/*: any*/)
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
                        (v7/*: any*/),
                        {
                          "kind": "InlineFragment",
                          "selections": [
                            (v10/*: any*/),
                            (v8/*: any*/),
                            (v13/*: any*/),
                            (v14/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "CollectionAttribution",
                              "kind": "LinkedField",
                              "name": "attributions",
                              "plural": true,
                              "selections": (v11/*: any*/),
                              "storageKey": null
                            },
                            (v20/*: any*/),
                            (v25/*: any*/)
                          ],
                          "type": "Collection",
                          "abstractKey": null
                        },
                        {
                          "kind": "InlineFragment",
                          "selections": [
                            (v10/*: any*/),
                            (v8/*: any*/),
                            (v13/*: any*/),
                            (v14/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "ItemAttribution",
                              "kind": "LinkedField",
                              "name": "attributions",
                              "plural": true,
                              "selections": (v11/*: any*/),
                              "storageKey": null
                            },
                            (v20/*: any*/),
                            (v25/*: any*/)
                          ],
                          "type": "Item",
                          "abstractKey": null
                        },
                        (v12/*: any*/)
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "ListItemTemplateInstanceSlots",
                      "kind": "LinkedField",
                      "name": "slots",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "TemplateSlotInlineInstance",
                          "kind": "LinkedField",
                          "name": "contextFull",
                          "plural": false,
                          "selections": (v30/*: any*/),
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "TemplateSlotInlineInstance",
                          "kind": "LinkedField",
                          "name": "contextAbbr",
                          "plural": false,
                          "selections": (v30/*: any*/),
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "TemplateSlotInlineInstance",
                          "kind": "LinkedField",
                          "name": "contextC",
                          "plural": false,
                          "selections": (v30/*: any*/),
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "TemplateSlotBlockInstance",
                          "kind": "LinkedField",
                          "name": "description",
                          "plural": false,
                          "selections": [
                            (v26/*: any*/),
                            (v27/*: any*/),
                            (v28/*: any*/),
                            (v29/*: any*/)
                          ],
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "TemplateSlotInlineInstance",
                          "kind": "LinkedField",
                          "name": "header",
                          "plural": false,
                          "selections": (v30/*: any*/),
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "TemplateSlotInlineInstance",
                          "kind": "LinkedField",
                          "name": "metaA",
                          "plural": false,
                          "selections": (v30/*: any*/),
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "TemplateSlotInlineInstance",
                          "kind": "LinkedField",
                          "name": "metaB",
                          "plural": false,
                          "selections": (v30/*: any*/),
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "TemplateSlotInlineInstance",
                          "kind": "LinkedField",
                          "name": "subheader",
                          "plural": false,
                          "selections": (v30/*: any*/),
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "TemplateSlotInlineInstance",
                          "kind": "LinkedField",
                          "name": "nestedHeader",
                          "plural": false,
                          "selections": (v30/*: any*/),
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "TemplateSlotInlineInstance",
                          "kind": "LinkedField",
                          "name": "nestedSubheader",
                          "plural": false,
                          "selections": (v30/*: any*/),
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "TemplateSlotInlineInstance",
                          "kind": "LinkedField",
                          "name": "nestedContext",
                          "plural": false,
                          "selections": (v30/*: any*/),
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "TemplateSlotInlineInstance",
                          "kind": "LinkedField",
                          "name": "nestedMetadata",
                          "plural": false,
                          "selections": (v30/*: any*/),
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    },
                    (v10/*: any*/)
                  ],
                  "storageKey": null
                },
                (v10/*: any*/)
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
    (v12/*: any*/)
  ],
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "treeDepth",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageTemplatesBrowseCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Ordering",
            "kind": "LinkedField",
            "name": "ordering",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "EntityOrderingLayoutFragment"
              }
            ],
            "storageKey": null
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
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "pageTemplatesBrowseCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Ordering",
            "kind": "LinkedField",
            "name": "ordering",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
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
                  (v7/*: any*/),
                  (v9/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SchemaVersion",
                        "kind": "LinkedField",
                        "name": "schemaVersion",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          (v10/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Entity",
                    "abstractKey": "__isEntity"
                  },
                  (v12/*: any*/)
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
                          (v10/*: any*/),
                          (v31/*: any*/)
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "totalCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "perPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "OrderingEntry",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v10/*: any*/),
                      (v32/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "OrderingEntry",
                        "kind": "LinkedField",
                        "name": "ancestors",
                        "plural": true,
                        "selections": [
                          (v10/*: any*/),
                          (v32/*: any*/),
                          (v31/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v31/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8f2ade4958f5d6b726cb2f72c2397758",
    "id": null,
    "metadata": {},
    "name": "pageTemplatesBrowseCollectionQuery",
    "operationKind": "query",
    "text": "query pageTemplatesBrowseCollectionQuery(\n  $slug: Slug!\n  $identifier: String!\n  $page: Int\n) {\n  collection(slug: $slug) {\n    ordering(identifier: $identifier) {\n      disabled\n      ...EntityOrderingLayoutFragment\n      id\n    }\n    id\n  }\n}\n\nfragment BackButtonFragment on Entity {\n  __isEntity: __typename\n  __typename\n  slug\n  schemaVersion {\n    name\n    id\n  }\n}\n\nfragment BrowseListLayoutFragment on PageInfo {\n  ...PaginationFragment\n  ...PageCountFragment\n}\n\nfragment BrowseTreeItemFragment on OrderingEntry {\n  treeDepth\n  entry {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Entity {\n      __isEntity: __typename\n      layouts {\n        listItem {\n          template {\n            ...sharedListItemTemplateFragment\n            id\n          }\n          id\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment BrowseTreeLayoutFragment on OrderingEntryConnection {\n  nodes {\n    id\n    treeDepth\n    ancestors {\n      id\n      treeDepth\n      ...BrowseTreeItemFragment\n    }\n    ...BrowseTreeItemFragment\n  }\n  pageInfo {\n    ...PaginationFragment\n    ...PageCountFragment\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    attributions {\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        slug\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on Collection {\n    attributions {\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        slug\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: medium {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment EntityOrderingLayoutFragment on Ordering {\n  name\n  header\n  render {\n    mode\n  }\n  entity {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ...BackButtonFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  children(page: $page) {\n    edges {\n      node {\n        id\n        entry {\n          __typename\n          ... on Sluggable {\n            __isSluggable: __typename\n            slug\n          }\n          ...EntitySummaryFragment\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n      }\n    }\n    pageInfo {\n      ...BrowseListLayoutFragment\n    }\n    ...BrowseTreeLayoutFragment\n  }\n  id\n}\n\nfragment EntitySummaryFragment on Entity {\n  __isEntity: __typename\n  __typename\n  layouts {\n    listItem {\n      template {\n        ...sharedListItemTemplateFragment\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment PageCountFragment on PageInfo {\n  totalCount\n  page\n  perPage\n}\n\nfragment PaginationFragment on PageInfo {\n  page\n  pageCount\n}\n\nfragment getThumbWithFallbackFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    thumbnail {\n      image: medium {\n        webp {\n          url\n        }\n      }\n      ...CoverImageFragment\n    }\n    breadcrumbs {\n      crumb {\n        __typename\n        ... on Collection {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on Item {\n    thumbnail {\n      image: medium {\n        webp {\n          url\n        }\n      }\n      ...CoverImageFragment\n    }\n    breadcrumbs {\n      crumb {\n        __typename\n        ... on Collection {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Item {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment sharedBlockSlotFragment on TemplateSlotBlockInstance {\n  empty\n  content\n  kind\n  valid\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  empty\n  content\n  kind\n  valid\n  hidesTemplate\n}\n\nfragment sharedListItemTemplateFragment on ListItemTemplateInstance {\n  definition {\n    seeAllOrderingIdentifier\n    id\n  }\n  entity {\n    __typename\n    ... on Collection {\n      __typename\n      id\n      slug\n      title\n      hierarchicalDepth\n      ...getThumbWithFallbackFragment\n      attributions {\n        id\n      }\n      ...ContributorsListFragment\n      heroImage {\n        large {\n          webp {\n            alt\n            url\n            width\n            height\n          }\n        }\n        medium {\n          webp {\n            url\n            width\n          }\n        }\n        thumb {\n          webp {\n            url\n            width\n          }\n        }\n      }\n    }\n    ... on Item {\n      __typename\n      id\n      slug\n      title\n      hierarchicalDepth\n      attributions {\n        id\n      }\n      ...getThumbWithFallbackFragment\n      ...ContributorsListFragment\n      heroImage {\n        large {\n          webp {\n            alt\n            url\n            width\n            height\n          }\n        }\n        medium {\n          webp {\n            url\n            width\n          }\n        }\n        thumb {\n          webp {\n            url\n            width\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  slots {\n    contextFull {\n      ...sharedInlineSlotFragment\n    }\n    contextAbbr {\n      ...sharedInlineSlotFragment\n    }\n    contextC {\n      ...sharedInlineSlotFragment\n    }\n    description {\n      ...sharedBlockSlotFragment\n    }\n    header {\n      ...sharedInlineSlotFragment\n    }\n    metaA {\n      ...sharedInlineSlotFragment\n    }\n    metaB {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    nestedHeader {\n      ...sharedInlineSlotFragment\n    }\n    nestedSubheader {\n      ...sharedInlineSlotFragment\n    }\n    nestedContext {\n      ...sharedInlineSlotFragment\n    }\n    nestedMetadata {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "dc453df62d15fa4e59cdbea28f243fb7";

export default node;
