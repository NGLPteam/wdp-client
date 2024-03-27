/**
 * @generated SignedSource<<f1ae6106f1192366f2f9a93fe812522b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageItemQuery$variables = {
  slug: string;
};
export type pageItemQuery$data = {
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityContentLayoutFactoryFragment">;
  } | null | undefined;
};
export type pageItemQuery = {
  response: pageItemQuery$data;
  variables: pageItemQuery$variables;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "disabled",
  "storageKey": null
},
v5 = {
  "kind": "InlineDataFragmentSpread",
  "name": "EntityOrderingLayoutFactoryFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Ordering",
          "kind": "LinkedField",
          "name": "initialOrdering",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            (v4/*: any*/)
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "IssueSidebarNavFragment"
        }
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    }
  ],
  "args": null,
  "argumentDefinitions": ([]/*: any*/)
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
  "args": null,
  "kind": "FragmentSpread",
  "name": "ContributionsBlockFragment"
},
v12 = {
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
v13 = {
  "kind": "Literal",
  "name": "page",
  "value": 1
},
v14 = [
  (v13/*: any*/),
  (v9/*: any*/)
],
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
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
  "name": "slug",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v22 = {
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
        (v20/*: any*/),
        (v21/*: any*/),
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
v23 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnySchemaProperty"
},
v24 = [
  (v19/*: any*/),
  (v22/*: any*/),
  (v23/*: any*/)
],
v25 = [
  (v20/*: any*/)
],
v26 = [
  (v19/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v25/*: any*/),
    "type": "MarkdownProperty",
    "abstractKey": null
  }
],
v27 = {
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
  "selections": (v26/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"about\")"
},
v28 = {
  "kind": "Literal",
  "name": "nodeFilter",
  "value": "DESCENDANTS"
},
v29 = {
  "kind": "Literal",
  "name": "order",
  "value": "PUBLISHED_DESCENDING"
},
v30 = {
  "kind": "Literal",
  "name": "schema",
  "value": "nglp:journal_issue"
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subtitle",
  "storageKey": null
},
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
  "name": "url",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v36 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v37 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v38 = {
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
        (v34/*: any*/),
        (v35/*: any*/),
        (v36/*: any*/),
        (v37/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v39 = [
  (v38/*: any*/)
],
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
v43 = [
  (v31/*: any*/)
],
v44 = {
  "kind": "InlineFragment",
  "selections": [
    (v16/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v45 = [
  (v19/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v43/*: any*/),
    "type": "Collection",
    "abstractKey": null
  },
  (v44/*: any*/)
],
v46 = {
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
  "selections": (v45/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
},
v47 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal_article"
  }
],
v48 = [
  (v12/*: any*/)
],
v49 = {
  "alias": "articles",
  "args": (v47/*: any*/),
  "concreteType": "ItemConnection",
  "kind": "LinkedField",
  "name": "items",
  "plural": false,
  "selections": (v48/*: any*/),
  "storageKey": "items(schema:\"nglp:journal_article\")"
},
v50 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "id"
  }
],
v51 = [
  (v19/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v25/*: any*/),
    "type": "StringProperty",
    "abstractKey": null
  }
],
v52 = {
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
    (v19/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v31/*: any*/),
        {
          "alias": "number",
          "args": (v50/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "schemaProperty",
          "plural": false,
          "selections": (v51/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"id\")"
        }
      ],
      "type": "Collection",
      "abstractKey": null
    },
    (v44/*: any*/)
  ],
  "storageKey": "ancestorByName(name:\"volume\")"
},
v53 = {
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
  "selections": (v51/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"number\")"
},
v54 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "volume.id"
  }
],
v55 = {
  "alias": "volumeNumber",
  "args": (v54/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v51/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"volume.id\")"
},
v56 = {
  "kind": "InlineFragment",
  "selections": [
    (v52/*: any*/),
    (v53/*: any*/),
    (v55/*: any*/)
  ],
  "type": "Collection",
  "abstractKey": null
},
v57 = {
  "kind": "InlineFragment",
  "selections": [
    (v56/*: any*/)
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
},
v58 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": (v39/*: any*/),
  "storageKey": null
},
v59 = {
  "kind": "InlineFragment",
  "selections": [
    (v18/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v60 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v61 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v35/*: any*/),
      (v34/*: any*/)
    ],
    "storageKey": null
  }
],
v62 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyContributor"
},
v63 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v64 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v65 = {
  "kind": "InlineFragment",
  "selections": [
    (v63/*: any*/),
    (v64/*: any*/)
  ],
  "type": "PersonContributor",
  "abstractKey": null
},
v66 = {
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
v67 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "contributor",
  "plural": false,
  "selections": [
    (v19/*: any*/),
    (v62/*: any*/),
    (v59/*: any*/),
    (v65/*: any*/),
    (v66/*: any*/),
    (v44/*: any*/)
  ],
  "storageKey": null
},
v68 = [
  (v19/*: any*/),
  (v59/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v31/*: any*/),
      (v32/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageAttachment",
        "kind": "LinkedField",
        "name": "thumbnail",
        "plural": false,
        "selections": [
          (v60/*: any*/),
          {
            "alias": "thumb",
            "args": null,
            "concreteType": "ImageSize",
            "kind": "LinkedField",
            "name": "medium",
            "plural": false,
            "selections": (v61/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v18/*: any*/),
      (v33/*: any*/),
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
              (v15/*: any*/),
              (v67/*: any*/),
              (v16/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v42/*: any*/)
    ],
    "type": "Item",
    "abstractKey": null
  },
  (v44/*: any*/)
],
v69 = [
  {
    "kind": "Literal",
    "name": "availability",
    "value": "ENABLED"
  }
],
v70 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v71 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Ordering",
      "kind": "LinkedField",
      "name": "initialOrdering",
      "plural": false,
      "selections": [
        (v2/*: any*/),
        (v4/*: any*/),
        (v16/*: any*/)
      ],
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": (v69/*: any*/),
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
                    (v70/*: any*/),
                    (v2/*: any*/),
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
                    (v18/*: any*/),
                    (v31/*: any*/),
                    (v16/*: any*/)
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
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v72 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v34/*: any*/)
    ],
    "storageKey": null
  }
],
v73 = {
  "alias": "placeholder",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "thumb",
  "plural": false,
  "selections": (v72/*: any*/),
  "storageKey": null
},
v74 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
    (v60/*: any*/),
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
            (v35/*: any*/),
            (v34/*: any*/),
            (v36/*: any*/),
            (v37/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v73/*: any*/)
  ],
  "storageKey": null
},
v75 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "pdf_version"
  }
],
v76 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "downloadUrl",
  "storageKey": null
},
v77 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contentType",
  "storageKey": null
},
v78 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v79 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v80 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "small",
  "plural": false,
  "selections": (v61/*: any*/),
  "storageKey": null
},
v81 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    (v60/*: any*/),
    (v80/*: any*/)
  ],
  "storageKey": null
},
v82 = {
  "kind": "InlineFragment",
  "selections": [
    (v65/*: any*/),
    (v66/*: any*/)
  ],
  "type": "AnyContributor",
  "abstractKey": "__isAnyContributor"
},
v83 = [
  (v18/*: any*/),
  (v16/*: any*/)
],
v84 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": (v83/*: any*/),
      "storageKey": null
    }
  ],
  "type": "CollectionContribution",
  "abstractKey": null
},
v85 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "item",
      "plural": false,
      "selections": (v83/*: any*/),
      "storageKey": null
    }
  ],
  "type": "ItemContribution",
  "abstractKey": null
},
v86 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "image",
    "plural": false,
    "selections": [
      (v60/*: any*/)
    ],
    "storageKey": null
  }
],
v87 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "contributor",
  "plural": false,
  "selections": [
    (v19/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": (v86/*: any*/),
      "type": "PersonContributor",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v86/*: any*/),
      "type": "OrganizationContributor",
      "abstractKey": null
    },
    (v44/*: any*/)
  ],
  "storageKey": null
},
v88 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayName",
  "storageKey": null
},
v89 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contributorKind",
  "storageKey": null
},
v90 = {
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
        (v80/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Contributor",
  "abstractKey": "__isContributor"
},
v91 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orcid",
  "storageKey": null
},
v92 = [
  (v18/*: any*/),
  (v87/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v88/*: any*/),
      (v89/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v62/*: any*/),
          (v90/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v91/*: any*/),
              (v63/*: any*/),
              (v64/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          (v66/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Contribution",
    "abstractKey": "__isContribution"
  }
],
v93 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "visibility",
  "storageKey": null
},
v94 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currentlyHidden",
  "storageKey": null
},
v95 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    (v60/*: any*/),
    {
      "alias": "image",
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "hero",
      "plural": false,
      "selections": (v72/*: any*/),
      "storageKey": null
    },
    (v73/*: any*/)
  ],
  "storageKey": null
},
v96 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageMetadata",
  "kind": "LinkedField",
  "name": "heroImageMetadata",
  "plural": false,
  "selections": [
    (v35/*: any*/)
  ],
  "storageKey": null
},
v97 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal"
  }
],
v98 = {
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
v99 = [
  (v19/*: any*/),
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
v100 = {
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
  "selections": (v99/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"open_access\")"
},
v101 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v102 = {
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
    (v19/*: any*/),
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
            (v101/*: any*/),
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
v103 = {
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
  "selections": (v99/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"peer_reviewed\")"
},
v104 = {
  "kind": "InlineFragment",
  "selections": [
    (v100/*: any*/),
    (v102/*: any*/),
    (v103/*: any*/)
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
},
v105 = {
  "alias": "pdfVersion",
  "args": (v75/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": [
    (v19/*: any*/),
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
            (v19/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v70/*: any*/),
                (v76/*: any*/),
                (v21/*: any*/),
                (v77/*: any*/)
              ],
              "type": "Asset",
              "abstractKey": "__isAsset"
            },
            (v44/*: any*/)
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
v106 = [
  (v18/*: any*/),
  (v15/*: any*/),
  (v87/*: any*/),
  (v16/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v78/*: any*/),
      (v88/*: any*/),
      (v89/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v62/*: any*/),
          (v59/*: any*/),
          (v90/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v78/*: any*/),
              (v91/*: any*/),
              (v63/*: any*/),
              (v64/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          (v66/*: any*/)
        ],
        "storageKey": null
      },
      (v85/*: any*/),
      (v84/*: any*/)
    ],
    "type": "Contribution",
    "abstractKey": "__isContribution"
  }
],
v107 = {
  "alias": "journal",
  "args": (v97/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v45/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v108 = {
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
    (v101/*: any*/),
    (v21/*: any*/),
    (v18/*: any*/),
    (v16/*: any*/)
  ],
  "storageKey": null
},
v109 = {
  "alias": null,
  "args": (v69/*: any*/),
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
        (v70/*: any*/),
        (v18/*: any*/),
        (v2/*: any*/),
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
v110 = {
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
            (v31/*: any*/),
            (v18/*: any*/),
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
v111 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isSluggable"
},
v112 = {
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
v113 = [
  (v93/*: any*/),
  (v94/*: any*/),
  (v112/*: any*/)
],
v114 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isNode"
},
v115 = {
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
v116 = {
  "kind": "InlineFragment",
  "selections": (v43/*: any*/),
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v117 = [
  (v19/*: any*/),
  (v116/*: any*/),
  (v44/*: any*/)
],
v118 = {
  "alias": "issue",
  "args": [
    (v30/*: any*/)
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": [
    (v19/*: any*/),
    {
      "kind": "TypeDiscriminator",
      "abstractKey": "__isAnyEntity"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v31/*: any*/),
        (v52/*: any*/),
        (v53/*: any*/),
        (v55/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    },
    (v116/*: any*/),
    (v44/*: any*/)
  ],
  "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
},
v119 = {
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
  "selections": (v117/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:unit\")"
},
v120 = {
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
  "selections": (v117/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:series\")"
},
v121 = {
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
  "selections": (v117/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:campus\")"
},
v122 = {
  "kind": "InlineFragment",
  "selections": [
    (v119/*: any*/),
    (v121/*: any*/)
  ],
  "type": "Collection",
  "abstractKey": null
},
v123 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  }
],
v124 = [
  (v19/*: any*/),
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
      (v20/*: any*/)
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
    "name": "pageItemQuery",
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
            "name": "EntityContentLayoutFactoryFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
                      (v5/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "JournalContentFragment"
                      }
                    ],
                    "type": "Collection",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
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
                                    "argumentDefinitions": []
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
                                          (v11/*: any*/),
                                          (v12/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": (v14/*: any*/),
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
                                      (v6/*: any*/),
                                      {
                                        "args": null,
                                        "kind": "FragmentSpread",
                                        "name": "VolumeHeroFragment"
                                      },
                                      (v7/*: any*/)
                                    ],
                                    "args": null,
                                    "argumentDefinitions": []
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
                      (v5/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "ArticleTextFragment"
                      },
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "HowToCiteFragment"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ItemContributionConnection",
                        "kind": "LinkedField",
                        "name": "contributions",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "InlineDataFragmentSpread",
                            "name": "ArticleContributorFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ItemContribution",
                                "kind": "LinkedField",
                                "name": "nodes",
                                "plural": true,
                                "selections": [
                                  (v15/*: any*/),
                                  {
                                    "args": null,
                                    "kind": "FragmentSpread",
                                    "name": "ContributionAuthorBlockFragment"
                                  }
                                ],
                                "storageKey": null
                              },
                              (v11/*: any*/)
                            ],
                            "args": null,
                            "argumentDefinitions": []
                          }
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
            "argumentDefinitions": []
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
    "name": "pageItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
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
                  (v18/*: any*/),
                  {
                    "alias": "description",
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
                    "selections": (v24/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"description\")"
                  },
                  (v27/*: any*/),
                  {
                    "alias": "issues",
                    "args": [
                      (v28/*: any*/),
                      (v29/*: any*/),
                      (v13/*: any*/),
                      (v9/*: any*/),
                      (v30/*: any*/)
                    ],
                    "concreteType": "CollectionConnection",
                    "kind": "LinkedField",
                    "name": "collections",
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
                              (v18/*: any*/),
                              (v16/*: any*/),
                              (v31/*: any*/),
                              (v32/*: any*/),
                              (v33/*: any*/),
                              {
                                "alias": "cover",
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": (v39/*: any*/),
                                "storageKey": null
                              },
                              (v42/*: any*/),
                              (v46/*: any*/),
                              (v49/*: any*/),
                              (v57/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "collections(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",page:1,perPage:4,schema:\"nglp:journal_issue\")"
                  },
                  {
                    "alias": "currentIssue",
                    "args": [
                      (v28/*: any*/),
                      (v29/*: any*/),
                      (v30/*: any*/)
                    ],
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "firstCollection",
                    "plural": false,
                    "selections": [
                      (v16/*: any*/),
                      (v31/*: any*/),
                      (v32/*: any*/),
                      (v18/*: any*/),
                      (v58/*: any*/),
                      (v42/*: any*/),
                      (v46/*: any*/),
                      (v49/*: any*/),
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "identifier",
                            "value": "articles"
                          }
                        ],
                        "concreteType": "Ordering",
                        "kind": "LinkedField",
                        "name": "ordering",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "perPage",
                                "value": 3
                              }
                            ],
                            "concreteType": "OrderingEntryConnection",
                            "kind": "LinkedField",
                            "name": "children",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "OrderingEntryEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "OrderingEntry",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": null,
                                        "kind": "LinkedField",
                                        "name": "entry",
                                        "plural": false,
                                        "selections": (v68/*: any*/),
                                        "storageKey": null
                                      },
                                      (v16/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v12/*: any*/)
                            ],
                            "storageKey": "children(perPage:3)"
                          },
                          (v16/*: any*/)
                        ],
                        "storageKey": "ordering(identifier:\"articles\")"
                      },
                      {
                        "alias": "featuredArticles",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "fullPath",
                            "value": "featured_articles"
                          }
                        ],
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": [
                          (v19/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "entities",
                                "plural": true,
                                "selections": (v68/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "EntitiesProperty",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": "schemaProperty(fullPath:\"featured_articles\")"
                      },
                      (v57/*: any*/)
                    ],
                    "storageKey": "firstCollection(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",schema:\"nglp:journal_issue\")"
                  },
                  {
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
                          (v18/*: any*/),
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v71/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v17/*: any*/),
                  (v74/*: any*/),
                  {
                    "alias": "bodyText",
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
                    "selections": (v24/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"body\")"
                  },
                  {
                    "alias": "pdf",
                    "args": (v75/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": [
                      (v19/*: any*/),
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
                              (v19/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v70/*: any*/),
                                  (v76/*: any*/),
                                  (v21/*: any*/),
                                  (v77/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "fileSize",
                                        "storageKey": null
                                      }
                                    ],
                                    "type": "AssetPDF",
                                    "abstractKey": null
                                  }
                                ],
                                "type": "Asset",
                                "abstractKey": "__isAsset"
                              },
                              (v44/*: any*/)
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
                  {
                    "alias": "citation",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "fullPath",
                        "value": "citation"
                      }
                    ],
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v26/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"citation\")"
                  },
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
                          (v15/*: any*/),
                          (v16/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v78/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "contributor",
                                "plural": false,
                                "selections": [
                                  (v19/*: any*/),
                                  (v59/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v31/*: any*/),
                                      (v79/*: any*/),
                                      (v78/*: any*/),
                                      (v81/*: any*/),
                                      (v82/*: any*/)
                                    ],
                                    "type": "PersonContributor",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v79/*: any*/),
                                      (v81/*: any*/),
                                      (v82/*: any*/)
                                    ],
                                    "type": "OrganizationContributor",
                                    "abstractKey": null
                                  },
                                  (v44/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v84/*: any*/),
                              (v85/*: any*/)
                            ],
                            "type": "Contribution",
                            "abstractKey": "__isContribution"
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
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ItemContribution",
                                "kind": "LinkedField",
                                "name": "nodes",
                                "plural": true,
                                "selections": (v92/*: any*/),
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
                                "selections": (v92/*: any*/),
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
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v31/*: any*/),
                          (v32/*: any*/),
                          (v93/*: any*/),
                          (v94/*: any*/),
                          (v95/*: any*/),
                          (v96/*: any*/),
                          {
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
                                      (v18/*: any*/),
                                      (v19/*: any*/),
                                      (v16/*: any*/),
                                      (v31/*: any*/),
                                      (v32/*: any*/),
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
                                          (v60/*: any*/),
                                          (v38/*: any*/)
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
                                        "selections": (v48/*: any*/),
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
                          (v42/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ImageAttachment",
                            "kind": "LinkedField",
                            "name": "thumbnail",
                            "plural": false,
                            "selections": [
                              (v38/*: any*/),
                              (v60/*: any*/),
                              (v73/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "journal",
                            "args": (v97/*: any*/),
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "ancestorOfType",
                            "plural": false,
                            "selections": [
                              (v19/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v31/*: any*/),
                                  (v32/*: any*/),
                                  (v98/*: any*/),
                                  (v104/*: any*/)
                                ],
                                "type": "Collection",
                                "abstractKey": null
                              },
                              (v44/*: any*/)
                            ],
                            "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                          },
                          (v105/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CollectionContributionConnection",
                            "kind": "LinkedField",
                            "name": "contributions",
                            "plural": false,
                            "selections": [
                              (v12/*: any*/),
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
                                        "selections": (v106/*: any*/),
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
                                        "selections": (v106/*: any*/),
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
                            "args": (v14/*: any*/),
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
                                      (v18/*: any*/),
                                      (v19/*: any*/),
                                      (v31/*: any*/),
                                      (v32/*: any*/),
                                      (v16/*: any*/),
                                      (v58/*: any*/),
                                      (v42/*: any*/),
                                      (v46/*: any*/),
                                      (v107/*: any*/),
                                      {
                                        "alias": "articles",
                                        "args": (v47/*: any*/),
                                        "concreteType": "CollectionConnection",
                                        "kind": "LinkedField",
                                        "name": "collections",
                                        "plural": false,
                                        "selections": (v48/*: any*/),
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
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v19/*: any*/),
                                  (v31/*: any*/),
                                  (v108/*: any*/),
                                  (v109/*: any*/),
                                  (v110/*: any*/),
                                  (v111/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v32/*: any*/),
                                          (v33/*: any*/),
                                          (v74/*: any*/),
                                          (v95/*: any*/),
                                          (v96/*: any*/)
                                        ],
                                        "type": "Entity",
                                        "abstractKey": "__isEntity"
                                      },
                                      {
                                        "kind": "InlineFragment",
                                        "selections": (v113/*: any*/),
                                        "type": "Collection",
                                        "abstractKey": null
                                      },
                                      {
                                        "kind": "InlineFragment",
                                        "selections": (v113/*: any*/),
                                        "type": "Item",
                                        "abstractKey": null
                                      },
                                      (v114/*: any*/)
                                    ],
                                    "type": "AnyEntity",
                                    "abstractKey": "__isAnyEntity"
                                  }
                                ],
                                "type": "Entity",
                                "abstractKey": "__isEntity"
                              },
                              (v114/*: any*/),
                              (v111/*: any*/),
                              (v56/*: any*/)
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          },
                          (v115/*: any*/),
                          (v98/*: any*/),
                          (v104/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v19/*: any*/),
                              (v31/*: any*/),
                              (v108/*: any*/),
                              (v111/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": "journal",
                                    "args": (v97/*: any*/),
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "ancestorOfType",
                                    "plural": false,
                                    "selections": (v117/*: any*/),
                                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                                  },
                                  (v118/*: any*/),
                                  (v119/*: any*/),
                                  (v120/*: any*/),
                                  (v121/*: any*/)
                                ],
                                "type": "Item",
                                "abstractKey": null
                              },
                              (v122/*: any*/)
                            ],
                            "type": "Entity",
                            "abstractKey": "__isEntity"
                          }
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v18/*: any*/),
                          (v31/*: any*/),
                          (v32/*: any*/),
                          (v33/*: any*/),
                          (v93/*: any*/),
                          (v94/*: any*/),
                          (v112/*: any*/),
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
                                  (v67/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v12/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v105/*: any*/),
                          {
                            "alias": "journal",
                            "args": (v97/*: any*/),
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "ancestorOfType",
                            "plural": false,
                            "selections": [
                              (v19/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v103/*: any*/),
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
                                    "selections": (v99/*: any*/),
                                    "storageKey": "schemaProperty(fullPath:\"preprint_version\")"
                                  },
                                  (v100/*: any*/),
                                  (v102/*: any*/)
                                ],
                                "type": "SchemaInstance",
                                "abstractKey": "__isSchemaInstance"
                              },
                              (v44/*: any*/)
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
                              (v19/*: any*/),
                              (v23/*: any*/),
                              (v22/*: any*/)
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
                            "selections": (v123/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AnalyticsEventCountSummary",
                            "kind": "LinkedField",
                            "name": "assetDownloads",
                            "plural": false,
                            "selections": (v123/*: any*/),
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
                              (v70/*: any*/),
                              (v16/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v110/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AnyAssetConnection",
                            "kind": "LinkedField",
                            "name": "assets",
                            "plural": false,
                            "selections": (v48/*: any*/),
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
                                      (v31/*: any*/),
                                      (v18/*: any*/),
                                      (v112/*: any*/),
                                      (v107/*: any*/),
                                      {
                                        "alias": "volumeId",
                                        "args": (v54/*: any*/),
                                        "concreteType": null,
                                        "kind": "LinkedField",
                                        "name": "schemaProperty",
                                        "plural": false,
                                        "selections": (v124/*: any*/),
                                        "storageKey": "schemaProperty(fullPath:\"volume.id\")"
                                      },
                                      {
                                        "alias": "issueId",
                                        "args": (v50/*: any*/),
                                        "concreteType": null,
                                        "kind": "LinkedField",
                                        "name": "schemaProperty",
                                        "plural": false,
                                        "selections": (v124/*: any*/),
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
                                  (v19/*: any*/),
                                  (v108/*: any*/),
                                  (v111/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v95/*: any*/),
                                          (v96/*: any*/),
                                          (v109/*: any*/)
                                        ],
                                        "type": "Entity",
                                        "abstractKey": "__isEntity"
                                      },
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v27/*: any*/)
                                        ],
                                        "type": "Item",
                                        "abstractKey": null
                                      },
                                      (v114/*: any*/)
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
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v19/*: any*/),
                              (v108/*: any*/),
                              (v111/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": "journal",
                                    "args": (v97/*: any*/),
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "ancestorOfType",
                                    "plural": false,
                                    "selections": [
                                      (v116/*: any*/)
                                    ],
                                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                                  },
                                  (v118/*: any*/),
                                  (v119/*: any*/),
                                  (v120/*: any*/),
                                  (v121/*: any*/)
                                ],
                                "type": "Item",
                                "abstractKey": null
                              },
                              (v122/*: any*/)
                            ],
                            "type": "Entity",
                            "abstractKey": "__isEntity"
                          },
                          (v115/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v102/*: any*/),
                              (v103/*: any*/),
                              (v100/*: any*/)
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
                  },
                  (v71/*: any*/)
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
    "cacheID": "4e5c8162b35c4b9831584b4e380d52d2",
    "id": null,
    "metadata": {},
    "name": "pageItemQuery",
    "operationKind": "query",
    "text": "query pageItemQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    ...EntityContentLayoutFactoryFragment\n    id\n  }\n}\n\nfragment ArticleContributorFragment on ItemContributionConnection {\n  nodes {\n    role\n    ...ContributionAuthorBlockFragment\n    id\n  }\n  ...ContributionsBlockFragment\n}\n\nfragment ArticleHeroFragment on Item {\n  slug\n  title\n  subtitle\n  summary\n  visibility\n  currentlyHidden\n  ...DOIFragment\n  published {\n    ...PrecisionDateFragment\n    value\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...PeerReviewedFragment\n    ...PreprintVersionFragment\n    ...OpenAccessFragment\n    ...CCLicenseFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  abstract: schemaProperty(fullPath: \"abstract\") {\n    __typename\n    ...FullTextFragment\n  }\n  entityViews {\n    ...ViewCountFragment\n  }\n  assetDownloads {\n    ...DownloadCountFragment\n  }\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n  ...OpenAccessFragment\n}\n\nfragment ArticleLayoutFragment on Item {\n  ...BreadcrumbsBarFragment\n  ...ArticleParentHeaderFragment\n  ...ArticleHeroFragment\n  ...ArticleTabNavFragment\n  relatedItems {\n    ...RelatedArticlesFragment\n  }\n}\n\nfragment ArticleParentHeaderFragment on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  ... on Item {\n    journal: ancestorOfType(schema: \"nglp:journal\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n      __typename\n      ...getEntityDisplayNameFragment\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    unit: ancestorOfType(schema: \"nglp:unit\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    series: ancestorOfType(schema: \"nglp:series\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    campus: ancestorOfType(schema: \"nglp:campus\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n  ... on Collection {\n    unit: ancestorOfType(schema: \"nglp:unit\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    campus: ancestorOfType(schema: \"nglp:campus\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment ArticleSummaryFragment on Item {\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  slug\n  summary\n  contributions {\n    ...ContributorsListFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n}\n\nfragment ArticleTabNavFragment on Item {\n  schemaVersion {\n    identifier\n    name\n    id\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n  contributions {\n    pageInfo {\n      totalCount\n    }\n  }\n  assets {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment ArticleTextFragment on Item {\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n  bodyText: schemaProperty(fullPath: \"body\") {\n    __typename\n    ... on FullTextProperty {\n      fullText {\n        content\n      }\n    }\n    ...FullTextFragment\n  }\n  pdf: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetInlinePDFFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment AssetDownloadButtonFragment on Asset {\n  __isAsset: __typename\n  name\n  downloadUrl\n  kind\n  contentType\n}\n\nfragment AssetInlinePDFFragment on Asset {\n  __isAsset: __typename\n  ... on AssetPDF {\n    downloadUrl\n    fileSize\n  }\n  ...AssetDownloadButtonFragment\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment CCLicenseFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  ccLicense: schemaProperty(fullPath: \"cc_license\") {\n    __typename\n    ... on SelectProperty {\n      selection\n      defaultSelection\n      options {\n        label\n        value\n      }\n    }\n  }\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment ContributionAuthorBlockFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  role\n  ... on CollectionContribution {\n    collection {\n      slug\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      slug\n      id\n    }\n  }\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on PersonContributor {\n      __typename\n      title\n      bio\n      affiliation\n      image {\n        storage\n        ...ContributorAvatarFragment\n      }\n      ...ContributorNameFragment\n    }\n    ... on OrganizationContributor {\n      __typename\n      bio\n      image {\n        storage\n        ...ContributorAvatarFragment\n      }\n      ...ContributorNameFragment\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ContributionBlockItemFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  displayName\n  contributorKind\n  role\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Contributor {\n      __isContributor: __typename\n      image {\n        ...ContributorAvatarFragment\n      }\n    }\n    ... on PersonContributor {\n      affiliation\n      orcid\n    }\n    ...ContributorNameFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      slug\n      id\n    }\n  }\n  ... on CollectionContribution {\n    collection {\n      slug\n      id\n    }\n  }\n}\n\nfragment ContributionsBlockFragment on Paginated {\n  __isPaginated: __typename\n  ... on ItemContributionConnection {\n    nodes {\n      slug\n      role\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n  ... on CollectionContributionConnection {\n    nodes {\n      slug\n      role\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  nodes {\n    role\n    contributor {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ...ContributorNameFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DOIFragment on HasDOI {\n  __isHasDOI: __typename\n  doi\n}\n\nfragment DownloadCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment EntityAnnouncementsFragment on AnnouncementConnection {\n  nodes {\n    teaser\n    header\n    slug\n    id\n  }\n}\n\nfragment EntityContentLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityOrderingLayoutFactoryFragment\n    ...JournalContentFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFactoryFragment\n    ...EntityOrderingLayoutFactoryFragment\n    ...ArticleTextFragment\n    ...HowToCiteFragment\n    contributions {\n      ...ArticleContributorFragment\n    }\n  }\n}\n\nfragment EntityHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    title\n    subtitle\n    summary\n    thumbnail {\n      storage\n      ...ContentImageFragment\n    }\n    heroImage {\n      storage\n      ...HeroImageFragment\n    }\n    heroImageMetadata {\n      ...HeroImageMetadataFragment\n    }\n  }\n  ... on Collection {\n    visibility\n    currentlyHidden\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n  }\n  ... on Item {\n    visibility\n    currentlyHidden\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n  }\n}\n\nfragment EntityLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...JournalLayoutFragment\n    ...IssueLayoutFragment\n    ...VolumeLayoutFragment\n    ...SeriesLayoutFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...ArticleLayoutFragment\n  }\n}\n\nfragment EntityLayoutFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n    ...EntityNavBarFragment\n  }\n}\n\nfragment EntityNavBarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Entity {\n    __isEntity: __typename\n    title\n    ...EntityNavListFragment\n  }\n}\n\nfragment EntityNavListFragment on Entity {\n  __isEntity: __typename\n  __typename\n  orderings(availability: ENABLED) {\n    nodes {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment EntityOrderSelectFragment on OrderingConnection {\n  edges {\n    node {\n      name\n      identifier\n      id\n    }\n  }\n}\n\nfragment EntityOrderingLayoutFactoryFragment on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  initialOrdering {\n    identifier\n    disabled\n    id\n  }\n  ...IssueSidebarNavFragment\n}\n\nfragment FeaturedIssueFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n  ordering(identifier: \"articles\") {\n    identifier\n    children(perPage: 3) {\n      edges {\n        node {\n          entry {\n            __typename\n            ... on Sluggable {\n              __isSluggable: __typename\n              slug\n            }\n            ...ArticleSummaryFragment\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          id\n        }\n      }\n      pageInfo {\n        totalCount\n      }\n    }\n    id\n  }\n  featuredArticles: schemaProperty(fullPath: \"featured_articles\") {\n    __typename\n    ... on EntitiesProperty {\n      entities {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ArticleSummaryFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ...getEntityDisplayNameFragment\n}\n\nfragment FullTextFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  ... on FullTextProperty {\n    fullText {\n      content\n      kind\n      lang\n    }\n    type\n  }\n}\n\nfragment HeroImageFragment on ImageAttachment {\n  image: hero {\n    webp {\n      url\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment HeroImageMetadataFragment on ImageMetadata {\n  alt\n}\n\nfragment HowToCiteFragment on Item {\n  citation: schemaProperty(fullPath: \"citation\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n}\n\nfragment ISSNFragment on HasISSN {\n  __isHasISSN: __typename\n  issn\n}\n\nfragment IssueHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  visibility\n  currentlyHidden\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ...getEntityDisplayNameFragment\n}\n\nfragment IssueLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...IssueHeroFragment\n  contributions {\n    ...ContributionsBlockFragment\n    pageInfo {\n      totalCount\n    }\n  }\n  relatedCollections(page: 1, perPage: 4) {\n    ...RelatedIssuesFragment\n  }\n}\n\nfragment IssueSidebarNavFragment on Collection {\n  orderings(availability: ENABLED) {\n    ...EntityOrderSelectFragment\n  }\n  ...IssueSidebarNavListFragment\n}\n\nfragment IssueSidebarNavListFragment on Collection {\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment IssueSummaryFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n  ...getEntityDisplayNameFragment\n}\n\nfragment JournalContentFragment on Collection {\n  slug\n  description: schemaProperty(fullPath: \"description\") {\n    __typename\n    ... on FullTextProperty {\n      fullText {\n        content\n      }\n    }\n    ...FullTextFragment\n  }\n  about: schemaProperty(fullPath: \"about\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n  issues: collections(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS, page: 1, perPage: 4) {\n    ...RecentIssuesFragment\n  }\n  currentIssue: firstCollection(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {\n    ...FeaturedIssueFragment\n    id\n  }\n  announcements {\n    ...EntityAnnouncementsFragment\n    nodes {\n      slug\n      id\n    }\n  }\n}\n\nfragment JournalHeroCompactFragment on Collection {\n  title\n  subtitle\n}\n\nfragment JournalHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  visibility\n  currentlyHidden\n  heroImage {\n    storage\n    ...HeroImageFragment\n  }\n  heroImageMetadata {\n    ...HeroImageMetadataFragment\n  }\n  ...DOIFragment\n  ...JournalHeroMetadataFragment\n}\n\nfragment JournalHeroMetadataFragment on Collection {\n  ...ISSNFragment\n  ...OpenAccessFragment\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n}\n\nfragment JournalLayoutFragment on Collection {\n  ...JournalHeroFragment\n  ...EntityNavBarFragment\n  ...BreadcrumbsBarFragment\n  related: relatedCollections(order: RECENT, perPage: 4) {\n    ...RelatedJournalsFragment\n  }\n}\n\nfragment OpenAccessFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  openAccess: schemaProperty(fullPath: \"open_access\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PeerReviewedFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  peerReviewed: schemaProperty(fullPath: \"peer_reviewed\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PreprintVersionFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  prePrintVersion: schemaProperty(fullPath: \"preprint_version\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment RecentIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...IssueSummaryFragment\n      id\n    }\n  }\n}\n\nfragment RelatedArticlesFragment on ItemConnection {\n  edges {\n    node {\n      title\n      slug\n      published {\n        ...PrecisionDateFragment\n      }\n      journal: ancestorOfType(schema: \"nglp:journal\") {\n        __typename\n        ... on Collection {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      volumeId: schemaProperty(fullPath: \"volume.id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      issueId: schemaProperty(fullPath: \"id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment RelatedIssueBlockFragment on Collection {\n  __typename\n  title\n  subtitle\n  slug\n  id\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: collections(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedIssueBlockFragment\n      id\n    }\n  }\n}\n\nfragment RelatedJournalFragment on Collection {\n  __typename\n  id\n  title\n  subtitle\n  slug\n  updatedAt\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  issues: descendants(scope: COLLECTION, schema: [\"nglp:journal_issue\"]) {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedJournalsFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedJournalFragment\n      id\n    }\n  }\n}\n\nfragment SeriesHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  visibility\n  currentlyHidden\n  published {\n    ...PrecisionDateFragment\n    value\n  }\n  about: schemaProperty(fullPath: \"about\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n  ...ArticleParentHeaderFragment\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n}\n\nfragment SeriesLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...SeriesHeroFragment\n  ...EntityNavBarFragment\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  thumb: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ViewCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment VolumeHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  visibility\n  currentlyHidden\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment VolumeLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...VolumeHeroFragment\n  ...EntityNavBarFragment\n}\n\nfragment getEntityDisplayNameFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issueNumber: schemaProperty(fullPath: \"number\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n  ...getEntityVolumeNumberFragment\n}\n\nfragment getEntityVolumeNumberFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        number: schemaProperty(fullPath: \"id\") {\n          __typename\n          ... on StringProperty {\n            content\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    volumeNumber: schemaProperty(fullPath: \"volume.id\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cecf4c1bfd3943830fe9aebebbcd4653";

export default node;
