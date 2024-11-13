/**
 * @generated SignedSource<<9f60725cd4669e1b3bf7a57cef2629f4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageCollectionTemplateQuery$variables = {
  slug: string;
};
export type pageCollectionTemplateQuery$data = {
  readonly collection: {
    readonly layouts: {
      readonly main: {
        readonly templates: ReadonlyArray<{
          readonly " $fragmentSpreads": FragmentRefs<"FactoryTemplatesFragment">;
        }>;
      } | null | undefined;
    };
  } | null | undefined;
};
export type pageCollectionTemplateQuery = {
  response: pageCollectionTemplateQuery$data;
  variables: pageCollectionTemplateQuery$variables;
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
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v6 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyContributor"
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v8 = {
  "kind": "InlineFragment",
  "selections": [
    (v7/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v13 = {
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
v14 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v15 = [
  (v2/*: any*/),
  (v7/*: any*/),
  (v3/*: any*/)
],
v16 = [
  (v3/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v4/*: any*/),
      (v5/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v6/*: any*/),
          (v8/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "image",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageSize",
                    "kind": "LinkedField",
                    "name": "small",
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
                          (v9/*: any*/),
                          (v10/*: any*/)
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
            "type": "Contributor",
            "abstractKey": "__isContributor"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "orcid",
                "storageKey": null
              },
              (v11/*: any*/),
              (v12/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          (v13/*: any*/),
          (v14/*: any*/)
        ],
        "storageKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": (v15/*: any*/),
            "storageKey": null
          }
        ],
        "type": "ItemContribution",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": (v15/*: any*/),
            "storageKey": null
          }
        ],
        "type": "CollectionContribution",
        "abstractKey": null
      }
    ],
    "type": "Contribution",
    "abstractKey": "__isContribution"
  }
],
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "background",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v20 = [
  (v18/*: any*/),
  (v19/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "valid",
    "storageKey": null
  }
],
v21 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "header",
  "plural": false,
  "selections": (v20/*: any*/),
  "storageKey": null
},
v22 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyEntity"
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
            (v9/*: any*/),
            (v10/*: any*/),
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
            (v10/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v26 = [
  (v2/*: any*/),
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
          (v18/*: any*/),
          (v19/*: any*/),
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
v27 = {
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
        (v7/*: any*/),
        (v3/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "variant",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "subheader",
  "plural": false,
  "selections": (v20/*: any*/),
  "storageKey": null
},
v30 = [
  (v17/*: any*/),
  (v3/*: any*/)
],
v31 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "entrySlug",
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
      (v2/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "target",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v14/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "type": "EntityLink",
        "abstractKey": null
      },
      (v14/*: any*/)
    ],
    "storageKey": null
  },
  (v3/*: any*/)
],
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v33 = [
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
              (v7/*: any*/),
              (v32/*: any*/),
              (v3/*: any*/)
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
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seeAllButtonLabel",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showSeeAllButton",
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "selectionLimit",
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showEntityContext",
  "storageKey": null
},
v38 = [
  (v21/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "headerAside",
    "plural": false,
    "selections": (v20/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "metadata",
    "plural": false,
    "selections": (v20/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "subtitle",
    "plural": false,
    "selections": (v20/*: any*/),
    "storageKey": null
  }
],
v39 = {
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
            (v10/*: any*/),
            (v9/*: any*/),
            (v23/*: any*/),
            (v24/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v40 = [
  (v5/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "contributor",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      (v6/*: any*/),
      (v8/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": [
          (v11/*: any*/),
          (v12/*: any*/)
        ],
        "type": "PersonContributor",
        "abstractKey": null
      },
      (v13/*: any*/),
      (v14/*: any*/)
    ],
    "storageKey": null
  },
  (v3/*: any*/)
],
v41 = [
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
            "selections": (v40/*: any*/),
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
            "selections": (v40/*: any*/),
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
v42 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateEntityList",
  "kind": "LinkedField",
  "name": "entityList",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "count",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "empty",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ListItemLayoutInstance",
      "kind": "LinkedField",
      "name": "listItemLayouts",
      "plural": true,
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
              "concreteType": null,
              "kind": "LinkedField",
              "name": "entity",
              "plural": false,
              "selections": [
                (v2/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v3/*: any*/),
                    (v32/*: any*/),
                    (v39/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "CollectionContributionConnection",
                      "kind": "LinkedField",
                      "name": "contributions",
                      "plural": false,
                      "selections": (v41/*: any*/),
                      "storageKey": null
                    }
                  ],
                  "type": "Collection",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v3/*: any*/),
                    (v32/*: any*/),
                    (v39/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "ItemContributionConnection",
                      "kind": "LinkedField",
                      "name": "contributions",
                      "plural": false,
                      "selections": (v41/*: any*/),
                      "storageKey": null
                    }
                  ],
                  "type": "Item",
                  "abstractKey": null
                },
                (v14/*: any*/)
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
                  "name": "contextA",
                  "plural": false,
                  "selections": (v20/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TemplateSlotInlineInstance",
                  "kind": "LinkedField",
                  "name": "contextB",
                  "plural": false,
                  "selections": (v20/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TemplateSlotInlineInstance",
                  "kind": "LinkedField",
                  "name": "contextC",
                  "plural": false,
                  "selections": (v20/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TemplateSlotBlockInstance",
                  "kind": "LinkedField",
                  "name": "description",
                  "plural": false,
                  "selections": (v20/*: any*/),
                  "storageKey": null
                },
                (v21/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TemplateSlotInlineInstance",
                  "kind": "LinkedField",
                  "name": "metaA",
                  "plural": false,
                  "selections": (v20/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TemplateSlotInlineInstance",
                  "kind": "LinkedField",
                  "name": "metaB",
                  "plural": false,
                  "selections": (v20/*: any*/),
                  "storageKey": null
                },
                (v29/*: any*/)
              ],
              "storageKey": null
            },
            (v3/*: any*/)
          ],
          "storageKey": null
        },
        (v3/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pageCollectionTemplateQuery",
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
            "concreteType": "EntityLayouts",
            "kind": "LinkedField",
            "name": "layouts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MainLayoutInstance",
                "kind": "LinkedField",
                "name": "main",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "templates",
                    "plural": true,
                    "selections": [
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "FactoryTemplatesFragment"
                      }
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
    "name": "pageCollectionTemplateQuery",
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
            "concreteType": "EntityLayouts",
            "kind": "LinkedField",
            "name": "layouts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MainLayoutInstance",
                "kind": "LinkedField",
                "name": "main",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "templates",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isAnyMainTemplateInstance"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "templateKind",
                            "storageKey": null
                          }
                        ],
                        "type": "TemplateInstance",
                        "abstractKey": "__isTemplateInstance"
                      },
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
                              (v2/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
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
                                        "selections": (v16/*: any*/),
                                        "storageKey": null
                                      }
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
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "CollectionContributionConnection",
                                    "kind": "LinkedField",
                                    "name": "contributions",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CollectionContribution",
                                        "kind": "LinkedField",
                                        "name": "nodes",
                                        "plural": true,
                                        "selections": (v16/*: any*/),
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "type": "Collection",
                                "abstractKey": null
                              },
                              (v14/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "contributorsDefinition",
                            "args": null,
                            "concreteType": "ContributorListTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": [
                              (v17/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "limit",
                                "storageKey": null
                              },
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ContributorListTemplateInstanceSlots",
                            "kind": "LinkedField",
                            "name": "slots",
                            "plural": false,
                            "selections": [
                              (v21/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "ContributorListTemplateInstance",
                        "abstractKey": null
                      },
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
                              (v2/*: any*/),
                              (v22/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v25/*: any*/),
                                  {
                                    "alias": "fullText",
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "fullPath",
                                        "value": "body"
                                      }
                                    ],
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "schemaProperty",
                                    "plural": false,
                                    "selections": (v26/*: any*/),
                                    "storageKey": "schemaProperty(fullPath:\"body\")"
                                  },
                                  (v27/*: any*/)
                                ],
                                "type": "Item",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v25/*: any*/),
                                  {
                                    "alias": "fullText",
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
                                    "selections": (v26/*: any*/),
                                    "storageKey": "schemaProperty(fullPath:\"description\")"
                                  },
                                  (v27/*: any*/)
                                ],
                                "type": "Collection",
                                "abstractKey": null
                              },
                              (v14/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v27/*: any*/)
                                ],
                                "type": "Community",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "detailDefinition",
                            "args": null,
                            "concreteType": "DetailTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": [
                              (v17/*: any*/),
                              (v28/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "showAnnouncements",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "showHeroImage",
                                "storageKey": null
                              },
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "DetailTemplateInstanceSlots",
                            "kind": "LinkedField",
                            "name": "slots",
                            "plural": false,
                            "selections": [
                              (v21/*: any*/),
                              (v29/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotBlockInstance",
                                "kind": "LinkedField",
                                "name": "summary",
                                "plural": false,
                                "selections": (v20/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "DetailTemplateInstance",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": "orderingDefinition",
                            "args": null,
                            "concreteType": "OrderingTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": (v30/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateOrderingPair",
                            "kind": "LinkedField",
                            "name": "orderingPair",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "exists",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "first",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "last",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "OrderingEntry",
                                "kind": "LinkedField",
                                "name": "nextSibling",
                                "plural": false,
                                "selections": (v31/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "OrderingEntry",
                                "kind": "LinkedField",
                                "name": "prevSibling",
                                "plural": false,
                                "selections": (v31/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "OrderingTemplateInstanceSlots",
                            "kind": "LinkedField",
                            "name": "slots",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotInlineInstance",
                                "kind": "LinkedField",
                                "name": "nextLabel",
                                "plural": false,
                                "selections": (v20/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotInlineInstance",
                                "kind": "LinkedField",
                                "name": "previousLabel",
                                "plural": false,
                                "selections": (v20/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "OrderingTemplateInstance",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": "pagesDefinition",
                            "args": null,
                            "concreteType": "PageListTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": (v30/*: any*/),
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
                              (v2/*: any*/),
                              (v22/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v33/*: any*/),
                                "type": "Item",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v33/*: any*/),
                                "type": "Collection",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v33/*: any*/),
                                "type": "Community",
                                "abstractKey": null
                              },
                              (v14/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "PageListTemplateInstance",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": "descendantsDefinition",
                            "args": null,
                            "concreteType": "DescendantListTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": [
                              (v28/*: any*/),
                              (v3/*: any*/),
                              (v17/*: any*/),
                              (v34/*: any*/),
                              (v35/*: any*/),
                              (v36/*: any*/),
                              (v37/*: any*/),
                              (v32/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "DescendantListTemplateInstanceSlots",
                            "kind": "LinkedField",
                            "name": "slots",
                            "plural": false,
                            "selections": (v38/*: any*/),
                            "storageKey": null
                          },
                          (v42/*: any*/)
                        ],
                        "type": "DescendantListTemplateInstance",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": "linksDefinition",
                            "args": null,
                            "concreteType": "LinkListTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": [
                              (v17/*: any*/),
                              (v34/*: any*/),
                              (v35/*: any*/),
                              (v36/*: any*/),
                              (v37/*: any*/),
                              (v32/*: any*/),
                              (v28/*: any*/),
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "LinkListTemplateInstanceSlots",
                            "kind": "LinkedField",
                            "name": "slots",
                            "plural": false,
                            "selections": (v38/*: any*/),
                            "storageKey": null
                          },
                          (v42/*: any*/)
                        ],
                        "type": "LinkListTemplateInstance",
                        "abstractKey": null
                      },
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6ca54d4062ce74018351e454fd65ad05",
    "id": null,
    "metadata": {},
    "name": "pageCollectionTemplateQuery",
    "operationKind": "query",
    "text": "query pageCollectionTemplateQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    layouts {\n      main {\n        templates {\n          __typename\n          ...FactoryTemplatesFragment\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorBlockFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  role\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Contributor {\n      __isContributor: __typename\n      image {\n        ...ContributorAvatarFragment\n      }\n    }\n    ... on PersonContributor {\n      affiliation\n      orcid\n    }\n    ...ContributorNameFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      __typename\n      slug\n      id\n    }\n  }\n  ... on CollectionContribution {\n    collection {\n      __typename\n      slug\n      id\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on Paginated {\n  __isPaginated: __typename\n  ... on ItemContributionConnection {\n    nodes {\n      role\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on CollectionContributionConnection {\n    nodes {\n      role\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment ContributorsTemplateFragment on ContributorListTemplateInstance {\n  __typename\n  entity {\n    __typename\n    ... on Item {\n      contributions {\n        nodes {\n          ...ContributorBlockFragment\n          id\n        }\n      }\n    }\n    ... on Collection {\n      contributions {\n        nodes {\n          ...ContributorBlockFragment\n          id\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  contributorsDefinition: definition {\n    background\n    limit\n    id\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DescendantsTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on DescendantListTemplateInstance {\n    __typename\n    descendantsDefinition: definition {\n      variant\n      id\n    }\n  }\n  ...sharedListTemplateFragment\n}\n\nfragment DetailTemplateFragment on DetailTemplateInstance {\n  __typename\n  entity {\n    __typename\n    ...FullDetailFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  detailDefinition: definition {\n    background\n    variant\n    showAnnouncements\n    showHeroImage\n    id\n  }\n  ...SummaryDetailFragment\n}\n\nfragment EntityAnnouncementsFragment on AnnouncementConnection {\n  nodes {\n    teaser\n    header\n    slug\n    id\n  }\n}\n\nfragment FactoryTemplatesFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on TemplateInstance {\n    __isTemplateInstance: __typename\n    templateKind\n  }\n  ... on ContributorListTemplateInstance {\n    ...ContributorsTemplateFragment\n  }\n  ... on DetailTemplateInstance {\n    ...DetailTemplateFragment\n  }\n  ... on OrderingTemplateInstance {\n    ...OrderingNavigationTemplateFragment\n  }\n  ... on PageListTemplateInstance {\n    ...PagesTemplateFragment\n  }\n  ...DescendantsTemplateFragment\n  ...LinksTemplateFragment\n}\n\nfragment FullDetailFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    thumbnail {\n      storage\n      ...ContentImageFragment\n    }\n    fullText: schemaProperty(fullPath: \"body\") {\n      __typename\n      ... on FullTextProperty {\n        fullText {\n          content\n        }\n      }\n      ...FullTextFragment\n    }\n  }\n  ... on Collection {\n    thumbnail {\n      storage\n      ...ContentImageFragment\n    }\n    fullText: schemaProperty(fullPath: \"description\") {\n      __typename\n      ... on FullTextProperty {\n        fullText {\n          content\n        }\n      }\n      ...FullTextFragment\n    }\n  }\n}\n\nfragment FullTextFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  ... on FullTextProperty {\n    fullText {\n      content\n      kind\n      lang\n    }\n    type\n  }\n}\n\nfragment LinksTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on LinkListTemplateInstance {\n    __typename\n    linksDefinition: definition {\n      variant\n      id\n    }\n  }\n  ...sharedListTemplateFragment\n}\n\nfragment ListPagesTemplateFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    pages {\n      edges {\n        node {\n          slug\n          title\n          id\n        }\n      }\n    }\n  }\n  ... on Collection {\n    pages {\n      edges {\n        node {\n          slug\n          title\n          id\n        }\n      }\n    }\n  }\n  ... on Community {\n    pages {\n      edges {\n        node {\n          slug\n          title\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment NavButtonsFragment on OrderingTemplateInstance {\n  orderingPair {\n    first\n    last\n    nextSibling {\n      ...routesOrderingTemplateFragment\n      id\n    }\n    prevSibling {\n      ...routesOrderingTemplateFragment\n      id\n    }\n  }\n  slots {\n    nextLabel {\n      ...sharedInlineSlotFragment\n    }\n    previousLabel {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment OrderingNavigationTemplateFragment on OrderingTemplateInstance {\n  orderingDefinition: definition {\n    background\n    id\n  }\n  orderingPair {\n    exists\n  }\n  ...NavButtonsFragment\n}\n\nfragment PagesTemplateFragment on PageListTemplateInstance {\n  __typename\n  pagesDefinition: definition {\n    background\n    id\n  }\n  entity {\n    __typename\n    ...ListPagesTemplateFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment SummaryDetailFragment on DetailTemplateInstance {\n  entity {\n    __typename\n    ... on Collection {\n      announcements {\n        ...EntityAnnouncementsFragment\n        nodes {\n          slug\n          id\n        }\n      }\n    }\n    ... on Community {\n      announcements {\n        ...EntityAnnouncementsFragment\n        nodes {\n          slug\n          id\n        }\n      }\n    }\n    ... on Item {\n      announcements {\n        ...EntityAnnouncementsFragment\n        nodes {\n          slug\n          id\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    summary {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment routesOrderingTemplateFragment on OrderingEntry {\n  entrySlug\n  entry {\n    __typename\n    ... on Collection {\n      __typename\n    }\n    ... on Item {\n      __typename\n    }\n    ... on Community {\n      __typename\n    }\n    ... on EntityLink {\n      __typename\n      target {\n        __typename\n        ... on Collection {\n          __typename\n        }\n        ... on Item {\n          __typename\n        }\n        ... on Community {\n          __typename\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment sharedBlockSlotFragment on TemplateSlotBlockInstance {\n  content\n  kind\n  valid\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  content\n  kind\n  valid\n}\n\nfragment sharedListItemTemplateFragment on ListItemTemplateInstance {\n  entity {\n    __typename\n    ... on Collection {\n      id\n      title\n      thumbnail {\n        ...CoverImageFragment\n      }\n      contributions {\n        ...ContributorsListFragment\n      }\n    }\n    ... on Item {\n      id\n      title\n      thumbnail {\n        ...CoverImageFragment\n      }\n      contributions {\n        ...ContributorsListFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  slots {\n    contextA {\n      ...sharedInlineSlotFragment\n    }\n    contextB {\n      ...sharedInlineSlotFragment\n    }\n    contextC {\n      ...sharedInlineSlotFragment\n    }\n    description {\n      ...sharedBlockSlotFragment\n    }\n    header {\n      ...sharedInlineSlotFragment\n    }\n    metaA {\n      ...sharedInlineSlotFragment\n    }\n    metaB {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment sharedListItemsTemplateFragment on TemplateEntityList {\n  listItemLayouts {\n    template {\n      ...sharedListItemTemplateFragment\n      id\n    }\n    id\n  }\n}\n\nfragment sharedListTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on LinkListTemplateInstance {\n    linksDefinition: definition {\n      background\n      seeAllButtonLabel\n      showSeeAllButton\n      selectionLimit\n      showEntityContext\n      title\n      variant\n      id\n    }\n    slots {\n      header {\n        ...sharedInlineSlotFragment\n      }\n      headerAside {\n        ...sharedInlineSlotFragment\n      }\n      metadata {\n        ...sharedInlineSlotFragment\n      }\n      subtitle {\n        ...sharedInlineSlotFragment\n      }\n    }\n    entityList {\n      count\n      empty\n      ...sharedListItemsTemplateFragment\n    }\n  }\n  ... on DescendantListTemplateInstance {\n    descendantsDefinition: definition {\n      background\n      seeAllButtonLabel\n      showSeeAllButton\n      selectionLimit\n      showEntityContext\n      title\n      variant\n      id\n    }\n    slots {\n      header {\n        ...sharedInlineSlotFragment\n      }\n      headerAside {\n        ...sharedInlineSlotFragment\n      }\n      metadata {\n        ...sharedInlineSlotFragment\n      }\n      subtitle {\n        ...sharedInlineSlotFragment\n      }\n    }\n    entityList {\n      count\n      empty\n      ...sharedListItemsTemplateFragment\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fdba77dcbc7ffce1550b764934c6f2fe";

export default node;
