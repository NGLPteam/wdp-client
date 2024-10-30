/**
 * @generated SignedSource<<3905d7fea896c353f04e3bd8841f5c96>>
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
        readonly " $fragmentSpreads": FragmentRefs<"HeroTemplateLayoutFragment">;
      } | null | undefined;
      readonly main: {
        readonly templates: ReadonlyArray<{
          readonly " $fragmentSpreads": FragmentRefs<"FactoryTemplatesFragment">;
        }>;
      } | null | undefined;
      readonly navigation: {
        readonly " $fragmentSpreads": FragmentRefs<"EntityNavigationTemplateFragment">;
      } | null | undefined;
    };
    readonly " $fragmentSpreads": FragmentRefs<"HeroTemplateFragment">;
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
  "name": "background",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showHeroImage",
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
v6 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "content",
    "storageKey": null
  },
  (v5/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "valid",
    "storageKey": null
  }
],
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "header",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "headerAside",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotBlockInstance",
  "kind": "LinkedField",
  "name": "summary",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "subheader",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "metadata",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v13 = [
  (v2/*: any*/),
  (v4/*: any*/)
],
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "variant",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seeAllButtonLabel",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showSeeAllButton",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "selectionLimit",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showEntityContext",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v20 = [
  (v14/*: any*/),
  (v4/*: any*/),
  (v2/*: any*/),
  (v15/*: any*/),
  (v16/*: any*/),
  (v17/*: any*/),
  (v18/*: any*/),
  (v19/*: any*/)
],
v21 = [
  (v7/*: any*/),
  (v8/*: any*/),
  (v11/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "subtitle",
    "plural": false,
    "selections": (v6/*: any*/),
    "storageKey": null
  }
],
v22 = {
  "alias": null,
  "args": null,
  "concreteType": "DescendantListTemplateInstanceSlots",
  "kind": "LinkedField",
  "name": "slots",
  "plural": false,
  "selections": (v21/*: any*/),
  "storageKey": null
},
v23 = [
  (v2/*: any*/),
  (v15/*: any*/),
  (v16/*: any*/),
  (v17/*: any*/),
  (v18/*: any*/),
  (v19/*: any*/),
  (v14/*: any*/),
  (v4/*: any*/)
],
v24 = {
  "alias": null,
  "args": null,
  "concreteType": "LinkListTemplateInstanceSlots",
  "kind": "LinkedField",
  "name": "slots",
  "plural": false,
  "selections": (v21/*: any*/),
  "storageKey": null
},
v25 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v27 = {
  "kind": "InlineFragment",
  "selections": [
    (v26/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v31 = {
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
            (v28/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "alt",
              "storageKey": null
            },
            (v29/*: any*/),
            (v30/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v32 = {
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
      "kind": "ScalarField",
      "name": "storage",
      "storageKey": null
    },
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
            (v28/*: any*/),
            (v29/*: any*/),
            (v30/*: any*/)
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
v33 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  }
];
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "HeroTemplateFragment"
          },
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
                    "name": "HeroTemplateLayoutFragment"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "NavigationLayoutInstance",
                "kind": "LinkedField",
                "name": "navigation",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "EntityNavigationTemplateFragment"
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
                          (v3/*: any*/),
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
                          (v4/*: any*/),
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
                            "selections": (v6/*: any*/),
                            "storageKey": null
                          },
                          (v7/*: any*/),
                          (v8/*: any*/),
                          (v9/*: any*/),
                          (v10/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "subheaderAside",
                            "plural": false,
                            "selections": (v6/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "subheaderSummary",
                            "plural": false,
                            "selections": (v6/*: any*/),
                            "storageKey": null
                          },
                          (v11/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "callToAction",
                            "plural": false,
                            "selections": (v6/*: any*/),
                            "storageKey": null
                          }
                        ],
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
              {
                "alias": null,
                "args": null,
                "concreteType": "NavigationLayoutInstance",
                "kind": "LinkedField",
                "name": "navigation",
                "plural": false,
                "selections": [
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "NavigationTemplateInstance",
                    "kind": "LinkedField",
                    "name": "template",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "NavigationTemplateDefinition",
                        "kind": "LinkedField",
                        "name": "definition",
                        "plural": false,
                        "selections": (v13/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "NavigationTemplateInstanceSlots",
                        "kind": "LinkedField",
                        "name": "slots",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "entityLabel",
                            "plural": false,
                            "selections": (v6/*: any*/),
                            "storageKey": null
                          }
                        ],
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
                      (v12/*: any*/),
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
                            "alias": "contributorsDefinition",
                            "args": null,
                            "concreteType": "ContributorListTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "limit",
                                "storageKey": null
                              },
                              (v4/*: any*/)
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
                              (v7/*: any*/)
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
                            "kind": "InlineFragment",
                            "selections": [
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
                                    "selections": (v20/*: any*/),
                                    "storageKey": null
                                  },
                                  (v22/*: any*/)
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
                                    "selections": (v23/*: any*/),
                                    "storageKey": null
                                  },
                                  (v24/*: any*/)
                                ],
                                "type": "LinkListTemplateInstance",
                                "abstractKey": null
                              }
                            ],
                            "type": "AnyMainTemplateInstance",
                            "abstractKey": "__isAnyMainTemplateInstance"
                          }
                        ],
                        "type": "DescendantListTemplateInstance",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": "detailDefinition",
                            "args": null,
                            "concreteType": "DetailTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v14/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "showAnnouncements",
                                "storageKey": null
                              },
                              (v3/*: any*/),
                              (v4/*: any*/)
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
                              (v7/*: any*/),
                              (v10/*: any*/),
                              (v9/*: any*/)
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
                            "kind": "InlineFragment",
                            "selections": [
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
                                    "selections": (v20/*: any*/),
                                    "storageKey": null
                                  },
                                  (v24/*: any*/)
                                ],
                                "type": "LinkListTemplateInstance",
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
                                    "selections": (v23/*: any*/),
                                    "storageKey": null
                                  },
                                  (v22/*: any*/)
                                ],
                                "type": "DescendantListTemplateInstance",
                                "abstractKey": null
                              }
                            ],
                            "type": "AnyMainTemplateInstance",
                            "abstractKey": "__isAnyMainTemplateInstance"
                          }
                        ],
                        "type": "LinkListTemplateInstance",
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
                            "selections": (v13/*: any*/),
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
                                "selections": (v6/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotInlineInstance",
                                "kind": "LinkedField",
                                "name": "previousLabel",
                                "plural": false,
                                "selections": (v6/*: any*/),
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
                            "selections": (v13/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "PageListTemplateInstance",
                        "abstractKey": null
                      },
                      (v25/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v12/*: any*/),
                  (v19/*: any*/),
                  (v27/*: any*/),
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
                      (v26/*: any*/),
                      (v4/*: any*/)
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
                          (v26/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "identifier",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "count",
                            "storageKey": null
                          },
                          (v4/*: any*/)
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
                              (v19/*: any*/),
                              (v26/*: any*/),
                              (v4/*: any*/)
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
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isNode"
              },
              (v27/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v19/*: any*/),
                  (v31/*: any*/),
                  (v32/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v19/*: any*/),
                  (v31/*: any*/),
                  (v26/*: any*/),
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
                              (v12/*: any*/),
                              {
                                "kind": "TypeDiscriminator",
                                "abstractKey": "__isAnyContributor"
                              },
                              (v27/*: any*/),
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
                              (v25/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnalyticsEventCountSummary",
                    "kind": "LinkedField",
                    "name": "entityViews",
                    "plural": false,
                    "selections": (v33/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnalyticsEventCountSummary",
                    "kind": "LinkedField",
                    "name": "assetDownloads",
                    "plural": false,
                    "selections": (v33/*: any*/),
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
                  (v32/*: any*/),
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
    "cacheID": "919b34ace4b25f23775e8e911a432e9a",
    "id": null,
    "metadata": {},
    "name": "pageCollectionTemplateQuery",
    "operationKind": "query",
    "text": "query pageCollectionTemplateQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    ...HeroTemplateFragment\n    layouts {\n      hero {\n        ...HeroTemplateLayoutFragment\n        id\n      }\n      navigation {\n        ...EntityNavigationTemplateFragment\n        id\n      }\n      main {\n        templates {\n          __typename\n          ...FactoryTemplatesFragment\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  nodes {\n    role\n    contributor {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ...ContributorNameFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment ContributorsTemplateFragment on ContributorListTemplateInstance {\n  __typename\n  contributorsDefinition: definition {\n    background\n    limit\n    id\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DOIFragment on HasDOI {\n  __isHasDOI: __typename\n  doi\n}\n\nfragment DescendantsTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on DescendantListTemplateInstance {\n    __typename\n    descendantsDefinition: definition {\n      variant\n      id\n    }\n  }\n  ...sharedListTemplateFragment\n}\n\nfragment DetailContentFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    slug\n    contributions {\n      ...ContributorsListFragment\n    }\n  }\n}\n\nfragment DetailContentLayoutFragment on HeroTemplateInstance {\n  definition {\n    listContributors\n    id\n  }\n  slots {\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    subheaderAside {\n      ...sharedInlineSlotFragment\n    }\n    subheaderSummary {\n      ...sharedBlockSlotFragment\n    }\n    metadata {\n      ...sharedInlineSlotFragment\n    }\n    callToAction {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment DetailCoverImageFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    id\n    title\n    thumbnail {\n      ...CoverImageFragment\n    }\n  }\n  ... on Item {\n    id\n    title\n    thumbnail {\n      ...CoverImageFragment\n    }\n  }\n}\n\nfragment DetailHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ...DetailCoverImageFragment\n  ...DetailContentFragment\n  ...DetailSidebarFragment\n}\n\nfragment DetailHeroLayoutFragment on HeroTemplateInstance {\n  definition {\n    showThumbnailImage\n    id\n  }\n  ...DetailContentLayoutFragment\n  ...DetailSidebarLayoutFragment\n}\n\nfragment DetailSidebarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ...DOIFragment\n  ...ISSNFragment\n  ... on Item {\n    entityViews {\n      ...ViewCountFragment\n    }\n    assetDownloads {\n      ...DownloadCountFragment\n    }\n  }\n}\n\nfragment DetailSidebarLayoutFragment on HeroTemplateInstance {\n  definition {\n    showDOI\n    showISSN\n    showBasicViewMetrics\n    id\n  }\n  slots {\n    headerSidebar {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment DetailTemplateFragment on DetailTemplateInstance {\n  __typename\n  detailDefinition: definition {\n    background\n    variant\n    showAnnouncements\n    showHeroImage\n    id\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    summary {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment DownloadCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment EntityNavBarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Entity {\n    __isEntity: __typename\n    title\n    ...EntityNavListFragment\n  }\n}\n\nfragment EntityNavListFragment on Entity {\n  __isEntity: __typename\n  __typename\n  orderings(availability: ENABLED) {\n    nodes {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment EntityNavigationTemplateFragment on NavigationLayoutInstance {\n  __typename\n  template {\n    definition {\n      background\n      id\n    }\n    slots {\n      ...NavigationTabsFragment\n    }\n    id\n  }\n}\n\nfragment FactoryTemplatesFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on TemplateInstance {\n    __isTemplateInstance: __typename\n    templateKind\n  }\n  ... on ContributorListTemplateInstance {\n    ...ContributorsTemplateFragment\n  }\n  ... on DescendantListTemplateInstance {\n    ...DescendantsTemplateFragment\n  }\n  ... on DetailTemplateInstance {\n    ...DetailTemplateFragment\n  }\n  ... on LinkListTemplateInstance {\n    ...LinksTemplateFragment\n  }\n  ... on OrderingTemplateInstance {\n    ...OrderingNavigationTemplateFragment\n  }\n  ... on PageListTemplateInstance {\n    ...PagesTemplateFragment\n  }\n}\n\nfragment HeaderHeroFragment on HeroTemplateInstance {\n  ...HeaderSidebarHeroLayoutFragment\n  slots {\n    ...HeaderTitleBlockFragment\n  }\n}\n\nfragment HeaderSidebarHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ...DOIFragment\n  ...ISSNFragment\n  ... on Item {\n    entityViews {\n      ...ViewCountFragment\n    }\n    assetDownloads {\n      ...DownloadCountFragment\n    }\n  }\n}\n\nfragment HeaderSidebarHeroLayoutFragment on HeroTemplateInstance {\n  definition {\n    showDOI\n    showISSN\n    showBasicViewMetrics\n    id\n  }\n  slots {\n    headerSidebar {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment HeaderTitleBlockFragment on HeroTemplateInstanceSlots {\n  header {\n    ...sharedInlineSlotFragment\n  }\n  headerAside {\n    ...sharedInlineSlotFragment\n  }\n  summary {\n    ...sharedBlockSlotFragment\n  }\n}\n\nfragment HeroTemplateFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ...BreadcrumbsBarFragment\n  ...EntityNavBarFragment\n  ...DetailHeroFragment\n  ... on Community {\n    heroImage {\n      ...ImageHeroTemplateFragment\n    }\n    heroImageLayout\n  }\n  ... on Collection {\n    heroImage {\n      ...ImageHeroTemplateFragment\n    }\n  }\n  ...HeaderSidebarHeroFragment\n  ...DetailSidebarFragment\n}\n\nfragment HeroTemplateLayoutFragment on HeroLayoutInstance {\n  template {\n    definition {\n      background\n      descendantSearchPrompt\n      enableDescendantBrowsing\n      enableDescendantSearch\n      showBreadcrumbs\n      showHeroImage\n      showSharingLink\n      showSplitDisplay\n      showBigSearchPrompt\n      id\n    }\n    ...HeaderHeroFragment\n    ...DetailHeroLayoutFragment\n    id\n  }\n}\n\nfragment ISSNFragment on HasISSN {\n  __isHasISSN: __typename\n  issn\n}\n\nfragment ImageHeroTemplateFragment on ImageAttachment {\n  storage\n  hero {\n    webp {\n      url\n      width\n      height\n    }\n  }\n  thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment LinksTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on LinkListTemplateInstance {\n    __typename\n    linksDefinition: definition {\n      variant\n      id\n    }\n  }\n  ...sharedListTemplateFragment\n}\n\nfragment NavButtonsFragment on OrderingTemplateInstanceSlots {\n  nextLabel {\n    ...sharedInlineSlotFragment\n  }\n  previousLabel {\n    ...sharedInlineSlotFragment\n  }\n}\n\nfragment NavigationTabsFragment on NavigationTemplateInstanceSlots {\n  entityLabel {\n    ...sharedInlineSlotFragment\n  }\n}\n\nfragment OrderingNavigationTemplateFragment on OrderingTemplateInstance {\n  __typename\n  orderingDefinition: definition {\n    background\n    id\n  }\n  slots {\n    ...NavButtonsFragment\n  }\n}\n\nfragment PagesTemplateFragment on PageListTemplateInstance {\n  __typename\n  pagesDefinition: definition {\n    background\n    id\n  }\n}\n\nfragment ViewCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment sharedBlockSlotFragment on TemplateSlotBlockInstance {\n  content\n  kind\n  valid\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  content\n  kind\n  valid\n}\n\nfragment sharedListTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on LinkListTemplateInstance {\n    linksDefinition: definition {\n      background\n      seeAllButtonLabel\n      showSeeAllButton\n      selectionLimit\n      showEntityContext\n      title\n      variant\n      id\n    }\n    slots {\n      header {\n        ...sharedInlineSlotFragment\n      }\n      headerAside {\n        ...sharedInlineSlotFragment\n      }\n      metadata {\n        ...sharedInlineSlotFragment\n      }\n      subtitle {\n        ...sharedInlineSlotFragment\n      }\n    }\n  }\n  ... on DescendantListTemplateInstance {\n    descendantsDefinition: definition {\n      background\n      seeAllButtonLabel\n      showSeeAllButton\n      selectionLimit\n      showEntityContext\n      title\n      variant\n      id\n    }\n    slots {\n      header {\n        ...sharedInlineSlotFragment\n      }\n      headerAside {\n        ...sharedInlineSlotFragment\n      }\n      metadata {\n        ...sharedInlineSlotFragment\n      }\n      subtitle {\n        ...sharedInlineSlotFragment\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7e427e3cb31c2e5f22fb43161396c020";

export default node;
