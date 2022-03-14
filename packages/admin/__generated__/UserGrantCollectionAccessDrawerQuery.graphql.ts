/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserGrantCollectionAccessDrawerQueryVariables = {
    slug: string;
};
export type UserGrantCollectionAccessDrawerQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly name: string | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"UserGrantCollectionAccessFormFragment">;
};
export type UserGrantCollectionAccessDrawerQuery = {
    readonly response: UserGrantCollectionAccessDrawerQueryResponse;
    readonly variables: UserGrantCollectionAccessDrawerQueryVariables;
};



/*
query UserGrantCollectionAccessDrawerQuery(
  $slug: Slug!
) {
  user(slug: $slug) {
    id
    name
  }
  ...UserGrantCollectionAccessFormFragment
}

fragment CollectionTypeaheadFragment on Query {
  viewer {
    collections {
      nodes {
        id
        title
        slug
      }
    }
    id
  }
}

fragment UserGrantCollectionAccessFormFragment on Query {
  ...CollectionTypeaheadFragment
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
      "name": "slug",
      "variableName": "slug"
    }
  ],
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
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
    "name": "UserGrantCollectionAccessDrawerQuery",
    "selections": [
      (v2/*: any*/),
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UserGrantCollectionAccessFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserGrantCollectionAccessDrawerQuery",
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
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
                  (v1/*: any*/),
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
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2a13ee767d81e17a0cbc90583c669d8d",
    "id": null,
    "metadata": {},
    "name": "UserGrantCollectionAccessDrawerQuery",
    "operationKind": "query",
    "text": "query UserGrantCollectionAccessDrawerQuery(\n  $slug: Slug!\n) {\n  user(slug: $slug) {\n    id\n    name\n  }\n  ...UserGrantCollectionAccessFormFragment\n}\n\nfragment CollectionTypeaheadFragment on Query {\n  viewer {\n    collections {\n      nodes {\n        id\n        title\n        slug\n      }\n    }\n    id\n  }\n}\n\nfragment UserGrantCollectionAccessFormFragment on Query {\n  ...CollectionTypeaheadFragment\n}\n"
  }
};
})();
(node as any).hash = '8aea583ad44a9a8de8e492f1b905e00a';
export default node;
