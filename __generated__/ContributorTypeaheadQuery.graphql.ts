/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ContributorTypeaheadQueryVariables = {};
export type ContributorTypeaheadQueryResponse = {
    readonly contributors: {
        readonly nodes: ReadonlyArray<{
            readonly __typename: "OrganizationContributor";
            readonly id: string;
            readonly legalName: string | null;
        } | {
            readonly __typename: "PersonContributor";
            readonly id: string;
            readonly givenName: string | null;
            readonly familyName: string | null;
        } | {
            /*This will never be '%other', but we need some
            value in case none of the concrete values match.*/
            readonly __typename: "%other";
        }>;
    };
};
export type ContributorTypeaheadQuery = {
    readonly response: ContributorTypeaheadQueryResponse;
    readonly variables: ContributorTypeaheadQueryVariables;
};



/*
query ContributorTypeaheadQuery {
  contributors {
    nodes {
      __typename
      ... on OrganizationContributor {
        id
        legalName
      }
      ... on PersonContributor {
        id
        givenName
        familyName
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "kind": "InlineFragment",
  "selections": [
    (v1/*: any*/),
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
v3 = {
  "kind": "InlineFragment",
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "givenName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "familyName",
      "storageKey": null
    }
  ],
  "type": "PersonContributor",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ContributorTypeaheadQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
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
              (v0/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ContributorTypeaheadQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
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
              (v0/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v1/*: any*/)
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
    "cacheID": "18a924151418b6df5fcabb4d50eb6fd5",
    "id": null,
    "metadata": {},
    "name": "ContributorTypeaheadQuery",
    "operationKind": "query",
    "text": "query ContributorTypeaheadQuery {\n  contributors {\n    nodes {\n      __typename\n      ... on OrganizationContributor {\n        id\n        legalName\n      }\n      ... on PersonContributor {\n        id\n        givenName\n        familyName\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '595dd3134c4e9e952b7b347cf36984de';
export default node;
