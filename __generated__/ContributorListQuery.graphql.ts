/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SimpleOrder = "OLDEST" | "RECENT" | "%future added value";
export type ContributorListQueryVariables = {
    order: SimpleOrder;
};
export type ContributorListQueryResponse = {
    readonly contributors: {
        readonly nodes: ReadonlyArray<({
            readonly __typename: "OrganizationContributor";
            readonly name: string | null;
            readonly slug: unknown;
        } | {
            readonly __typename: "PersonContributor";
            readonly firstName: string | null;
            readonly lastName: string | null;
            readonly slug: unknown;
        } | {
            /*This will never be '%other', but we need some
            value in case none of the concrete values match.*/
            readonly __typename: "%other";
        }) | null> | null;
    };
};
export type ContributorListQuery = {
    readonly response: ContributorListQueryResponse;
    readonly variables: ContributorListQueryVariables;
};



/*
query ContributorListQuery(
  $order: SimpleOrder!
) {
  contributors(order: $order) {
    nodes {
      __typename
      ... on OrganizationContributor {
        name: legalName
        slug
      }
      ... on PersonContributor {
        firstName: givenName
        lastName: familyName
        slug
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
    "name": "order"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "order",
    "variableName": "order"
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
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": "name",
      "args": null,
      "kind": "ScalarField",
      "name": "legalName",
      "storageKey": null
    },
    (v3/*: any*/)
  ],
  "type": "OrganizationContributor",
  "abstractKey": null
},
v5 = {
  "kind": "InlineFragment",
  "selections": [
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
    (v3/*: any*/)
  ],
  "type": "PersonContributor",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContributorListQuery",
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
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
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
    "name": "ContributorListQuery",
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
              (v4/*: any*/),
              (v5/*: any*/),
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0efad274acb7a8b8f8d7aa39911f5782",
    "id": null,
    "metadata": {},
    "name": "ContributorListQuery",
    "operationKind": "query",
    "text": "query ContributorListQuery(\n  $order: SimpleOrder!\n) {\n  contributors(order: $order) {\n    nodes {\n      __typename\n      ... on OrganizationContributor {\n        name: legalName\n        slug\n      }\n      ... on PersonContributor {\n        firstName: givenName\n        lastName: familyName\n        slug\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ef5fcd30f227977c9ad30b17c48d4197';
export default node;
