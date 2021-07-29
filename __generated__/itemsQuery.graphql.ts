/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SimpleOrder = "OLDEST" | "RECENT" | "%future added value";
export type itemsQueryVariables = {
    order: SimpleOrder;
    page: number;
};
export type itemsQueryResponse = {
    readonly viewer: {
        readonly items: {
            readonly nodes: ReadonlyArray<{
                readonly __typename: string;
                readonly id: string;
                readonly identifier: string;
                readonly updatedAt: string;
                readonly createdAt: string;
                readonly title: string | null;
                readonly slug: string;
                readonly allowedActions: ReadonlyArray<string>;
                readonly thumbnail: {
                    readonly image: {
                        readonly png: {
                            readonly url: string;
                            readonly height: number;
                            readonly width: number;
                            readonly alt: string;
                        } | null;
                    };
                } | null;
            }>;
            readonly pageInfo: {
                readonly page: number | null;
                readonly perPage: number | null;
                readonly pageCount: number | null;
                readonly hasNextPage: boolean;
                readonly hasPreviousPage: boolean;
                readonly totalCount: number;
                readonly totalUnfilteredCount: number;
            };
        };
    };
};
export type itemsQuery = {
    readonly response: itemsQueryResponse;
    readonly variables: itemsQueryVariables;
};



/*
query itemsQuery(
  $order: SimpleOrder!
  $page: Int!
) {
  viewer {
    items(order: $order, page: $page, perPage: 20) {
      nodes {
        __typename
        id
        identifier
        updatedAt
        createdAt
        title
        slug
        allowedActions
        thumbnail {
          image: medium {
            png {
              url
              height
              width
              alt
            }
          }
        }
      }
      pageInfo {
        page
        perPage
        pageCount
        hasNextPage
        hasPreviousPage
        totalCount
        totalUnfilteredCount
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "order"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "order",
      "variableName": "order"
    },
    {
      "kind": "Variable",
      "name": "page",
      "variableName": "page"
    },
    {
      "kind": "Literal",
      "name": "perPage",
      "value": 20
    }
  ],
  "concreteType": "ItemConnection",
  "kind": "LinkedField",
  "name": "items",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "identifier",
          "storageKey": null
        },
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
          "kind": "ScalarField",
          "name": "createdAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "allowedActions",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AssetPreview",
          "kind": "LinkedField",
          "name": "thumbnail",
          "plural": false,
          "selections": [
            {
              "alias": "image",
              "args": null,
              "concreteType": "PreviewImageMap",
              "kind": "LinkedField",
              "name": "medium",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "PreviewImage",
                  "kind": "LinkedField",
                  "name": "png",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "url",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "height",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "width",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "alt",
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
    },
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
          "name": "page",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "perPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "pageCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasNextPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasPreviousPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalUnfilteredCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "itemsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
    "name": "itemsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9310e68446a455de65641408775750ac",
    "id": null,
    "metadata": {},
    "name": "itemsQuery",
    "operationKind": "query",
    "text": "query itemsQuery(\n  $order: SimpleOrder!\n  $page: Int!\n) {\n  viewer {\n    items(order: $order, page: $page, perPage: 20) {\n      nodes {\n        __typename\n        id\n        identifier\n        updatedAt\n        createdAt\n        title\n        slug\n        allowedActions\n        thumbnail {\n          image: medium {\n            png {\n              url\n              height\n              width\n              alt\n            }\n          }\n        }\n      }\n      pageInfo {\n        page\n        perPage\n        pageCount\n        hasNextPage\n        hasPreviousPage\n        totalCount\n        totalUnfilteredCount\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '6c54574781c2fd94e66b9a1e66a6d31a';
export default node;
