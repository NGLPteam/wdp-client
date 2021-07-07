/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SimpleOrder = "OLDEST" | "RECENT" | "%future added value";
export type CollectionListQueryVariables = {
    order: SimpleOrder;
    page: number;
};
export type CollectionListQueryResponse = {
    readonly viewer: {
        readonly collections: {
            readonly nodes: ReadonlyArray<{
                readonly __typename: string;
                readonly id: string;
                readonly identifier: string;
                readonly createdAt: unknown;
                readonly updatedAt: unknown;
                readonly title: string | null;
                readonly slug: unknown;
                readonly allowedActions: ReadonlyArray<string>;
                readonly hierarchicalDepth: number;
            } | null> | null;
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
    } | null;
};
export type CollectionListQuery = {
    readonly response: CollectionListQueryResponse;
    readonly variables: CollectionListQueryVariables;
};



/*
query CollectionListQuery(
  $order: SimpleOrder!
  $page: Int!
) {
  viewer {
    collections(access: READ_ONLY, order: $order, page: $page, perPage: 10) {
      nodes {
        __typename
        id
        identifier
        createdAt
        updatedAt
        title
        slug
        allowedActions
        hierarchicalDepth
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
      "kind": "Literal",
      "name": "access",
      "value": "READ_ONLY"
    },
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
      "value": 10
    }
  ],
  "concreteType": "CollectionConnection",
  "kind": "LinkedField",
  "name": "collections",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Collection",
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
          "name": "createdAt",
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
          "kind": "ScalarField",
          "name": "hierarchicalDepth",
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
    "name": "CollectionListQuery",
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
    "name": "CollectionListQuery",
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
    "cacheID": "e0be14342417584dd086dc493056e36e",
    "id": null,
    "metadata": {},
    "name": "CollectionListQuery",
    "operationKind": "query",
    "text": "query CollectionListQuery(\n  $order: SimpleOrder!\n  $page: Int!\n) {\n  viewer {\n    collections(access: READ_ONLY, order: $order, page: $page, perPage: 10) {\n      nodes {\n        __typename\n        id\n        identifier\n        createdAt\n        updatedAt\n        title\n        slug\n        allowedActions\n        hierarchicalDepth\n      }\n      pageInfo {\n        page\n        perPage\n        pageCount\n        hasNextPage\n        hasPreviousPage\n        totalCount\n        totalUnfilteredCount\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '65cc2becbab91510af0d58494e74be8f';
export default node;
