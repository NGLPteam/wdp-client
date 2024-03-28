/**
 * @generated SignedSource<<84f6b02f54f57d77d372ac7b2a67411a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type layoutItemQuery$variables = {
  slug: string;
};
export type layoutItemQuery$data = {
  readonly item: {
    readonly community: {
      readonly " $fragmentSpreads": FragmentRefs<"PortalCommunityNavListFragment" | "PortalCommunityPickerFragment">;
    };
    readonly " $fragmentSpreads": FragmentRefs<"EntityLayoutFactoryFragment">;
  } | null | undefined;
};
export type layoutItemQuery = {
  response: layoutItemQuery$data;
  variables: layoutItemQuery$variables;
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
  "name": "identifier",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    (v2/*: any*/)
  ],
  "storageKey": null
},
v4 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "BreadcrumbsBarFragment"
},
v5 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "EntityNavBarFragment"
},
v6 = {
  "kind": "InlineDataFragmentSpread",
  "name": "EntityLayoutFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v4/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "EntityHeroFragment"
            },
            (v5/*: any*/)
          ],
          "type": "Entity",
          "abstractKey": "__isEntity"
        }
      ],
      "type": "AnyEntity",
      "abstractKey": "__isAnyEntity"
    }
  ],
  "args": null,
  "argumentDefinitions": ([]/*: any*/)
},
v7 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 4
},
v8 = [
  {
    "kind": "Literal",
    "name": "order",
    "value": "RECENT"
  },
  (v7/*: any*/)
],
v9 = {
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
},
v10 = [
  {
    "kind": "Literal",
    "name": "page",
    "value": 1
  },
  (v7/*: any*/)
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v16/*: any*/)
  ],
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subtitle",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "visibility",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currentlyHidden",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v23 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v22/*: any*/)
    ],
    "storageKey": null
  }
],
v24 = {
  "alias": "placeholder",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "thumb",
  "plural": false,
  "selections": (v23/*: any*/),
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
    (v21/*: any*/),
    {
      "alias": "image",
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "hero",
      "plural": false,
      "selections": (v23/*: any*/),
      "storageKey": null
    },
    (v24/*: any*/)
  ],
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageMetadata",
  "kind": "LinkedField",
  "name": "heroImageMetadata",
  "plural": false,
  "selections": [
    (v26/*: any*/)
  ],
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
        (v22/*: any*/),
        (v26/*: any*/),
        (v29/*: any*/),
        (v30/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v32 = [
  (v9/*: any*/)
],
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "precision",
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v34/*: any*/),
    (v35/*: any*/)
  ],
  "storageKey": null
},
v37 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal"
  }
],
v38 = {
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
v39 = [
  (v28/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
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
  }
],
v40 = {
  "alias": "openAccess",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "open_access"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v39/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"open_access\")"
},
v41 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v42 = {
  "alias": "ccLicense",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "cc_license"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": [
    (v28/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "selection",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "defaultSelection",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SelectOption",
          "kind": "LinkedField",
          "name": "options",
          "plural": true,
          "selections": [
            (v41/*: any*/),
            (v34/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "SelectProperty",
      "abstractKey": null
    }
  ],
  "storageKey": "schemaProperty(fullPath:\"cc_license\")"
},
v43 = {
  "alias": "peerReviewed",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "peer_reviewed"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v39/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"peer_reviewed\")"
},
v44 = {
  "kind": "InlineFragment",
  "selections": [
    (v40/*: any*/),
    (v42/*: any*/),
    (v43/*: any*/)
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
},
v45 = {
  "kind": "InlineFragment",
  "selections": [
    (v16/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v46 = {
  "alias": "pdfVersion",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "pdf_version"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": [
    (v28/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "asset",
          "plural": false,
          "selections": [
            (v28/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v13/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "downloadUrl",
                  "storageKey": null
                },
                (v15/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "contentType",
                  "storageKey": null
                }
              ],
              "type": "Asset",
              "abstractKey": "__isAsset"
            },
            (v45/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "AssetProperty",
      "abstractKey": null
    }
  ],
  "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
},
v47 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v48 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "image",
    "plural": false,
    "selections": [
      (v21/*: any*/)
    ],
    "storageKey": null
  }
],
v49 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v50 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyContributor"
},
v51 = {
  "kind": "InlineFragment",
  "selections": [
    (v12/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v52 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v53 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v54 = {
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
v55 = [
  (v12/*: any*/),
  (v16/*: any*/)
],
v56 = [
  (v12/*: any*/),
  (v47/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "contributor",
    "plural": false,
    "selections": [
      (v28/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": (v48/*: any*/),
        "type": "PersonContributor",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v48/*: any*/),
        "type": "OrganizationContributor",
        "abstractKey": null
      },
      (v45/*: any*/)
    ],
    "storageKey": null
  },
  (v16/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v49/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "displayName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "contributorKind",
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
          (v50/*: any*/),
          (v51/*: any*/),
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
                          (v26/*: any*/),
                          (v22/*: any*/)
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
              (v49/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "orcid",
                "storageKey": null
              },
              (v52/*: any*/),
              (v53/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          (v54/*: any*/)
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
            "selections": (v55/*: any*/),
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
            "selections": (v55/*: any*/),
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
v57 = [
  (v11/*: any*/)
],
v58 = [
  (v28/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v57/*: any*/),
    "type": "Collection",
    "abstractKey": null
  },
  (v45/*: any*/)
],
v59 = {
  "alias": "journal",
  "args": (v37/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v58/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v60 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v61 = [
  (v60/*: any*/)
],
v62 = {
  "alias": "about",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "about"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": [
    (v28/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": (v61/*: any*/),
      "type": "MarkdownProperty",
      "abstractKey": null
    }
  ],
  "storageKey": "schemaProperty(fullPath:\"about\")"
},
v63 = {
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
    (v41/*: any*/),
    (v15/*: any*/),
    (v12/*: any*/),
    (v16/*: any*/)
  ],
  "storageKey": null
},
v64 = {
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
        (v13/*: any*/),
        (v12/*: any*/),
        (v2/*: any*/),
        (v14/*: any*/),
        (v16/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": "orderings(availability:\"ENABLED\")"
},
v65 = {
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
            (v11/*: any*/),
            (v12/*: any*/),
            (v16/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v66 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isSluggable"
},
v67 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isNode"
},
v68 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "id"
  }
],
v69 = [
  (v28/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v61/*: any*/),
    "type": "StringProperty",
    "abstractKey": null
  }
],
v70 = {
  "alias": "vol",
  "args": [
    {
      "kind": "Literal",
      "name": "name",
      "value": "volume"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorByName",
  "plural": false,
  "selections": [
    (v28/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v11/*: any*/),
        {
          "alias": "number",
          "args": (v68/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "schemaProperty",
          "plural": false,
          "selections": (v69/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"id\")"
        }
      ],
      "type": "Collection",
      "abstractKey": null
    },
    (v45/*: any*/)
  ],
  "storageKey": "ancestorByName(name:\"volume\")"
},
v71 = {
  "alias": "issueNumber",
  "args": [
    {
      "kind": "Literal",
      "name": "fullPath",
      "value": "number"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v69/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"number\")"
},
v72 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "volume.id"
  }
],
v73 = {
  "alias": "volumeNumber",
  "args": (v72/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v69/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"volume.id\")"
},
v74 = {
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
v75 = {
  "kind": "InlineFragment",
  "selections": (v57/*: any*/),
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v76 = [
  (v28/*: any*/),
  (v75/*: any*/),
  (v45/*: any*/)
],
v77 = {
  "alias": "unit",
  "args": [
    {
      "kind": "Literal",
      "name": "schema",
      "value": "nglp:unit"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v76/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:unit\")"
},
v78 = {
  "alias": "campus",
  "args": [
    {
      "kind": "Literal",
      "name": "schema",
      "value": "nglp:campus"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v76/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:campus\")"
},
v79 = {
  "kind": "InlineFragment",
  "selections": [
    (v28/*: any*/),
    (v63/*: any*/),
    (v66/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": "journal",
          "args": (v37/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "ancestorOfType",
          "plural": false,
          "selections": [
            (v75/*: any*/)
          ],
          "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
        },
        {
          "alias": "issue",
          "args": [
            {
              "kind": "Literal",
              "name": "schema",
              "value": "nglp:journal_issue"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "ancestorOfType",
          "plural": false,
          "selections": [
            (v28/*: any*/),
            {
              "kind": "TypeDiscriminator",
              "abstractKey": "__isAnyEntity"
            },
            {
              "kind": "InlineFragment",
              "selections": [
                (v11/*: any*/),
                (v70/*: any*/),
                (v71/*: any*/),
                (v73/*: any*/)
              ],
              "type": "Collection",
              "abstractKey": null
            },
            (v75/*: any*/),
            (v45/*: any*/)
          ],
          "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
        },
        (v77/*: any*/),
        {
          "alias": "series",
          "args": [
            {
              "kind": "Literal",
              "name": "schema",
              "value": "nglp:series"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "ancestorOfType",
          "plural": false,
          "selections": (v76/*: any*/),
          "storageKey": "ancestorOfType(schema:\"nglp:series\")"
        },
        (v78/*: any*/)
      ],
      "type": "Item",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v77/*: any*/),
        (v78/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v80 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v35/*: any*/),
    (v34/*: any*/)
  ],
  "storageKey": null
},
v81 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  }
],
v82 = [
  (v28/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fullPath",
        "storageKey": null
      },
      (v60/*: any*/)
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "layoutItemQuery",
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
            "kind": "InlineDataFragmentSpread",
            "name": "EntityLayoutFactoryFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
                      (v6/*: any*/),
                      {
                        "kind": "InlineDataFragmentSpread",
                        "name": "JournalLayoutFragment",
                        "selections": [
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "JournalHeroFragment"
                          },
                          (v5/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": "related",
                            "args": (v8/*: any*/),
                            "concreteType": "CollectionConnection",
                            "kind": "LinkedField",
                            "name": "relatedCollections",
                            "plural": false,
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "RelatedJournalsFragment"
                              }
                            ],
                            "storageKey": "relatedCollections(order:\"RECENT\",perPage:4)"
                          }
                        ],
                        "args": null,
                        "argumentDefinitions": []
                      },
                      {
                        "kind": "InlineDataFragmentSpread",
                        "name": "IssueLayoutFragment",
                        "selections": [
                          (v4/*: any*/),
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "IssueHeroFragment"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CollectionContributionConnection",
                            "kind": "LinkedField",
                            "name": "contributions",
                            "plural": false,
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "ContributionsBlockFragment"
                              },
                              (v9/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": (v10/*: any*/),
                            "concreteType": "CollectionConnection",
                            "kind": "LinkedField",
                            "name": "relatedCollections",
                            "plural": false,
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "RelatedIssuesFragment"
                              }
                            ],
                            "storageKey": "relatedCollections(page:1,perPage:4)"
                          }
                        ],
                        "args": null,
                        "argumentDefinitions": []
                      },
                      {
                        "kind": "InlineDataFragmentSpread",
                        "name": "VolumeLayoutFragment",
                        "selections": [
                          (v4/*: any*/),
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "VolumeHeroFragment"
                          },
                          (v5/*: any*/)
                        ],
                        "args": null,
                        "argumentDefinitions": []
                      },
                      {
                        "kind": "InlineDataFragmentSpread",
                        "name": "SeriesLayoutFragment",
                        "selections": [
                          (v4/*: any*/),
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "SeriesHeroFragment"
                          },
                          (v5/*: any*/)
                        ],
                        "args": null,
                        "argumentDefinitions": []
                      }
                    ],
                    "type": "Collection",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
                      (v6/*: any*/),
                      {
                        "kind": "InlineDataFragmentSpread",
                        "name": "ArticleLayoutFragment",
                        "selections": [
                          (v4/*: any*/),
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "ArticleParentHeaderFragment"
                          },
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "ArticleHeroFragment"
                          },
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "ArticleTabNavFragment"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ItemConnection",
                            "kind": "LinkedField",
                            "name": "relatedItems",
                            "plural": false,
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "RelatedArticlesFragment"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "args": null,
                        "argumentDefinitions": []
                      }
                    ],
                    "type": "Item",
                    "abstractKey": null
                  }
                ],
                "type": "AnyEntity",
                "abstractKey": "__isAnyEntity"
              }
            ],
            "args": null,
            "argumentDefinitions": []
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
                "name": "PortalCommunityPickerFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "PortalCommunityNavListFragment"
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
    "name": "layoutItemQuery",
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
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              (v11/*: any*/),
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "HierarchicalSchemaRank",
                "kind": "LinkedField",
                "name": "schemaRanks",
                "plural": true,
                "selections": [
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/)
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
                        "selections": [
                          (v12/*: any*/),
                          (v11/*: any*/),
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v16/*: any*/)
            ],
            "storageKey": null
          },
          (v16/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v17/*: any*/),
                  (v12/*: any*/),
                  (v11/*: any*/),
                  (v18/*: any*/),
                  (v19/*: any*/),
                  (v20/*: any*/),
                  (v25/*: any*/),
                  (v27/*: any*/),
                  {
                    "alias": "related",
                    "args": (v8/*: any*/),
                    "concreteType": "CollectionConnection",
                    "kind": "LinkedField",
                    "name": "relatedCollections",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CollectionEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Collection",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v12/*: any*/),
                              (v28/*: any*/),
                              (v16/*: any*/),
                              (v11/*: any*/),
                              (v18/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "updatedAt",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": [
                                  (v21/*: any*/),
                                  (v31/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": "issues",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "schema",
                                    "value": [
                                      "nglp:journal_issue"
                                    ]
                                  },
                                  {
                                    "kind": "Literal",
                                    "name": "scope",
                                    "value": "COLLECTION"
                                  }
                                ],
                                "concreteType": "EntityDescendantConnection",
                                "kind": "LinkedField",
                                "name": "descendants",
                                "plural": false,
                                "selections": (v32/*: any*/),
                                "storageKey": "descendants(schema:[\"nglp:journal_issue\"],scope:\"COLLECTION\")"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "relatedCollections(order:\"RECENT\",perPage:4)"
                  },
                  (v33/*: any*/),
                  (v36/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "thumbnail",
                    "plural": false,
                    "selections": [
                      (v31/*: any*/),
                      (v21/*: any*/),
                      (v24/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": "journal",
                    "args": (v37/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v28/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v11/*: any*/),
                          (v18/*: any*/),
                          (v38/*: any*/),
                          (v44/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      (v45/*: any*/)
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                  },
                  (v46/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionContributionConnection",
                    "kind": "LinkedField",
                    "name": "contributions",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
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
                                "selections": (v56/*: any*/),
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
                                "selections": (v56/*: any*/),
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
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": (v10/*: any*/),
                    "concreteType": "CollectionConnection",
                    "kind": "LinkedField",
                    "name": "relatedCollections",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CollectionEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Collection",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v12/*: any*/),
                              (v28/*: any*/),
                              (v11/*: any*/),
                              (v18/*: any*/),
                              (v16/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": [
                                  (v31/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v36/*: any*/),
                              {
                                "alias": "volume",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "schema",
                                    "value": "nglp:journal_volume"
                                  }
                                ],
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "ancestorOfType",
                                "plural": false,
                                "selections": (v58/*: any*/),
                                "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                              },
                              (v59/*: any*/),
                              {
                                "alias": "articles",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "schema",
                                    "value": "nglp:journal_article"
                                  }
                                ],
                                "concreteType": "CollectionConnection",
                                "kind": "LinkedField",
                                "name": "collections",
                                "plural": false,
                                "selections": (v32/*: any*/),
                                "storageKey": "collections(schema:\"nglp:journal_article\")"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "relatedCollections(page:1,perPage:4)"
                  },
                  (v62/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v28/*: any*/),
                          (v63/*: any*/),
                          (v64/*: any*/),
                          (v65/*: any*/),
                          (v66/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v67/*: any*/)
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          }
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      (v67/*: any*/),
                      (v66/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v70/*: any*/),
                          (v71/*: any*/),
                          (v73/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      }
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v74/*: any*/),
                  (v38/*: any*/),
                  (v44/*: any*/),
                  (v79/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v17/*: any*/),
                  (v12/*: any*/),
                  (v11/*: any*/),
                  (v18/*: any*/),
                  (v33/*: any*/),
                  (v19/*: any*/),
                  (v20/*: any*/),
                  (v80/*: any*/),
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
                          (v47/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "contributor",
                            "plural": false,
                            "selections": [
                              (v28/*: any*/),
                              (v50/*: any*/),
                              (v51/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v52/*: any*/),
                                  (v53/*: any*/)
                                ],
                                "type": "PersonContributor",
                                "abstractKey": null
                              },
                              (v54/*: any*/),
                              (v45/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v46/*: any*/),
                  {
                    "alias": "journal",
                    "args": (v37/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v28/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v43/*: any*/),
                          {
                            "alias": "prePrintVersion",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "fullPath",
                                "value": "preprint_version"
                              }
                            ],
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "schemaProperty",
                            "plural": false,
                            "selections": (v39/*: any*/),
                            "storageKey": "schemaProperty(fullPath:\"preprint_version\")"
                          },
                          (v40/*: any*/),
                          (v42/*: any*/)
                        ],
                        "type": "SchemaInstance",
                        "abstractKey": "__isSchemaInstance"
                      },
                      (v45/*: any*/)
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                  },
                  {
                    "alias": "abstract",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "abstract"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": [
                      (v28/*: any*/),
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
                            "concreteType": "FullText",
                            "kind": "LinkedField",
                            "name": "fullText",
                            "plural": false,
                            "selections": [
                              (v60/*: any*/),
                              (v15/*: any*/),
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
                      }
                    ],
                    "storageKey": "schemaProperty(fullPath:\"abstract\")"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnalyticsEventCountSummary",
                    "kind": "LinkedField",
                    "name": "entityViews",
                    "plural": false,
                    "selections": (v81/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnalyticsEventCountSummary",
                    "kind": "LinkedField",
                    "name": "assetDownloads",
                    "plural": false,
                    "selections": (v81/*: any*/),
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
                      (v2/*: any*/),
                      (v13/*: any*/),
                      (v16/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v65/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnyAssetConnection",
                    "kind": "LinkedField",
                    "name": "assets",
                    "plural": false,
                    "selections": (v32/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemConnection",
                    "kind": "LinkedField",
                    "name": "relatedItems",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ItemEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Item",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v11/*: any*/),
                              (v12/*: any*/),
                              (v80/*: any*/),
                              (v59/*: any*/),
                              {
                                "alias": "volumeId",
                                "args": (v72/*: any*/),
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "schemaProperty",
                                "plural": false,
                                "selections": (v82/*: any*/),
                                "storageKey": "schemaProperty(fullPath:\"volume.id\")"
                              },
                              {
                                "alias": "issueId",
                                "args": (v68/*: any*/),
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "schemaProperty",
                                "plural": false,
                                "selections": (v82/*: any*/),
                                "storageKey": "schemaProperty(fullPath:\"id\")"
                              },
                              (v16/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v28/*: any*/),
                          (v63/*: any*/),
                          (v66/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ImageAttachment",
                                    "kind": "LinkedField",
                                    "name": "thumbnail",
                                    "plural": false,
                                    "selections": [
                                      (v21/*: any*/),
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
                                              (v26/*: any*/),
                                              (v22/*: any*/),
                                              (v29/*: any*/),
                                              (v30/*: any*/)
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      (v24/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v25/*: any*/),
                                  (v27/*: any*/),
                                  (v64/*: any*/)
                                ],
                                "type": "Entity",
                                "abstractKey": "__isEntity"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v62/*: any*/)
                                ],
                                "type": "Item",
                                "abstractKey": null
                              },
                              (v67/*: any*/)
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          }
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      }
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v79/*: any*/),
                  (v74/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v42/*: any*/),
                      (v43/*: any*/),
                      (v40/*: any*/)
                    ],
                    "type": "SchemaInstance",
                    "abstractKey": "__isSchemaInstance"
                  }
                ],
                "type": "Item",
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
    "cacheID": "7657029e8e2aca5b524384160fc9ee7e",
    "id": null,
    "metadata": {},
    "name": "layoutItemQuery",
    "operationKind": "query",
    "text": "query layoutItemQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    ...EntityLayoutFactoryFragment\n    community {\n      ...PortalCommunityPickerFragment\n      ...PortalCommunityNavListFragment\n      id\n    }\n    id\n  }\n}\n\nfragment ArticleHeroFragment on Item {\n  slug\n  title\n  subtitle\n  summary\n  visibility\n  currentlyHidden\n  ...DOIFragment\n  published {\n    ...PrecisionDateFragment\n    value\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...PeerReviewedFragment\n    ...PreprintVersionFragment\n    ...OpenAccessFragment\n    ...CCLicenseFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  abstract: schemaProperty(fullPath: \"abstract\") {\n    __typename\n    ...FullTextFragment\n  }\n  entityViews {\n    ...ViewCountFragment\n  }\n  assetDownloads {\n    ...DownloadCountFragment\n  }\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n  ...OpenAccessFragment\n}\n\nfragment ArticleLayoutFragment on Item {\n  ...BreadcrumbsBarFragment\n  ...ArticleParentHeaderFragment\n  ...ArticleHeroFragment\n  ...ArticleTabNavFragment\n  relatedItems {\n    ...RelatedArticlesFragment\n  }\n}\n\nfragment ArticleParentHeaderFragment on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  ... on Item {\n    journal: ancestorOfType(schema: \"nglp:journal\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n      __typename\n      ...getEntityDisplayNameFragment\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    unit: ancestorOfType(schema: \"nglp:unit\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    series: ancestorOfType(schema: \"nglp:series\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    campus: ancestorOfType(schema: \"nglp:campus\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n  ... on Collection {\n    unit: ancestorOfType(schema: \"nglp:unit\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    campus: ancestorOfType(schema: \"nglp:campus\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment ArticleTabNavFragment on Item {\n  schemaVersion {\n    identifier\n    name\n    id\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n  contributions {\n    pageInfo {\n      totalCount\n    }\n  }\n  assets {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment AssetDownloadButtonFragment on Asset {\n  __isAsset: __typename\n  name\n  downloadUrl\n  kind\n  contentType\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment CCLicenseFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  ccLicense: schemaProperty(fullPath: \"cc_license\") {\n    __typename\n    ... on SelectProperty {\n      selection\n      defaultSelection\n      options {\n        label\n        value\n      }\n    }\n  }\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment ContributionBlockItemFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  displayName\n  contributorKind\n  role\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Contributor {\n      __isContributor: __typename\n      image {\n        ...ContributorAvatarFragment\n      }\n    }\n    ... on PersonContributor {\n      affiliation\n      orcid\n    }\n    ...ContributorNameFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      slug\n      id\n    }\n  }\n  ... on CollectionContribution {\n    collection {\n      slug\n      id\n    }\n  }\n}\n\nfragment ContributionsBlockFragment on Paginated {\n  __isPaginated: __typename\n  ... on ItemContributionConnection {\n    nodes {\n      slug\n      role\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n  ... on CollectionContributionConnection {\n    nodes {\n      slug\n      role\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  nodes {\n    role\n    contributor {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ...ContributorNameFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DOIFragment on HasDOI {\n  __isHasDOI: __typename\n  doi\n}\n\nfragment DownloadCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment EntityHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    title\n    subtitle\n    summary\n    thumbnail {\n      storage\n      ...ContentImageFragment\n    }\n    heroImage {\n      storage\n      ...HeroImageFragment\n    }\n    heroImageMetadata {\n      ...HeroImageMetadataFragment\n    }\n  }\n  ... on Collection {\n    visibility\n    currentlyHidden\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n  }\n  ... on Item {\n    visibility\n    currentlyHidden\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n  }\n}\n\nfragment EntityLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...JournalLayoutFragment\n    ...IssueLayoutFragment\n    ...VolumeLayoutFragment\n    ...SeriesLayoutFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...ArticleLayoutFragment\n  }\n}\n\nfragment EntityLayoutFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n    ...EntityNavBarFragment\n  }\n}\n\nfragment EntityNavBarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Entity {\n    __isEntity: __typename\n    title\n    ...EntityNavListFragment\n  }\n}\n\nfragment EntityNavListFragment on Entity {\n  __isEntity: __typename\n  __typename\n  orderings(availability: ENABLED) {\n    nodes {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment FullTextFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  ... on FullTextProperty {\n    fullText {\n      content\n      kind\n      lang\n    }\n    type\n  }\n}\n\nfragment HeroImageFragment on ImageAttachment {\n  image: hero {\n    webp {\n      url\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment HeroImageMetadataFragment on ImageMetadata {\n  alt\n}\n\nfragment ISSNFragment on HasISSN {\n  __isHasISSN: __typename\n  issn\n}\n\nfragment IssueHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  visibility\n  currentlyHidden\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ...getEntityDisplayNameFragment\n}\n\nfragment IssueLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...IssueHeroFragment\n  contributions {\n    ...ContributionsBlockFragment\n    pageInfo {\n      totalCount\n    }\n  }\n  relatedCollections(page: 1, perPage: 4) {\n    ...RelatedIssuesFragment\n  }\n}\n\nfragment JournalHeroCompactFragment on Collection {\n  title\n  subtitle\n}\n\nfragment JournalHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  visibility\n  currentlyHidden\n  heroImage {\n    storage\n    ...HeroImageFragment\n  }\n  heroImageMetadata {\n    ...HeroImageMetadataFragment\n  }\n  ...DOIFragment\n  ...JournalHeroMetadataFragment\n}\n\nfragment JournalHeroMetadataFragment on Collection {\n  ...ISSNFragment\n  ...OpenAccessFragment\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n}\n\nfragment JournalLayoutFragment on Collection {\n  ...JournalHeroFragment\n  ...EntityNavBarFragment\n  ...BreadcrumbsBarFragment\n  related: relatedCollections(order: RECENT, perPage: 4) {\n    ...RelatedJournalsFragment\n  }\n}\n\nfragment OpenAccessFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  openAccess: schemaProperty(fullPath: \"open_access\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PeerReviewedFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  peerReviewed: schemaProperty(fullPath: \"peer_reviewed\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PortalCommunityNavListFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    kind\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment PortalCommunityPickerFragment on Community {\n  title\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PreprintVersionFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  prePrintVersion: schemaProperty(fullPath: \"preprint_version\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment RelatedArticlesFragment on ItemConnection {\n  edges {\n    node {\n      title\n      slug\n      published {\n        ...PrecisionDateFragment\n      }\n      journal: ancestorOfType(schema: \"nglp:journal\") {\n        __typename\n        ... on Collection {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      volumeId: schemaProperty(fullPath: \"volume.id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      issueId: schemaProperty(fullPath: \"id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment RelatedIssueBlockFragment on Collection {\n  __typename\n  title\n  subtitle\n  slug\n  id\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: collections(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedIssueBlockFragment\n      id\n    }\n  }\n}\n\nfragment RelatedJournalFragment on Collection {\n  __typename\n  id\n  title\n  subtitle\n  slug\n  updatedAt\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  issues: descendants(scope: COLLECTION, schema: [\"nglp:journal_issue\"]) {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedJournalsFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedJournalFragment\n      id\n    }\n  }\n}\n\nfragment SeriesHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  visibility\n  currentlyHidden\n  published {\n    ...PrecisionDateFragment\n    value\n  }\n  about: schemaProperty(fullPath: \"about\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n  ...ArticleParentHeaderFragment\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n}\n\nfragment SeriesLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...SeriesHeroFragment\n  ...EntityNavBarFragment\n}\n\nfragment ViewCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment VolumeHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  visibility\n  currentlyHidden\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment VolumeLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...VolumeHeroFragment\n  ...EntityNavBarFragment\n}\n\nfragment getEntityDisplayNameFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issueNumber: schemaProperty(fullPath: \"number\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n  ...getEntityVolumeNumberFragment\n}\n\nfragment getEntityVolumeNumberFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        number: schemaProperty(fullPath: \"id\") {\n          __typename\n          ... on StringProperty {\n            content\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    volumeNumber: schemaProperty(fullPath: \"volume.id\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e99e5bcd4b3bde87a185e50fc3b81ef2";

export default node;
