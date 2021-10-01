/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionAddAccessDrawerQueryVariables = {
    slug: string;
};
export type CollectionAddAccessDrawerQueryResponse = {
    readonly collection: {
        readonly id: string;
        readonly title: string | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"RoleGrantAccessFormFragment">;
};
export type CollectionAddAccessDrawerQuery = {
    readonly response: CollectionAddAccessDrawerQueryResponse;
    readonly variables: CollectionAddAccessDrawerQueryVariables;
};



/*
query CollectionAddAccessDrawerQuery(
  $slug: Slug!
) {
  collection(slug: $slug) {
    id
    title
  }
  ...RoleGrantAccessFormFragment
}

fragment RoleGrantAccessFormFragment on Query {
  ...UserTypeaheadFragment
  ...RoleSelectFragment
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

fragment UserTypeaheadFragment on Query {
  users {
    edges {
      node {
        id
        name
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
  "concreteType": "Collection",
  "kind": "LinkedField",
  "name": "collection",
  "plural": false,
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
},
v3 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionAddAccessDrawerQuery",
    "selections": [
      (v2/*: any*/),
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RoleGrantAccessFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CollectionAddAccessDrawerQuery",
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "UserConnection",
        "kind": "LinkedField",
        "name": "users",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          }
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
                "selections": (v3/*: any*/),
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
    "cacheID": "08711e39e13a69c0ead588d65b55441e",
    "id": null,
    "metadata": {},
    "name": "CollectionAddAccessDrawerQuery",
    "operationKind": "query",
    "text": "query CollectionAddAccessDrawerQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    id\n    title\n  }\n  ...RoleGrantAccessFormFragment\n}\n\nfragment RoleGrantAccessFormFragment on Query {\n  ...UserTypeaheadFragment\n  ...RoleSelectFragment\n}\n\nfragment RoleSelectFragment on Query {\n  roles {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment UserTypeaheadFragment on Query {\n  users {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f34858eaeb1239d6fa4c702b1e383acd';
export default node;
