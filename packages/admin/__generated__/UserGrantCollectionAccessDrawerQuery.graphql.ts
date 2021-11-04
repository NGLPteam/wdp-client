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
      }
    }
    id
  }
}

fragment RoleSelectFragment on Query {
  roles {
    edges {
      node {
        id
        name
      }
    }
  }
}

fragment UserGrantCollectionAccessFormFragment on Query {
  ...CollectionTypeaheadFragment
  ...RoleSelectFragment
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
v2 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v3 = {
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
  "selections": (v2/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserGrantCollectionAccessDrawerQuery",
    "selections": [
      (v3/*: any*/),
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
      (v3/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "RoleConnection",
        "kind": "LinkedField",
        "name": "roles",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RoleEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Role",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
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
    "cacheID": "6c584cc35db9f0a5ba538f23c2f249e5",
    "id": null,
    "metadata": {},
    "name": "UserGrantCollectionAccessDrawerQuery",
    "operationKind": "query",
    "text": "query UserGrantCollectionAccessDrawerQuery(\n  $slug: Slug!\n) {\n  user(slug: $slug) {\n    id\n    name\n  }\n  ...UserGrantCollectionAccessFormFragment\n}\n\nfragment CollectionTypeaheadFragment on Query {\n  viewer {\n    collections {\n      nodes {\n        id\n        title\n      }\n    }\n    id\n  }\n}\n\nfragment RoleSelectFragment on Query {\n  roles {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment UserGrantCollectionAccessFormFragment on Query {\n  ...CollectionTypeaheadFragment\n  ...RoleSelectFragment\n}\n"
  }
};
})();
(node as any).hash = '8aea583ad44a9a8de8e492f1b905e00a';
export default node;
