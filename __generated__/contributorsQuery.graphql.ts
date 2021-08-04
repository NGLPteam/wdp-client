/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SimpleOrder = "OLDEST" | "RECENT" | "%future added value";
export type contributorsQueryVariables = {
    order: SimpleOrder;
    page: number;
};
export type contributorsQueryResponse = {
    readonly contributors: {
        readonly nodes: ReadonlyArray<{
            readonly __typename: "OrganizationContributor";
            readonly slug: string;
            readonly name: string | null;
            readonly createdAt: string;
            readonly updatedAt: string;
        } | {
            readonly __typename: "PersonContributor";
            readonly slug: string;
            readonly firstName: string | null;
            readonly lastName: string | null;
            readonly createdAt: string;
            readonly updatedAt: string;
        } | {
            /*This will never be '%other', but we need some
            value in case none of the concrete values match.*/
            readonly __typename: "%other";
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
export type contributorsQuery = {
    readonly response: contributorsQueryResponse;
    readonly variables: contributorsQueryVariables;
};



/*
query contributorsQuery(
  $order: SimpleOrder!
  $page: Int!
) {
  contributors(order: $order, page: $page, perPage: 20) {
    nodes {
      __typename
      ... on OrganizationContributor {
        slug
        name: legalName
        createdAt
        updatedAt
      }
      ... on PersonContributor {
        slug
        firstName: givenName
        lastName: familyName
        createdAt
        updatedAt
      }
      ... on Node {
        __isNode: __typename
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
    "value": 20
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
  "name": "createdAt",
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
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/),
    {
      "alias": "name",
      "args": null,
      "kind": "ScalarField",
      "name": "legalName",
      "storageKey": null
    },
    (v4/*: any*/),
    (v5/*: any*/)
  ],
  "type": "OrganizationContributor",
  "abstractKey": null
},
v7 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/),
    {
      "alias": "firstName",
      "args": null,
      "kind": "ScalarField",
      "name": "givenName",
      "storageKey": null
    },
    {
      "alias": "lastName",
      "args": null,
      "kind": "ScalarField",
      "name": "familyName",
      "storageKey": null
    },
    (v4/*: any*/),
    (v5/*: any*/)
  ],
  "type": "PersonContributor",
  "abstractKey": null
},
v8 = {
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
    "name": "contributorsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AnyContributorConnection",
        "kind": "LinkedField",
        "name": "contributors",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v8/*: any*/)
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
    "name": "contributorsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AnyContributorConnection",
        "kind": "LinkedField",
        "name": "contributors",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "type": "Node",
                "abstractKey": "__isNode"
              }
            ],
            "storageKey": null
          },
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "456a9c0cd35b8c6803f303eec2c63076",
    "id": null,
    "metadata": {},
    "name": "contributorsQuery",
    "operationKind": "query",
    "text": "query contributorsQuery(\n  $order: SimpleOrder!\n  $page: Int!\n) {\n  contributors(order: $order, page: $page, perPage: 20) {\n    nodes {\n      __typename\n      ... on OrganizationContributor {\n        slug\n        name: legalName\n        createdAt\n        updatedAt\n      }\n      ... on PersonContributor {\n        slug\n        firstName: givenName\n        lastName: familyName\n        createdAt\n        updatedAt\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    pageInfo {\n      page\n      perPage\n      pageCount\n      hasNextPage\n      hasPreviousPage\n      totalCount\n      totalUnfilteredCount\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '445852d78d860ae7cbee9fb1b497379a';
export default node;
