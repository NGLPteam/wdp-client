/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ContributorContributionCreateDrawerQueryVariables = {
    slug: string;
};
export type ContributorContributionCreateDrawerQueryResponse = {
    readonly contributor: {
        readonly id?: string | undefined;
        readonly legalName?: string | null | undefined;
        readonly givenName?: string | null | undefined;
        readonly familyName?: string | null | undefined;
    } | null;
};
export type ContributorContributionCreateDrawerQuery = {
    readonly response: ContributorContributionCreateDrawerQueryResponse;
    readonly variables: ContributorContributionCreateDrawerQueryVariables;
};



/*
query ContributorContributionCreateDrawerQuery(
  $slug: Slug!
) {
  contributor(slug: $slug) {
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/),
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
v4 = {
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContributorContributionCreateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "ContributorContributionCreateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/)
            ],
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "75cefddf012593aa1ae33df2632886b9",
    "id": null,
    "metadata": {},
    "name": "ContributorContributionCreateDrawerQuery",
    "operationKind": "query",
    "text": "query ContributorContributionCreateDrawerQuery(\n  $slug: Slug!\n) {\n  contributor(slug: $slug) {\n    __typename\n    ... on OrganizationContributor {\n      id\n      legalName\n    }\n    ... on PersonContributor {\n      id\n      givenName\n      familyName\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'dda415b6ee3fb1015d4040cbd32de8b1';
export default node;
