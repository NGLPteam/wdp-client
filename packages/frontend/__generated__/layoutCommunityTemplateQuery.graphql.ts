/**
 * @generated SignedSource<<8674cf1402c4803152af3cb3f7cf432c>>
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
      readonly " $fragmentSpreads": FragmentRefs<"ProcessingCheckFragment">;
    };
    readonly " $fragmentSpreads": FragmentRefs<"CommunityNavBarEntityFragment" | "CommunityNavBarFragment" | "SetCommunityFragment">;
  } | null | undefined;
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
  "name": "slug",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v18 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v19 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ControlledVocabularyItem",
    "kind": "LinkedField",
    "name": "roles",
    "plural": true,
    "selections": [
      (v17/*: any*/),
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
      (v16/*: any*/),
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
      (v18/*: any*/)
    ],
    "storageKey": null
  },
  (v3/*: any*/)
],
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "ItemAttribution",
  "kind": "LinkedField",
  "name": "attributions",
  "plural": true,
  "selections": (v19/*: any*/),
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v24 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v11/*: any*/),
      (v21/*: any*/),
      (v22/*: any*/),
      (v23/*: any*/)
    ],
    "storageKey": null
  }
],
v25 = {
  "alias": "image",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "medium",
  "plural": false,
  "selections": (v24/*: any*/),
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
    (v25/*: any*/)
  ],
  "storageKey": null
},
v27 = [
  (v26/*: any*/)
],
v28 = {
  "kind": "InlineFragment",
  "selections": (v27/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v29 = {
  "kind": "InlineFragment",
  "selections": [
    (v20/*: any*/),
    (v26/*: any*/),
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
            (v28/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": (v27/*: any*/),
              "type": "Item",
              "abstractKey": null
            },
            (v18/*: any*/)
          ],
          "storageKey": null
        },
        (v3/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Item",
  "abstractKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "concreteType": "CollectionAttribution",
  "kind": "LinkedField",
  "name": "attributions",
  "plural": true,
  "selections": (v19/*: any*/),
  "storageKey": null
},
v31 = {
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
        (v28/*: any*/),
        (v18/*: any*/)
      ],
      "storageKey": null
    },
    (v3/*: any*/)
  ],
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "hero",
  "plural": false,
  "selections": (v24/*: any*/),
  "storageKey": null
},
v34 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v11/*: any*/),
      (v22/*: any*/)
    ],
    "storageKey": null
  }
],
v35 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "large",
  "plural": false,
  "selections": (v34/*: any*/),
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "medium",
  "plural": false,
  "selections": (v34/*: any*/),
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v38 = [
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
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "heroImage",
    "plural": false,
    "selections": [
      (v32/*: any*/),
      (v33/*: any*/),
      (v35/*: any*/),
      (v36/*: any*/)
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "SchemaDefinition",
    "kind": "LinkedField",
    "name": "schemaDefinition",
    "plural": false,
    "selections": [
      (v37/*: any*/),
      (v3/*: any*/)
    ],
    "storageKey": null
  }
],
v39 = {
  "kind": "InlineFragment",
  "selections": [
    (v16/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
};
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
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ProcessingCheckFragment"
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
            "name": "SetCommunityFragment"
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
                            "name": "showBasicViewMetrics",
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
                            "name": "showThumbnailImage",
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
                            "name": "headerSubtitle",
                            "plural": false,
                            "selections": (v8/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "headerParent",
                            "plural": false,
                            "selections": (v8/*: any*/),
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
                            "name": "subheaderSubtitle",
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
                              (v16/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v29/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v30/*: any*/),
                                      (v26/*: any*/),
                                      (v31/*: any*/)
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
                              (v16/*: any*/),
                              (v15/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": [
                                  (v32/*: any*/),
                                  {
                                    "alias": null,
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
                                          (v22/*: any*/),
                                          (v23/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  (v25/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v29/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v30/*: any*/),
                                      (v31/*: any*/)
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
                          (v18/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v20/*: any*/)
                                    ],
                                    "type": "Item",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v30/*: any*/)
                                    ],
                                    "type": "Collection",
                                    "abstractKey": null
                                  }
                                ],
                                "type": "AnyEntity",
                                "abstractKey": "__isAnyEntity"
                              }
                            ],
                            "type": "Community",
                            "abstractKey": null
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
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "entity",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ImageAttachment",
                            "kind": "LinkedField",
                            "name": "heroImage",
                            "plural": false,
                            "selections": [
                              (v33/*: any*/),
                              (v35/*: any*/),
                              (v36/*: any*/)
                            ],
                            "storageKey": null
                          },
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
                      (v18/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v38/*: any*/),
                        "type": "Collection",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v38/*: any*/),
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
                              (v17/*: any*/),
                              (v6/*: any*/),
                              (v16/*: any*/),
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v39/*: any*/)
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
                    "kind": "ScalarField",
                    "name": "allHidden",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "templates",
                    "plural": true,
                    "selections": [
                      (v10/*: any*/),
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isTemplateInstance"
                      },
                      (v18/*: any*/)
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
          (v16/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "logo",
            "plural": false,
            "selections": [
              (v32/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageOriginal",
                "kind": "LinkedField",
                "name": "original",
                "plural": false,
                "selections": [
                  (v22/*: any*/),
                  (v23/*: any*/),
                  (v11/*: any*/),
                  (v21/*: any*/)
                ],
                "storageKey": null
              }
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
                  (v16/*: any*/),
                  (v37/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "count",
                    "storageKey": null
                  },
                  (v3/*: any*/)
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
                "concreteType": "Page",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v16/*: any*/),
                  (v15/*: any*/),
                  (v3/*: any*/)
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
                      (v39/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v15/*: any*/)
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      (v18/*: any*/)
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
      }
    ]
  },
  "params": {
    "cacheID": "4de0448a85bfc17084aa490c9f0d6e8b",
    "id": null,
    "metadata": {},
    "name": "layoutCommunityTemplateQuery",
    "operationKind": "query",
    "text": "query layoutCommunityTemplateQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    layouts {\n      hero {\n        template {\n          definition {\n            enableDescendantBrowsing\n            id\n          }\n          id\n        }\n        ...HeroTemplateFragment\n        id\n      }\n      ...ProcessingCheckFragment\n    }\n    ...CommunityNavBarFragment\n    ...CommunityNavBarEntityFragment\n    ...SetCommunityFragment\n    id\n  }\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment CommunityContextFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n  ...CommunityPickerCommunityNameFragment\n}\n\nfragment CommunityHeroHeaderFragment on HeroLayoutInstance {\n  entity {\n    __typename\n    ... on Community {\n      heroImage {\n        ...ImageHeroTemplateFragment\n        hero {\n          webp {\n            url\n          }\n        }\n      }\n      heroImageLayout\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  template {\n    definition {\n      showHeroImage\n      showBigSearchPrompt\n      id\n    }\n    slots {\n      bigSearchPrompt {\n        ...sharedInlineSlotFragment\n      }\n      header {\n        empty\n      }\n      headerSummary {\n        empty\n      }\n    }\n    ...HeaderHeroFragment\n    id\n  }\n}\n\nfragment CommunityLogoFragment on ImageAttachment {\n  storage\n  original {\n    url\n    alt\n    width\n    height\n  }\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n  logo {\n    storage\n    original {\n      width\n      height\n    }\n    ...CommunityLogoFragment\n  }\n}\n\nfragment CommunityNavBarEntityFragment on Entity {\n  __isEntity: __typename\n  ...SearchButtonFragment\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n}\n\nfragment CommunityNavListContentFragment on Community {\n  slug\n  orderings(availability: ENABLED) {\n    nodes {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n  }\n  pages {\n    nodes {\n      slug\n      title\n      id\n    }\n  }\n}\n\nfragment CommunityNavListFragment on Community {\n  ...CommunityNavListContentFragment\n}\n\nfragment CommunityPickerCommunityNameFragment on Community {\n  title\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    attributions {\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        slug\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on Collection {\n    attributions {\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        slug\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: medium {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DOIFragment on HasDOI {\n  __isHasDOI: __typename\n  doiData {\n    doi\n    url\n  }\n}\n\nfragment DetailContentFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ... on Item {\n      slug\n      ...ContributorsListFragment\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    listContributors\n    id\n  }\n  slots {\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    subheaderSubtitle {\n      ...sharedInlineSlotFragment\n    }\n    subheaderAside {\n      ...sharedInlineSlotFragment\n    }\n    subheaderSummary {\n      ...sharedBlockSlotFragment\n    }\n    metadata {\n      ...sharedInlineSlotFragment\n    }\n    callToAction {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment DetailCoverImageFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    id\n    title\n    ...getThumbWithFallbackFragment\n  }\n  ... on Item {\n    id\n    title\n    ...getThumbWithFallbackFragment\n  }\n}\n\nfragment DetailHeroFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ...DetailCoverImageFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    showThumbnailImage\n    id\n  }\n  ...DetailContentFragment\n  ...DetailSidebarFragment\n}\n\nfragment DetailSidebarFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ... on Item {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Collection {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    showBasicViewMetrics\n    id\n  }\n  slots {\n    sidebar {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment DownloadCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment EntityHeroHeaderFragment on HeroLayoutInstance {\n  entity {\n    __typename\n    ... on Collection {\n      __typename\n      visibility\n      currentlyHidden\n      heroImage {\n        storage\n        ...ImageHeroTemplateFragment\n      }\n      schemaDefinition {\n        identifier\n        id\n      }\n    }\n    ... on Item {\n      __typename\n      visibility\n      currentlyHidden\n      heroImage {\n        storage\n        ...ImageHeroTemplateFragment\n      }\n      schemaDefinition {\n        identifier\n        id\n      }\n    }\n    ...BreadcrumbsBarFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  template {\n    definition {\n      background\n      showHeroImage\n      showBreadcrumbs\n      showSharingLink\n      showSplitDisplay\n      id\n    }\n    ...HeaderHeroFragment\n    ...DetailHeroFragment\n    id\n  }\n}\n\nfragment HeaderHeroFragment on HeroTemplateInstance {\n  definition {\n    showSplitDisplay\n    id\n  }\n  ...HeaderSidebarFragment\n  ...HeaderTitleBlockFragment\n}\n\nfragment HeaderSidebarFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ... on HasDOI {\n      __isHasDOI: __typename\n      doiData {\n        doi\n      }\n    }\n    ...DOIFragment\n    ... on Item {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Collection {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    showDOI\n    showBasicViewMetrics\n    showSplitDisplay\n    id\n  }\n  slots {\n    headerSidebar {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment HeaderTitleBlockFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ... on Community {\n      ...ContributorsListFragment\n    }\n    ... on Item {\n      ...ContributorsListFragment\n    }\n    ... on Collection {\n      id\n      slug\n      title\n      ...ContributorsListFragment\n      thumbnail {\n        storage\n        medium {\n          webp {\n            width\n            height\n          }\n        }\n        ...CoverImageFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    listContributors\n    showThumbnailImage\n    showSplitDisplay\n    id\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n    headerSubtitle {\n      ...sharedInlineSlotFragment\n    }\n    headerParent {\n      ...sharedInlineSlotFragment\n    }\n    headerAside {\n      ...sharedInlineSlotFragment\n    }\n    headerSummary {\n      ...sharedBlockSlotFragment\n    }\n    callToAction {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment HeroTemplateFragment on HeroLayoutInstance {\n  entity {\n    __typename\n    ... on Community {\n      __typename\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ...CommunityHeroHeaderFragment\n  ...EntityHeroHeaderFragment\n}\n\nfragment ImageHeroTemplateFragment on ImageAttachment {\n  hero {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n  large {\n    webp {\n      url\n      width\n    }\n  }\n  medium {\n    webp {\n      url\n      width\n    }\n  }\n}\n\nfragment ProcessingCheckFragment on EntityLayouts {\n  main {\n    allHidden\n    templates {\n      __typename\n      ... on TemplateInstance {\n        __isTemplateInstance: __typename\n        __typename\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment SearchButtonFragment on Entity {\n  __isEntity: __typename\n  ...SearchModalFragment\n}\n\nfragment SearchModalFragment on Entity {\n  __isEntity: __typename\n  __typename\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  title\n  breadcrumbs {\n    crumb {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment SetCommunityFragment on Community {\n  ...CommunityContextFragment\n}\n\nfragment ViewCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment getThumbWithFallbackFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    thumbnail {\n      image: medium {\n        webp {\n          url\n        }\n      }\n      ...CoverImageFragment\n    }\n    breadcrumbs {\n      crumb {\n        __typename\n        ... on Collection {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on Item {\n    thumbnail {\n      image: medium {\n        webp {\n          url\n        }\n      }\n      ...CoverImageFragment\n    }\n    breadcrumbs {\n      crumb {\n        __typename\n        ... on Collection {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Item {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment sharedBlockSlotFragment on TemplateSlotBlockInstance {\n  empty\n  content\n  kind\n  valid\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  empty\n  content\n  kind\n  valid\n  hidesTemplate\n}\n"
  }
};
})();

(node as any).hash = "770c7aebe35b06c0209513d12f1ae815";

export default node;
