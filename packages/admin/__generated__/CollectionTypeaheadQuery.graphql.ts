/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CollectionTypeaheadQueryVariables = {
    query: string;
};
export type CollectionTypeaheadQueryResponse = {
    readonly search: {
        readonly results: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly title: string;
                    readonly entity: {
                        readonly id?: string | undefined;
                    };
                };
            }>;
        };
    };
};
export type CollectionTypeaheadQuery = {
    readonly response: CollectionTypeaheadQueryResponse;
    readonly variables: CollectionTypeaheadQueryVariables;
};



/*
query CollectionTypeaheadQuery(
  $query: String!
) {
  search(visibility: ALL) {
    results(prefix: $query, page: 1, perPage: 50, order: TITLE_ASCENDING, schema: ["default:collection", "nglp:journal", "nglp:journal_issue", "nglp:journal_volume", "nglp:series", "nglp:unit"]) {
      edges {
        node {
          title
          entity {
            __typename
            ... on Node {
              __isNode: __typename
              id
            }
          }
          id
        }
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
    "name": "query"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "visibility",
    "value": "ALL"
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "order",
    "value": "TITLE_ASCENDING"
  },
  {
    "kind": "Literal",
    "name": "page",
    "value": 1
  },
  {
    "kind": "Literal",
    "name": "perPage",
    "value": 50
  },
  {
    "kind": "Variable",
    "name": "prefix",
    "variableName": "query"
  },
  {
    "kind": "Literal",
    "name": "schema",
    "value": [
      "default:collection",
      "nglp:journal",
      "nglp:journal_issue",
      "nglp:journal_volume",
      "nglp:series",
      "nglp:unit"
    ]
  }
],
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
  "name": "id",
  "storageKey": null
},
v5 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionTypeaheadQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SearchScope",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "SearchResultConnection",
            "kind": "LinkedField",
            "name": "results",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SearchResultEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SearchResult",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "entity",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/)
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
        "storageKey": "search(visibility:\"ALL\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CollectionTypeaheadQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SearchScope",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "SearchResultConnection",
            "kind": "LinkedField",
            "name": "results",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SearchResultEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SearchResult",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "entity",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__typename",
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
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
        "storageKey": "search(visibility:\"ALL\")"
      }
    ]
  },
  "params": {
    "cacheID": "e796ccfe22c1145da650796b852d54ce",
    "id": null,
    "metadata": {},
    "name": "CollectionTypeaheadQuery",
    "operationKind": "query",
    "text": "query CollectionTypeaheadQuery(\n  $query: String!\n) {\n  search(visibility: ALL) {\n    results(prefix: $query, page: 1, perPage: 50, order: TITLE_ASCENDING, schema: [\"default:collection\", \"nglp:journal\", \"nglp:journal_issue\", \"nglp:journal_volume\", \"nglp:series\", \"nglp:unit\"]) {\n      edges {\n        node {\n          title\n          entity {\n            __typename\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '31028a42b177b33759d25d78cbba8473';
export default node;
