/**
 * @generated SignedSource<<fdbbc3e174fe5cfdca4a7b540261b72d>>
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
      readonly hero: {
        readonly " $fragmentSpreads": FragmentRefs<"HeroTemplateFragment">;
      } | null | undefined;
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
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyEntity"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
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
  "name": "slug",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v9 = {
  "kind": "InlineFragment",
  "selections": [
    (v6/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v10 = {
  "kind": "InlineFragment",
  "selections": [
    (v7/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v15 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v12/*: any*/)
    ],
    "storageKey": null
  }
],
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    (v11/*: any*/),
    {
      "alias": null,
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
            (v12/*: any*/),
            (v13/*: any*/),
            (v14/*: any*/)
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
      "name": "thumb",
      "plural": false,
      "selections": (v15/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
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
  "name": "showHeroImage",
  "storageKey": null
},
v19 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  }
],
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
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
            (v12/*: any*/),
            (v20/*: any*/),
            (v13/*: any*/),
            (v14/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v23 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyContributor"
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v26 = {
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
v27 = [
  (v22/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "contributor",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      (v23/*: any*/),
      (v9/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": [
          (v24/*: any*/),
          (v25/*: any*/)
        ],
        "type": "PersonContributor",
        "abstractKey": null
      },
      (v26/*: any*/),
      (v10/*: any*/)
    ],
    "storageKey": null
  },
  (v7/*: any*/)
],
v28 = [
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
v29 = {
  "alias": null,
  "args": null,
  "concreteType": "ItemContributionConnection",
  "kind": "LinkedField",
  "name": "contributions",
  "plural": false,
  "selections": (v28/*: any*/),
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v31 = [
  (v30/*: any*/),
  (v5/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "valid",
    "storageKey": null
  }
],
v32 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "header",
  "plural": false,
  "selections": (v31/*: any*/),
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "headerAside",
  "plural": false,
  "selections": (v31/*: any*/),
  "storageKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotBlockInstance",
  "kind": "LinkedField",
  "name": "summary",
  "plural": false,
  "selections": (v31/*: any*/),
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "subheader",
  "plural": false,
  "selections": (v31/*: any*/),
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "metadata",
  "plural": false,
  "selections": (v31/*: any*/),
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v38 = [
  (v2/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/)
],
v39 = [
  (v7/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v37/*: any*/),
      (v22/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v23/*: any*/),
          (v9/*: any*/),
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
                          (v20/*: any*/),
                          (v12/*: any*/)
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
              (v37/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "orcid",
                "storageKey": null
              },
              (v24/*: any*/),
              (v25/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          (v26/*: any*/),
          (v10/*: any*/)
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
            "selections": (v38/*: any*/),
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
            "selections": (v38/*: any*/),
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
v40 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
    (v11/*: any*/),
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
            (v20/*: any*/),
            (v12/*: any*/),
            (v13/*: any*/),
            (v14/*: any*/)
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
      "selections": (v15/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v41 = [
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
          (v30/*: any*/),
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
v42 = {
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
        (v7/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v43 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "variant",
  "storageKey": null
},
v44 = [
  (v17/*: any*/),
  (v7/*: any*/)
],
v45 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seeAllButtonLabel",
  "storageKey": null
},
v46 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showSeeAllButton",
  "storageKey": null
},
v47 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "selectionLimit",
  "storageKey": null
},
v48 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showEntityContext",
  "storageKey": null
},
v49 = [
  (v32/*: any*/),
  (v33/*: any*/),
  (v36/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "subtitle",
    "plural": false,
    "selections": (v31/*: any*/),
    "storageKey": null
  }
],
v50 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateEntityList",
  "kind": "LinkedField",
  "name": "entityList",
  "plural": false,
  "selections": [
    (v8/*: any*/),
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
                    (v7/*: any*/),
                    (v4/*: any*/),
                    (v21/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "CollectionContributionConnection",
                      "kind": "LinkedField",
                      "name": "contributions",
                      "plural": false,
                      "selections": (v28/*: any*/),
                      "storageKey": null
                    }
                  ],
                  "type": "Collection",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v7/*: any*/),
                    (v4/*: any*/),
                    (v21/*: any*/),
                    (v29/*: any*/)
                  ],
                  "type": "Item",
                  "abstractKey": null
                },
                (v10/*: any*/)
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
                  "selections": (v31/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TemplateSlotInlineInstance",
                  "kind": "LinkedField",
                  "name": "contextB",
                  "plural": false,
                  "selections": (v31/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TemplateSlotInlineInstance",
                  "kind": "LinkedField",
                  "name": "contextC",
                  "plural": false,
                  "selections": (v31/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TemplateSlotBlockInstance",
                  "kind": "LinkedField",
                  "name": "description",
                  "plural": false,
                  "selections": (v31/*: any*/),
                  "storageKey": null
                },
                (v32/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TemplateSlotInlineInstance",
                  "kind": "LinkedField",
                  "name": "metaA",
                  "plural": false,
                  "selections": (v31/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TemplateSlotInlineInstance",
                  "kind": "LinkedField",
                  "name": "metaB",
                  "plural": false,
                  "selections": (v31/*: any*/),
                  "storageKey": null
                },
                (v35/*: any*/)
              ],
              "storageKey": null
            },
            (v7/*: any*/)
          ],
          "storageKey": null
        },
        (v7/*: any*/)
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
                "concreteType": "HeroLayoutInstance",
                "kind": "LinkedField",
                "name": "hero",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "HeroTemplateFragment"
                  }
                ],
                "storageKey": null
              },
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
                "concreteType": "HeroLayoutInstance",
                "kind": "LinkedField",
                "name": "hero",
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
                      (v3/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/),
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
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "label",
                                "storageKey": null
                              },
                              (v5/*: any*/),
                              (v6/*: any*/),
                              (v7/*: any*/)
                            ],
                            "storageKey": null
                          },
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
                                "concreteType": "Ordering",
                                "kind": "LinkedField",
                                "name": "nodes",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "name",
                                    "storageKey": null
                                  },
                                  (v6/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "identifier",
                                    "storageKey": null
                                  },
                                  (v8/*: any*/),
                                  (v7/*: any*/)
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
                                      (v4/*: any*/),
                                      (v6/*: any*/),
                                      (v7/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v9/*: any*/)
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      (v10/*: any*/),
                      (v9/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v16/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "heroImageLayout",
                            "storageKey": null
                          }
                        ],
                        "type": "Community",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v16/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "HeroTemplateInstance",
                    "kind": "LinkedField",
                    "name": "template",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "HeroTemplateDefinition",
                        "kind": "LinkedField",
                        "name": "definition",
                        "plural": false,
                        "selections": [
                          (v17/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "descendantSearchPrompt",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "enableDescendantBrowsing",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "enableDescendantSearch",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "showBreadcrumbs",
                            "storageKey": null
                          },
                          (v18/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "showSharingLink",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "showSplitDisplay",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "showBigSearchPrompt",
                            "storageKey": null
                          },
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "showDOI",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "showISSN",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "showBasicViewMetrics",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "showThumbnailImage",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "listContributors",
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
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "doi",
                                "storageKey": null
                              }
                            ],
                            "type": "HasDOI",
                            "abstractKey": "__isHasDOI"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "issn",
                                "storageKey": null
                              }
                            ],
                            "type": "HasISSN",
                            "abstractKey": "__isHasISSN"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "AnalyticsEventCountSummary",
                                "kind": "LinkedField",
                                "name": "entityViews",
                                "plural": false,
                                "selections": (v19/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "AnalyticsEventCountSummary",
                                "kind": "LinkedField",
                                "name": "assetDownloads",
                                "plural": false,
                                "selections": (v19/*: any*/),
                                "storageKey": null
                              },
                              (v7/*: any*/),
                              (v4/*: any*/),
                              (v21/*: any*/),
                              (v6/*: any*/),
                              (v29/*: any*/)
                            ],
                            "type": "Item",
                            "abstractKey": null
                          },
                          (v10/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v7/*: any*/),
                              (v4/*: any*/),
                              (v21/*: any*/)
                            ],
                            "type": "Collection",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "HeroTemplateInstanceSlots",
                        "kind": "LinkedField",
                        "name": "slots",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "headerSidebar",
                            "plural": false,
                            "selections": (v31/*: any*/),
                            "storageKey": null
                          },
                          (v32/*: any*/),
                          (v33/*: any*/),
                          (v34/*: any*/),
                          (v35/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "subheaderAside",
                            "plural": false,
                            "selections": (v31/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "subheaderSummary",
                            "plural": false,
                            "selections": (v31/*: any*/),
                            "storageKey": null
                          },
                          (v36/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "callToAction",
                            "plural": false,
                            "selections": (v31/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
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
                                        "selections": (v39/*: any*/),
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
                                        "selections": (v39/*: any*/),
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "type": "Collection",
                                "abstractKey": null
                              },
                              (v10/*: any*/)
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
                              (v7/*: any*/)
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
                              (v32/*: any*/)
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
                              (v3/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v40/*: any*/),
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
                                    "selections": (v41/*: any*/),
                                    "storageKey": "schemaProperty(fullPath:\"body\")"
                                  },
                                  (v42/*: any*/)
                                ],
                                "type": "Item",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v40/*: any*/),
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
                                    "selections": (v41/*: any*/),
                                    "storageKey": "schemaProperty(fullPath:\"description\")"
                                  },
                                  (v42/*: any*/)
                                ],
                                "type": "Collection",
                                "abstractKey": null
                              },
                              (v10/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v42/*: any*/)
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
                              (v43/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "showAnnouncements",
                                "storageKey": null
                              },
                              (v18/*: any*/),
                              (v7/*: any*/)
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
                              (v32/*: any*/),
                              (v35/*: any*/),
                              (v34/*: any*/)
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
                            "selections": (v44/*: any*/),
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
                                "selections": (v31/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotInlineInstance",
                                "kind": "LinkedField",
                                "name": "previousLabel",
                                "plural": false,
                                "selections": (v31/*: any*/),
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
                            "selections": (v44/*: any*/),
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
                              (v43/*: any*/),
                              (v7/*: any*/),
                              (v17/*: any*/),
                              (v45/*: any*/),
                              (v46/*: any*/),
                              (v47/*: any*/),
                              (v48/*: any*/),
                              (v4/*: any*/)
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
                            "selections": (v49/*: any*/),
                            "storageKey": null
                          },
                          (v50/*: any*/)
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
                              (v45/*: any*/),
                              (v46/*: any*/),
                              (v47/*: any*/),
                              (v48/*: any*/),
                              (v4/*: any*/),
                              (v43/*: any*/),
                              (v7/*: any*/)
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
                            "selections": (v49/*: any*/),
                            "storageKey": null
                          },
                          (v50/*: any*/)
                        ],
                        "type": "LinkListTemplateInstance",
                        "abstractKey": null
                      },
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "764a3d2350b2b3b16345861eb1a86ddc",
    "id": null,
    "metadata": {},
    "name": "pageCollectionTemplateQuery",
    "operationKind": "query",
    "text": "query pageCollectionTemplateQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    layouts {\n      hero {\n        ...HeroTemplateFragment\n        id\n      }\n      main {\n        templates {\n          __typename\n          ...FactoryTemplatesFragment\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorBlockFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  role\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Contributor {\n      __isContributor: __typename\n      image {\n        ...ContributorAvatarFragment\n      }\n    }\n    ... on PersonContributor {\n      affiliation\n      orcid\n    }\n    ...ContributorNameFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      __typename\n      slug\n      id\n    }\n  }\n  ... on CollectionContribution {\n    collection {\n      __typename\n      slug\n      id\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on Paginated {\n  __isPaginated: __typename\n  ... on ItemContributionConnection {\n    nodes {\n      role\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on CollectionContributionConnection {\n    nodes {\n      role\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment ContributorsTemplateFragment on ContributorListTemplateInstance {\n  __typename\n  entity {\n    __typename\n    ... on Item {\n      contributions {\n        nodes {\n          ...ContributorBlockFragment\n          id\n        }\n      }\n    }\n    ... on Collection {\n      contributions {\n        nodes {\n          ...ContributorBlockFragment\n          id\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  contributorsDefinition: definition {\n    background\n    limit\n    id\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DOIFragment on HasDOI {\n  __isHasDOI: __typename\n  doi\n}\n\nfragment DescendantsTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on DescendantListTemplateInstance {\n    __typename\n    descendantsDefinition: definition {\n      variant\n      id\n    }\n  }\n  ...sharedListTemplateFragment\n}\n\nfragment DetailContentFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ... on Item {\n      slug\n      contributions {\n        ...ContributorsListFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    listContributors\n    id\n  }\n  slots {\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    subheaderAside {\n      ...sharedInlineSlotFragment\n    }\n    subheaderSummary {\n      ...sharedBlockSlotFragment\n    }\n    metadata {\n      ...sharedInlineSlotFragment\n    }\n    callToAction {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment DetailCoverImageFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    id\n    title\n    thumbnail {\n      ...CoverImageFragment\n    }\n  }\n  ... on Item {\n    id\n    title\n    thumbnail {\n      ...CoverImageFragment\n    }\n  }\n}\n\nfragment DetailHeroFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ...DetailCoverImageFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    showThumbnailImage\n    id\n  }\n  ...DetailContentFragment\n  ...DetailSidebarFragment\n}\n\nfragment DetailSidebarFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ...DOIFragment\n    ...ISSNFragment\n    ... on Item {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    showDOI\n    showISSN\n    showBasicViewMetrics\n    id\n  }\n  slots {\n    headerSidebar {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment DetailTemplateFragment on DetailTemplateInstance {\n  __typename\n  entity {\n    __typename\n    ...FullDetailFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  detailDefinition: definition {\n    background\n    variant\n    showAnnouncements\n    showHeroImage\n    id\n  }\n  ...SummaryDetailFragment\n}\n\nfragment DownloadCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment EntityAnnouncementsFragment on AnnouncementConnection {\n  nodes {\n    teaser\n    header\n    slug\n    id\n  }\n}\n\nfragment EntityNavBarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Entity {\n    __isEntity: __typename\n    title\n    ...EntityNavListFragment\n  }\n}\n\nfragment EntityNavListFragment on Entity {\n  __isEntity: __typename\n  __typename\n  orderings(availability: ENABLED) {\n    nodes {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment FactoryTemplatesFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on TemplateInstance {\n    __isTemplateInstance: __typename\n    templateKind\n  }\n  ... on ContributorListTemplateInstance {\n    ...ContributorsTemplateFragment\n  }\n  ... on DetailTemplateInstance {\n    ...DetailTemplateFragment\n  }\n  ... on OrderingTemplateInstance {\n    ...OrderingNavigationTemplateFragment\n  }\n  ... on PageListTemplateInstance {\n    ...PagesTemplateFragment\n  }\n  ...DescendantsTemplateFragment\n  ...LinksTemplateFragment\n}\n\nfragment FullDetailFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    thumbnail {\n      storage\n      ...ContentImageFragment\n    }\n    fullText: schemaProperty(fullPath: \"body\") {\n      __typename\n      ... on FullTextProperty {\n        fullText {\n          content\n        }\n      }\n      ...FullTextFragment\n    }\n  }\n  ... on Collection {\n    thumbnail {\n      storage\n      ...ContentImageFragment\n    }\n    fullText: schemaProperty(fullPath: \"description\") {\n      __typename\n      ... on FullTextProperty {\n        fullText {\n          content\n        }\n      }\n      ...FullTextFragment\n    }\n  }\n}\n\nfragment FullTextFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  ... on FullTextProperty {\n    fullText {\n      content\n      kind\n      lang\n    }\n    type\n  }\n}\n\nfragment HeaderHeroFragment on HeroTemplateInstance {\n  ...HeaderSidebarFragment\n  slots {\n    ...HeaderTitleBlockFragment\n  }\n}\n\nfragment HeaderSidebarFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ...DOIFragment\n    ...ISSNFragment\n    ... on Item {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    showDOI\n    showISSN\n    showBasicViewMetrics\n    id\n  }\n  slots {\n    headerSidebar {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment HeaderTitleBlockFragment on HeroTemplateInstanceSlots {\n  header {\n    ...sharedInlineSlotFragment\n  }\n  headerAside {\n    ...sharedInlineSlotFragment\n  }\n  summary {\n    ...sharedBlockSlotFragment\n  }\n}\n\nfragment HeroTemplateFragment on HeroLayoutInstance {\n  entity {\n    __typename\n    ...BreadcrumbsBarFragment\n    ...EntityNavBarFragment\n    ... on Community {\n      heroImage {\n        ...ImageHeroTemplateFragment\n      }\n      heroImageLayout\n    }\n    ... on Collection {\n      heroImage {\n        ...ImageHeroTemplateFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  template {\n    definition {\n      background\n      descendantSearchPrompt\n      enableDescendantBrowsing\n      enableDescendantSearch\n      showBreadcrumbs\n      showHeroImage\n      showSharingLink\n      showSplitDisplay\n      showBigSearchPrompt\n      id\n    }\n    ...HeaderHeroFragment\n    ...DetailHeroFragment\n    id\n  }\n}\n\nfragment ISSNFragment on HasISSN {\n  __isHasISSN: __typename\n  issn\n}\n\nfragment ImageHeroTemplateFragment on ImageAttachment {\n  storage\n  hero {\n    webp {\n      url\n      width\n      height\n    }\n  }\n  thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment LinksTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on LinkListTemplateInstance {\n    __typename\n    linksDefinition: definition {\n      variant\n      id\n    }\n  }\n  ...sharedListTemplateFragment\n}\n\nfragment NavButtonsFragment on OrderingTemplateInstanceSlots {\n  nextLabel {\n    ...sharedInlineSlotFragment\n  }\n  previousLabel {\n    ...sharedInlineSlotFragment\n  }\n}\n\nfragment OrderingNavigationTemplateFragment on OrderingTemplateInstance {\n  __typename\n  orderingDefinition: definition {\n    background\n    id\n  }\n  slots {\n    ...NavButtonsFragment\n  }\n}\n\nfragment PagesTemplateFragment on PageListTemplateInstance {\n  __typename\n  pagesDefinition: definition {\n    background\n    id\n  }\n}\n\nfragment SummaryDetailFragment on DetailTemplateInstance {\n  entity {\n    __typename\n    ... on Collection {\n      announcements {\n        ...EntityAnnouncementsFragment\n        nodes {\n          slug\n          id\n        }\n      }\n    }\n    ... on Community {\n      announcements {\n        ...EntityAnnouncementsFragment\n        nodes {\n          slug\n          id\n        }\n      }\n    }\n    ... on Item {\n      announcements {\n        ...EntityAnnouncementsFragment\n        nodes {\n          slug\n          id\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    summary {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment ViewCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment sharedBlockSlotFragment on TemplateSlotBlockInstance {\n  content\n  kind\n  valid\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  content\n  kind\n  valid\n}\n\nfragment sharedListItemTemplateFragment on ListItemTemplateInstance {\n  entity {\n    __typename\n    ... on Collection {\n      id\n      title\n      thumbnail {\n        ...CoverImageFragment\n      }\n      contributions {\n        ...ContributorsListFragment\n      }\n    }\n    ... on Item {\n      id\n      title\n      thumbnail {\n        ...CoverImageFragment\n      }\n      contributions {\n        ...ContributorsListFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  slots {\n    contextA {\n      ...sharedInlineSlotFragment\n    }\n    contextB {\n      ...sharedInlineSlotFragment\n    }\n    contextC {\n      ...sharedInlineSlotFragment\n    }\n    description {\n      ...sharedBlockSlotFragment\n    }\n    header {\n      ...sharedInlineSlotFragment\n    }\n    metaA {\n      ...sharedInlineSlotFragment\n    }\n    metaB {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment sharedListItemsTemplateFragment on TemplateEntityList {\n  listItemLayouts {\n    template {\n      ...sharedListItemTemplateFragment\n      id\n    }\n    id\n  }\n}\n\nfragment sharedListTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on LinkListTemplateInstance {\n    linksDefinition: definition {\n      background\n      seeAllButtonLabel\n      showSeeAllButton\n      selectionLimit\n      showEntityContext\n      title\n      variant\n      id\n    }\n    slots {\n      header {\n        ...sharedInlineSlotFragment\n      }\n      headerAside {\n        ...sharedInlineSlotFragment\n      }\n      metadata {\n        ...sharedInlineSlotFragment\n      }\n      subtitle {\n        ...sharedInlineSlotFragment\n      }\n    }\n    entityList {\n      count\n      empty\n      ...sharedListItemsTemplateFragment\n    }\n  }\n  ... on DescendantListTemplateInstance {\n    descendantsDefinition: definition {\n      background\n      seeAllButtonLabel\n      showSeeAllButton\n      selectionLimit\n      showEntityContext\n      title\n      variant\n      id\n    }\n    slots {\n      header {\n        ...sharedInlineSlotFragment\n      }\n      headerAside {\n        ...sharedInlineSlotFragment\n      }\n      metadata {\n        ...sharedInlineSlotFragment\n      }\n      subtitle {\n        ...sharedInlineSlotFragment\n      }\n    }\n    entityList {\n      count\n      empty\n      ...sharedListItemsTemplateFragment\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4c5bea64514447959bac75a129617ad7";

export default node;
