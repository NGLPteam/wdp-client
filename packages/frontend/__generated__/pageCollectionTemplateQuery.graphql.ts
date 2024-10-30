/**
 * @generated SignedSource<<8e3b40033bbac8e1b07a365bb49802f8>>
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
  "name": "lastRenderedAt",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "layoutKind",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "templateKind",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "background",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showHeroImage",
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
  "name": "kind",
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "content",
    "storageKey": null
  },
  (v8/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "valid",
    "storageKey": null
  }
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "header",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "headerAside",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotBlockInstance",
  "kind": "LinkedField",
  "name": "summary",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "subheader",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "metadata",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v16 = [
  (v5/*: any*/),
  (v7/*: any*/)
],
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "variant",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seeAllButtonLabel",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showSeeAllButton",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "selectionLimit",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showEntityContext",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v23 = [
  (v17/*: any*/),
  (v7/*: any*/),
  (v5/*: any*/),
  (v18/*: any*/),
  (v19/*: any*/),
  (v20/*: any*/),
  (v21/*: any*/),
  (v22/*: any*/)
],
v24 = [
  (v10/*: any*/),
  (v11/*: any*/),
  (v14/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "subtitle",
    "plural": false,
    "selections": (v9/*: any*/),
    "storageKey": null
  }
],
v25 = {
  "alias": null,
  "args": null,
  "concreteType": "DescendantListTemplateInstanceSlots",
  "kind": "LinkedField",
  "name": "slots",
  "plural": false,
  "selections": (v24/*: any*/),
  "storageKey": null
},
v26 = [
  (v5/*: any*/),
  (v18/*: any*/),
  (v19/*: any*/),
  (v20/*: any*/),
  (v21/*: any*/),
  (v22/*: any*/),
  (v17/*: any*/),
  (v7/*: any*/)
],
v27 = {
  "alias": null,
  "args": null,
  "concreteType": "LinkListTemplateInstanceSlots",
  "kind": "LinkedField",
  "name": "slots",
  "plural": false,
  "selections": (v24/*: any*/),
  "storageKey": null
},
v28 = {
  "kind": "InlineFragment",
  "selections": [
    (v7/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v30 = {
  "kind": "InlineFragment",
  "selections": [
    (v29/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v34 = {
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
            (v31/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "alt",
              "storageKey": null
            },
            (v32/*: any*/),
            (v33/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v35 = {
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
            (v31/*: any*/),
            (v32/*: any*/),
            (v33/*: any*/)
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
            (v31/*: any*/)
          ],
          "storageKey": null
        }
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
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "HeroTemplateInstance",
                    "kind": "LinkedField",
                    "name": "template",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "HeroTemplateDefinition",
                        "kind": "LinkedField",
                        "name": "definition",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
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
                          (v6/*: any*/),
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
                            "name": "showThumbnailImage",
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
                            "name": "listContributors",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "showBasicViewMetrics",
                            "storageKey": null
                          },
                          (v7/*: any*/)
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
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
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
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "sidebar",
                            "plural": false,
                            "selections": (v9/*: any*/),
                            "storageKey": null
                          },
                          (v13/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "subheaderAside",
                            "plural": false,
                            "selections": (v9/*: any*/),
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
                          (v14/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "callToAction",
                            "plural": false,
                            "selections": (v9/*: any*/),
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
                "concreteType": "NavigationLayoutInstance",
                "kind": "LinkedField",
                "name": "navigation",
                "plural": false,
                "selections": [
                  (v15/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "NavigationTemplateInstance",
                    "kind": "LinkedField",
                    "name": "template",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "NavigationTemplateDefinition",
                        "kind": "LinkedField",
                        "name": "definition",
                        "plural": false,
                        "selections": (v16/*: any*/),
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
                            "selections": (v9/*: any*/),
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
                      (v15/*: any*/),
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isAnyMainTemplateInstance"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/)
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
                              (v5/*: any*/),
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
                              (v10/*: any*/)
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
                                    "selections": (v23/*: any*/),
                                    "storageKey": null
                                  },
                                  (v25/*: any*/)
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
                                    "selections": (v26/*: any*/),
                                    "storageKey": null
                                  },
                                  (v27/*: any*/)
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
                              (v5/*: any*/),
                              (v17/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "showAnnouncements",
                                "storageKey": null
                              },
                              (v6/*: any*/),
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
                              (v10/*: any*/),
                              (v13/*: any*/),
                              (v12/*: any*/)
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
                                    "selections": (v23/*: any*/),
                                    "storageKey": null
                                  },
                                  (v27/*: any*/)
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
                                    "selections": (v26/*: any*/),
                                    "storageKey": null
                                  },
                                  (v25/*: any*/)
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
                            "selections": (v16/*: any*/),
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
                                "selections": (v9/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotInlineInstance",
                                "kind": "LinkedField",
                                "name": "previousLabel",
                                "plural": false,
                                "selections": (v9/*: any*/),
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
                            "selections": (v16/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "PageListTemplateInstance",
                        "abstractKey": null
                      },
                      (v28/*: any*/)
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
          (v7/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v15/*: any*/),
                  (v22/*: any*/),
                  (v30/*: any*/),
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
                      (v8/*: any*/),
                      (v29/*: any*/),
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
                          (v29/*: any*/),
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
                              (v22/*: any*/),
                              (v29/*: any*/),
                              (v7/*: any*/)
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
              (v30/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v22/*: any*/),
                  (v34/*: any*/),
                  (v35/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v22/*: any*/),
                  (v34/*: any*/),
                  (v29/*: any*/),
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
                              (v15/*: any*/),
                              {
                                "kind": "TypeDiscriminator",
                                "abstractKey": "__isAnyContributor"
                              },
                              (v30/*: any*/),
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
                          (v7/*: any*/)
                        ],
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
                  (v35/*: any*/),
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
    "cacheID": "3446a8e41dc9cf3f6346c30ce8bede27",
    "id": null,
    "metadata": {},
    "name": "pageCollectionTemplateQuery",
    "operationKind": "query",
    "text": "query pageCollectionTemplateQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    ...HeroTemplateFragment\n    layouts {\n      hero {\n        ...HeroTemplateLayoutFragment\n        id\n      }\n      navigation {\n        ...EntityNavigationTemplateFragment\n        id\n      }\n      main {\n        templates {\n          __typename\n          ...FactoryTemplatesFragment\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  nodes {\n    role\n    contributor {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ...ContributorNameFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment ContributorsTemplateFragment on ContributorListTemplateInstance {\n  __typename\n  contributorsDefinition: definition {\n    background\n    limit\n    id\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DescendantsTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on DescendantListTemplateInstance {\n    __typename\n    descendantsDefinition: definition {\n      variant\n      id\n    }\n  }\n  ...sharedListTemplateFragment\n}\n\nfragment DetailContentFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    slug\n    contributions {\n      ...ContributorsListFragment\n    }\n  }\n}\n\nfragment DetailContentLayoutFragment on HeroTemplateInstance {\n  definition {\n    listContributors\n    id\n  }\n  slots {\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    subheaderAside {\n      ...sharedInlineSlotFragment\n    }\n    subheaderSummary {\n      ...sharedBlockSlotFragment\n    }\n    metadata {\n      ...sharedInlineSlotFragment\n    }\n    callToAction {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment DetailCoverImageFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    id\n    title\n    thumbnail {\n      ...CoverImageFragment\n    }\n  }\n  ... on Item {\n    id\n    title\n    thumbnail {\n      ...CoverImageFragment\n    }\n  }\n}\n\nfragment DetailHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ...DetailCoverImageFragment\n  ...DetailContentFragment\n}\n\nfragment DetailHeroLayoutFragment on HeroTemplateInstance {\n  definition {\n    showThumbnailImage\n    id\n  }\n  slots {\n    sidebar {\n      ...sharedBlockSlotFragment\n    }\n  }\n  ...DetailContentLayoutFragment\n}\n\nfragment DetailTemplateFragment on DetailTemplateInstance {\n  __typename\n  detailDefinition: definition {\n    background\n    variant\n    showAnnouncements\n    showHeroImage\n    id\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    summary {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment EntityNavBarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Entity {\n    __isEntity: __typename\n    title\n    ...EntityNavListFragment\n  }\n}\n\nfragment EntityNavListFragment on Entity {\n  __isEntity: __typename\n  __typename\n  orderings(availability: ENABLED) {\n    nodes {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment EntityNavigationTemplateFragment on NavigationLayoutInstance {\n  __typename\n  lastRenderedAt\n  template {\n    layoutKind\n    templateKind\n    lastRenderedAt\n    definition {\n      background\n      id\n    }\n    slots {\n      entityLabel {\n        ...sharedInlineSlotFragment\n      }\n    }\n    id\n  }\n}\n\nfragment FactoryTemplatesFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on TemplateInstance {\n    __isTemplateInstance: __typename\n    templateKind\n  }\n  ... on ContributorListTemplateInstance {\n    ...ContributorsTemplateFragment\n  }\n  ... on DescendantListTemplateInstance {\n    ...DescendantsTemplateFragment\n  }\n  ... on DetailTemplateInstance {\n    ...DetailTemplateFragment\n  }\n  ... on LinkListTemplateInstance {\n    ...LinksTemplateFragment\n  }\n  ... on OrderingTemplateInstance {\n    ...OrderingNavigationTemplateFragment\n  }\n  ... on PageListTemplateInstance {\n    ...PagesTemplateFragment\n  }\n}\n\nfragment HeaderHeroFragment on HeroTemplateInstanceSlots {\n  ...HeaderTitleBlockFragment\n  headerSidebar {\n    ...sharedBlockSlotFragment\n  }\n}\n\nfragment HeaderTitleBlockFragment on HeroTemplateInstanceSlots {\n  header {\n    ...sharedInlineSlotFragment\n  }\n  headerAside {\n    ...sharedInlineSlotFragment\n  }\n  summary {\n    ...sharedBlockSlotFragment\n  }\n}\n\nfragment HeroTemplateFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ...BreadcrumbsBarFragment\n  ...EntityNavBarFragment\n  ...DetailHeroFragment\n  ... on Community {\n    heroImage {\n      ...ImageHeroTemplateFragment\n    }\n    heroImageLayout\n  }\n  ... on Collection {\n    heroImage {\n      ...ImageHeroTemplateFragment\n    }\n  }\n}\n\nfragment HeroTemplateLayoutFragment on HeroLayoutInstance {\n  lastRenderedAt\n  template {\n    layoutKind\n    templateKind\n    lastRenderedAt\n    definition {\n      background\n      descendantSearchPrompt\n      enableDescendantBrowsing\n      enableDescendantSearch\n      showBreadcrumbs\n      showDOI\n      showISSN\n      showHeroImage\n      showSharingLink\n      showSplitDisplay\n      showThumbnailImage\n      showBigSearchPrompt\n      listContributors\n      showBasicViewMetrics\n      id\n    }\n    slots {\n      ...HeaderHeroFragment\n    }\n    ...DetailHeroLayoutFragment\n    id\n  }\n}\n\nfragment ImageHeroTemplateFragment on ImageAttachment {\n  storage\n  hero {\n    webp {\n      url\n      width\n      height\n    }\n  }\n  thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment LinksTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on LinkListTemplateInstance {\n    __typename\n    linksDefinition: definition {\n      variant\n      id\n    }\n  }\n  ...sharedListTemplateFragment\n}\n\nfragment NavButtonsFragment on OrderingTemplateInstanceSlots {\n  nextLabel {\n    ...sharedInlineSlotFragment\n  }\n  previousLabel {\n    ...sharedInlineSlotFragment\n  }\n}\n\nfragment OrderingNavigationTemplateFragment on OrderingTemplateInstance {\n  __typename\n  orderingDefinition: definition {\n    background\n    id\n  }\n  slots {\n    ...NavButtonsFragment\n  }\n}\n\nfragment PagesTemplateFragment on PageListTemplateInstance {\n  __typename\n  pagesDefinition: definition {\n    background\n    id\n  }\n}\n\nfragment sharedBlockSlotFragment on TemplateSlotBlockInstance {\n  content\n  kind\n  valid\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  content\n  kind\n  valid\n}\n\nfragment sharedListTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on LinkListTemplateInstance {\n    linksDefinition: definition {\n      background\n      seeAllButtonLabel\n      showSeeAllButton\n      selectionLimit\n      showEntityContext\n      title\n      variant\n      id\n    }\n    slots {\n      header {\n        ...sharedInlineSlotFragment\n      }\n      headerAside {\n        ...sharedInlineSlotFragment\n      }\n      metadata {\n        ...sharedInlineSlotFragment\n      }\n      subtitle {\n        ...sharedInlineSlotFragment\n      }\n    }\n  }\n  ... on DescendantListTemplateInstance {\n    descendantsDefinition: definition {\n      background\n      seeAllButtonLabel\n      showSeeAllButton\n      selectionLimit\n      showEntityContext\n      title\n      variant\n      id\n    }\n    slots {\n      header {\n        ...sharedInlineSlotFragment\n      }\n      headerAside {\n        ...sharedInlineSlotFragment\n      }\n      metadata {\n        ...sharedInlineSlotFragment\n      }\n      subtitle {\n        ...sharedInlineSlotFragment\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7e427e3cb31c2e5f22fb43161396c020";

export default node;
