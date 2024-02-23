/**
 * @generated SignedSource<<6f8e1e332d4809262b6831fe3e607eef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SlugItemQuery$variables = {
  slug: string;
};
export type SlugItemQuery$data = {
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityContentLayoutFactoryFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ItemLayoutQueryFragment">;
};
export type SlugItemQuery = {
  response: SlugItemQuery$data;
  variables: SlugItemQuery$variables;
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v12 = {
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
            (v3/*: any*/),
            (v2/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    (v13/*: any*/),
    (v2/*: any*/)
  ],
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v17 = {
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
        (v16/*: any*/),
        (v11/*: any*/),
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
v18 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnySchemaProperty"
},
v19 = [
  (v15/*: any*/),
  (v17/*: any*/),
  (v18/*: any*/)
],
v20 = [
  (v16/*: any*/)
],
v21 = [
  (v15/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v20/*: any*/),
    "type": "MarkdownProperty",
    "abstractKey": null
  }
],
v22 = {
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
  "selections": (v21/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"about\")"
},
v23 = {
  "kind": "Literal",
  "name": "nodeFilter",
  "value": "DESCENDANTS"
},
v24 = {
  "kind": "Literal",
  "name": "order",
  "value": "PUBLISHED_DESCENDING"
},
v25 = {
  "kind": "Literal",
  "name": "page",
  "value": 1
},
v26 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 4
},
v27 = {
  "kind": "Literal",
  "name": "schema",
  "value": "nglp:journal_issue"
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "subtitle",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
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
        (v8/*: any*/),
        (v30/*: any*/),
        (v6/*: any*/),
        (v7/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v32 = [
  (v31/*: any*/)
],
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v34 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "precision",
  "storageKey": null
},
v35 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v33/*: any*/),
    (v34/*: any*/)
  ],
  "storageKey": null
},
v36 = [
  (v3/*: any*/)
],
v37 = {
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v38 = [
  (v15/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v36/*: any*/),
    "type": "Collection",
    "abstractKey": null
  },
  (v37/*: any*/)
],
v39 = {
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
  "selections": (v38/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
},
v40 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal_article"
  }
],
v41 = {
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
v42 = [
  (v41/*: any*/)
],
v43 = {
  "alias": "articles",
  "args": (v40/*: any*/),
  "concreteType": "ItemConnection",
  "kind": "LinkedField",
  "name": "items",
  "plural": false,
  "selections": (v42/*: any*/),
  "storageKey": "items(schema:\"nglp:journal_article\")"
},
v44 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "id"
  }
],
v45 = [
  (v15/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": (v20/*: any*/),
    "type": "StringProperty",
    "abstractKey": null
  }
],
v46 = {
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
    (v15/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v3/*: any*/),
        {
          "alias": "number",
          "args": (v44/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "schemaProperty",
          "plural": false,
          "selections": (v45/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"id\")"
        }
      ],
      "type": "Collection",
      "abstractKey": null
    },
    (v37/*: any*/)
  ],
  "storageKey": "ancestorByName(name:\"volume\")"
},
v47 = {
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
  "selections": (v45/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"number\")"
},
v48 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "volume.id"
  }
],
v49 = {
  "alias": "volumeNumber",
  "args": (v48/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": (v45/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"volume.id\")"
},
v50 = {
  "kind": "InlineFragment",
  "selections": [
    (v46/*: any*/),
    (v47/*: any*/),
    (v49/*: any*/)
  ],
  "type": "Collection",
  "abstractKey": null
},
v51 = {
  "kind": "InlineFragment",
  "selections": [
    (v50/*: any*/)
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
},
v52 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": (v32/*: any*/),
  "storageKey": null
},
v53 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v54 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v30/*: any*/),
      (v8/*: any*/)
    ],
    "storageKey": null
  }
],
v55 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v56 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isAnyContributor"
},
v57 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v58 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v59 = {
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
v60 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "contributor",
  "plural": false,
  "selections": [
    (v15/*: any*/),
    (v56/*: any*/),
    (v53/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v57/*: any*/),
        (v58/*: any*/)
      ],
      "type": "PersonContributor",
      "abstractKey": null
    },
    (v59/*: any*/),
    (v37/*: any*/)
  ],
  "storageKey": null
},
v61 = [
  (v15/*: any*/),
  (v53/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v3/*: any*/),
      (v28/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageAttachment",
        "kind": "LinkedField",
        "name": "thumbnail",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": "thumb",
            "args": null,
            "concreteType": "ImageSize",
            "kind": "LinkedField",
            "name": "medium",
            "plural": false,
            "selections": (v54/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v4/*: any*/),
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
              (v55/*: any*/),
              (v60/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v35/*: any*/)
    ],
    "type": "Item",
    "abstractKey": null
  },
  (v37/*: any*/)
],
v62 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "visibility",
  "storageKey": null
},
v63 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currentlyHidden",
  "storageKey": null
},
v64 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v8/*: any*/)
    ],
    "storageKey": null
  }
],
v65 = {
  "alias": "placeholder",
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "thumb",
  "plural": false,
  "selections": (v64/*: any*/),
  "storageKey": null
},
v66 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    {
      "alias": "image",
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "hero",
      "plural": false,
      "selections": (v64/*: any*/),
      "storageKey": null
    },
    (v65/*: any*/)
  ],
  "storageKey": null
},
v67 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageMetadata",
  "kind": "LinkedField",
  "name": "heroImageMetadata",
  "plural": false,
  "selections": [
    (v30/*: any*/)
  ],
  "storageKey": null
},
v68 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal"
  }
],
v69 = {
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
v70 = [
  (v15/*: any*/),
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
v71 = {
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
  "selections": (v70/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"open_access\")"
},
v72 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v73 = {
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
    (v15/*: any*/),
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
            (v72/*: any*/),
            (v33/*: any*/)
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
v74 = {
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
  "selections": (v70/*: any*/),
  "storageKey": "schemaProperty(fullPath:\"peer_reviewed\")"
},
v75 = {
  "kind": "InlineFragment",
  "selections": [
    (v71/*: any*/),
    (v73/*: any*/),
    (v74/*: any*/)
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
},
v76 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "pdf_version"
  }
],
v77 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "downloadUrl",
  "storageKey": null
},
v78 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contentType",
  "storageKey": null
},
v79 = {
  "alias": "pdfVersion",
  "args": (v76/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "schemaProperty",
  "plural": false,
  "selections": [
    (v15/*: any*/),
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
            (v15/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v9/*: any*/),
                (v77/*: any*/),
                (v11/*: any*/),
                (v78/*: any*/)
              ],
              "type": "Asset",
              "abstractKey": "__isAsset"
            },
            (v37/*: any*/)
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
v80 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "image",
    "plural": false,
    "selections": [
      (v5/*: any*/)
    ],
    "storageKey": null
  }
],
v81 = {
  "kind": "InlineFragment",
  "selections": (v80/*: any*/),
  "type": "PersonContributor",
  "abstractKey": null
},
v82 = {
  "kind": "InlineFragment",
  "selections": (v80/*: any*/),
  "type": "OrganizationContributor",
  "abstractKey": null
},
v83 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v84 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayName",
  "storageKey": null
},
v85 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contributorKind",
  "storageKey": null
},
v86 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageSize",
  "kind": "LinkedField",
  "name": "small",
  "plural": false,
  "selections": (v54/*: any*/),
  "storageKey": null
},
v87 = {
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
        (v86/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Contributor",
  "abstractKey": "__isContributor"
},
v88 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "orcid",
  "storageKey": null
},
v89 = [
  (v4/*: any*/),
  (v2/*: any*/)
],
v90 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "item",
      "plural": false,
      "selections": (v89/*: any*/),
      "storageKey": null
    }
  ],
  "type": "ItemContribution",
  "abstractKey": null
},
v91 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": (v89/*: any*/),
      "storageKey": null
    }
  ],
  "type": "CollectionContribution",
  "abstractKey": null
},
v92 = [
  (v4/*: any*/),
  (v55/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "contributor",
    "plural": false,
    "selections": [
      (v15/*: any*/),
      (v81/*: any*/),
      (v82/*: any*/),
      (v37/*: any*/)
    ],
    "storageKey": null
  },
  (v2/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      (v83/*: any*/),
      (v84/*: any*/),
      (v85/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v56/*: any*/),
          (v53/*: any*/),
          (v87/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v83/*: any*/),
              (v88/*: any*/),
              (v57/*: any*/),
              (v58/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          (v59/*: any*/)
        ],
        "storageKey": null
      },
      (v90/*: any*/),
      (v91/*: any*/)
    ],
    "type": "Contribution",
    "abstractKey": "__isContribution"
  }
],
v93 = {
  "alias": "journal",
  "args": (v68/*: any*/),
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v38/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
},
v94 = {
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
    (v72/*: any*/),
    (v11/*: any*/),
    (v4/*: any*/),
    (v2/*: any*/)
  ],
  "storageKey": null
},
v95 = [
  {
    "kind": "Literal",
    "name": "availability",
    "value": "ENABLED"
  }
],
v96 = {
  "kind": "InlineFragment",
  "selections": (v36/*: any*/),
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v97 = [
  (v15/*: any*/),
  (v96/*: any*/),
  (v37/*: any*/)
],
v98 = {
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
  "selections": (v97/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:unit\")"
},
v99 = {
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
  "selections": (v97/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:campus\")"
},
v100 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isSluggable"
},
v101 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": "journal",
      "args": (v68/*: any*/),
      "concreteType": null,
      "kind": "LinkedField",
      "name": "ancestorOfType",
      "plural": false,
      "selections": [
        (v96/*: any*/)
      ],
      "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
    },
    {
      "alias": "issue",
      "args": [
        (v27/*: any*/)
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "ancestorOfType",
      "plural": false,
      "selections": [
        (v15/*: any*/),
        {
          "kind": "TypeDiscriminator",
          "abstractKey": "__isAnyEntity"
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v3/*: any*/),
            (v46/*: any*/),
            (v47/*: any*/),
            (v49/*: any*/)
          ],
          "type": "Collection",
          "abstractKey": null
        },
        (v96/*: any*/),
        (v37/*: any*/)
      ],
      "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
    },
    (v98/*: any*/),
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
      "selections": (v97/*: any*/),
      "storageKey": "ancestorOfType(schema:\"nglp:series\")"
    },
    (v99/*: any*/)
  ],
  "type": "Item",
  "abstractKey": null
},
v102 = {
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
        (v13/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "disabled",
          "storageKey": null
        },
        (v2/*: any*/)
      ],
      "storageKey": null
    },
    (v15/*: any*/),
    (v94/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": (v95/*: any*/),
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
                    (v9/*: any*/),
                    (v13/*: any*/),
                    (v2/*: any*/)
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "orderings(availability:\"ENABLED\")"
        },
        (v12/*: any*/),
        (v98/*: any*/),
        (v99/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    },
    (v100/*: any*/),
    (v101/*: any*/)
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v103 = {
  "alias": null,
  "args": (v95/*: any*/),
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
        (v9/*: any*/),
        (v4/*: any*/),
        (v13/*: any*/),
        (v10/*: any*/),
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": "orderings(availability:\"ENABLED\")"
},
v104 = {
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
            (v3/*: any*/),
            (v4/*: any*/),
            (v2/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v105 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isNode"
},
v106 = {
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
v107 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v108 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    (v86/*: any*/)
  ],
  "storageKey": null
},
v109 = [
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "contributor",
    "plural": false,
    "selections": [
      (v81/*: any*/),
      (v82/*: any*/)
    ],
    "storageKey": null
  },
  {
    "kind": "InlineFragment",
    "selections": [
      (v84/*: any*/),
      (v85/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v87/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v88/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Contribution",
    "abstractKey": "__isContribution"
  }
],
v110 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    (v34/*: any*/),
    (v33/*: any*/)
  ],
  "storageKey": null
},
v111 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  }
],
v112 = [
  (v15/*: any*/),
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
      (v16/*: any*/)
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
],
v113 = {
  "kind": "InlineFragment",
  "selections": [
    (v15/*: any*/),
    (v94/*: any*/),
    (v100/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v66/*: any*/),
            (v67/*: any*/),
            (v103/*: any*/)
          ],
          "type": "Entity",
          "abstractKey": "__isEntity"
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v22/*: any*/)
          ],
          "type": "Item",
          "abstractKey": null
        },
        (v105/*: any*/)
      ],
      "type": "AnyEntity",
      "abstractKey": "__isAnyEntity"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v114 = {
  "kind": "InlineFragment",
  "selections": [
    (v73/*: any*/),
    (v74/*: any*/),
    (v71/*: any*/)
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SlugItemQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityContentLayoutFactoryFragment"
          }
        ],
        "storageKey": null
      },
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "ItemLayoutQueryFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SlugItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageAttachment",
                "kind": "LinkedField",
                "name": "logo",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageOriginal",
                    "kind": "LinkedField",
                    "name": "original",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/)
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
                  (v4/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v12/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v14/*: any*/),
                  (v4/*: any*/),
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
                    "selections": (v19/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"description\")"
                  },
                  (v22/*: any*/),
                  {
                    "alias": "issues",
                    "args": [
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/)
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
                              (v4/*: any*/),
                              (v2/*: any*/),
                              (v3/*: any*/),
                              (v28/*: any*/),
                              (v29/*: any*/),
                              {
                                "alias": "cover",
                                "args": null,
                                "concreteType": "ImageAttachment",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": (v32/*: any*/),
                                "storageKey": null
                              },
                              (v35/*: any*/),
                              (v39/*: any*/),
                              (v43/*: any*/),
                              (v51/*: any*/)
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
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v27/*: any*/)
                    ],
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "firstCollection",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v28/*: any*/),
                      (v4/*: any*/),
                      (v52/*: any*/),
                      (v35/*: any*/),
                      (v39/*: any*/),
                      (v43/*: any*/),
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
                          (v13/*: any*/),
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
                                        "selections": (v61/*: any*/),
                                        "storageKey": null
                                      },
                                      (v2/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v41/*: any*/)
                            ],
                            "storageKey": "children(perPage:3)"
                          },
                          (v2/*: any*/)
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
                          (v15/*: any*/),
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
                                "selections": (v61/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "EntitiesProperty",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": "schemaProperty(fullPath:\"featured_articles\")"
                      },
                      (v51/*: any*/)
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
                          (v4/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  (v28/*: any*/),
                  (v62/*: any*/),
                  (v63/*: any*/),
                  (v66/*: any*/),
                  (v67/*: any*/),
                  {
                    "alias": "related",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "order",
                        "value": "RECENT"
                      },
                      (v26/*: any*/)
                    ],
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
                              (v4/*: any*/),
                              (v15/*: any*/),
                              (v2/*: any*/),
                              (v3/*: any*/),
                              (v28/*: any*/),
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
                                  (v5/*: any*/),
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
                                "selections": (v42/*: any*/),
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
                  (v29/*: any*/),
                  (v35/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "thumbnail",
                    "plural": false,
                    "selections": [
                      (v31/*: any*/),
                      (v5/*: any*/),
                      (v65/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": "journal",
                    "args": (v68/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v15/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/),
                          (v28/*: any*/),
                          (v69/*: any*/),
                          (v75/*: any*/)
                        ],
                        "type": "Collection",
                        "abstractKey": null
                      },
                      (v37/*: any*/)
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                  },
                  (v79/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CollectionContributionConnection",
                    "kind": "LinkedField",
                    "name": "contributions",
                    "plural": false,
                    "selections": [
                      (v41/*: any*/),
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
                    "alias": null,
                    "args": [
                      (v25/*: any*/),
                      (v26/*: any*/)
                    ],
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
                              (v4/*: any*/),
                              (v15/*: any*/),
                              (v3/*: any*/),
                              (v28/*: any*/),
                              (v2/*: any*/),
                              (v52/*: any*/),
                              (v35/*: any*/),
                              (v39/*: any*/),
                              (v93/*: any*/),
                              {
                                "alias": "articles",
                                "args": (v40/*: any*/),
                                "concreteType": "CollectionConnection",
                                "kind": "LinkedField",
                                "name": "collections",
                                "plural": false,
                                "selections": (v42/*: any*/),
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
                  (v102/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v103/*: any*/),
                          (v104/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v105/*: any*/)
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          }
                        ],
                        "type": "Entity",
                        "abstractKey": "__isEntity"
                      },
                      (v105/*: any*/),
                      (v100/*: any*/),
                      (v50/*: any*/)
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v106/*: any*/),
                  (v69/*: any*/),
                  (v75/*: any*/)
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v14/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "thumbnail",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
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
                              (v30/*: any*/),
                              (v8/*: any*/),
                              (v6/*: any*/),
                              (v7/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v65/*: any*/)
                    ],
                    "storageKey": null
                  },
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
                    "selections": (v19/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"body\")"
                  },
                  {
                    "alias": "pdf",
                    "args": (v76/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": [
                      (v15/*: any*/),
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
                              (v15/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v9/*: any*/),
                                  (v77/*: any*/),
                                  (v11/*: any*/),
                                  (v78/*: any*/),
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
                              (v37/*: any*/)
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
                    "selections": (v21/*: any*/),
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
                          (v55/*: any*/),
                          (v2/*: any*/),
                          (v60/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v83/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "contributor",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v3/*: any*/),
                                      (v107/*: any*/),
                                      (v83/*: any*/),
                                      (v108/*: any*/),
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v59/*: any*/)
                                        ],
                                        "type": "AnyContributor",
                                        "abstractKey": "__isAnyContributor"
                                      }
                                    ],
                                    "type": "PersonContributor",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v107/*: any*/),
                                      (v108/*: any*/)
                                    ],
                                    "type": "OrganizationContributor",
                                    "abstractKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v91/*: any*/),
                              (v90/*: any*/)
                            ],
                            "type": "Contribution",
                            "abstractKey": "__isContribution"
                          }
                        ],
                        "storageKey": null
                      },
                      (v41/*: any*/),
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
                                "selections": (v109/*: any*/),
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
                                "selections": (v109/*: any*/),
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
                  (v4/*: any*/),
                  (v3/*: any*/),
                  (v28/*: any*/),
                  (v29/*: any*/),
                  (v62/*: any*/),
                  (v63/*: any*/),
                  (v110/*: any*/),
                  (v79/*: any*/),
                  {
                    "alias": "journal",
                    "args": (v68/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v15/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v74/*: any*/),
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
                            "selections": (v70/*: any*/),
                            "storageKey": "schemaProperty(fullPath:\"preprint_version\")"
                          },
                          (v71/*: any*/),
                          (v73/*: any*/)
                        ],
                        "type": "SchemaInstance",
                        "abstractKey": "__isSchemaInstance"
                      },
                      (v37/*: any*/)
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
                      (v15/*: any*/),
                      (v18/*: any*/),
                      (v17/*: any*/)
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
                    "selections": (v111/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnalyticsEventCountSummary",
                    "kind": "LinkedField",
                    "name": "assetDownloads",
                    "plural": false,
                    "selections": (v111/*: any*/),
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
                      (v13/*: any*/),
                      (v9/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v104/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnyAssetConnection",
                    "kind": "LinkedField",
                    "name": "assets",
                    "plural": false,
                    "selections": (v42/*: any*/),
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
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v110/*: any*/),
                              (v93/*: any*/),
                              {
                                "alias": "volumeId",
                                "args": (v48/*: any*/),
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "schemaProperty",
                                "plural": false,
                                "selections": (v112/*: any*/),
                                "storageKey": "schemaProperty(fullPath:\"volume.id\")"
                              },
                              {
                                "alias": "issueId",
                                "args": (v44/*: any*/),
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "schemaProperty",
                                "plural": false,
                                "selections": (v112/*: any*/),
                                "storageKey": "schemaProperty(fullPath:\"id\")"
                              },
                              (v2/*: any*/)
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
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v113/*: any*/)
                            ],
                            "type": "AnyEntity",
                            "abstractKey": "__isAnyEntity"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v15/*: any*/),
                              (v94/*: any*/),
                              (v100/*: any*/),
                              (v101/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v98/*: any*/),
                                  (v99/*: any*/)
                                ],
                                "type": "Collection",
                                "abstractKey": null
                              }
                            ],
                            "type": "Entity",
                            "abstractKey": "__isEntity"
                          },
                          (v106/*: any*/),
                          (v114/*: any*/)
                        ],
                        "type": "Item",
                        "abstractKey": null
                      },
                      (v113/*: any*/)
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  (v102/*: any*/),
                  (v106/*: any*/),
                  (v114/*: any*/)
                ],
                "type": "Item",
                "abstractKey": null
              }
            ],
            "type": "AnyEntity",
            "abstractKey": "__isAnyEntity"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v15/*: any*/),
              (v53/*: any*/),
              (v3/*: any*/),
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
                      (v15/*: any*/),
                      (v53/*: any*/),
                      (v96/*: any*/),
                      (v37/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
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
    "cacheID": "42723fe59e19436f57dc7c41f1570ff7",
    "id": null,
    "metadata": {},
    "name": "SlugItemQuery",
    "operationKind": "query",
    "text": "query SlugItemQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    ...EntityContentLayoutFactoryFragment\n    id\n  }\n  ...ItemLayoutQueryFragment_20J5Pl\n}\n\nfragment AppBodyCommunityFragment on Community {\n  ...AppHeaderCommunityFragment\n  ...AppFooterCommunityFragment\n}\n\nfragment AppBodyEntityFragment on Entity {\n  __isEntity: __typename\n  ...AppHeaderEntityFragment\n}\n\nfragment AppFooterCommunityFragment on Community {\n  slug\n  title\n  ...CommunityPickerActiveFragment\n  ...CommunityNameFragment\n}\n\nfragment AppHeaderCommunityFragment on Community {\n  ...CommunityPickerActiveFragment\n  ...CommunityNavListFragment\n  ...CommunityNameFragment\n}\n\nfragment AppHeaderEntityFragment on Entity {\n  __isEntity: __typename\n  ...SearchButtonFragment\n}\n\nfragment AppLayoutCommunityFragment on Community {\n  ...CommunityNavBarFragment\n  ...AppBodyCommunityFragment\n}\n\nfragment AppLayoutEntityFragment on Entity {\n  __isEntity: __typename\n  ...CommunityNavBarEntityFragment\n  ...AppBodyEntityFragment\n}\n\nfragment ArticleContributorFragment on ItemContributionConnection {\n  nodes {\n    role\n    ...ContributionAuthorBlockFragment\n    id\n  }\n  ...ContributionsBlockFragment\n}\n\nfragment ArticleHeroFragment on Item {\n  slug\n  title\n  subtitle\n  summary\n  visibility\n  currentlyHidden\n  ...DOIFragment\n  published {\n    ...PrecisionDateFragment\n    value\n  }\n  contributions {\n    ...ContributorsListFragment\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...PeerReviewedFragment\n    ...PreprintVersionFragment\n    ...OpenAccessFragment\n    ...CCLicenseFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  abstract: schemaProperty(fullPath: \"abstract\") {\n    __typename\n    ...FullTextFragment\n  }\n  entityViews {\n    ...ViewCountFragment\n  }\n  assetDownloads {\n    ...DownloadCountFragment\n  }\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n  ...OpenAccessFragment\n}\n\nfragment ArticleLayoutFragment on Item {\n  ...BreadcrumbsBarFragment\n  ...ArticleParentHeaderFragment\n  ...ArticleHeroFragment\n  ...ArticleTabNavFragment\n  relatedItems {\n    ...RelatedArticlesFragment\n  }\n}\n\nfragment ArticleParentHeaderFragment on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  ... on Item {\n    journal: ancestorOfType(schema: \"nglp:journal\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n      __typename\n      ...getEntityDisplayNameFragment\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    unit: ancestorOfType(schema: \"nglp:unit\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    series: ancestorOfType(schema: \"nglp:series\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    campus: ancestorOfType(schema: \"nglp:campus\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n  ... on Collection {\n    unit: ancestorOfType(schema: \"nglp:unit\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    campus: ancestorOfType(schema: \"nglp:campus\") {\n      __typename\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment ArticleSummaryFragment on Item {\n  __typename\n  title\n  subtitle\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  slug\n  summary\n  contributions {\n    ...ContributorsListFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n}\n\nfragment ArticleTabNavFragment on Item {\n  schemaVersion {\n    identifier\n    name\n    id\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n  contributions {\n    pageInfo {\n      totalCount\n    }\n  }\n  assets {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment ArticleTextFragment on Item {\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n  bodyText: schemaProperty(fullPath: \"body\") {\n    __typename\n    ... on FullTextProperty {\n      fullText {\n        content\n      }\n    }\n    ...FullTextFragment\n  }\n  pdf: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetInlinePDFFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment AssetDownloadButtonFragment on Asset {\n  __isAsset: __typename\n  name\n  downloadUrl\n  kind\n  contentType\n}\n\nfragment AssetInlinePDFFragment on Asset {\n  __isAsset: __typename\n  ... on AssetPDF {\n    downloadUrl\n    fileSize\n  }\n  ...AssetDownloadButtonFragment\n}\n\nfragment BreadcrumbLinkFragment on EntityBreadcrumb {\n  label\n  kind\n  slug\n}\n\nfragment BreadcrumbsBarFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ...BreadcrumbsFragment\n}\n\nfragment BreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    ...BreadcrumbLinkFragment\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment CCLicenseFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  ccLicense: schemaProperty(fullPath: \"cc_license\") {\n    __typename\n    ... on SelectProperty {\n      selection\n      defaultSelection\n      options {\n        label\n        value\n      }\n    }\n  }\n}\n\nfragment CommunityLogoFragment on ImageAttachment {\n  storage\n  original {\n    url\n    width\n    height\n  }\n}\n\nfragment CommunityNameFragment on Community {\n  title\n  slug\n  logo {\n    storage\n    original {\n      width\n      height\n    }\n    ...CommunityLogoFragment\n  }\n}\n\nfragment CommunityNavBarEntityFragment on Entity {\n  __isEntity: __typename\n  ...SearchButtonFragment\n}\n\nfragment CommunityNavBarFragment on Community {\n  ...CommunityNameFragment\n  ...CommunityNavListFragment\n}\n\nfragment CommunityNavListFragment on Community {\n  slug\n  schemaRanks {\n    slug\n    name\n    count\n    kind\n    id\n  }\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment CommunityPickerActiveFragment on Community {\n  title\n  slug\n}\n\nfragment ContentImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      alt\n      url\n      width\n      height\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment ContributionAuthorBlockFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  role\n  ... on CollectionContribution {\n    collection {\n      slug\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      slug\n      id\n    }\n  }\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on PersonContributor {\n      __typename\n      title\n      bio\n      affiliation\n      image {\n        storage\n        ...ContributorAvatarFragment\n      }\n      ...ContributorNameFragment\n    }\n    ... on OrganizationContributor {\n      __typename\n      bio\n      image {\n        storage\n        ...ContributorAvatarFragment\n      }\n      ...ContributorNameFragment\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ContributionBlockItemFragment on Contribution {\n  __isContribution: __typename\n  affiliation\n  displayName\n  contributorKind\n  role\n  contributor {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Contributor {\n      __isContributor: __typename\n      image {\n        ...ContributorAvatarFragment\n      }\n    }\n    ... on PersonContributor {\n      affiliation\n      orcid\n    }\n    ...ContributorNameFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  ... on ItemContribution {\n    item {\n      slug\n      id\n    }\n  }\n  ... on CollectionContribution {\n    collection {\n      slug\n      id\n    }\n  }\n}\n\nfragment ContributionsBlockFragment on Paginated {\n  __isPaginated: __typename\n  ... on ItemContributionConnection {\n    nodes {\n      slug\n      role\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n  ... on CollectionContributionConnection {\n    nodes {\n      slug\n      role\n      contributor {\n        __typename\n        ... on PersonContributor {\n          image {\n            storage\n          }\n        }\n        ... on OrganizationContributor {\n          image {\n            storage\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      ...ContributionBlockItemFragment\n      id\n    }\n  }\n}\n\nfragment ContributorAvatarFragment on ImageAttachment {\n  small {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on ItemContributionConnection {\n  nodes {\n    role\n    contributor {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ...ContributorNameFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment DOIFragment on HasDOI {\n  __isHasDOI: __typename\n  doi\n}\n\nfragment DownloadCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment EntityAnnouncementsFragment on AnnouncementConnection {\n  nodes {\n    teaser\n    header\n    slug\n    id\n  }\n}\n\nfragment EntityContentLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityOrderingLayoutFactoryFragment\n    ...JournalContentFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFactoryFragment\n    ...EntityOrderingLayoutFactoryFragment\n    ...ArticleTextFragment\n    ...HowToCiteFragment\n    contributions {\n      ...ArticleContributorFragment\n    }\n  }\n}\n\nfragment EntityHeroFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    title\n    subtitle\n    summary\n    thumbnail {\n      storage\n      ...ContentImageFragment\n    }\n    heroImage {\n      storage\n      ...HeroImageFragment\n    }\n    heroImageMetadata {\n      ...HeroImageMetadataFragment\n    }\n  }\n  ... on Collection {\n    visibility\n    currentlyHidden\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n  }\n  ... on Item {\n    visibility\n    currentlyHidden\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n    about: schemaProperty(fullPath: \"about\") {\n      __typename\n      ... on MarkdownProperty {\n        content\n      }\n    }\n  }\n}\n\nfragment EntityLayoutFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...JournalLayoutFragment\n    ...IssueLayoutFragment\n    ...VolumeLayoutFragment\n    ...SeriesLayoutFragment\n  }\n  ... on Item {\n    schemaDefinition {\n      identifier\n      id\n    }\n    ...EntityLayoutFragment\n    ...ArticleLayoutFragment\n  }\n}\n\nfragment EntityLayoutFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Entity {\n    __isEntity: __typename\n    ...BreadcrumbsBarFragment\n    ...EntityHeroFragment\n    ...EntityNavBarFragment\n  }\n}\n\nfragment EntityNavBarFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  ... on Entity {\n    __isEntity: __typename\n    title\n    ...EntityNavListFragment\n  }\n}\n\nfragment EntityNavListFragment on Entity {\n  __isEntity: __typename\n  __typename\n  orderings(availability: ENABLED) {\n    nodes {\n      name\n      slug\n      identifier\n      count\n      id\n    }\n  }\n  pages {\n    edges {\n      node {\n        title\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment EntityOrderSelectFragment on OrderingConnection {\n  edges {\n    node {\n      name\n      identifier\n      id\n    }\n  }\n}\n\nfragment EntityOrderingLayoutFactoryFragment on Entity {\n  __isEntity: __typename\n  schemaDefinition {\n    identifier\n    id\n  }\n  initialOrdering {\n    identifier\n    disabled\n    id\n  }\n  ...IssueSidebarNavFragment\n}\n\nfragment FeaturedIssueFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n  ordering(identifier: \"articles\") {\n    identifier\n    children(perPage: 3) {\n      edges {\n        node {\n          entry {\n            __typename\n            ... on Sluggable {\n              __isSluggable: __typename\n              slug\n            }\n            ...ArticleSummaryFragment\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          id\n        }\n      }\n      pageInfo {\n        totalCount\n      }\n    }\n    id\n  }\n  featuredArticles: schemaProperty(fullPath: \"featured_articles\") {\n    __typename\n    ... on EntitiesProperty {\n      entities {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ArticleSummaryFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ...getEntityDisplayNameFragment\n}\n\nfragment FullTextFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  ... on FullTextProperty {\n    fullText {\n      content\n      kind\n      lang\n    }\n    type\n  }\n}\n\nfragment HeroImageFragment on ImageAttachment {\n  image: hero {\n    webp {\n      url\n    }\n  }\n  placeholder: thumb {\n    webp {\n      url\n    }\n  }\n}\n\nfragment HeroImageMetadataFragment on ImageMetadata {\n  alt\n}\n\nfragment HowToCiteFragment on Item {\n  citation: schemaProperty(fullPath: \"citation\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n}\n\nfragment ISSNFragment on HasISSN {\n  __isHasISSN: __typename\n  issn\n}\n\nfragment IssueHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  visibility\n  currentlyHidden\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  pdfVersion: schemaProperty(fullPath: \"pdf_version\") {\n    __typename\n    ... on AssetProperty {\n      asset {\n        __typename\n        ...AssetDownloadButtonFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ...getEntityDisplayNameFragment\n}\n\nfragment IssueLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...IssueHeroFragment\n  contributions {\n    ...ContributionsBlockFragment\n    pageInfo {\n      totalCount\n    }\n  }\n  relatedCollections(page: 1, perPage: 4) {\n    ...RelatedIssuesFragment\n  }\n}\n\nfragment IssueSidebarNavFragment on Collection {\n  orderings(availability: ENABLED) {\n    ...EntityOrderSelectFragment\n  }\n  ...IssueSidebarNavListFragment\n}\n\nfragment IssueSidebarNavListFragment on Collection {\n  pages {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment IssueSummaryFragment on Collection {\n  id\n  title\n  subtitle\n  slug\n  summary\n  cover: thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: items(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n  ...getEntityDisplayNameFragment\n}\n\nfragment ItemLayoutFragment_20J5Pl on Query {\n  item(slug: $slug) {\n    ...AppLayoutEntityFragment\n    ...EntityLayoutFactoryFragment\n    community {\n      ...AppLayoutCommunityFragment\n      id\n    }\n    id\n  }\n}\n\nfragment ItemLayoutQueryFragment_20J5Pl on Query {\n  ...ItemLayoutFragment_20J5Pl\n}\n\nfragment JournalContentFragment on Collection {\n  slug\n  description: schemaProperty(fullPath: \"description\") {\n    __typename\n    ... on FullTextProperty {\n      fullText {\n        content\n      }\n    }\n    ...FullTextFragment\n  }\n  about: schemaProperty(fullPath: \"about\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n  issues: collections(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS, page: 1, perPage: 4) {\n    ...RecentIssuesFragment\n  }\n  currentIssue: firstCollection(schema: \"nglp:journal_issue\", order: PUBLISHED_DESCENDING, nodeFilter: DESCENDANTS) {\n    ...FeaturedIssueFragment\n    id\n  }\n  announcements {\n    ...EntityAnnouncementsFragment\n    nodes {\n      slug\n      id\n    }\n  }\n}\n\nfragment JournalHeroCompactFragment on Collection {\n  title\n  subtitle\n}\n\nfragment JournalHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  visibility\n  currentlyHidden\n  heroImage {\n    storage\n    ...HeroImageFragment\n  }\n  heroImageMetadata {\n    ...HeroImageMetadataFragment\n  }\n  ...DOIFragment\n  ...JournalHeroMetadataFragment\n}\n\nfragment JournalHeroMetadataFragment on Collection {\n  ...ISSNFragment\n  ...OpenAccessFragment\n  ...CCLicenseFragment\n  ...PeerReviewedFragment\n}\n\nfragment JournalLayoutFragment on Collection {\n  ...JournalHeroFragment\n  ...EntityNavBarFragment\n  ...BreadcrumbsBarFragment\n  related: relatedCollections(order: RECENT, perPage: 4) {\n    ...RelatedJournalsFragment\n  }\n}\n\nfragment OpenAccessFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  openAccess: schemaProperty(fullPath: \"open_access\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PeerReviewedFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  peerReviewed: schemaProperty(fullPath: \"peer_reviewed\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PreprintVersionFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  prePrintVersion: schemaProperty(fullPath: \"preprint_version\") {\n    __typename\n    ... on BooleanProperty {\n      checked\n      checkedByDefault\n    }\n  }\n}\n\nfragment RecentIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...IssueSummaryFragment\n      id\n    }\n  }\n}\n\nfragment RelatedArticlesFragment on ItemConnection {\n  edges {\n    node {\n      title\n      slug\n      published {\n        ...PrecisionDateFragment\n      }\n      journal: ancestorOfType(schema: \"nglp:journal\") {\n        __typename\n        ... on Collection {\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      volumeId: schemaProperty(fullPath: \"volume.id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      issueId: schemaProperty(fullPath: \"id\") {\n        __typename\n        ... on StringProperty {\n          fullPath\n          content\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment RelatedIssueBlockFragment on Collection {\n  __typename\n  title\n  subtitle\n  slug\n  id\n  thumbnail {\n    ...CoverImageFragment\n  }\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ... on Collection {\n      title\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  articles: collections(schema: \"nglp:journal_article\") {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedIssuesFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedIssueBlockFragment\n      id\n    }\n  }\n}\n\nfragment RelatedJournalFragment on Collection {\n  __typename\n  id\n  title\n  subtitle\n  slug\n  updatedAt\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  issues: descendants(scope: COLLECTION, schema: [\"nglp:journal_issue\"]) {\n    pageInfo {\n      totalCount\n    }\n  }\n}\n\nfragment RelatedJournalsFragment on CollectionConnection {\n  edges {\n    node {\n      slug\n      ...RelatedJournalFragment\n      id\n    }\n  }\n}\n\nfragment SearchButtonFragment on Entity {\n  __isEntity: __typename\n  ...SearchModalFragment\n}\n\nfragment SearchModalFragment on Entity {\n  __isEntity: __typename\n  __typename\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  title\n  breadcrumbs {\n    crumb {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ... on Entity {\n        __isEntity: __typename\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment SeriesHeroFragment on Collection {\n  slug\n  title\n  subtitle\n  visibility\n  currentlyHidden\n  published {\n    ...PrecisionDateFragment\n    value\n  }\n  about: schemaProperty(fullPath: \"about\") {\n    __typename\n    ... on MarkdownProperty {\n      content\n    }\n  }\n  ...ArticleParentHeaderFragment\n  thumbnail {\n    storage\n    ...ContentImageFragment\n  }\n}\n\nfragment SeriesLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...SeriesHeroFragment\n  ...EntityNavBarFragment\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  thumb: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment ViewCountFragment on AnalyticsEventCountSummary {\n  total\n}\n\nfragment VolumeHeroFragment on Collection {\n  id\n  title\n  subtitle\n  summary\n  ...DOIFragment\n  visibility\n  currentlyHidden\n  published {\n    value\n    ...PrecisionDateFragment\n  }\n  thumbnail {\n    ...CoverImageFragment\n  }\n  journal: ancestorOfType(schema: \"nglp:journal\") {\n    __typename\n    ...JournalHeroCompactFragment\n    ...JournalHeroMetadataFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment VolumeLayoutFragment on Collection {\n  ...BreadcrumbsBarFragment\n  ...VolumeHeroFragment\n  ...EntityNavBarFragment\n}\n\nfragment getEntityDisplayNameFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    title\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issueNumber: schemaProperty(fullPath: \"number\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n  ...getEntityVolumeNumberFragment\n}\n\nfragment getEntityVolumeNumberFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    vol: ancestorByName(name: \"volume\") {\n      __typename\n      ... on Collection {\n        number: schemaProperty(fullPath: \"id\") {\n          __typename\n          ... on StringProperty {\n            content\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    volumeNumber: schemaProperty(fullPath: \"volume.id\") {\n      __typename\n      ... on StringProperty {\n        content\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a01506230b914edb99f33e2705229cf0";

export default node;
