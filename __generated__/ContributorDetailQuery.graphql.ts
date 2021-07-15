/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ContributorDetailQueryVariables = {
    slug: string;
};
export type ContributorDetailQueryResponse = {
    readonly contributor: {
        readonly __typename: string;
        readonly slug?: string;
        readonly name?: string | null;
        readonly createdAt?: string;
        readonly updatedAt?: string;
        readonly firstName?: string | null;
        readonly lastName?: string | null;
    } | null;
};
export type ContributorDetailQuery = {
    readonly response: ContributorDetailQueryResponse;
    readonly variables: ContributorDetailQueryVariables;
};



/*
query ContributorDetailQuery(
  $slug: Slug!
) {
  contributor(slug: $slug) {
    __typename
    ... on OrganizationContributor {
      name: legalName
      createdAt
      updatedAt
    }
    ... on PersonContributor {
      firstName: givenName
      lastName: familyName
      createdAt
      updatedAt
    }
    ... on Sluggable {
      __isSluggable: __typename
      slug
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v5 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": "name",
      "args": null,
      "kind": "ScalarField",
      "name": "legalName",
      "storageKey": null
    },
    (v3/*: any*/),
    (v4/*: any*/)
  ],
  "type": "OrganizationContributor",
  "abstractKey": null
},
v6 = {
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
    (v3/*: any*/),
    (v4/*: any*/)
  ],
  "type": "PersonContributor",
  "abstractKey": null
},
v7 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContributorDetailQuery",
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
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/)
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
    "name": "ContributorDetailQuery",
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
          (v5/*: any*/),
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
      }
    ]
  },
  "params": {
    "cacheID": "4cc829b87abbb79289a078623f8749af",
    "id": null,
    "metadata": {},
    "name": "ContributorDetailQuery",
    "operationKind": "query",
    "text": "query ContributorDetailQuery(\n  $slug: Slug!\n) {\n  contributor(slug: $slug) {\n    __typename\n    ... on OrganizationContributor {\n      name: legalName\n      createdAt\n      updatedAt\n    }\n    ... on PersonContributor {\n      firstName: givenName\n      lastName: familyName\n      createdAt\n      updatedAt\n    }\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '68d48bad16f93f510c65bb80706ca37f';
export default node;
