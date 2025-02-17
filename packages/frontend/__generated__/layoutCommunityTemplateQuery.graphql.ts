/**
 * @generated SignedSource<<c8635706c95478d98032d19c04e6c523>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type layoutCommunityTemplateQuery$variables = {
  slug: string;
};
export type layoutCommunityTemplateQuery$data = {
  readonly community: {
    readonly layouts: {
      readonly hero: {
        readonly template: {
          readonly definition: {
            readonly enableDescendantBrowsing: boolean | null | undefined;
          };
        } | null | undefined;
        readonly " $fragmentSpreads": FragmentRefs<"HeroTemplateFragment">;
      } | null | undefined;
    };
    readonly " $fragmentSpreads": FragmentRefs<"CommunityContextFragment" | "CommunityNavBarEntityFragment" | "CommunityNavBarFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"AppBodyFragment">;
};
export type layoutCommunityTemplateQuery = {
  response: layoutCommunityTemplateQuery$data;
  variables: layoutCommunityTemplateQuery$variables;
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
  "name": "enableDescendantBrowsing",
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
  "name": "empty",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "valid",
  "storageKey": null
},
v8 = [
  (v4/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hidesTemplate",
    "storageKey": null
  }
],
v9 = [
  (v4/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v12 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  }
],
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "AnalyticsEventCountSummary",
  "kind": "LinkedField",
  "name": "entityViews",
  "plural": false,
  "selections": (v12/*: any*/),
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "AnalyticsEventCountSummary",
  "kind": "LinkedField",
  "name": "assetDownloads",
  "plural": false,
  "selections": (v12/*: any*/),
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
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
v19 = {
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
            (v11/*: any*/),
            (v16/*: any*/),
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
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v22 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v23 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ControlledVocabularyItem",
    "kind": "LinkedField",
    "name": "roles",
    "plural": true,
    "selections": [
      (v21/*: any*/),
      (v3/*: any*/)
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
      (v10/*: any*/),
      (v20/*: any*/),
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
      (v22/*: any*/)
    ],
    "storageKey": null
  },
  (v3/*: any*/)
],
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    (v24/*: any*/),
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
            (v11/*: any*/),
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
            (v11/*: any*/)
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
    "name": "currentlyHidden",
    "storageKey": null
  },
  (v25/*: any*/),
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
      },
      (v3/*: any*/)
    ],
    "storageKey": null
  }
],
v27 = {
  "kind": "InlineFragment",
  "selections": [
    (v20/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v28 = [
  (v20/*: any*/),
  (v15/*: any*/),
  (v3/*: any*/)
],
v29 = [
  {
    "kind": "Literal",
    "name": "order",
    "value": "POSITION_ASCENDING"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "layoutCommunityTemplateQuery",
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
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "HeroTemplateFragment"
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
            "name": "CommunityNavBarFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityNavBarEntityFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityContextFragment"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AppBodyFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "layoutCommunityTemplateQuery",
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
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "showHeroImage",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "showBigSearchPrompt",
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
                            "name": "background",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "showBreadcrumbs",
                            "storageKey": null
                          },
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
                      (v3/*: any*/),
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
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "bigSearchPrompt",
                            "plural": false,
                            "selections": (v8/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "header",
                            "plural": false,
                            "selections": (v8/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "headerSummary",
                            "plural": false,
                            "selections": (v9/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "headerSidebar",
                            "plural": false,
                            "selections": (v9/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "headerAside",
                            "plural": false,
                            "selections": (v8/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "subheader",
                            "plural": false,
                            "selections": (v8/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "subheaderAside",
                            "plural": false,
                            "selections": (v8/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "subheaderSummary",
                            "plural": false,
                            "selections": (v9/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "metadata",
                            "plural": false,
                            "selections": (v8/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "callToAction",
                            "plural": false,
                            "selections": (v9/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "sidebar",
                            "plural": false,
                            "selections": (v9/*: any*/),
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
                          (v10/*: any*/),
                          {
                            "kind": "TypeDiscriminator",
                            "abstractKey": "__isAnyEntity"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
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
                                  },
                                  (v11/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "HasDOI",
                            "abstractKey": "__isHasDOI"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v13/*: any*/),
                              (v14/*: any*/),
                              (v3/*: any*/),
                              (v15/*: any*/),
                              (v19/*: any*/),
                              (v20/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ItemAttribution",
                                        "kind": "LinkedField",
                                        "name": "attributions",
                                        "plural": true,
                                        "selections": (v23/*: any*/),
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
                                        "concreteType": "CollectionAttribution",
                                        "kind": "LinkedField",
                                        "name": "attributions",
                                        "plural": true,
                                        "selections": (v23/*: any*/),
                                        "storageKey": null
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
                            "type": "Item",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v13/*: any*/),
                              (v14/*: any*/),
                              (v3/*: any*/),
                              (v15/*: any*/),
                              (v19/*: any*/)
                            ],
                            "type": "Collection",
                            "abstractKey": null
                          },
                          (v22/*: any*/)
                        ],
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
                      (v10/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v25/*: any*/),
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
                      (v22/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v26/*: any*/),
                        "type": "Collection",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v26/*: any*/),
                        "type": "Item",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v15/*: any*/),
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
                              (v21/*: any*/),
                              (v6/*: any*/),
                              (v20/*: any*/),
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v27/*: any*/)
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      }
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
          (v15/*: any*/),
          (v20/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "logo",
            "plural": false,
            "selections": [
              (v24/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageOriginal",
                "kind": "LinkedField",
                "name": "original",
                "plural": false,
                "selections": [
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v11/*: any*/)
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
              (v20/*: any*/),
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
                "name": "count",
                "storageKey": null
              },
              (v6/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
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
                    "selections": (v28/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v10/*: any*/),
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
                      (v10/*: any*/),
                      (v27/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v15/*: any*/)
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      (v22/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/)
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
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v29/*: any*/),
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": [
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
                "name": "totalCount",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "communities(order:\"POSITION_ASCENDING\")"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "GlobalConfiguration",
        "kind": "LinkedField",
        "name": "globalConfiguration",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SiteSettings",
            "kind": "LinkedField",
            "name": "site",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "logoMode",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "installationName",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SiteLogoAttachment",
            "kind": "LinkedField",
            "name": "logo",
            "plural": false,
            "selections": [
              (v24/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageOriginal",
                "kind": "LinkedField",
                "name": "original",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "originalFilename",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v16/*: any*/),
                      (v11/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/)
                    ],
                    "type": "Image",
                    "abstractKey": "__isImage"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageSize",
                "kind": "LinkedField",
                "name": "sansText",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "size",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageDerivative",
                    "kind": "LinkedField",
                    "name": "webp",
                    "plural": false,
                    "selections": [
                      (v17/*: any*/),
                      (v18/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v16/*: any*/),
                          (v11/*: any*/)
                        ],
                        "type": "Image",
                        "abstractKey": "__isImage"
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
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "pickerCommunities",
        "args": (v29/*: any*/),
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CommunityEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Community",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": (v28/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "communities(order:\"POSITION_ASCENDING\")"
      }
    ]
  },
  "params": {
    "cacheID": "af11153a5483f2c6dd2332552323390a",
    "id": null,
    "metadata": {},
    "name": "layoutCommunityTemplateQuery",
    "operationKind": "query",
    "text": "query layoutCommunityTemplateQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    layouts {\n      hero {\n        template {\n          definition {\n            enableDescendantBrowsing\n            id\n          }\n          id\n        }\n        ...HeroTemplateFragment\n        id\n      }\n    }\n    ...CommunityNavBarFragment\n    ...CommunityNavBarEntityFragment\n    ...CommunityContextFragment\n    id\n  }\n  ...AppBodyFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterFragment on Query {\n  communities(order: POSITION_ASCENDING) {\n    pageInfo {\n      totalCount\n    }\n  }\n  globalConfiguration {\n    ...InstallationNameFragment\n    id\n  }\n  ...CommunityPickerFragment\n}\n\nfragment AppHeaderFragment on Query {\n  communities(order: POSITION_ASCENDING) {\n    pageInfo {\n      totalCount\n    }\n  }\n  globalConfiguration {\n    site {\n      logoMode\n    }\n    ...InstallationNameFragment\n    id\n  }\n  ...CommunityPickerFragment\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment CommunityContextFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n  ...CommunityPickerCommunityNameFragment\n}\n\nfragment CommunityHeroHeaderFragment on HeroLayoutInstance {\n  entity {\n    __typename\n    ... on Community {\n      heroImage {\n        ...ImageHeroTemplateFragment\n        hero {\n          webp {\n            url\n          }\n        }\n      }\n      heroImageLayout\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  template {\n    definition {\n      showHeroImage\n      showBigSearchPrompt\n      id\n    }\n    slots {\n      bigSearchPrompt {\n        ...sharedInlineSlotFragment\n      }\n      header {\n        empty\n      }\n      headerSummary {\n        empty\n      }\n    }\n    ...HeaderHeroFragment\n    id\n  }\n}\n\nfragment CommunityLogoFragment on ImageAttachment {\n  storage\n  original {\n    url\n    width\n    height\n  }\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n  logo {\n    storage\n    original {\n      width\n      height\n    }\n    ...CommunityLogoFragment\n  }\n}\n\nfragment CommunityNavBarEntityFragment on Entity {\n  __isEntity: __typename\n  ...SearchButtonFragment\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n}\n\nfragment CommunityNavListContentFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    kind\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityNavListFragment on Community {\n  ...CommunityNavListContentFragment\n}\n\nfragment CommunityPickerCommunityNameFragment on Community {\n  title\n}\n\nfragment CommunityPickerFragment on Query {\n  pickerCommunities: communities(order: POSITION_ASCENDING) {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    attributions {\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        slug\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on Collection {\n    attributions {\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        slug\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DOIFragment on HasDOI {\n  __isHasDOI: __typename\n  doiData {\n    doi\n    url\n  }\n}\n\nfragment DetailContentFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ... on Item {\n      slug\n      ...ContributorsListFragment\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    listContributors\n    id\n  }\n  slots {\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    subheaderAside {\n      ...sharedInlineSlotFragment\n    }\n    subheaderSummary {\n      ...sharedBlockSlotFragment\n    }\n    metadata {\n      ...sharedInlineSlotFragment\n    }\n    callToAction {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment DetailCoverImageFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    id\n    title\n    thumbnail {\n      ...CoverImageFragment\n    }\n  }\n  ... on Item {\n    id\n    title\n    thumbnail {\n      ...CoverImageFragment\n    }\n  }\n}\n\nfragment DetailHeroFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ...DetailCoverImageFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    showThumbnailImage\n    id\n  }\n  ...DetailContentFragment\n  ...DetailSidebarFragment\n}\n\nfragment DetailSidebarFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ... on Item {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Collection {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    showBasicViewMetrics\n    id\n  }\n  slots {\n    sidebar {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment DownloadCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment EntityHeroHeaderFragment on HeroLayoutInstance {\n  entity {\n    __typename\n    ... on Collection {\n      __typename\n      visibility\n      currentlyHidden\n      heroImage {\n        ...ImageHeroTemplateFragment\n      }\n      schemaDefinition {\n        identifier\n        id\n      }\n    }\n    ... on Item {\n      __typename\n      visibility\n      currentlyHidden\n      heroImage {\n        ...ImageHeroTemplateFragment\n      }\n      schemaDefinition {\n        identifier\n        id\n      }\n    }\n    ...BreadcrumbsBarFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  template {\n    definition {\n      background\n      showHeroImage\n      showBreadcrumbs\n      showSharingLink\n      showSplitDisplay\n      id\n    }\n    ...HeaderHeroFragment\n    ...DetailHeroFragment\n    id\n  }\n}\n\nfragment HeaderHeroFragment on HeroTemplateInstance {\n  definition {\n    showSplitDisplay\n    id\n  }\n  ...HeaderSidebarFragment\n  ...HeaderTitleBlockFragment\n}\n\nfragment HeaderSidebarFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ... on HasDOI {\n      __isHasDOI: __typename\n      doiData {\n        doi\n      }\n    }\n    ...DOIFragment\n    ... on Item {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Collection {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    showDOI\n    showISSN\n    showBasicViewMetrics\n    showSplitDisplay\n    id\n  }\n  slots {\n    headerSidebar {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment HeaderTitleBlockFragment on HeroTemplateInstance {\n  definition {\n    showSplitDisplay\n    id\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n    headerAside {\n      ...sharedInlineSlotFragment\n    }\n    headerSummary {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment HeroTemplateFragment on HeroLayoutInstance {\n  entity {\n    __typename\n    ... on Community {\n      __typename\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ...CommunityHeroHeaderFragment\n  ...EntityHeroHeaderFragment\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment ImageHeroTemplateFragment on ImageAttachment {\n  storage\n  hero {\n    webp {\n      url\n      width\n      height\n    }\n  }\n  thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment InstallationNameFragment on GlobalConfiguration {\n  site {\n    installationName\n    logoMode\n  }\n  logo {\n    storage\n    original {\n      originalFilename\n      ...ImageFragment\n    }\n    sansText {\n      size\n      webp {\n        width\n        height\n        ...ImageFragment\n      }\n    }\n  }\n}\n\nfragment SearchButtonFragment on Entity {\n  __isEntity: __typename\n  ...SearchModalFragment\n}\n\nfragment SearchModalFragment on Entity {\n  __isEntity: __typename\n  __typename\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  title\n  breadcrumbs {\n    crumb {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment ViewCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment sharedBlockSlotFragment on TemplateSlotBlockInstance {\n  empty\n  content\n  kind\n  valid\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  empty\n  content\n  kind\n  valid\n  hidesTemplate\n}\n"
  }
};
})();

(node as any).hash = "5d7fb08465909641c6b2f514e5fff276";

export default node;
