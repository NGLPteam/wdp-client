/**
 * @generated SignedSource<<52e5d2a716e75e0a0673dc55c57f9a3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageTemplatesCollectionPageQuery$variables = {
  pageSlug: string;
  slug: string;
};
export type pageTemplatesCollectionPageQuery$data = {
  readonly collection: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPageLayoutFactoryFragment">;
  } | null | undefined;
};
export type pageTemplatesCollectionPageQuery = {
  response: pageTemplatesCollectionPageQuery$data;
  variables: pageTemplatesCollectionPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pageSlug"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v2 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    (v3/*: any*/)
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v6 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "BreadcrumbsBarFragment"
},
v7 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "EntityNavBarFragment"
},
v8 = {
  "kind": "InlineDataFragmentSpread",
  "name": "EntityLayoutFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v6/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "EntityHeroFragment"
            },
            (v7/*: any*/)
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
v9 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 4
},
v10 = [
  {
    "kind": "Literal",
    "name": "order",
    "value": "RECENT"
  },
  (v9/*: any*/)
],
v11 = {
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
v12 = [
  {
    "kind": "Literal",
    "name": "page",
    "value": 1
  },
  (v9/*: any*/)
],
v13 = {
  "kind": "InlineDataFragmentSpread",
  "name": "EntityLayoutFactoryFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v5/*: any*/),
            (v4/*: any*/),
            (v8/*: any*/),
            {
              "kind": "InlineDataFragmentSpread",
              "name": "JournalLayoutFragment",
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "JournalHeroFragment"
                },
                (v7/*: any*/),
                (v6/*: any*/),
                {
                  "alias": "related",
                  "args": (v10/*: any*/),
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
              "argumentDefinitions": ([]/*: any*/)
            },
            {
              "kind": "InlineDataFragmentSpread",
              "name": "IssueLayoutFragment",
              "selections": [
                (v6/*: any*/),
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
                    (v11/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": (v12/*: any*/),
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
              "argumentDefinitions": ([]/*: any*/)
            },
            {
              "kind": "InlineDataFragmentSpread",
              "name": "VolumeLayoutFragment",
              "selections": [
                (v6/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "VolumeHeroFragment"
                },
                (v7/*: any*/)
              ],
              "args": null,
              "argumentDefinitions": ([]/*: any*/)
            },
            {
              "kind": "InlineDataFragmentSpread",
              "name": "SeriesLayoutFragment",
              "selections": [
                (v6/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "SeriesHeroFragment"
                },
                (v7/*: any*/)
              ],
              "args": null,
              "argumentDefinitions": ([]/*: any*/)
            }
          ],
          "type": "Collection",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v5/*: any*/),
            (v4/*: any*/),
            (v8/*: any*/),
            {
              "kind": "InlineDataFragmentSpread",
              "name": "ArticleLayoutFragment",
              "selections": [
                (v6/*: any*/),
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
              "argumentDefinitions": ([]/*: any*/)
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
  "argumentDefinitions": ([]/*: any*/)
},
v14 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "pageSlug"
  }
],
v15 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "EntityPageLayoutFragment"
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
    (v3/*: any*/),
    (v16/*: any*/)
  ],
  "storageKey": null
},
v18 = [
  {
    "kind": "Literal",
    "name": "availability",
    "value": "ENABLED"
  }
],
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
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
  "name": "url",
  "storageKey": null
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
        (v21/*: any*/),
        (v22/*: any*/),
        (v23/*: any*/),
        (v24/*: any*/)
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
v27 = {
  "alias": "placeholder",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "thumb",
  "plural": false,
  "selections": (v26/*: any*/),
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": (v14/*: any*/),
  "concreteType": "Page",
  "kind": "LinkedField",
  "name": "page",
  "plural": false,
  "selections": [
    (v20/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
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
        (v25/*: any*/),
        (v27/*: any*/)
      ],
      "storageKey": null
    },
    (v16/*: any*/)
  ],
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subtitle",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "visibility",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currentlyHidden",
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
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    (v32/*: any*/),
    {
      "alias": "image",
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "hero",
      "plural": false,
      "selections": (v26/*: any*/),
      "storageKey": null
    },
    (v27/*: any*/)
  ],
  "storageKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageMetadata",
  "kind": "LinkedField",
  "name": "heroImageMetadata",
  "plural": false,
  "selections": [
    (v21/*: any*/)
  ],
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v36 = {
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
        (v21/*: any*/),
        (v23/*: any*/),
        (v24/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v37 = [
  (v11/*: any*/)
],
v38 = {
  "alias": "related",
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
            (v5/*: any*/),
            (v35/*: any*/),
            (v16/*: any*/),
            (v20/*: any*/),
            (v29/*: any*/),
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
                (v32/*: any*/),
                (v36/*: any*/)
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
              "selections": (v37/*: any*/),
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
v39 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v40 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v41 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "precision",
  "storageKey": null
},
v42 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v40/*: any*/),
    (v41/*: any*/)
  ],
  "storageKey": null
},
v43 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
    (v36/*: any*/),
    (v32/*: any*/),
    (v27/*: any*/)
  ],
  "storageKey": null
},
v44 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal"
  }
],
v45 = {
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
v46 = [
  (v35/*: any*/),
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
v47 = {
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
  "selections": (v46/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"open_access\")"
},
v48 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v49 = {
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
    (v35/*: any*/),
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
            (v48/*: any*/),
            (v40/*: any*/)
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
v50 = {
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
  "selections": (v46/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"peer_reviewed\")"
},
v51 = {
  "kind": "InlineFragment",
  "selections": [
    (v47/*: any*/),
    (v49/*: any*/),
    (v50/*: any*/)
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
},
v52 = {
  "kind": "InlineFragment",
  "selections": [
    (v16/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v53 = {
  "alias": "journal",
  "args": (v44/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": [
    (v35/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v20/*: any*/),
        (v29/*: any*/),
        (v45/*: any*/),
        (v51/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    },
    (v52/*: any*/)
  ],
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v54 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v55 = {
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
    (v35/*: any*/),
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
            (v35/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v19/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "downloadUrl",
                  "storageKey": null
                },
                (v54/*: any*/),
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
            (v52/*: any*/)
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
v56 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v57 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "image",
    "plural": false,
    "selections": [
      (v32/*: any*/)
    ],
    "storageKey": null
  }
],
v58 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v59 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyContributor"
},
v60 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v61 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v62 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v63 = {
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
v64 = [
  (v5/*: any*/),
  (v16/*: any*/)
],
v65 = [
  (v5/*: any*/),
  (v56/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "contributor",
    "plural": false,
    "selections": [
      (v35/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": (v57/*: any*/),
        "type": "PersonContributor",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v57/*: any*/),
        "type": "OrganizationContributor",
        "abstractKey": null
      },
      (v52/*: any*/)
    ],
    "storageKey": null
  },
  (v16/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v58/*: any*/),
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
          (v59/*: any*/),
          (v60/*: any*/),
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
                          (v21/*: any*/),
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
              (v58/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "orcid",
                "storageKey": null
              },
              (v61/*: any*/),
              (v62/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          (v63/*: any*/)
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
            "selections": (v64/*: any*/),
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
            "selections": (v64/*: any*/),
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
v66 = {
  "alias": null,
  "args": null,
  "concreteType": "CollectionContributionConnection",
  "kind": "LinkedField",
  "name": "contributions",
  "plural": false,
  "selections": [
    (v11/*: any*/),
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
              "selections": (v65/*: any*/),
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
              "selections": (v65/*: any*/),
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
v67 = [
  (v20/*: any*/)
],
v68 = [
  (v35/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v67/*: any*/),
    "type": "Collection",
    "abstractKey": null
  },
  (v52/*: any*/)
],
v69 = {
  "alias": "journal",
  "args": (v44/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v68/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v70 = {
  "alias": null,
  "args": (v12/*: any*/),
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
            (v5/*: any*/),
            (v35/*: any*/),
            (v20/*: any*/),
            (v29/*: any*/),
            (v16/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageAttachment",
              "kind": "LinkedField",
              "name": "thumbnail",
              "plural": false,
              "selections": [
                (v36/*: any*/)
              ],
              "storageKey": null
            },
            (v42/*: any*/),
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
              "selections": (v68/*: any*/),
              "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
            },
            (v69/*: any*/),
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
              "selections": (v37/*: any*/),
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
v71 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v72 = [
  (v71/*: any*/)
],
v73 = {
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
    (v35/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": (v72/*: any*/),
      "type": "MarkdownProperty",
      "abstractKey": null
    }
  ],
  "storageKey": "schemaProperty(fullPath:\"about\")"
},
v74 = {
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
    (v48/*: any*/),
    (v54/*: any*/),
    (v5/*: any*/),
    (v16/*: any*/)
  ],
  "storageKey": null
},
v75 = {
  "alias": null,
  "args": (v18/*: any*/),
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
        (v19/*: any*/),
        (v5/*: any*/),
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "count",
          "storageKey": null
        },
        (v16/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": "orderings(availability:\"ENABLED\")"
},
v76 = {
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
                },
                (v16/*: any*/)
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
                  "selections": [
                    (v71/*: any*/),
                    (v54/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "valid",
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
        (v16/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v77 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isSluggable"
},
v78 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isNode"
},
v79 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "id"
  }
],
v80 = [
  (v35/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v72/*: any*/),
    "type": "StringProperty",
    "abstractKey": null
  }
],
v81 = {
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
    (v35/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v20/*: any*/),
        {
          "alias": "number",
          "args": (v79/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "schemaProperty",
          "plural": false,
          "selections": (v80/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"id\")"
        }
      ],
      "type": "Collection",
      "abstractKey": null
    },
    (v52/*: any*/)
  ],
  "storageKey": "ancestorByName(name:\"volume\")"
},
v82 = {
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
  "selections": (v80/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"number\")"
},
v83 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "volume.id"
  }
],
v84 = {
  "alias": "volumeNumber",
  "args": (v83/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v80/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"volume.id\")"
},
v85 = {
  "kind": "InlineFragment",
  "selections": [
    (v81/*: any*/),
    (v82/*: any*/),
    (v84/*: any*/)
  ],
  "type": "Collection",
  "abstractKey": null
},
v86 = {
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
v87 = {
  "kind": "InlineFragment",
  "selections": (v67/*: any*/),
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v88 = [
  (v35/*: any*/),
  (v87/*: any*/),
  (v52/*: any*/)
],
v89 = {
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
  "selections": (v88/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:unit\")"
},
v90 = {
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
  "selections": (v88/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:campus\")"
},
v91 = {
  "kind": "InlineFragment",
  "selections": [
    (v35/*: any*/),
    (v74/*: any*/),
    (v77/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": "journal",
          "args": (v44/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "ancestorOfType",
          "plural": false,
          "selections": [
            (v87/*: any*/)
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
            (v35/*: any*/),
            {
              "kind": "TypeDiscriminator",
              "abstractKey": "__isAnyEntity"
            },
            {
              "kind": "InlineFragment",
              "selections": [
                (v20/*: any*/),
                (v81/*: any*/),
                (v82/*: any*/),
                (v84/*: any*/)
              ],
              "type": "Collection",
              "abstractKey": null
            },
            (v87/*: any*/),
            (v52/*: any*/)
          ],
          "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
        },
        (v89/*: any*/),
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
          "selections": (v88/*: any*/),
          "storageKey": "ancestorOfType(schema:\"nglp:series\")"
        },
        (v90/*: any*/)
      ],
      "type": "Item",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v89/*: any*/),
        (v90/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v92 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v41/*: any*/),
    (v40/*: any*/)
  ],
  "storageKey": null
},
v93 = [
  (v56/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "contributor",
    "plural": false,
    "selections": [
      (v35/*: any*/),
      (v59/*: any*/),
      (v60/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": [
          (v61/*: any*/),
          (v62/*: any*/)
        ],
        "type": "PersonContributor",
        "abstractKey": null
      },
      (v63/*: any*/),
      (v52/*: any*/)
    ],
    "storageKey": null
  },
  (v16/*: any*/)
],
v94 = {
  "alias": null,
  "args": null,
  "concreteType": "ItemContributionConnection",
  "kind": "LinkedField",
  "name": "contributions",
  "plural": false,
  "selections": [
    (v11/*: any*/),
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
              "selections": (v93/*: any*/),
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
              "selections": (v93/*: any*/),
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
v95 = {
  "alias": "journal",
  "args": (v44/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": [
    (v35/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v50/*: any*/),
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
          "selections": (v46/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"preprint_version\")"
        },
        (v47/*: any*/),
        (v49/*: any*/)
      ],
      "type": "SchemaInstance",
      "abstractKey": "__isSchemaInstance"
    },
    (v52/*: any*/)
  ],
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v96 = {
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
    (v35/*: any*/),
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
            (v71/*: any*/),
            (v54/*: any*/),
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
v97 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  }
],
v98 = {
  "alias": null,
  "args": null,
  "concreteType": "AnalyticsEventCountSummary",
  "kind": "LinkedField",
  "name": "entityViews",
  "plural": false,
  "selections": (v97/*: any*/),
  "storageKey": null
},
v99 = {
  "alias": null,
  "args": null,
  "concreteType": "AnalyticsEventCountSummary",
  "kind": "LinkedField",
  "name": "assetDownloads",
  "plural": false,
  "selections": (v97/*: any*/),
  "storageKey": null
},
v100 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaVersion",
  "kind": "LinkedField",
  "name": "schemaVersion",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v19/*: any*/),
    (v16/*: any*/)
  ],
  "storageKey": null
},
v101 = {
  "alias": null,
  "args": null,
  "concreteType": "AnyAssetConnection",
  "kind": "LinkedField",
  "name": "assets",
  "plural": false,
  "selections": (v37/*: any*/),
  "storageKey": null
},
v102 = [
  (v35/*: any*/),
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
      (v71/*: any*/)
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
],
v103 = {
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
            (v20/*: any*/),
            (v5/*: any*/),
            (v92/*: any*/),
            (v69/*: any*/),
            {
              "alias": "volumeId",
              "args": (v83/*: any*/),
              "concreteType": null,
              "kind": "LinkedField",
              "name": "schemaProperty",
              "plural": false,
              "selections": (v102/*: any*/),
              "storageKey": "schemaProperty(fullPath:\"volume.id\")"
            },
            {
              "alias": "issueId",
              "args": (v79/*: any*/),
              "concreteType": null,
              "kind": "LinkedField",
              "name": "schemaProperty",
              "plural": false,
              "selections": (v102/*: any*/),
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
v104 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
    (v32/*: any*/),
    (v25/*: any*/),
    (v27/*: any*/)
  ],
  "storageKey": null
},
v105 = {
  "kind": "InlineFragment",
  "selections": [
    (v73/*: any*/)
  ],
  "type": "Item",
  "abstractKey": null
},
v106 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v35/*: any*/),
        (v74/*: any*/),
        (v77/*: any*/),
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                (v104/*: any*/),
                (v33/*: any*/),
                (v34/*: any*/),
                (v75/*: any*/),
                (v76/*: any*/)
              ],
              "type": "Entity",
              "abstractKey": "__isEntity"
            },
            (v105/*: any*/),
            (v78/*: any*/)
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
v107 = {
  "kind": "InlineFragment",
  "selections": [
    (v49/*: any*/),
    (v50/*: any*/),
    (v47/*: any*/)
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageTemplatesCollectionPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "kind": "InlineDataFragmentSpread",
            "name": "EntityPageLayoutFactoryFragment",
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
                        "name": "IssueSidebarNavFragment"
                      },
                      (v13/*: any*/),
                      {
                        "alias": null,
                        "args": (v14/*: any*/),
                        "concreteType": "Page",
                        "kind": "LinkedField",
                        "name": "page",
                        "plural": false,
                        "selections": [
                          (v15/*: any*/),
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "IssuePageLayoutFragment"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Collection",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/),
                      (v13/*: any*/),
                      {
                        "alias": null,
                        "args": (v14/*: any*/),
                        "concreteType": "Page",
                        "kind": "LinkedField",
                        "name": "page",
                        "plural": false,
                        "selections": [
                          (v15/*: any*/)
                        ],
                        "storageKey": null
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
            "argumentDefinitions": [
              {
                "kind": "RootArgument",
                "name": "pageSlug"
              }
            ]
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "pageTemplatesCollectionPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v16/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v17/*: any*/),
                  {
                    "alias": null,
                    "args": (v18/*: any*/),
                    "concreteType": "OrderingConnection",
                    "kind": "LinkedField",
                    "name": "orderings",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "OrderingEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Ordering",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v19/*: any*/),
                              (v3/*: any*/),
                              (v16/*: any*/)
                            ],
                            "storageKey": null
                          }
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
                              (v5/*: any*/),
                              (v20/*: any*/),
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
                  (v28/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v5/*: any*/),
                          (v20/*: any*/),
                          (v29/*: any*/),
                          (v30/*: any*/),
                          (v31/*: any*/),
                          (v33/*: any*/),
                          (v34/*: any*/),
                          (v38/*: any*/),
                          (v39/*: any*/),
                          (v42/*: any*/),
                          (v43/*: any*/),
                          (v53/*: any*/),
                          (v55/*: any*/),
                          (v66/*: any*/),
                          (v70/*: any*/),
                          (v73/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v35/*: any*/),
                                  (v74/*: any*/),
                                  (v75/*: any*/),
                                  (v76/*: any*/),
                                  (v77/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v78/*: any*/)
                                    ],
                                    "type": "AnyEntity",
                                    "abstractKey": "__isAnyEntity"
                                  }
                                ],
                                "type": "Entity",
                                "abstractKey": "__isEntity"
                              },
                              (v78/*: any*/),
                              (v77/*: any*/),
                              (v85/*: any*/)
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          },
                          (v86/*: any*/),
                          (v45/*: any*/),
                          (v51/*: any*/),
                          (v91/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v5/*: any*/),
                          (v20/*: any*/),
                          (v29/*: any*/),
                          (v39/*: any*/),
                          (v30/*: any*/),
                          (v31/*: any*/),
                          (v92/*: any*/),
                          (v94/*: any*/),
                          (v55/*: any*/),
                          (v95/*: any*/),
                          (v96/*: any*/),
                          (v98/*: any*/),
                          (v99/*: any*/),
                          (v100/*: any*/),
                          (v101/*: any*/),
                          (v103/*: any*/),
                          (v106/*: any*/),
                          (v91/*: any*/),
                          (v86/*: any*/),
                          (v107/*: any*/)
                        ],
                        "type": "Item",
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
              {
                "kind": "InlineFragment",
                "selections": [
                  (v17/*: any*/),
                  (v28/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v5/*: any*/),
                          (v20/*: any*/),
                          (v29/*: any*/),
                          (v30/*: any*/),
                          (v31/*: any*/),
                          (v33/*: any*/),
                          (v34/*: any*/),
                          (v38/*: any*/),
                          (v39/*: any*/),
                          (v42/*: any*/),
                          (v43/*: any*/),
                          (v53/*: any*/),
                          (v55/*: any*/),
                          (v66/*: any*/),
                          (v70/*: any*/),
                          (v73/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v35/*: any*/),
                                  (v20/*: any*/),
                                  (v74/*: any*/),
                                  (v75/*: any*/),
                                  (v76/*: any*/),
                                  (v60/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v29/*: any*/),
                                          (v39/*: any*/),
                                          (v104/*: any*/),
                                          (v33/*: any*/),
                                          (v34/*: any*/)
                                        ],
                                        "type": "Entity",
                                        "abstractKey": "__isEntity"
                                      },
                                      (v105/*: any*/),
                                      (v78/*: any*/)
                                    ],
                                    "type": "AnyEntity",
                                    "abstractKey": "__isAnyEntity"
                                  }
                                ],
                                "type": "Entity",
                                "abstractKey": "__isEntity"
                              },
                              (v78/*: any*/),
                              (v60/*: any*/),
                              (v85/*: any*/)
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          },
                          (v86/*: any*/),
                          (v45/*: any*/),
                          (v51/*: any*/),
                          (v91/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v5/*: any*/),
                          (v20/*: any*/),
                          (v29/*: any*/),
                          (v39/*: any*/),
                          (v30/*: any*/),
                          (v31/*: any*/),
                          (v92/*: any*/),
                          (v94/*: any*/),
                          (v55/*: any*/),
                          (v95/*: any*/),
                          (v96/*: any*/),
                          (v98/*: any*/),
                          (v99/*: any*/),
                          (v100/*: any*/),
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
                                      (v20/*: any*/),
                                      (v5/*: any*/),
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
                          (v101/*: any*/),
                          (v103/*: any*/),
                          (v106/*: any*/),
                          (v91/*: any*/),
                          (v86/*: any*/),
                          (v107/*: any*/)
                        ],
                        "type": "Item",
                        "abstractKey": null
                      }
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
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
    "cacheID": "b15ea5e3fce4625d746a3c3c0df2ce3d",
    "id": null,
    "metadata": {},
    "name": "pageTemplatesCollectionPageQuery",
    "operationKind": "query",
    "text": "query pageTemplatesCollectionPageQuery(\n  $slug: Slug!\n  $pageSlug: String!\n) {\n  collection(slug: $slug) {\n    ...EntityPageLayoutFactoryFragment\n    id\n  }\n}\n\nfragment ArticleHeroFragment on Item {\n  slug\n  title\n  subtitle\n  summary\n  visibility\n  currentlyHidden\n  ...DOIFragment\n  published {\n    ...PrecisionDateFragment\n    value\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...PeerReviewedFragment\n    ...PreprintVersionFragment\n    ...OpenAccessFragment\n    ...CCLicenseFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  abstract: schemaProperty(fullPath: \"abstract\") {\n    __typename\n    ...FullTextFragment\n  }\n  entityViews {\n    ...ViewCountFragment\n  }\n  assetDownloads {\n    ...DownloadCountFragment\n  }\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n  ...OpenAccessFragment\n}\n\nfragment ArticleLayoutFragment on Item {\n  ...BreadcrumbsBarFragment\n  ...ArticleParentHeaderFragment\n  ...ArticleHeroFragment\n  ...ArticleTabNavFragment\n  relatedItems {\n    ...RelatedArticlesFragment\n  }\n}\n\nfragment ArticleParentHeaderFragment on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  ... on Item {\n    journal: ancestorOfType(schema: \"nglp:journal\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n      __typename\n      ...getEntityDisplayNameFragment\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    unit: ancestorOfType(schema: \"nglp:unit\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    series: ancestorOfType(schema: \"nglp:series\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    campus: ancestorOfType(schema: \"nglp:campus\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n  ... on Collection {\n    unit: ancestorOfType(schema: \"nglp:unit\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    campus: ancestorOfType(schema: \"nglp:campus\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment ArticleTabNavFragment on Item {\n  schemaVersion {\n    identifier\n    name\n    id\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n  contributions {\n    pageInfo {\n      totalCount\n    }\n  }\n  assets {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment AssetDownloadButtonFragment on Asset {\n  __isAsset: __typename\n  name\n  downloadUrl\n  kind\n  contentType\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment CCLicenseFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  ccLicense: schemaProperty(fullPath: \"cc_license\") {\n    __typename\n    ... on SelectProperty {\n      selection\n      defaultSelection\n      options {\n        label\n        value\n      }\n    }\n  }\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment ContributionBlockItemFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  displayName\n  contributorKind\n  role\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Contributor {\n      __isContributor: __typename\n      image {\n        ...ContributorAvatarFragment\n      }\n    }\n    ... on PersonContributor {\n      affiliation\n      orcid\n    }\n    ...ContributorNameFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      slug\n      id\n    }\n  }\n  ... on CollectionContribution {\n    collection {\n      slug\n      id\n    }\n  }\n}\n\nfragment ContributionsBlockFragment on Paginated {\n  __isPaginated: __typename\n  ... on ItemContributionConnection {\n    nodes {\n      slug\n      role\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n  ... on CollectionContributionConnection {\n    nodes {\n      slug\n      role\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on Paginated {\n  __isPaginated: __typename\n  ... on ItemContributionConnection {\n    nodes {\n      role\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on CollectionContributionConnection {\n    nodes {\n      role\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DOIFragment on HasDOI {\n  __isHasDOI: __typename\n  doi\n}\n\nfragment DownloadCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment EntityHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    title\n    subtitle\n    summary\n    thumbnail {\n      storage\n      ...ContentImageFragment\n    }\n    heroImage {\n      storage\n      ...HeroImageFragment\n    }\n    heroImageMetadata {\n      ...HeroImageMetadataFragment\n    }\n  }\n  ... on Collection {\n    visibility\n    currentlyHidden\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n  }\n  ... on Item {\n    visibility\n    currentlyHidden\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n  }\n}\n\nfragment EntityLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    slug\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...JournalLayoutFragment\n    ...IssueLayoutFragment\n    ...VolumeLayoutFragment\n    ...SeriesLayoutFragment\n  }\n  ... on Item {\n    slug\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...ArticleLayoutFragment\n  }\n}\n\nfragment EntityLayoutFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n    ...EntityNavBarFragment\n  }\n}\n\nfragment EntityNavBarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Entity {\n    __isEntity: __typename\n    title\n    ...EntityNavListFragment\n    layouts {\n      hero {\n        template {\n          definition {\n            enableDescendantBrowsing\n            enableDescendantSearch\n            id\n          }\n          slots {\n            descendantSearchPrompt {\n              ...sharedInlineSlotFragment\n            }\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment EntityNavListFragment on Entity {\n  __isEntity: __typename\n  __typename\n  orderings(availability: ENABLED) {\n    nodes {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment EntityOrderSelectFragment on OrderingConnection {\n  edges {\n    node {\n      name\n      identifier\n      id\n    }\n  }\n}\n\nfragment EntityPageLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...IssueSidebarNavFragment\n    ...EntityLayoutFactoryFragment\n    page(slug: $pageSlug) {\n      ...EntityPageLayoutFragment\n      ...IssuePageLayoutFragment\n      id\n    }\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFactoryFragment\n    page(slug: $pageSlug) {\n      ...EntityPageLayoutFragment\n      id\n    }\n  }\n}\n\nfragment EntityPageLayoutFragment on Page {\n  title\n  body\n  heroImage {\n    ...ContentImageFragment\n  }\n}\n\nfragment FullTextFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  ... on FullTextProperty {\n    fullText {\n      content\n      kind\n      lang\n    }\n    type\n  }\n}\n\nfragment HeroImageFragment on ImageAttachment {\n  image: hero {\n    webp {\n      url\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment HeroImageMetadataFragment on ImageMetadata {\n  alt\n}\n\nfragment ISSNFragment on HasISSN {\n  __isHasISSN: __typename\n  issn\n}\n\nfragment IssueHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  visibility\n  currentlyHidden\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ...getEntityDisplayNameFragment\n}\n\nfragment IssueLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...IssueHeroFragment\n  contributions {\n    ...ContributionsBlockFragment\n    pageInfo {\n      totalCount\n    }\n  }\n  relatedCollections(page: 1, perPage: 4) {\n    ...RelatedIssuesFragment\n  }\n}\n\nfragment IssuePageLayoutFragment on Page {\n  title\n  body\n  heroImage {\n    ...ContentImageFragment\n  }\n}\n\nfragment IssueSidebarNavFragment on Collection {\n  orderings(availability: ENABLED) {\n    ...EntityOrderSelectFragment\n  }\n  ...IssueSidebarNavListFragment\n}\n\nfragment IssueSidebarNavListFragment on Collection {\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment JournalHeroCompactFragment on Collection {\n  title\n  subtitle\n}\n\nfragment JournalHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  visibility\n  currentlyHidden\n  heroImage {\n    storage\n    ...HeroImageFragment\n  }\n  heroImageMetadata {\n    ...HeroImageMetadataFragment\n  }\n  ...DOIFragment\n  ...JournalHeroMetadataFragment\n}\n\nfragment JournalHeroMetadataFragment on Collection {\n  ...ISSNFragment\n  ...OpenAccessFragment\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n}\n\nfragment JournalLayoutFragment on Collection {\n  ...JournalHeroFragment\n  ...EntityNavBarFragment\n  ...BreadcrumbsBarFragment\n  related: relatedCollections(order: RECENT, perPage: 4) {\n    ...RelatedJournalsFragment\n  }\n}\n\nfragment OpenAccessFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  openAccess: schemaProperty(fullPath: \"open_access\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PeerReviewedFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  peerReviewed: schemaProperty(fullPath: \"peer_reviewed\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PreprintVersionFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  prePrintVersion: schemaProperty(fullPath: \"preprint_version\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment RelatedArticlesFragment on ItemConnection {\n  edges {\n    node {\n      title\n      slug\n      published {\n        ...PrecisionDateFragment\n      }\n      journal: ancestorOfType(schema: \"nglp:journal\") {\n        __typename\n        ... on Collection {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      volumeId: schemaProperty(fullPath: \"volume.id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      issueId: schemaProperty(fullPath: \"id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment RelatedIssueBlockFragment on Collection {\n  __typename\n  title\n  subtitle\n  slug\n  id\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: collections(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedIssueBlockFragment\n      id\n    }\n  }\n}\n\nfragment RelatedJournalFragment on Collection {\n  __typename\n  id\n  title\n  subtitle\n  slug\n  updatedAt\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  issues: descendants(scope: COLLECTION, schema: [\"nglp:journal_issue\"]) {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedJournalsFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedJournalFragment\n      id\n    }\n  }\n}\n\nfragment SeriesHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  visibility\n  currentlyHidden\n  published {\n    ...PrecisionDateFragment\n    value\n  }\n  about: schemaProperty(fullPath: \"about\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n  ...ArticleParentHeaderFragment\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n}\n\nfragment SeriesLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...SeriesHeroFragment\n  ...EntityNavBarFragment\n}\n\nfragment ViewCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment VolumeHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  visibility\n  currentlyHidden\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment VolumeLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...VolumeHeroFragment\n  ...EntityNavBarFragment\n}\n\nfragment getEntityDisplayNameFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issueNumber: schemaProperty(fullPath: \"number\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n  ...getEntityVolumeNumberFragment\n}\n\nfragment getEntityVolumeNumberFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        number: schemaProperty(fullPath: \"id\") {\n          __typename\n          ... on StringProperty {\n            content\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    volumeNumber: schemaProperty(fullPath: \"volume.id\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  content\n  kind\n  valid\n}\n"
  }
};
})();

(node as any).hash = "6d8b7fddb0161a1c1f111f48be8ed68a";

export default node;
