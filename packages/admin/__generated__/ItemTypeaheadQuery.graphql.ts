/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ItemTypeaheadQueryVariables = {
    query: string;
};
export type ItemTypeaheadQueryResponse = {
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
export type ItemTypeaheadQuery = {
    readonly response: ItemTypeaheadQueryResponse;
    readonly variables: ItemTypeaheadQueryVariables;
};



/*
query ItemTypeaheadQuery(
  $query: String!
) {
  search(visibility: ALL) {
    results(prefix: $query, page: 1, perPage: 50, order: TITLE_ASCENDING, scope: ITEM) {
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
    "name": "scope",
    "value": "ITEM"
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
    "name": "ItemTypeaheadQuery",
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
    "name": "ItemTypeaheadQuery",
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
    "cacheID": "148f499b3eb03c999ac4b5faf2d4c3cd",
    "id": null,
    "metadata": {},
    "name": "ItemTypeaheadQuery",
    "operationKind": "query",
    "text": "query ItemTypeaheadQuery(\n  $query: String!\n) {\n  search(visibility: ALL) {\n    results(prefix: $query, page: 1, perPage: 50, order: TITLE_ASCENDING, scope: ITEM) {\n      edges {\n        node {\n          title\n          entity {\n            __typename\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e90c428fb9046e82dfb86e263638b5d9';
export default node;
