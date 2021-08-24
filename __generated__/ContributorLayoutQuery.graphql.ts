/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ContributorLayoutQueryVariables = {
    slug: string;
};
export type ContributorLayoutQueryResponse = {
    readonly contributor: ({
        readonly __typename: "OrganizationContributor";
        readonly slug: string;
        readonly name: string | null;
    } | {
        readonly __typename: "PersonContributor";
        readonly firstName: string | null;
        readonly lastName: string | null;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }) | null;
};
export type ContributorLayoutQuery = {
    readonly response: ContributorLayoutQueryResponse;
    readonly variables: ContributorLayoutQueryVariables;
};



/*
query ContributorLayoutQuery(
  $slug: Slug!
) {
  contributor(slug: $slug) {
    __typename
    ... on OrganizationContributor {
      slug
      name: legalName
    }
    ... on PersonContributor {
      firstName: givenName
      lastName: familyName
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
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": "name",
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
    "name": "ContributorLayoutQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "name": "ContributorLayoutQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "8af0dbb8d191179c350889b6ed15c8f0",
    "id": null,
    "metadata": {},
    "name": "ContributorLayoutQuery",
    "operationKind": "query",
    "text": "query ContributorLayoutQuery(\n  $slug: Slug!\n) {\n  contributor(slug: $slug) {\n    __typename\n    ... on OrganizationContributor {\n      slug\n      name: legalName\n    }\n    ... on PersonContributor {\n      firstName: givenName\n      lastName: familyName\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7816aa71d18662e4b39a3048fa27dfba';
export default node;
