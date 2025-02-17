/**
 * @generated SignedSource<<25ecbd8cca8e8000f54fc13c08cdb1c8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type getStaticGoogleScholarDataQuery$variables = {
  slug: string;
};
export type getStaticGoogleScholarDataQuery$data = {
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"getStaticGoogleScholarDataFragment">;
  } | null | undefined;
};
export type getStaticGoogleScholarDataQuery = {
  response: getStaticGoogleScholarDataQuery$data;
  variables: getStaticGoogleScholarDataQuery$variables;
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
  "name": "title",
  "storageKey": null
},
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
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "precision",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "pdf_version"
  }
],
v6 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "downloadUrl",
      "storageKey": null
    }
  ],
  "type": "AssetPDF",
  "abstractKey": null
},
v7 = [
  (v2/*: any*/)
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "legalName",
  "storageKey": null
},
v13 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "issue.number"
  }
],
v14 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": "value",
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "StringProperty",
  "abstractKey": null
},
v15 = [
  (v14/*: any*/)
],
v16 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "volume.id"
  }
],
v17 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "issue.fpage"
  }
],
v18 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": "value",
      "args": null,
      "kind": "ScalarField",
      "name": "integerValue",
      "storageKey": null
    }
  ],
  "type": "IntegerProperty",
  "abstractKey": null
},
v19 = [
  (v18/*: any*/)
],
v20 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "issue.lpage"
  }
],
v21 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "degree.grantor"
  }
],
v22 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal"
  }
],
v23 = {
  "kind": "InlineFragment",
  "selections": (v7/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v24 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal_volume"
  }
],
v25 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "number"
  }
],
v26 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": "number",
        "args": (v25/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "schemaProperty",
        "plural": false,
        "selections": (v15/*: any*/),
        "storageKey": "schemaProperty(fullPath:\"number\")"
      }
    ],
    "type": "Collection",
    "abstractKey": null
  }
],
v27 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal_issue"
  }
],
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v29 = {
  "kind": "InlineFragment",
  "selections": [
    (v28/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v30 = [
  (v9/*: any*/),
  (v14/*: any*/)
],
v31 = [
  (v9/*: any*/),
  (v18/*: any*/)
],
v32 = [
  (v9/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": "number",
        "args": (v25/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "schemaProperty",
        "plural": false,
        "selections": (v30/*: any*/),
        "storageKey": "schemaProperty(fullPath:\"number\")"
      }
    ],
    "type": "Collection",
    "abstractKey": null
  },
  (v29/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "getStaticGoogleScholarDataQuery",
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
            "name": "getStaticGoogleScholarDataFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
                      {
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
                      (v4/*: any*/),
                      {
                        "alias": "pdf",
                        "args": (v5/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": [
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
                                  (v6/*: any*/)
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
                        "alias": null,
                        "args": null,
                        "concreteType": "Community",
                        "kind": "LinkedField",
                        "name": "community",
                        "plural": false,
                        "selections": (v7/*: any*/),
                        "storageKey": null
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
                              (v8/*: any*/),
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
                                      (v9/*: any*/),
                                      (v10/*: any*/),
                                      (v11/*: any*/)
                                    ],
                                    "type": "PersonContributor",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v9/*: any*/),
                                      (v12/*: any*/)
                                    ],
                                    "type": "OrganizationContributor",
                                    "abstractKey": null
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
                      {
                        "alias": "issueNumber",
                        "args": (v13/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": (v15/*: any*/),
                        "storageKey": "schemaProperty(fullPath:\"issue.number\")"
                      },
                      {
                        "alias": "volumeNumber",
                        "args": (v16/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": (v15/*: any*/),
                        "storageKey": "schemaProperty(fullPath:\"volume.id\")"
                      },
                      {
                        "alias": "startPage",
                        "args": (v17/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": (v19/*: any*/),
                        "storageKey": "schemaProperty(fullPath:\"issue.fpage\")"
                      },
                      {
                        "alias": "endPage",
                        "args": (v20/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": (v19/*: any*/),
                        "storageKey": "schemaProperty(fullPath:\"issue.lpage\")"
                      },
                      {
                        "alias": "institution",
                        "args": (v21/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": (v15/*: any*/),
                        "storageKey": "schemaProperty(fullPath:\"degree.grantor\")"
                      },
                      {
                        "alias": "journal",
                        "args": (v22/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "ancestorOfType",
                        "plural": false,
                        "selections": [
                          (v23/*: any*/)
                        ],
                        "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                      },
                      {
                        "alias": "volume",
                        "args": (v24/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "ancestorOfType",
                        "plural": false,
                        "selections": (v26/*: any*/),
                        "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                      },
                      {
                        "alias": "issue",
                        "args": (v27/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "ancestorOfType",
                        "plural": false,
                        "selections": (v26/*: any*/),
                        "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
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
    "name": "getStaticGoogleScholarDataQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v28/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SchemaDefinition",
                    "kind": "LinkedField",
                    "name": "schemaDefinition",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v28/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  {
                    "alias": "pdf",
                    "args": (v5/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
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
                              (v9/*: any*/),
                              (v6/*: any*/),
                              (v29/*: any*/)
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
                    "alias": null,
                    "args": null,
                    "concreteType": "Community",
                    "kind": "LinkedField",
                    "name": "community",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v28/*: any*/)
                    ],
                    "storageKey": null
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
                          (v8/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "contributor",
                            "plural": false,
                            "selections": [
                              (v9/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v10/*: any*/),
                                  (v11/*: any*/)
                                ],
                                "type": "PersonContributor",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v12/*: any*/)
                                ],
                                "type": "OrganizationContributor",
                                "abstractKey": null
                              },
                              (v29/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v28/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": "issueNumber",
                    "args": (v13/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v30/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.number\")"
                  },
                  {
                    "alias": "volumeNumber",
                    "args": (v16/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v30/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"volume.id\")"
                  },
                  {
                    "alias": "startPage",
                    "args": (v17/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v31/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.fpage\")"
                  },
                  {
                    "alias": "endPage",
                    "args": (v20/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v31/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.lpage\")"
                  },
                  {
                    "alias": "institution",
                    "args": (v21/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v30/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"degree.grantor\")"
                  },
                  {
                    "alias": "journal",
                    "args": (v22/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v9/*: any*/),
                      (v23/*: any*/),
                      (v29/*: any*/)
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                  },
                  {
                    "alias": "volume",
                    "args": (v24/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": (v32/*: any*/),
                    "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                  },
                  {
                    "alias": "issue",
                    "args": (v27/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": (v32/*: any*/),
                    "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
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
    "cacheID": "96b8646b59f9417b32f701e1028ded0a",
    "id": null,
    "metadata": {},
    "name": "getStaticGoogleScholarDataQuery",
    "operationKind": "query",
    "text": "query getStaticGoogleScholarDataQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    ...getStaticGoogleScholarDataFragment\n    id\n  }\n}\n\nfragment getStaticGoogleScholarDataFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    title\n    schemaDefinition {\n      identifier\n      id\n    }\n    published {\n      precision\n      value\n    }\n    pdf: schemaProperty(fullPath: \"pdf_version\") {\n      __typename\n      ... on AssetProperty {\n        asset {\n          __typename\n          ... on AssetPDF {\n            downloadUrl\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n      }\n    }\n    community {\n      title\n      id\n    }\n    contributions {\n      nodes {\n        role\n        contributor {\n          __typename\n          ... on PersonContributor {\n            __typename\n            familyName\n            givenName\n          }\n          ... on OrganizationContributor {\n            __typename\n            legalName\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n    issueNumber: schemaProperty(fullPath: \"issue.number\") {\n      __typename\n      ... on StringProperty {\n        value: content\n      }\n    }\n    volumeNumber: schemaProperty(fullPath: \"volume.id\") {\n      __typename\n      ... on StringProperty {\n        value: content\n      }\n    }\n    startPage: schemaProperty(fullPath: \"issue.fpage\") {\n      __typename\n      ... on IntegerProperty {\n        value: integerValue\n      }\n    }\n    endPage: schemaProperty(fullPath: \"issue.lpage\") {\n      __typename\n      ... on IntegerProperty {\n        value: integerValue\n      }\n    }\n    institution: schemaProperty(fullPath: \"degree.grantor\") {\n      __typename\n      ... on StringProperty {\n        value: content\n      }\n    }\n    journal: ancestorOfType(schema: \"nglp:journal\") {\n      __typename\n      ... on Collection {\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n      __typename\n      ... on Collection {\n        number: schemaProperty(fullPath: \"number\") {\n          __typename\n          ... on StringProperty {\n            value: content\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n      __typename\n      ... on Collection {\n        number: schemaProperty(fullPath: \"number\") {\n          __typename\n          ... on StringProperty {\n            value: content\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "eb812ce50715907e7ea5bb602b70b463";

export default node;
