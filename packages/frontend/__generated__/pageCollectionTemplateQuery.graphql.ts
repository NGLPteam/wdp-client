/**
 * @generated SignedSource<<6359a442244c7049d3c4bd1069aac385>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TemplateKind = "BLURB" | "CONTRIBUTOR_LIST" | "DESCENDANT_LIST" | "DETAIL" | "HERO" | "LINK_LIST" | "LIST_ITEM" | "METADATA" | "NAVIGATION" | "ORDERING" | "PAGE_LIST" | "SUPPLEMENTARY" | "%future added value";
export type pageCollectionTemplateQuery$variables = {
  slug: string;
};
export type pageCollectionTemplateQuery$data = {
  readonly collection: {
    readonly layouts: {
      readonly main: {
        readonly templates: ReadonlyArray<{
          readonly templateKind?: TemplateKind;
        }>;
        readonly " $fragmentSpreads": FragmentRefs<"MainLayoutFragment">;
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
  "name": "templateKind",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v4/*: any*/)
],
v6 = {
  "kind": "InlineFragment",
  "selections": (v5/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v7 = [
  (v3/*: any*/),
  (v6/*: any*/)
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hidden",
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "dark",
    "storageKey": null
  },
  (v8/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "position",
    "storageKey": null
  },
  (v2/*: any*/),
  (v4/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
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
  "name": "alt",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v16 = {
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
v17 = [
  (v4/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ControlledVocabularyItem",
        "kind": "LinkedField",
        "name": "roles",
        "plural": true,
        "selections": [
          (v11/*: any*/),
          (v12/*: any*/),
          (v4/*: any*/)
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
          (v3/*: any*/),
          (v13/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "affiliation",
            "storageKey": null
          },
          (v10/*: any*/),
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
                      (v14/*: any*/),
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v16/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Attribution",
    "abstractKey": "__isAttribution"
  }
],
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "background",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "empty",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "valid",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hidesTemplate",
  "storageKey": null
},
v25 = [
  (v20/*: any*/),
  (v21/*: any*/),
  (v22/*: any*/),
  (v23/*: any*/),
  (v24/*: any*/)
],
v26 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "header",
  "plural": false,
  "selections": (v25/*: any*/),
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "variant",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showHeroImage",
  "storageKey": null
},
v29 = {
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
        (v10/*: any*/),
        (v4/*: any*/)
      ],
      "storageKey": null
    }
  ],
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
        (v14/*: any*/),
        (v15/*: any*/),
        (v19/*: any*/),
        (v30/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v32 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v15/*: any*/),
      (v19/*: any*/)
    ],
    "storageKey": null
  }
],
v33 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "medium",
  "plural": false,
  "selections": (v32/*: any*/),
  "storageKey": null
},
v34 = [
  (v29/*: any*/),
  {
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
      (v31/*: any*/),
      (v33/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageSize",
        "kind": "LinkedField",
        "name": "small",
        "plural": false,
        "selections": (v32/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v35 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "subheader",
  "plural": false,
  "selections": (v25/*: any*/),
  "storageKey": null
},
v36 = [
  (v20/*: any*/),
  (v21/*: any*/),
  (v22/*: any*/),
  (v23/*: any*/)
],
v37 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotBlockInstance",
  "kind": "LinkedField",
  "name": "body",
  "plural": false,
  "selections": (v36/*: any*/),
  "storageKey": null
},
v38 = [
  (v18/*: any*/),
  (v19/*: any*/),
  (v4/*: any*/)
],
v39 = [
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
      (v3/*: any*/),
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
            "selections": (v7/*: any*/),
            "storageKey": null
          }
        ],
        "type": "EntityLink",
        "abstractKey": null
      },
      (v6/*: any*/)
    ],
    "storageKey": null
  },
  (v4/*: any*/)
],
v40 = [
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
              (v10/*: any*/),
              (v13/*: any*/),
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
v41 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "headerAside",
  "plural": false,
  "selections": (v25/*: any*/),
  "storageKey": null
},
v42 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "metadata",
  "plural": false,
  "selections": (v25/*: any*/),
  "storageKey": null
},
v43 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateSlotInlineInstance",
  "kind": "LinkedField",
  "name": "subtitle",
  "plural": false,
  "selections": (v25/*: any*/),
  "storageKey": null
},
v44 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v45 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hierarchicalDepth",
  "storageKey": null
},
v46 = [
  (v45/*: any*/)
],
v47 = {
  "alias": null,
  "args": null,
  "concreteType": "CollectionAttribution",
  "kind": "LinkedField",
  "name": "attributions",
  "plural": true,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v48 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    (v31/*: any*/),
    (v33/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "thumb",
      "plural": false,
      "selections": (v32/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v49 = {
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
            (v15/*: any*/),
            (v14/*: any*/),
            (v19/*: any*/),
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
v50 = [
  (v49/*: any*/)
],
v51 = {
  "kind": "InlineFragment",
  "selections": (v50/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v52 = {
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
        (v3/*: any*/),
        (v51/*: any*/),
        (v6/*: any*/)
      ],
      "storageKey": null
    },
    (v4/*: any*/)
  ],
  "storageKey": null
},
v53 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ControlledVocabularyItem",
    "kind": "LinkedField",
    "name": "roles",
    "plural": true,
    "selections": [
      (v12/*: any*/),
      (v4/*: any*/)
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
      (v3/*: any*/),
      (v10/*: any*/),
      (v16/*: any*/),
      (v6/*: any*/)
    ],
    "storageKey": null
  }
],
v54 = {
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
        (v3/*: any*/),
        (v51/*: any*/),
        {
          "kind": "InlineFragment",
          "selections": (v50/*: any*/),
          "type": "Item",
          "abstractKey": null
        },
        (v6/*: any*/)
      ],
      "storageKey": null
    },
    (v4/*: any*/)
  ],
  "storageKey": null
},
v55 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v49/*: any*/),
        (v52/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "CollectionAttribution",
          "kind": "LinkedField",
          "name": "attributions",
          "plural": true,
          "selections": (v53/*: any*/),
          "storageKey": null
        }
      ],
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v49/*: any*/),
        (v54/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemAttribution",
          "kind": "LinkedField",
          "name": "attributions",
          "plural": true,
          "selections": (v53/*: any*/),
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
v56 = {
  "alias": null,
  "args": null,
  "concreteType": "ItemAttribution",
  "kind": "LinkedField",
  "name": "attributions",
  "plural": true,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v57 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seeAllOrderingIdentifier",
  "storageKey": null
},
v58 = {
  "alias": null,
  "args": null,
  "concreteType": "ListItemTemplateDefinition",
  "kind": "LinkedField",
  "name": "definition",
  "plural": false,
  "selections": [
    (v57/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v59 = {
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
      "selections": (v25/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "contextAbbr",
      "plural": false,
      "selections": (v25/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "contextC",
      "plural": false,
      "selections": (v25/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotBlockInstance",
      "kind": "LinkedField",
      "name": "description",
      "plural": false,
      "selections": (v36/*: any*/),
      "storageKey": null
    },
    (v26/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "metaA",
      "plural": false,
      "selections": (v25/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "metaB",
      "plural": false,
      "selections": (v25/*: any*/),
      "storageKey": null
    },
    (v35/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "nestedHeader",
      "plural": false,
      "selections": (v25/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "nestedSubheader",
      "plural": false,
      "selections": (v25/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "nestedContext",
      "plural": false,
      "selections": (v25/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "nestedMetadata",
      "plural": false,
      "selections": (v25/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v60 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateEntityList",
  "kind": "LinkedField",
  "name": "entityList",
  "plural": false,
  "selections": [
    (v20/*: any*/),
    (v44/*: any*/),
    {
      "alias": "depths",
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
                (v3/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": (v46/*: any*/),
                  "type": "Collection",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": (v46/*: any*/),
                  "type": "Item",
                  "abstractKey": null
                },
                (v6/*: any*/)
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
                (v3/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v45/*: any*/),
                    (v4/*: any*/),
                    (v10/*: any*/),
                    (v13/*: any*/),
                    (v47/*: any*/),
                    (v48/*: any*/),
                    (v55/*: any*/)
                  ],
                  "type": "Collection",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v45/*: any*/),
                    (v4/*: any*/),
                    (v10/*: any*/),
                    (v13/*: any*/),
                    (v56/*: any*/),
                    (v48/*: any*/),
                    (v55/*: any*/)
                  ],
                  "type": "Item",
                  "abstractKey": null
                },
                (v6/*: any*/)
              ],
              "storageKey": null
            },
            (v58/*: any*/),
            (v59/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "TemplateEntityList",
              "kind": "LinkedField",
              "name": "entityList",
              "plural": false,
              "selections": [
                (v20/*: any*/),
                (v44/*: any*/),
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
                        (v58/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": null,
                          "kind": "LinkedField",
                          "name": "entity",
                          "plural": false,
                          "selections": [
                            (v3/*: any*/),
                            {
                              "kind": "InlineFragment",
                              "selections": [
                                (v4/*: any*/),
                                (v10/*: any*/),
                                (v13/*: any*/),
                                (v45/*: any*/),
                                (v47/*: any*/),
                                (v48/*: any*/),
                                (v55/*: any*/)
                              ],
                              "type": "Collection",
                              "abstractKey": null
                            },
                            {
                              "kind": "InlineFragment",
                              "selections": [
                                (v4/*: any*/),
                                (v10/*: any*/),
                                (v13/*: any*/),
                                (v45/*: any*/),
                                (v56/*: any*/),
                                (v48/*: any*/),
                                (v55/*: any*/)
                              ],
                              "type": "Item",
                              "abstractKey": null
                            },
                            (v6/*: any*/)
                          ],
                          "storageKey": null
                        },
                        (v59/*: any*/),
                        (v4/*: any*/)
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
            (v4/*: any*/)
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
v61 = [
  (v10/*: any*/)
],
v62 = {
  "kind": "InlineFragment",
  "selections": (v61/*: any*/),
  "type": "Community",
  "abstractKey": null
},
v63 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v49/*: any*/),
        (v52/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v49/*: any*/),
        (v54/*: any*/)
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
},
v64 = [
  (v4/*: any*/),
  (v13/*: any*/),
  (v10/*: any*/),
  (v63/*: any*/)
],
v65 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seeAllButtonLabel",
  "storageKey": null
},
v66 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showSeeAllButton",
  "storageKey": null
},
v67 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "selectionMode",
  "storageKey": null
},
v68 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "selectionLimit",
  "storageKey": null
},
v69 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showNestedEntities",
  "storageKey": null
},
v70 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showContributors",
  "storageKey": null
},
v71 = [
  (v10/*: any*/),
  (v63/*: any*/)
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
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "MainLayoutFragment"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "templates",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/)
                        ],
                        "type": "TemplateInstance",
                        "abstractKey": "__isTemplateInstance"
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
                    "kind": "ScalarField",
                    "name": "allHidden",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "entity",
                    "plural": false,
                    "selections": (v7/*: any*/),
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
                      (v3/*: any*/),
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isAnyMainTemplateInstance"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v8/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateInstanceSibling",
                            "kind": "LinkedField",
                            "name": "prevSiblings",
                            "plural": true,
                            "selections": (v9/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TemplateInstanceSibling",
                            "kind": "LinkedField",
                            "name": "nextSiblings",
                            "plural": true,
                            "selections": (v9/*: any*/),
                            "storageKey": null
                          },
                          (v2/*: any*/)
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
                              (v3/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v10/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ItemAttribution",
                                    "kind": "LinkedField",
                                    "name": "attributions",
                                    "plural": true,
                                    "selections": (v17/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "type": "Item",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v10/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "CollectionAttribution",
                                    "kind": "LinkedField",
                                    "name": "attributions",
                                    "plural": true,
                                    "selections": (v17/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "type": "Collection",
                                "abstractKey": null
                              },
                              (v6/*: any*/)
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
                              (v18/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "limit",
                                "storageKey": null
                              },
                              (v19/*: any*/),
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
                              (v26/*: any*/)
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
                          (v8/*: any*/),
                          {
                            "alias": "detailDefinition",
                            "args": null,
                            "concreteType": "DetailTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": [
                              (v18/*: any*/),
                              (v27/*: any*/),
                              (v4/*: any*/),
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
                                "name": "showBody",
                                "storageKey": null
                              },
                              (v28/*: any*/)
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
                              (v3/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v34/*: any*/),
                                "type": "Collection",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v29/*: any*/)
                                ],
                                "type": "Community",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v34/*: any*/),
                                "type": "Item",
                                "abstractKey": null
                              },
                              (v6/*: any*/)
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
                              (v26/*: any*/),
                              (v35/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotBlockInstance",
                                "kind": "LinkedField",
                                "name": "summary",
                                "plural": false,
                                "selections": (v36/*: any*/),
                                "storageKey": null
                              },
                              (v37/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotBlockInstance",
                                "kind": "LinkedField",
                                "name": "itemsA",
                                "plural": false,
                                "selections": (v36/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotBlockInstance",
                                "kind": "LinkedField",
                                "name": "itemsB",
                                "plural": false,
                                "selections": (v36/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotBlockInstance",
                                "kind": "LinkedField",
                                "name": "itemsC",
                                "plural": false,
                                "selections": (v36/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotBlockInstance",
                                "kind": "LinkedField",
                                "name": "itemsD",
                                "plural": false,
                                "selections": (v36/*: any*/),
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
                          (v8/*: any*/),
                          {
                            "alias": "orderingDefinition",
                            "args": null,
                            "concreteType": "OrderingTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": (v38/*: any*/),
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
                                "selections": (v39/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "OrderingEntry",
                                "kind": "LinkedField",
                                "name": "prevSibling",
                                "plural": false,
                                "selections": (v39/*: any*/),
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
                                "selections": (v25/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotInlineInstance",
                                "kind": "LinkedField",
                                "name": "previousLabel",
                                "plural": false,
                                "selections": (v25/*: any*/),
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
                          (v8/*: any*/),
                          {
                            "alias": "pagesDefinition",
                            "args": null,
                            "concreteType": "PageListTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": (v38/*: any*/),
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
                              (v3/*: any*/),
                              {
                                "kind": "TypeDiscriminator",
                                "abstractKey": "__isAnyEntity"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v40/*: any*/),
                                "type": "Item",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v40/*: any*/),
                                "type": "Collection",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v40/*: any*/),
                                "type": "Community",
                                "abstractKey": null
                              },
                              (v6/*: any*/)
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
                            "alias": null,
                            "args": null,
                            "concreteType": "DescendantListTemplateInstanceSlots",
                            "kind": "LinkedField",
                            "name": "slots",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotInlineInstance",
                                "kind": "LinkedField",
                                "name": "blockHeader",
                                "plural": false,
                                "selections": [
                                  (v21/*: any*/),
                                  (v20/*: any*/),
                                  (v22/*: any*/),
                                  (v23/*: any*/),
                                  (v24/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v26/*: any*/),
                              (v41/*: any*/),
                              (v42/*: any*/),
                              (v43/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v60/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "entity",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v61/*: any*/),
                                "type": "Sluggable",
                                "abstractKey": "__isSluggable"
                              },
                              (v6/*: any*/),
                              (v62/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v64/*: any*/),
                                "type": "Collection",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v64/*: any*/),
                                "type": "Item",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "descendantsDefinition",
                            "args": null,
                            "concreteType": "DescendantListTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": [
                              (v27/*: any*/),
                              (v4/*: any*/),
                              (v18/*: any*/),
                              (v65/*: any*/),
                              (v66/*: any*/),
                              (v67/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "selectionPropertyPath",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "orderingIdentifier",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "OrderingDefinition",
                                "kind": "LinkedField",
                                "name": "dynamicOrderingDefinition",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "OrderingFilterDefinition",
                                    "kind": "LinkedField",
                                    "name": "filter",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "OrderingSchemaFilter",
                                        "kind": "LinkedField",
                                        "name": "schemas",
                                        "plural": true,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "namespace",
                                            "storageKey": null
                                          },
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
                              (v68/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "entityContext",
                                "storageKey": null
                              },
                              (v13/*: any*/),
                              (v28/*: any*/),
                              (v19/*: any*/),
                              (v69/*: any*/),
                              (v57/*: any*/),
                              (v70/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Ordering",
                            "kind": "LinkedField",
                            "name": "seeAllOrdering",
                            "plural": false,
                            "selections": [
                              (v44/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "name",
                                "storageKey": null
                              },
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "DescendantListTemplateInstance",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v60/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "entity",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v62/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v71/*: any*/),
                                "type": "Collection",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v71/*: any*/),
                                "type": "Item",
                                "abstractKey": null
                              },
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "linksDefinition",
                            "args": null,
                            "concreteType": "LinkListTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": [
                              (v18/*: any*/),
                              (v65/*: any*/),
                              (v66/*: any*/),
                              (v67/*: any*/),
                              (v68/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "showEntityContext",
                                "storageKey": null
                              },
                              (v13/*: any*/),
                              (v27/*: any*/),
                              (v28/*: any*/),
                              (v19/*: any*/),
                              (v69/*: any*/),
                              (v57/*: any*/),
                              (v70/*: any*/),
                              (v4/*: any*/)
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
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "TemplateSlotInlineInstance",
                                "kind": "LinkedField",
                                "name": "blockHeader",
                                "plural": false,
                                "selections": (v25/*: any*/),
                                "storageKey": null
                              },
                              (v26/*: any*/),
                              (v41/*: any*/),
                              (v42/*: any*/),
                              (v43/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "LinkListTemplateInstance",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v8/*: any*/),
                          {
                            "alias": "blurbDefinition",
                            "args": null,
                            "concreteType": "BlurbTemplateDefinition",
                            "kind": "LinkedField",
                            "name": "definition",
                            "plural": false,
                            "selections": (v38/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "BlurbTemplateInstanceSlots",
                            "kind": "LinkedField",
                            "name": "slots",
                            "plural": false,
                            "selections": [
                              (v26/*: any*/),
                              (v35/*: any*/),
                              (v37/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "BlurbTemplateInstance",
                        "abstractKey": null
                      },
                      (v6/*: any*/)
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
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "49d367054dd7b3458836c2797ceaa9ce",
    "id": null,
    "metadata": {},
    "name": "pageCollectionTemplateQuery",
    "operationKind": "query",
    "text": "query pageCollectionTemplateQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    layouts {\n      main {\n        ...MainLayoutFragment\n        templates {\n          __typename\n          ... on TemplateInstance {\n            __isTemplateInstance: __typename\n            templateKind\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment AnnouncementsFragment on AnnouncementConnection {\n  nodes {\n    teaser\n    header\n    slug\n    id\n  }\n}\n\nfragment BlurbTemplateFragment on BlurbTemplateInstance {\n  __typename\n  hidden\n  blurbDefinition: definition {\n    background\n    width\n    id\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    body {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment ColumnsDetailFragment on DetailTemplateInstance {\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n    itemsA {\n      ...sharedBlockSlotFragment\n    }\n    itemsB {\n      ...sharedBlockSlotFragment\n    }\n    itemsC {\n      ...sharedBlockSlotFragment\n    }\n    itemsD {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n  medium {\n    webp {\n      url\n      width\n    }\n  }\n  small {\n    webp {\n      url\n      width\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorFragment on Attribution {\n  __isAttribution: __typename\n  roles {\n    identifier\n    label\n    id\n  }\n  contributor {\n    __typename\n    title\n    affiliation\n    slug\n    image {\n      ...ContributorAvatarFragment\n    }\n    ...ContributorNameFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    attributions {\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        slug\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on Collection {\n    attributions {\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        slug\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment ContributorsTemplateFragment on ContributorListTemplateInstance {\n  __typename\n  entity {\n    __typename\n    ... on Item {\n      __typename\n      slug\n      attributions {\n        ...ContributorFragment\n        id\n      }\n    }\n    ... on Collection {\n      __typename\n      slug\n      attributions {\n        ...ContributorFragment\n        id\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  contributorsDefinition: definition {\n    background\n    limit\n    width\n    id\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: medium {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DescendantsTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on DescendantListTemplateInstance {\n    entity {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    descendantsDefinition: definition {\n      variant\n      id\n    }\n  }\n  ...sharedListTemplateFragment\n}\n\nfragment DetailTemplateFragment on DetailTemplateInstance {\n  __typename\n  hidden\n  detailDefinition: definition {\n    background\n    variant\n    id\n  }\n  ...SummaryDetailFragment\n  ...FullDetailFragment\n  ...ColumnsDetailFragment\n}\n\nfragment FactoryTemplatesFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on TemplateInstance {\n    __isTemplateInstance: __typename\n    templateKind\n  }\n  ... on ContributorListTemplateInstance {\n    ...ContributorsTemplateFragment\n  }\n  ... on DetailTemplateInstance {\n    ...DetailTemplateFragment\n  }\n  ... on OrderingTemplateInstance {\n    ...OrderingNavigationTemplateFragment\n  }\n  ... on PageListTemplateInstance {\n    ...PagesTemplateFragment\n  }\n  ... on DescendantListTemplateInstance {\n    slots {\n      blockHeader {\n        content\n      }\n    }\n    entityList {\n      empty\n    }\n  }\n  ... on LinkListTemplateInstance {\n    entityList {\n      empty\n    }\n  }\n  ... on BlurbTemplateInstance {\n    ...BlurbTemplateFragment\n  }\n  ...DescendantsTemplateFragment\n  ...LinksTemplateFragment\n}\n\nfragment FullDetailFragment on DetailTemplateInstance {\n  entity {\n    __typename\n    ... on Item {\n      __typename\n      heroImage {\n        storage\n        ...ContentImageFragment\n      }\n    }\n    ... on Collection {\n      __typename\n      heroImage {\n        storage\n        ...ContentImageFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  detailDefinition: definition {\n    showBody\n    showHeroImage\n    id\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    body {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment LinksTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on LinkListTemplateInstance {\n    __typename\n    linksDefinition: definition {\n      variant\n      id\n    }\n  }\n  ...sharedListTemplateFragment\n}\n\nfragment ListPagesTemplateFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    pages {\n      edges {\n        node {\n          slug\n          title\n          id\n        }\n      }\n    }\n  }\n  ... on Collection {\n    pages {\n      edges {\n        node {\n          slug\n          title\n          id\n        }\n      }\n    }\n  }\n  ... on Community {\n    pages {\n      edges {\n        node {\n          slug\n          title\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment MainLayoutFragment on MainLayoutInstance {\n  allHidden\n  entity {\n    __typename\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  templates {\n    __typename\n    ... on TemplateInstance {\n      __isTemplateInstance: __typename\n      hidden\n      prevSiblings {\n        dark\n        hidden\n        position\n        templateKind\n        id\n      }\n      nextSiblings {\n        dark\n        hidden\n        position\n        templateKind\n        id\n      }\n    }\n    ...FactoryTemplatesFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment NavButtonsFragment on OrderingTemplateInstance {\n  orderingPair {\n    exists\n    first\n    last\n    nextSibling {\n      ...routesOrderingTemplateFragment\n      id\n    }\n    prevSibling {\n      ...routesOrderingTemplateFragment\n      id\n    }\n  }\n  slots {\n    nextLabel {\n      ...sharedInlineSlotFragment\n    }\n    previousLabel {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment OrderingNavigationTemplateFragment on OrderingTemplateInstance {\n  hidden\n  orderingDefinition: definition {\n    background\n    width\n    id\n  }\n  orderingPair {\n    exists\n  }\n  ...NavButtonsFragment\n}\n\nfragment PagesTemplateFragment on PageListTemplateInstance {\n  __typename\n  hidden\n  pagesDefinition: definition {\n    background\n    width\n    id\n  }\n  entity {\n    __typename\n    ...ListPagesTemplateFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment SummaryDetailFragment on DetailTemplateInstance {\n  entity {\n    __typename\n    ... on Collection {\n      __typename\n      announcements {\n        ...AnnouncementsFragment\n        nodes {\n          slug\n          id\n        }\n      }\n    }\n    ... on Community {\n      __typename\n      announcements {\n        ...AnnouncementsFragment\n        nodes {\n          slug\n          id\n        }\n      }\n    }\n    ... on Item {\n      __typename\n      announcements {\n        ...AnnouncementsFragment\n        nodes {\n          slug\n          id\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  detailDefinition: definition {\n    showAnnouncements\n    id\n  }\n  slots {\n    header {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    summary {\n      ...sharedBlockSlotFragment\n    }\n  }\n}\n\nfragment getThumbWithFallbackFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    thumbnail {\n      image: medium {\n        webp {\n          url\n        }\n      }\n      ...CoverImageFragment\n    }\n    breadcrumbs {\n      crumb {\n        __typename\n        ... on Collection {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on Item {\n    thumbnail {\n      image: medium {\n        webp {\n          url\n        }\n      }\n      ...CoverImageFragment\n    }\n    breadcrumbs {\n      crumb {\n        __typename\n        ... on Collection {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Item {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment routesOrderingTemplateFragment on OrderingEntry {\n  entrySlug\n  entry {\n    __typename\n    ... on Collection {\n      __typename\n    }\n    ... on Item {\n      __typename\n    }\n    ... on Community {\n      __typename\n    }\n    ... on EntityLink {\n      __typename\n      target {\n        __typename\n        ... on Collection {\n          __typename\n        }\n        ... on Item {\n          __typename\n        }\n        ... on Community {\n          __typename\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment sharedBlockSlotFragment on TemplateSlotBlockInstance {\n  empty\n  content\n  kind\n  valid\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  empty\n  content\n  kind\n  valid\n  hidesTemplate\n}\n\nfragment sharedListItemTemplateFragment on ListItemTemplateInstance {\n  definition {\n    seeAllOrderingIdentifier\n    id\n  }\n  entity {\n    __typename\n    ... on Collection {\n      __typename\n      id\n      slug\n      title\n      hierarchicalDepth\n      ...getThumbWithFallbackFragment\n      attributions {\n        id\n      }\n      ...ContributorsListFragment\n      heroImage {\n        large {\n          webp {\n            alt\n            url\n            width\n            height\n          }\n        }\n        medium {\n          webp {\n            url\n            width\n          }\n        }\n        thumb {\n          webp {\n            url\n            width\n          }\n        }\n      }\n    }\n    ... on Item {\n      __typename\n      id\n      slug\n      title\n      hierarchicalDepth\n      attributions {\n        id\n      }\n      ...getThumbWithFallbackFragment\n      ...ContributorsListFragment\n      heroImage {\n        large {\n          webp {\n            alt\n            url\n            width\n            height\n          }\n        }\n        medium {\n          webp {\n            url\n            width\n          }\n        }\n        thumb {\n          webp {\n            url\n            width\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  slots {\n    contextFull {\n      ...sharedInlineSlotFragment\n    }\n    contextAbbr {\n      ...sharedInlineSlotFragment\n    }\n    contextC {\n      ...sharedInlineSlotFragment\n    }\n    description {\n      ...sharedBlockSlotFragment\n    }\n    header {\n      ...sharedInlineSlotFragment\n    }\n    metaA {\n      ...sharedInlineSlotFragment\n    }\n    metaB {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    nestedHeader {\n      ...sharedInlineSlotFragment\n    }\n    nestedSubheader {\n      ...sharedInlineSlotFragment\n    }\n    nestedContext {\n      ...sharedInlineSlotFragment\n    }\n    nestedMetadata {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n\nfragment sharedListItemsTemplateFragment on TemplateEntityList {\n  empty\n  count\n  depths: listItemLayouts {\n    template {\n      entity {\n        __typename\n        ... on Collection {\n          hierarchicalDepth\n        }\n        ... on Item {\n          hierarchicalDepth\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n    id\n  }\n  listItemLayouts {\n    template {\n      entity {\n        __typename\n        ... on Collection {\n          hierarchicalDepth\n        }\n        ... on Item {\n          hierarchicalDepth\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...sharedListItemTemplateFragment\n      entityList {\n        empty\n        count\n        listItemLayouts {\n          template {\n            ...sharedListItemTemplateFragment\n            id\n          }\n          id\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment sharedListTemplateFragment on AnyMainTemplateInstance {\n  __isAnyMainTemplateInstance: __typename\n  ... on LinkListTemplateInstance {\n    entity {\n      __typename\n      ... on Community {\n        __typename\n        slug\n      }\n      ... on Collection {\n        __typename\n        slug\n        ...getThumbWithFallbackFragment\n      }\n      ... on Item {\n        __typename\n        slug\n        ...getThumbWithFallbackFragment\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    linksDefinition: definition {\n      background\n      seeAllButtonLabel\n      showSeeAllButton\n      selectionMode\n      selectionLimit\n      showEntityContext\n      title\n      variant\n      showHeroImage\n      width\n      showNestedEntities\n      seeAllOrderingIdentifier\n      showContributors\n      id\n    }\n    slots {\n      blockHeader {\n        ...sharedInlineSlotFragment\n      }\n      header {\n        ...sharedInlineSlotFragment\n      }\n      headerAside {\n        ...sharedInlineSlotFragment\n      }\n      metadata {\n        ...sharedInlineSlotFragment\n      }\n      subtitle {\n        ...sharedInlineSlotFragment\n      }\n    }\n    entityList {\n      count\n      empty\n      ...sharedListItemsTemplateFragment\n    }\n  }\n  ... on DescendantListTemplateInstance {\n    seeAllOrdering {\n      count\n      name\n      id\n    }\n    entity {\n      __typename\n      ... on Community {\n        __typename\n        slug\n      }\n      ... on Collection {\n        __typename\n        id\n        title\n        slug\n        ...getThumbWithFallbackFragment\n      }\n      ... on Item {\n        __typename\n        id\n        title\n        slug\n        ...getThumbWithFallbackFragment\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    descendantsDefinition: definition {\n      background\n      seeAllButtonLabel\n      showSeeAllButton\n      selectionMode\n      selectionPropertyPath\n      orderingIdentifier\n      dynamicOrderingDefinition {\n        filter {\n          schemas {\n            namespace\n            identifier\n          }\n        }\n      }\n      selectionLimit\n      entityContext\n      title\n      variant\n      showHeroImage\n      width\n      showNestedEntities\n      seeAllOrderingIdentifier\n      showContributors\n      id\n    }\n    slots {\n      blockHeader {\n        ...sharedInlineSlotFragment\n      }\n      header {\n        ...sharedInlineSlotFragment\n      }\n      headerAside {\n        ...sharedInlineSlotFragment\n      }\n      metadata {\n        ...sharedInlineSlotFragment\n      }\n      subtitle {\n        ...sharedInlineSlotFragment\n      }\n    }\n    entityList {\n      ...sharedListItemsTemplateFragment\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c5ebd6d6dd7a3e1f454228aa8cc80121";

export default node;
