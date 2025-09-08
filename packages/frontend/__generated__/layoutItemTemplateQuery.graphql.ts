/**
 * @generated SignedSource<<a7ae9219af0b815ed34d8710226cc5f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type layoutItemTemplateQuery$variables = {
  slug: string;
};
export type layoutItemTemplateQuery$data = {
  readonly item: {
    readonly community: {
      readonly " $fragmentSpreads": FragmentRefs<"SetCommunityFragment">;
    };
    readonly layouts: {
      readonly hero: {
        readonly " $fragmentSpreads": FragmentRefs<"HeroTemplateFragment">;
      } | null | undefined;
      readonly navigation: {
        readonly " $fragmentSpreads": FragmentRefs<"EntityNavigationTemplateFragment">;
      } | null | undefined;
      readonly " $fragmentSpreads": FragmentRefs<"FullTextCheckFragment" | "ProcessingCheckFragment">;
    };
    readonly " $fragmentSpreads": FragmentRefs<"EntityNavBarFragment" | "SearchButtonFragment">;
  } | null | undefined;
};
export type layoutItemTemplateQuery = {
  response: layoutItemTemplateQuery$data;
  variables: layoutItemTemplateQuery$variables;
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
  "name": "url",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v7 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "storageKey": null
  }
],
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "hero",
  "plural": false,
  "selections": (v7/*: any*/),
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      (v5/*: any*/)
    ],
    "storageKey": null
  }
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "large",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "medium",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v13 = {
  "kind": "InlineFragment",
  "selections": [
    (v12/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v16 = [
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
      (v14/*: any*/),
      (v8/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/)
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
      (v15/*: any*/),
      (v12/*: any*/)
    ],
    "storageKey": null
  }
],
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
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
  "kind": "InlineFragment",
  "selections": [
    (v20/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "background",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "empty",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "valid",
  "storageKey": null
},
v26 = [
  (v23/*: any*/),
  (v24/*: any*/),
  (v19/*: any*/),
  (v25/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hidesTemplate",
    "storageKey": null
  }
],
v27 = [
  (v23/*: any*/),
  (v24/*: any*/),
  (v19/*: any*/),
  (v25/*: any*/)
],
v28 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  }
],
v29 = {
  "alias": null,
  "args": null,
  "concreteType": "AnalyticsEventCountSummary",
  "kind": "LinkedField",
  "name": "entityViews",
  "plural": false,
  "selections": (v28/*: any*/),
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "concreteType": "AnalyticsEventCountSummary",
  "kind": "LinkedField",
  "name": "assetDownloads",
  "plural": false,
  "selections": (v28/*: any*/),
  "storageKey": null
},
v31 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ControlledVocabularyItem",
    "kind": "LinkedField",
    "name": "roles",
    "plural": true,
    "selections": [
      (v18/*: any*/),
      (v12/*: any*/)
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
      (v2/*: any*/),
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
      (v13/*: any*/)
    ],
    "storageKey": null
  },
  (v12/*: any*/)
],
v32 = {
  "alias": null,
  "args": null,
  "concreteType": "ItemAttribution",
  "kind": "LinkedField",
  "name": "attributions",
  "plural": true,
  "selections": (v31/*: any*/),
  "storageKey": null
},
v33 = {
  "alias": "image",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "medium",
  "plural": false,
  "selections": (v7/*: any*/),
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
    (v33/*: any*/)
  ],
  "storageKey": null
},
v35 = [
  (v34/*: any*/)
],
v36 = {
  "kind": "InlineFragment",
  "selections": (v35/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v37 = {
  "kind": "InlineFragment",
  "selections": [
    (v32/*: any*/),
    (v34/*: any*/),
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
            (v2/*: any*/),
            (v36/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": (v35/*: any*/),
              "type": "Item",
              "abstractKey": null
            },
            (v13/*: any*/)
          ],
          "storageKey": null
        },
        (v12/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Item",
  "abstractKey": null
},
v38 = {
  "alias": null,
  "args": null,
  "concreteType": "CollectionAttribution",
  "kind": "LinkedField",
  "name": "attributions",
  "plural": true,
  "selections": (v31/*: any*/),
  "storageKey": null
},
v39 = {
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
        (v2/*: any*/),
        (v36/*: any*/),
        (v13/*: any*/)
      ],
      "storageKey": null
    },
    (v12/*: any*/)
  ],
  "storageKey": null
},
v40 = [
  (v17/*: any*/),
  (v20/*: any*/),
  (v12/*: any*/)
],
v41 = {
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
          "selections": (v40/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v42 = [
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
v43 = {
  "alias": null,
  "args": null,
  "concreteType": "AnyAssetConnection",
  "kind": "LinkedField",
  "name": "assets",
  "plural": false,
  "selections": (v42/*: any*/),
  "storageKey": null
},
v44 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v45 = {
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
        (v44/*: any*/),
        (v20/*: any*/),
        (v15/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "count",
          "storageKey": null
        },
        (v12/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": "orderings(availability:\"ENABLED\")"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "layoutItemTemplateQuery",
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "ProcessingCheckFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FullTextCheckFragment"
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SearchButtonFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityNavBarFragment"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SetCommunityFragment"
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
    "name": "layoutItemTemplateQuery",
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
                              (v8/*: any*/),
                              (v10/*: any*/),
                              (v11/*: any*/)
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
                      (v13/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v16/*: any*/),
                        "type": "Collection",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": (v16/*: any*/),
                        "type": "Item",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v17/*: any*/),
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
                              (v18/*: any*/),
                              (v19/*: any*/),
                              (v20/*: any*/),
                              (v12/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v21/*: any*/)
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
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
                          (v12/*: any*/),
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
                          (v22/*: any*/),
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
                            "selections": (v26/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "header",
                            "plural": false,
                            "selections": (v26/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "headerSummary",
                            "plural": false,
                            "selections": (v27/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "headerSidebar",
                            "plural": false,
                            "selections": (v27/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "headerSubtitle",
                            "plural": false,
                            "selections": (v26/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "headerParent",
                            "plural": false,
                            "selections": (v26/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "headerAside",
                            "plural": false,
                            "selections": (v26/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "callToAction",
                            "plural": false,
                            "selections": (v27/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "subheader",
                            "plural": false,
                            "selections": (v26/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "subheaderSubtitle",
                            "plural": false,
                            "selections": (v26/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "subheaderAside",
                            "plural": false,
                            "selections": (v26/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "subheaderSummary",
                            "plural": false,
                            "selections": (v27/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotInlineInstance",
                            "kind": "LinkedField",
                            "name": "metadata",
                            "plural": false,
                            "selections": (v26/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateSlotBlockInstance",
                            "kind": "LinkedField",
                            "name": "sidebar",
                            "plural": false,
                            "selections": (v27/*: any*/),
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
                                  (v3/*: any*/)
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
                              (v29/*: any*/),
                              (v30/*: any*/),
                              (v12/*: any*/),
                              (v17/*: any*/),
                              (v20/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v37/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v38/*: any*/),
                                      (v34/*: any*/),
                                      (v39/*: any*/)
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
                              (v29/*: any*/),
                              (v30/*: any*/),
                              (v12/*: any*/),
                              (v20/*: any*/),
                              (v17/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": [
                                  (v14/*: any*/),
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
                                          (v5/*: any*/),
                                          (v6/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  (v33/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v37/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v38/*: any*/),
                                      (v39/*: any*/)
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
                          (v13/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v32/*: any*/)
                                    ],
                                    "type": "Item",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v38/*: any*/)
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
                      },
                      (v12/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v12/*: any*/)
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
                        "selections": [
                          (v22/*: any*/),
                          (v12/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "hideMetadata",
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
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v41/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ItemContributionConnection",
                                "kind": "LinkedField",
                                "name": "contributions",
                                "plural": false,
                                "selections": (v42/*: any*/),
                                "storageKey": null
                              },
                              (v43/*: any*/)
                            ],
                            "type": "Item",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v41/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "CollectionContributionConnection",
                                "kind": "LinkedField",
                                "name": "contributions",
                                "plural": false,
                                "selections": (v42/*: any*/),
                                "storageKey": null
                              },
                              (v43/*: any*/)
                            ],
                            "type": "Collection",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v41/*: any*/),
                              (v43/*: any*/)
                            ],
                            "type": "Community",
                            "abstractKey": null
                          },
                          (v13/*: any*/)
                        ],
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
                            "selections": (v26/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v12/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v12/*: any*/)
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
                      (v2/*: any*/),
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isTemplateInstance"
                      },
                      (v13/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "DetailTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "showBody",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "variant",
                                "storageKey": null
                              },
                              (v12/*: any*/)
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
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotBlockInstance",
                                "kind": "LinkedField",
                                "name": "body",
                                "plural": false,
                                "selections": [
                                  (v25/*: any*/),
                                  (v24/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "DetailTemplateInstance",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v12/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              (v17/*: any*/),
              (v20/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "logo",
                "plural": false,
                "selections": [
                  (v14/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageOriginal",
                    "kind": "LinkedField",
                    "name": "original",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v45/*: any*/),
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
                      (v20/*: any*/),
                      (v17/*: any*/),
                      (v12/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v12/*: any*/)
            ],
            "storageKey": null
          },
          (v12/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v21/*: any*/),
              (v17/*: any*/),
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
                      (v2/*: any*/),
                      (v21/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v17/*: any*/)
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      (v13/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v12/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isNode"
              },
              (v21/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SchemaVersion",
                    "kind": "LinkedField",
                    "name": "schemaVersion",
                    "plural": false,
                    "selections": [
                      (v44/*: any*/),
                      (v15/*: any*/),
                      (v12/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v45/*: any*/),
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
                        "selections": (v40/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
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
                                    "concreteType": "TemplateSlotInlineInstance",
                                    "kind": "LinkedField",
                                    "name": "descendantSearchPrompt",
                                    "plural": false,
                                    "selections": (v26/*: any*/),
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
                    "storageKey": null
                  }
                ],
                "type": "Entity",
                "abstractKey": "__isEntity"
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
    "cacheID": "5d0035a4ba1abffcf1d8e3dcb7e1dfdc",
    "id": null,
    "metadata": {},
    "name": "layoutItemTemplateQuery",
    "operationKind": "query",
    "text": "query layoutItemTemplateQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    layouts {\n      hero {\n        ...HeroTemplateFragment\n        id\n      }\n      navigation {\n        ...EntityNavigationTemplateFragment\n        id\n      }\n      ...ProcessingCheckFragment\n      ...FullTextCheckFragment\n    }\n    ...SearchButtonFragment\n    ...EntityNavBarFragment\n    community {\n      ...SetCommunityFragment\n      id\n    }\n    id\n  }\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment CommunityContextFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n  ...CommunityPickerCommunityNameFragment\n}\n\nfragment CommunityHeroHeaderFragment on HeroLayoutInstance {\n  entity {\n    __typename\n    ... on Community {\n      heroImage {\n        ...ImageHeroTemplateFragment\n        hero {\n          webp {\n            url\n          }\n        }\n      }\n      heroImageLayout\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  template {\n    definition {\n      showHeroImage\n      showBigSearchPrompt\n      id\n    }\n    slots {\n      bigSearchPrompt {\n        ...sharedInlineSlotFragment\n      }\n      header {\n        empty\n      }\n      headerSummary {\n        empty\n      }\n    }\n    ...HeaderHeroFragment\n    id\n  }\n}\n\nfragment CommunityLogoFragment on ImageAttachment {\n  storage\n  original {\n    url\n    alt\n    width\n    height\n  }\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n  logo {\n    storage\n    original {\n      width\n      height\n    }\n    ...CommunityLogoFragment\n  }\n}\n\nfragment CommunityNavListContentFragment on Community {\n  slug\n  orderings(availability: ENABLED) {\n    nodes {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n  }\n  pages {\n    nodes {\n      slug\n      title\n      id\n    }\n  }\n}\n\nfragment CommunityNavListFragment on Community {\n  ...CommunityNavListContentFragment\n}\n\nfragment CommunityPickerCommunityNameFragment on Community {\n  title\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    attributions {\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        slug\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on Collection {\n    attributions {\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        slug\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: medium {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DOIFragment on HasDOI {\n  __isHasDOI: __typename\n  doiData {\n    doi\n    url\n  }\n}\n\nfragment DetailContentFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ... on Item {\n      slug\n      ...ContributorsListFragment\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    listContributors\n    id\n  }\n  slots {\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    subheaderSubtitle {\n      ...sharedInlineSlotFragment\n    }\n    subheaderAside {\n      ...sharedInlineSlotFragment\n    }\n    subheaderSummary {\n      ...sharedBlockSlotFragment\n    }\n    metadata {\n      ...sharedInlineSlotFragment\n    }\n    callToAction {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment DetailCoverImageFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    id\n    title\n    ...getThumbWithFallbackFragment\n  }\n  ... on Item {\n    id\n    title\n    ...getThumbWithFallbackFragment\n  }\n}\n\nfragment DetailHeroFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ...DetailCoverImageFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    showThumbnailImage\n    id\n  }\n  ...DetailContentFragment\n  ...DetailSidebarFragment\n}\n\nfragment DetailSidebarFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ... on Item {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Collection {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    showBasicViewMetrics\n    id\n  }\n  slots {\n    sidebar {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment DownloadCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment EntityHeroHeaderFragment on HeroLayoutInstance {\n  entity {\n    __typename\n    ... on Collection {\n      __typename\n      visibility\n      currentlyHidden\n      heroImage {\n        storage\n        ...ImageHeroTemplateFragment\n      }\n      schemaDefinition {\n        identifier\n        id\n      }\n    }\n    ... on Item {\n      __typename\n      visibility\n      currentlyHidden\n      heroImage {\n        storage\n        ...ImageHeroTemplateFragment\n      }\n      schemaDefinition {\n        identifier\n        id\n      }\n    }\n    ...BreadcrumbsBarFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  template {\n    definition {\n      background\n      showHeroImage\n      showBreadcrumbs\n      showSharingLink\n      showSplitDisplay\n      id\n    }\n    ...HeaderHeroFragment\n    ...DetailHeroFragment\n    id\n  }\n}\n\nfragment EntityNavBarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Entity {\n    __isEntity: __typename\n    title\n    ...EntityNavListFragment\n    layouts {\n      hero {\n        template {\n          definition {\n            enableDescendantBrowsing\n            enableDescendantSearch\n            id\n          }\n          slots {\n            descendantSearchPrompt {\n              ...sharedInlineSlotFragment\n            }\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment EntityNavListFragment on Entity {\n  __isEntity: __typename\n  __typename\n  schemaVersion {\n    name\n    identifier\n    id\n  }\n  orderings(availability: ENABLED) {\n    nodes {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n  }\n  pages {\n    nodes {\n      title\n      slug\n      id\n    }\n  }\n}\n\nfragment EntityNavigationTemplateFragment on NavigationLayoutInstance {\n  template {\n    definition {\n      background\n      id\n    }\n    ...NavigationTabsFragment\n    id\n  }\n}\n\nfragment FullTextCheckFragment on EntityLayouts {\n  main {\n    templates {\n      __typename\n      ... on DetailTemplateInstance {\n        definition {\n          showBody\n          variant\n          id\n        }\n        slots {\n          body {\n            valid\n            content\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment HeaderHeroFragment on HeroTemplateInstance {\n  definition {\n    showSplitDisplay\n    id\n  }\n  ...HeaderSidebarFragment\n  ...HeaderTitleBlockFragment\n}\n\nfragment HeaderSidebarFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ... on HasDOI {\n      __isHasDOI: __typename\n      doiData {\n        doi\n      }\n    }\n    ...DOIFragment\n    ... on Item {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Collection {\n      entityViews {\n        ...ViewCountFragment\n      }\n      assetDownloads {\n        ...DownloadCountFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    showDOI\n    showBasicViewMetrics\n    showSplitDisplay\n    id\n  }\n  slots {\n    headerSidebar {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment HeaderTitleBlockFragment on HeroTemplateInstance {\n  entity {\n    __typename\n    ... on Community {\n      ...ContributorsListFragment\n    }\n    ... on Item {\n      ...ContributorsListFragment\n    }\n    ... on Collection {\n      id\n      slug\n      title\n      ...ContributorsListFragment\n      thumbnail {\n        storage\n        medium {\n          webp {\n            width\n            height\n          }\n        }\n        ...CoverImageFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    listContributors\n    showThumbnailImage\n    showSplitDisplay\n    id\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n    headerSubtitle {\n      ...sharedInlineSlotFragment\n    }\n    headerParent {\n      ...sharedInlineSlotFragment\n    }\n    headerAside {\n      ...sharedInlineSlotFragment\n    }\n    headerSummary {\n      ...sharedBlockSlotFragment\n    }\n    callToAction {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment HeroTemplateFragment on HeroLayoutInstance {\n  entity {\n    __typename\n    ... on Community {\n      __typename\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ...CommunityHeroHeaderFragment\n  ...EntityHeroHeaderFragment\n}\n\nfragment ImageHeroTemplateFragment on ImageAttachment {\n  hero {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n  large {\n    webp {\n      url\n      width\n    }\n  }\n  medium {\n    webp {\n      url\n      width\n    }\n  }\n}\n\nfragment NavigationTabsFragment on NavigationTemplateInstance {\n  entity {\n    __typename\n    ... on Item {\n      __typename\n      pages {\n        edges {\n          node {\n            title\n            slug\n            id\n          }\n        }\n      }\n      contributions {\n        pageInfo {\n          totalCount\n        }\n      }\n      assets {\n        pageInfo {\n          totalCount\n        }\n      }\n    }\n    ... on Collection {\n      __typename\n      pages {\n        edges {\n          node {\n            title\n            slug\n            id\n          }\n        }\n      }\n      contributions {\n        pageInfo {\n          totalCount\n        }\n      }\n      assets {\n        pageInfo {\n          totalCount\n        }\n      }\n    }\n    ... on Community {\n      __typename\n      pages {\n        edges {\n          node {\n            title\n            slug\n            id\n          }\n        }\n      }\n      assets {\n        pageInfo {\n          totalCount\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  definition {\n    hideMetadata\n    id\n  }\n  slots {\n    entityLabel {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment ProcessingCheckFragment on EntityLayouts {\n  main {\n    allHidden\n    templates {\n      __typename\n      ... on TemplateInstance {\n        __isTemplateInstance: __typename\n        __typename\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment SearchButtonFragment on Entity {\n  __isEntity: __typename\n  ...SearchModalFragment\n}\n\nfragment SearchModalFragment on Entity {\n  __isEntity: __typename\n  __typename\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  title\n  breadcrumbs {\n    crumb {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment SetCommunityFragment on Community {\n  ...CommunityContextFragment\n}\n\nfragment ViewCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment getThumbWithFallbackFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    thumbnail {\n      image: medium {\n        webp {\n          url\n        }\n      }\n      ...CoverImageFragment\n    }\n    breadcrumbs {\n      crumb {\n        __typename\n        ... on Collection {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on Item {\n    thumbnail {\n      image: medium {\n        webp {\n          url\n        }\n      }\n      ...CoverImageFragment\n    }\n    breadcrumbs {\n      crumb {\n        __typename\n        ... on Collection {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Item {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment sharedBlockSlotFragment on TemplateSlotBlockInstance {\n  empty\n  content\n  kind\n  valid\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  empty\n  content\n  kind\n  valid\n  hidesTemplate\n}\n"
  }
};
})();

(node as any).hash = "40e8aac9ec7c0dcdbeb464af4e659806";

export default node;
