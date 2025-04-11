/**
 * @generated SignedSource<<9bcad74a9db1678dd49693ceb0d41d58>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type detailsManageSlugItemsQuery$variables = {
  itemSlug: string;
};
export type detailsManageSlugItemsQuery$data = {
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"AuthContextFragment" | "ItemLayoutFragment" | "ItemUpdateFormFragment">;
  } | null | undefined;
};
export type detailsManageSlugItemsQuery = {
  response: detailsManageSlugItemsQuery$data;
  variables: detailsManageSlugItemsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "itemSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "itemSlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v8 = [
  (v5/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/)
],
v9 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "originalFilename",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "storage",
    "storageKey": null
  },
  {
    "alias": null,
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
        "name": "png",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "alt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "url",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v10 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "precision",
    "storageKey": null
  },
  (v7/*: any*/)
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v12 = {
  "alias": "entityId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v14 = {
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
      "name": "enforcesParent",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SchemaVersion",
      "kind": "LinkedField",
      "name": "enforcedParentVersions",
      "plural": true,
      "selections": [
        (v13/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "namespace",
          "storageKey": null
        },
        (v4/*: any*/)
      ],
      "storageKey": null
    },
    (v4/*: any*/)
  ],
  "storageKey": null
},
v15 = [
  (v4/*: any*/),
  (v3/*: any*/),
  (v2/*: any*/)
],
v16 = {
  "kind": "InlineFragment",
  "selections": (v15/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v17 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "harvestModificationStatus",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "path",
  "storageKey": null
},
v20 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": "name",
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    (v6/*: any*/),
    (v19/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "required",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isWide",
      "storageKey": null
    }
  ],
  "type": "ScalarProperty",
  "abstractKey": "__isScalarProperty"
},
v21 = [
  (v20/*: any*/)
],
v22 = {
  "kind": "InlineFragment",
  "selections": (v21/*: any*/),
  "type": "AssetProperty",
  "abstractKey": null
},
v23 = {
  "kind": "InlineFragment",
  "selections": (v21/*: any*/),
  "type": "AssetsProperty",
  "abstractKey": null
},
v24 = {
  "kind": "InlineFragment",
  "selections": [
    (v20/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "checked",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "checkedByDefault",
      "storageKey": null
    }
  ],
  "type": "BooleanProperty",
  "abstractKey": null
},
v25 = {
  "kind": "InlineFragment",
  "selections": (v21/*: any*/),
  "type": "ContributorProperty",
  "abstractKey": null
},
v26 = {
  "kind": "InlineFragment",
  "selections": (v21/*: any*/),
  "type": "ContributorsProperty",
  "abstractKey": null
},
v27 = {
  "kind": "InlineFragment",
  "selections": [
    (v20/*: any*/),
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
v28 = {
  "kind": "InlineFragment",
  "selections": [
    (v20/*: any*/),
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
v29 = {
  "kind": "InlineFragment",
  "selections": [
    (v20/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "floatValue",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultFloat",
      "storageKey": null
    }
  ],
  "type": "FloatProperty",
  "abstractKey": null
},
v30 = {
  "kind": "InlineFragment",
  "selections": [
    (v20/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "integerValue",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultInteger",
      "storageKey": null
    }
  ],
  "type": "IntegerProperty",
  "abstractKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v32 = [
  (v20/*: any*/),
  (v31/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "default",
    "storageKey": null
  }
],
v33 = {
  "kind": "InlineFragment",
  "selections": (v32/*: any*/),
  "type": "MarkdownProperty",
  "abstractKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "concreteType": "SelectOption",
  "kind": "LinkedField",
  "name": "options",
  "plural": true,
  "selections": [
    (v6/*: any*/),
    (v7/*: any*/)
  ],
  "storageKey": null
},
v35 = {
  "kind": "InlineFragment",
  "selections": [
    (v20/*: any*/),
    (v34/*: any*/)
  ],
  "type": "MultiselectProperty",
  "abstractKey": null
},
v36 = {
  "kind": "InlineFragment",
  "selections": [
    (v34/*: any*/),
    (v20/*: any*/)
  ],
  "type": "SelectProperty",
  "abstractKey": null
},
v37 = {
  "kind": "InlineFragment",
  "selections": (v32/*: any*/),
  "type": "StringProperty",
  "abstractKey": null
},
v38 = {
  "kind": "InlineFragment",
  "selections": [
    (v20/*: any*/),
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
v39 = {
  "kind": "InlineFragment",
  "selections": [
    (v20/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FullText",
      "kind": "LinkedField",
      "name": "fullText",
      "plural": false,
      "selections": [
        (v31/*: any*/),
        (v5/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lang",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "FullTextProperty",
  "abstractKey": null
},
v40 = {
  "kind": "InlineFragment",
  "selections": [
    (v20/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "URLReference",
      "kind": "LinkedField",
      "name": "url",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "href",
          "storageKey": null
        },
        (v6/*: any*/),
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "URLProperty",
  "abstractKey": null
},
v41 = {
  "kind": "InlineFragment",
  "selections": [
    (v20/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "VariablePrecisionDate",
      "kind": "LinkedField",
      "name": "dateWithPrecision",
      "plural": false,
      "selections": (v10/*: any*/),
      "storageKey": null
    }
  ],
  "type": "VariableDateProperty",
  "abstractKey": null
},
v42 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "NamedAncestor",
    "kind": "LinkedField",
    "name": "namedAncestors",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "ancestor",
        "plural": false,
        "selections": [
          (v11/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/)
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          (v17/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v43 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "EntitySelectOption",
    "kind": "LinkedField",
    "name": "availableEntities",
    "plural": true,
    "selections": [
      (v6/*: any*/),
      (v7/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "entity",
        "plural": false,
        "selections": [
          (v11/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SchemaVersion",
                "kind": "LinkedField",
                "name": "schemaVersion",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v42/*: any*/),
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v42/*: any*/),
                "type": "Item",
                "abstractKey": null
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
    "storageKey": null
  },
  (v20/*: any*/)
],
v44 = {
  "kind": "InlineFragment",
  "selections": (v43/*: any*/),
  "type": "EntityProperty",
  "abstractKey": null
},
v45 = {
  "kind": "InlineFragment",
  "selections": (v43/*: any*/),
  "type": "EntitiesProperty",
  "abstractKey": null
},
v46 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v47 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "number",
  "storageKey": null
},
v48 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "SchemaVersion",
    "kind": "LinkedField",
    "name": "schemaVersion",
    "plural": false,
    "selections": [
      (v46/*: any*/),
      (v47/*: any*/),
      (v3/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "detailsManageSlugItemsQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemLayoutFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemUpdateFormFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuthContextFragment"
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
    "name": "detailsManageSlugItemsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": "itemId",
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": "context",
            "args": null,
            "concreteType": "SchemaInstanceContext",
            "kind": "LinkedField",
            "name": "schemaInstanceContext",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetSelectOption",
                "kind": "LinkedField",
                "name": "assets",
                "plural": true,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ContributorSelectOption",
                "kind": "LinkedField",
                "name": "contributors",
                "plural": true,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "defaultValues",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "entityId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fieldValues",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "schemaVersionSlug",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
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
            "concreteType": "DOIData",
            "kind": "LinkedField",
            "name": "doiData",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "doi",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rawDOI",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "visibility",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "summary",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "visibleAfterAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "visibleUntilAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "thumbnail",
            "plural": false,
            "selections": (v9/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "heroImage",
            "plural": false,
            "selections": (v9/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "VariablePrecisionDate",
            "kind": "LinkedField",
            "name": "published",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v11/*: any*/),
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
                    "kind": "ScalarField",
                    "name": "depth",
                    "storageKey": null
                  },
                  (v6/*: any*/),
                  (v5/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
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
                    "name": "enforcedChildKinds",
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isSluggable"
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v14/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "parent",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v16/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v15/*: any*/),
                        "type": "Community",
                        "abstractKey": null
                      },
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v18/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v14/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "parent",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v16/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v15/*: any*/),
                        "type": "Item",
                        "abstractKey": null
                      },
                      (v17/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v18/*: any*/)
                ],
                "type": "Item",
                "abstractKey": null
              }
            ],
            "type": "AnyEntity",
            "abstractKey": "__isAnyEntity"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": "properties",
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "schemaProperties",
                "plural": true,
                "selections": [
                  (v11/*: any*/),
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isAnySchemaProperty"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "legend",
                        "storageKey": null
                      },
                      (v19/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "properties",
                        "plural": true,
                        "selections": [
                          (v11/*: any*/),
                          {
                            "kind": "TypeDiscriminator",
                            "abstractKey": "__isAnyScalarProperty"
                          },
                          (v22/*: any*/),
                          (v23/*: any*/),
                          (v24/*: any*/),
                          (v25/*: any*/),
                          (v26/*: any*/),
                          (v27/*: any*/),
                          (v28/*: any*/),
                          (v29/*: any*/),
                          (v30/*: any*/),
                          (v33/*: any*/),
                          (v35/*: any*/),
                          (v36/*: any*/),
                          (v37/*: any*/),
                          (v38/*: any*/),
                          (v39/*: any*/),
                          (v40/*: any*/),
                          (v41/*: any*/),
                          (v44/*: any*/),
                          (v45/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "GroupProperty",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v22/*: any*/),
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/),
                      (v28/*: any*/),
                      (v29/*: any*/),
                      (v30/*: any*/),
                      (v33/*: any*/),
                      (v35/*: any*/),
                      (v36/*: any*/),
                      (v37/*: any*/),
                      (v38/*: any*/),
                      (v39/*: any*/),
                      (v40/*: any*/),
                      (v41/*: any*/),
                      (v44/*: any*/),
                      (v45/*: any*/)
                    ],
                    "type": "AnyScalarProperty",
                    "abstractKey": "__isAnyScalarProperty"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "fullPath",
                        "storageKey": null
                      }
                    ],
                    "type": "SchemaProperty",
                    "abstractKey": "__isSchemaProperty"
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": (v48/*: any*/),
                    "type": "Collection",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v48/*: any*/),
                    "type": "Item",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SchemaVersion",
                        "kind": "LinkedField",
                        "name": "schemaVersion",
                        "plural": false,
                        "selections": [
                          (v46/*: any*/),
                          (v47/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Community",
                    "abstractKey": null
                  }
                ],
                "type": "AnyEntity",
                "abstractKey": "__isAnyEntity"
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isNode"
              }
            ],
            "type": "SchemaInstance",
            "abstractKey": "__isSchemaInstance"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "60848bc28cd104b9de0cdf4af3f2ed24",
    "id": null,
    "metadata": {},
    "name": "detailsManageSlugItemsQuery",
    "operationKind": "query",
    "text": "query detailsManageSlugItemsQuery(\n  $itemSlug: Slug!\n) {\n  item(slug: $itemSlug) {\n    ...ItemLayoutFragment\n    ...ItemUpdateFormFragment\n    ...AuthContextFragment\n    id\n  }\n}\n\nfragment AssetPropertyFragment on AssetProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment AssetsPropertyFragment on AssetsProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment AuthContextFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n\nfragment BooleanPropertyFragment on BooleanProperty {\n  ...ScalarPropertyFragment\n  checked\n  checkedByDefault\n}\n\nfragment ContributorPropertyFragment on ContributorProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment ContributorsPropertyFragment on ContributorsProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment DatePropertyFragment on DateProperty {\n  ...ScalarPropertyFragment\n  date\n}\n\nfragment EmailPropertyFragment on EmailProperty {\n  ...ScalarPropertyFragment\n  address\n  defaultAddress\n}\n\nfragment EntitiesPropertyFragment on EntitiesProperty {\n  ...ScalarPropertyFragment\n  availableEntities {\n    label\n    value\n    entity {\n      __typename\n      ...getEntityTitleFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment EntityPropertyFragment on EntityProperty {\n  ...ScalarPropertyFragment\n  availableEntities {\n    label\n    value\n    entity {\n      __typename\n      ...getEntityTitleFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment FileUploadFragment on ImageAttachment {\n  originalFilename\n  storage\n  thumb {\n    png {\n      alt\n      url\n    }\n  }\n}\n\nfragment FloatPropertyFragment on FloatProperty {\n  ...ScalarPropertyFragment\n  floatValue\n  defaultFloat\n}\n\nfragment FullTextPropertyFragment on FullTextProperty {\n  ...ScalarPropertyFragment\n  description\n  fullText {\n    content\n    kind\n    lang\n  }\n}\n\nfragment GroupPropertyFragment on GroupProperty {\n  legend\n  path\n  properties {\n    __typename\n    ...SchemaPropertyFragment\n  }\n}\n\nfragment HarvestingStatusFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    harvestModificationStatus\n  }\n  ... on Item {\n    harvestModificationStatus\n  }\n}\n\nfragment IntegerPropertyFragment on IntegerProperty {\n  ...ScalarPropertyFragment\n  integerValue\n  defaultInteger\n}\n\nfragment ItemLayoutFragment on Item {\n  title\n  slug\n  id\n  ...useBreadcrumbsFragment\n  ...useChildRouteLinksFragment\n}\n\nfragment ItemUpdateFormFieldsFragment on Item {\n  title\n  subtitle\n  doiData {\n    doi\n  }\n  rawDOI\n  visibility\n  summary\n  visibleAfterAt\n  visibleUntilAt\n  thumbnail {\n    ...FileUploadFragment\n  }\n  heroImage {\n    ...FileUploadFragment\n  }\n  published {\n    ...VariablePrecisionDateControlFragment\n  }\n}\n\nfragment ItemUpdateFormFragment on Item {\n  itemId: id\n  ...ParentSelectorFragment\n  ...HarvestingStatusFragment\n  context: schemaInstanceContext {\n    ...useSchemaContextFragment\n  }\n  ...ItemUpdateFormFieldsFragment\n  ...SchemaFormFieldsFragment\n  ...useSchemaPropertiesFragment\n}\n\nfragment MarkdownPropertyFragment on MarkdownProperty {\n  ...ScalarPropertyFragment\n  content\n  default\n}\n\nfragment MultiselectPropertyFragment on MultiselectProperty {\n  ...ScalarPropertyFragment\n  options {\n    label\n    value\n  }\n}\n\nfragment ParentSelectorFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    __typename\n    entityId: id\n    schemaVersion {\n      enforcesParent\n      enforcedParentVersions {\n        identifier\n        namespace\n        id\n      }\n      id\n    }\n    parent {\n      __typename\n      ... on Collection {\n        id\n        slug\n        title\n      }\n      ... on Community {\n        id\n        slug\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n  ... on Item {\n    __typename\n    entityId: id\n    schemaVersion {\n      enforcesParent\n      enforcedParentVersions {\n        identifier\n        namespace\n        id\n      }\n      id\n    }\n    parent {\n      __typename\n      ... on Collection {\n        id\n        slug\n        title\n      }\n      ... on Item {\n        id\n        slug\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment ScalarPropertyFragment on ScalarProperty {\n  __isScalarProperty: __typename\n  name: fullPath\n  label\n  path\n  required\n  type\n  isWide\n}\n\nfragment SchemaFormFieldsContextFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  context: schemaInstanceContext {\n    ...useSchemaContextFragment\n  }\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n}\n\nfragment SchemaFormFieldsFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  properties: schemaProperties {\n    __typename\n    ...SchemaInstancePropertyFragment\n  }\n  ...SchemaSelectorDataFragment\n  ...SchemaFormFieldsContextFragment\n}\n\nfragment SchemaInstancePropertyFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  __typename\n  ... on GroupProperty {\n    ...GroupPropertyFragment\n  }\n  ...SchemaPropertyFragment\n}\n\nfragment SchemaPropertyFragment on AnyScalarProperty {\n  __isAnyScalarProperty: __typename\n  __typename\n  ... on AssetProperty {\n    ...AssetPropertyFragment\n  }\n  ... on AssetsProperty {\n    ...AssetsPropertyFragment\n  }\n  ... on BooleanProperty {\n    ...BooleanPropertyFragment\n  }\n  ... on ContributorProperty {\n    ...ContributorPropertyFragment\n  }\n  ... on ContributorsProperty {\n    ...ContributorsPropertyFragment\n  }\n  ... on DateProperty {\n    ...DatePropertyFragment\n  }\n  ... on EmailProperty {\n    ...EmailPropertyFragment\n  }\n  ... on FloatProperty {\n    ...FloatPropertyFragment\n  }\n  ... on IntegerProperty {\n    ...IntegerPropertyFragment\n  }\n  ... on MarkdownProperty {\n    ...MarkdownPropertyFragment\n  }\n  ... on MultiselectProperty {\n    ...MultiselectPropertyFragment\n  }\n  ... on SelectProperty {\n    ...SelectPropertyFragment\n  }\n  ... on StringProperty {\n    ...StringPropertyFragment\n  }\n  ... on TagsProperty {\n    ...TagsPropertyFragment\n  }\n  ... on FullTextProperty {\n    ...FullTextPropertyFragment\n  }\n  ... on URLProperty {\n    ...URLPropertyFragment\n  }\n  ... on VariableDateProperty {\n    ...VariableDatePropertyFragment\n  }\n  ... on EntityProperty {\n    ...EntityPropertyFragment\n  }\n  ... on EntitiesProperty {\n    ...EntitiesPropertyFragment\n  }\n}\n\nfragment SchemaSelectorDataFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n  ... on Item {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n  ... on Community {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n}\n\nfragment SelectPropertyFragment on SelectProperty {\n  options {\n    label\n    value\n  }\n  ...ScalarPropertyFragment\n}\n\nfragment StringPropertyFragment on StringProperty {\n  ...ScalarPropertyFragment\n  content\n  default\n}\n\nfragment TagsPropertyFragment on TagsProperty {\n  ...ScalarPropertyFragment\n  tags\n}\n\nfragment URLPropertyFragment on URLProperty {\n  ...ScalarPropertyFragment\n  url {\n    href\n    label\n    title\n  }\n}\n\nfragment VariableDatePropertyFragment on VariableDateProperty {\n  ...ScalarPropertyFragment\n  dateWithPrecision {\n    ...VariablePrecisionDateControlFragment\n  }\n}\n\nfragment VariablePrecisionDateControlFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment getEntityTitleFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  schemaVersion {\n    identifier\n    id\n  }\n  ... on Collection {\n    namedAncestors {\n      ancestor {\n        __typename\n        ... on Entity {\n          __isEntity: __typename\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ... on Item {\n    namedAncestors {\n      ancestor {\n        __typename\n        ... on Entity {\n          __isEntity: __typename\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment useBreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment useChildRouteLinksFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n  schemaVersion {\n    enforcedChildKinds\n    id\n  }\n}\n\nfragment useSchemaContextFragment on SchemaInstanceContext {\n  assets {\n    kind\n    label\n    value\n  }\n  contributors {\n    kind\n    label\n    value\n  }\n  defaultValues\n  entityId\n  fieldValues\n  schemaVersionSlug\n}\n\nfragment useSchemaPropertiesFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  properties: schemaProperties {\n    __typename\n    ... on SchemaProperty {\n      __isSchemaProperty: __typename\n      fullPath\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a65db0445f921d26a758e1ec9e0245e5";

export default node;
