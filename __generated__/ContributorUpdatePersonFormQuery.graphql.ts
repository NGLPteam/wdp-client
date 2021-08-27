/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ContributorUpdatePersonFormQueryVariables = {
    slug: string;
};
export type ContributorUpdatePersonFormQueryResponse = {
    readonly contributor: ({
        readonly __typename: "PersonContributor";
        readonly id: string;
        readonly email: string | null;
        readonly givenName: string | null;
        readonly familyName: string | null;
        readonly suffix: string | null;
        readonly title: string | null;
        readonly prefix: string | null;
        readonly bio: string | null;
        readonly affiliation: string | null;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }) | null;
};
export type ContributorUpdatePersonFormQuery = {
    readonly response: ContributorUpdatePersonFormQueryResponse;
    readonly variables: ContributorUpdatePersonFormQueryVariables;
};



/*
query ContributorUpdatePersonFormQuery(
  $slug: Slug!
) {
  contributor(slug: $slug) {
    __typename
    ... on PersonContributor {
      id
      email
      givenName
      familyName
      suffix
      title
      prefix
      bio
      affiliation
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
  "name": "id",
  "storageKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "suffix",
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
      "name": "prefix",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "affiliation",
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
    "name": "ContributorUpdatePersonFormQuery",
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
    "name": "ContributorUpdatePersonFormQuery",
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
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/)
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
    "cacheID": "bcc48da952ef4cb4a85f1a65c5f82573",
    "id": null,
    "metadata": {},
    "name": "ContributorUpdatePersonFormQuery",
    "operationKind": "query",
    "text": "query ContributorUpdatePersonFormQuery(\n  $slug: Slug!\n) {\n  contributor(slug: $slug) {\n    __typename\n    ... on PersonContributor {\n      id\n      email\n      givenName\n      familyName\n      suffix\n      title\n      prefix\n      bio\n      affiliation\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '4604ad6206b735b236570ea63b24617d';
export default node;
