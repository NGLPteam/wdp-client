/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SimpleOrder = "OLDEST" | "RECENT" | "%future added value";
export type CommunityListQueryVariables = {
    order: SimpleOrder;
    page: number;
};
export type CommunityListQueryResponse = {
    readonly communities: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly key: unknown;
                readonly slug: unknown;
                readonly name: string;
                readonly updatedAt: unknown;
            } | null;
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
};
export type CommunityListQuery = {
    readonly response: CommunityListQueryResponse;
    readonly variables: CommunityListQueryVariables;
};



/*
query CommunityListQuery(
  $order: SimpleOrder!
  $page: Int!
) {
  communities(order: $order, page: $page, perPage: 10) {
    edges {
      node {
        key: slug
        slug
        name
        updatedAt
        id
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
v1 = [
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
v2 = {
  "alias": "key",
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v6 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommunityListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CommunityEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Community",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
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
    "name": "CommunityListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CommunityEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Community",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "150783a38f2fe0356c171c9bc9041292",
    "id": null,
    "metadata": {},
    "name": "CommunityListQuery",
    "operationKind": "query",
    "text": "query CommunityListQuery(\n  $order: SimpleOrder!\n  $page: Int!\n) {\n  communities(order: $order, page: $page, perPage: 10) {\n    edges {\n      node {\n        key: slug\n        slug\n        name\n        updatedAt\n        id\n      }\n    }\n    pageInfo {\n      page\n      perPage\n      pageCount\n      hasNextPage\n      hasPreviousPage\n      totalCount\n      totalUnfilteredCount\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0ded7978908f2de20473876583d681da';
export default node;
