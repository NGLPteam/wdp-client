/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type getStaticGoogleScholarDataQueryVariables = {
    slug: string;
};
export type getStaticGoogleScholarDataQueryResponse = {
    readonly item: {
        readonly " $fragmentRefs": FragmentRefs<"getStaticGoogleScholarDataFragment">;
    } | null;
};
export type getStaticGoogleScholarDataQuery = {
    readonly response: getStaticGoogleScholarDataQueryResponse;
    readonly variables: getStaticGoogleScholarDataQueryVariables;
};



/*
query getStaticGoogleScholarDataQuery(
  $slug: Slug!
) {
  item(slug: $slug) {
    ...getStaticGoogleScholarDataFragment
    id
  }
}

fragment getStaticGoogleScholarDataFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Item {
    issn
    title
    schemaDefinition {
      identifier
      id
    }
    published {
      precision
      value
    }
    pdf: schemaProperty(fullPath: "pdf_version") {
      __typename
      ... on AssetProperty {
        asset {
          __typename
          ... on AssetPDF {
            downloadUrl
          }
          ... on Node {
            __isNode: __typename
            id
          }
        }
      }
    }
    community {
      title
      id
    }
    contributions {
      nodes {
        role
        contributor {
          __typename
          ... on PersonContributor {
            __typename
            familyName
            givenName
          }
          ... on OrganizationContributor {
            __typename
            legalName
          }
          ... on Node {
            __isNode: __typename
            id
          }
        }
        id
      }
    }
    issueNumber: schemaProperty(fullPath: "issue.number") {
      __typename
      ... on StringProperty {
        value: content
      }
    }
    volumeNumber: schemaProperty(fullPath: "volume.id") {
      __typename
      ... on StringProperty {
        value: content
      }
    }
    startPage: schemaProperty(fullPath: "issue.fpage") {
      __typename
      ... on IntegerProperty {
        value: integerValue
      }
    }
    endPage: schemaProperty(fullPath: "issue.lpage") {
      __typename
      ... on IntegerProperty {
        value: integerValue
      }
    }
    institution: schemaProperty(fullPath: "degree.grantor") {
      __typename
      ... on StringProperty {
        value: content
      }
    }
    journal: ancestorOfType(schema: "nglp:journal") {
      __typename
      ... on Collection {
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    volume: ancestorOfType(schema: "nglp:journal_volume") {
      __typename
      ... on Collection {
        number: schemaProperty(fullPath: "number") {
          __typename
          ... on StringProperty {
            value: content
          }
        }
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    issue: ancestorOfType(schema: "nglp:journal_issue") {
      __typename
      ... on Collection {
        number: schemaProperty(fullPath: "number") {
          __typename
          ... on StringProperty {
            value: content
          }
        }
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}
*/

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
  "name": "issn",
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
  "name": "identifier",
  "storageKey": null
},
v5 = {
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
v6 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "pdf_version"
  }
],
v7 = {
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
v8 = [
  (v3/*: any*/)
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
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
  "name": "familyName",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "legalName",
  "storageKey": null
},
v14 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "issue.number"
  }
],
v15 = {
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
v16 = [
  (v15/*: any*/)
],
v17 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "volume.id"
  }
],
v18 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "issue.fpage"
  }
],
v19 = {
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
v20 = [
  (v19/*: any*/)
],
v21 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "issue.lpage"
  }
],
v22 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "degree.grantor"
  }
],
v23 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal"
  }
],
v24 = {
  "kind": "InlineFragment",
  "selections": (v8/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v25 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal_volume"
  }
],
v26 = [
  {
    "kind": "Literal",
    "name": "fullPath",
    "value": "number"
  }
],
v27 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": "number",
        "args": (v26/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "schemaProperty",
        "plural": false,
        "selections": (v16/*: any*/),
        "storageKey": "schemaProperty(fullPath:\"number\")"
      }
    ],
    "type": "Collection",
    "abstractKey": null
  }
],
v28 = [
  {
    "kind": "Literal",
    "name": "schema",
    "value": "nglp:journal_issue"
  }
],
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v30 = {
  "kind": "InlineFragment",
  "selections": [
    (v29/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v31 = [
  (v10/*: any*/),
  (v15/*: any*/)
],
v32 = [
  (v10/*: any*/),
  (v19/*: any*/)
],
v33 = [
  (v10/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": "number",
        "args": (v26/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "schemaProperty",
        "plural": false,
        "selections": (v31/*: any*/),
        "storageKey": "schemaProperty(fullPath:\"number\")"
      }
    ],
    "type": "Collection",
    "abstractKey": null
  },
  (v30/*: any*/)
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
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SchemaDefinition",
                        "kind": "LinkedField",
                        "name": "schemaDefinition",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v5/*: any*/),
                      {
                        "alias": "pdf",
                        "args": (v6/*: any*/),
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
                                  (v7/*: any*/)
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
                        "selections": (v8/*: any*/),
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
                              (v9/*: any*/),
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
                                      (v10/*: any*/),
                                      (v11/*: any*/),
                                      (v12/*: any*/)
                                    ],
                                    "type": "PersonContributor",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v10/*: any*/),
                                      (v13/*: any*/)
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
                        "args": (v14/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": (v16/*: any*/),
                        "storageKey": "schemaProperty(fullPath:\"issue.number\")"
                      },
                      {
                        "alias": "volumeNumber",
                        "args": (v17/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": (v16/*: any*/),
                        "storageKey": "schemaProperty(fullPath:\"volume.id\")"
                      },
                      {
                        "alias": "startPage",
                        "args": (v18/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": (v20/*: any*/),
                        "storageKey": "schemaProperty(fullPath:\"issue.fpage\")"
                      },
                      {
                        "alias": "endPage",
                        "args": (v21/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": (v20/*: any*/),
                        "storageKey": "schemaProperty(fullPath:\"issue.lpage\")"
                      },
                      {
                        "alias": "institution",
                        "args": (v22/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "schemaProperty",
                        "plural": false,
                        "selections": (v16/*: any*/),
                        "storageKey": "schemaProperty(fullPath:\"degree.grantor\")"
                      },
                      {
                        "alias": "journal",
                        "args": (v23/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "ancestorOfType",
                        "plural": false,
                        "selections": [
                          (v24/*: any*/)
                        ],
                        "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                      },
                      {
                        "alias": "volume",
                        "args": (v25/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "ancestorOfType",
                        "plural": false,
                        "selections": (v27/*: any*/),
                        "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                      },
                      {
                        "alias": "issue",
                        "args": (v28/*: any*/),
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "ancestorOfType",
                        "plural": false,
                        "selections": (v27/*: any*/),
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
          (v29/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SchemaDefinition",
                    "kind": "LinkedField",
                    "name": "schemaDefinition",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v29/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/),
                  {
                    "alias": "pdf",
                    "args": (v6/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
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
                              (v10/*: any*/),
                              (v7/*: any*/),
                              (v30/*: any*/)
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
                      (v3/*: any*/),
                      (v29/*: any*/)
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
                          (v9/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "contributor",
                            "plural": false,
                            "selections": [
                              (v10/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v11/*: any*/),
                                  (v12/*: any*/)
                                ],
                                "type": "PersonContributor",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v13/*: any*/)
                                ],
                                "type": "OrganizationContributor",
                                "abstractKey": null
                              },
                              (v30/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v29/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": "issueNumber",
                    "args": (v14/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v31/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.number\")"
                  },
                  {
                    "alias": "volumeNumber",
                    "args": (v17/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v31/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"volume.id\")"
                  },
                  {
                    "alias": "startPage",
                    "args": (v18/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v32/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.fpage\")"
                  },
                  {
                    "alias": "endPage",
                    "args": (v21/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v32/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"issue.lpage\")"
                  },
                  {
                    "alias": "institution",
                    "args": (v22/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "schemaProperty",
                    "plural": false,
                    "selections": (v31/*: any*/),
                    "storageKey": "schemaProperty(fullPath:\"degree.grantor\")"
                  },
                  {
                    "alias": "journal",
                    "args": (v23/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      (v24/*: any*/),
                      (v30/*: any*/)
                    ],
                    "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
                  },
                  {
                    "alias": "volume",
                    "args": (v25/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": (v33/*: any*/),
                    "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                  },
                  {
                    "alias": "issue",
                    "args": (v28/*: any*/),
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "ancestorOfType",
                    "plural": false,
                    "selections": (v33/*: any*/),
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
    "cacheID": "a233717b315337f9dd3294c6fce97fbf",
    "id": null,
    "metadata": {},
    "name": "getStaticGoogleScholarDataQuery",
    "operationKind": "query",
    "text": "query getStaticGoogleScholarDataQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    ...getStaticGoogleScholarDataFragment\n    id\n  }\n}\n\nfragment getStaticGoogleScholarDataFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    issn\n    title\n    schemaDefinition {\n      identifier\n      id\n    }\n    published {\n      precision\n      value\n    }\n    pdf: schemaProperty(fullPath: \"pdf_version\") {\n      __typename\n      ... on AssetProperty {\n        asset {\n          __typename\n          ... on AssetPDF {\n            downloadUrl\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n      }\n    }\n    community {\n      title\n      id\n    }\n    contributions {\n      nodes {\n        role\n        contributor {\n          __typename\n          ... on PersonContributor {\n            __typename\n            familyName\n            givenName\n          }\n          ... on OrganizationContributor {\n            __typename\n            legalName\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        id\n      }\n    }\n    issueNumber: schemaProperty(fullPath: \"issue.number\") {\n      __typename\n      ... on StringProperty {\n        value: content\n      }\n    }\n    volumeNumber: schemaProperty(fullPath: \"volume.id\") {\n      __typename\n      ... on StringProperty {\n        value: content\n      }\n    }\n    startPage: schemaProperty(fullPath: \"issue.fpage\") {\n      __typename\n      ... on IntegerProperty {\n        value: integerValue\n      }\n    }\n    endPage: schemaProperty(fullPath: \"issue.lpage\") {\n      __typename\n      ... on IntegerProperty {\n        value: integerValue\n      }\n    }\n    institution: schemaProperty(fullPath: \"degree.grantor\") {\n      __typename\n      ... on StringProperty {\n        value: content\n      }\n    }\n    journal: ancestorOfType(schema: \"nglp:journal\") {\n      __typename\n      ... on Collection {\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    volume: ancestorOfType(schema: \"nglp:journal_volume\") {\n      __typename\n      ... on Collection {\n        number: schemaProperty(fullPath: \"number\") {\n          __typename\n          ... on StringProperty {\n            value: content\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    issue: ancestorOfType(schema: \"nglp:journal_issue\") {\n      __typename\n      ... on Collection {\n        number: schemaProperty(fullPath: \"number\") {\n          __typename\n          ... on StringProperty {\n            value: content\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'eb812ce50715907e7ea5bb602b70b463';
export default node;
