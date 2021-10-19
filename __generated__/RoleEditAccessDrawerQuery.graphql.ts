/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoleEditAccessDrawerQueryVariables = {
    slug: string;
    userSlug: string;
    onCommunity: boolean;
    onCollection: boolean;
    onItem: boolean;
};
export type RoleEditAccessDrawerQueryResponse = {
    readonly community?: {
        readonly id: string;
        readonly title: string;
    } | null;
    readonly collection?: {
        readonly id: string;
        readonly title: string | null;
    } | null;
    readonly item?: {
        readonly id: string;
        readonly title: string | null;
    } | null;
    readonly user: {
        readonly id: string;
        readonly name: string | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"RoleEditAccessFormFragment">;
};
export type RoleEditAccessDrawerQuery = {
    readonly response: RoleEditAccessDrawerQueryResponse;
    readonly variables: RoleEditAccessDrawerQueryVariables;
};



/*
query RoleEditAccessDrawerQuery(
  $slug: Slug!
  $userSlug: Slug!
  $onCommunity: Boolean!
  $onCollection: Boolean!
  $onItem: Boolean!
) {
  community(slug: $slug) @include(if: $onCommunity) {
    id
    title
  }
  collection(slug: $slug) @include(if: $onCollection) {
    id
    title
  }
  item(slug: $slug) @include(if: $onItem) {
    id
    title
  }
  user(slug: $userSlug) {
    id
    name
  }
  ...RoleEditAccessFormFragment
}

fragment RoleEditAccessFormFragment on Query {
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
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "onCollection"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "onCommunity"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "onItem"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userSlug"
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  (v5/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v7 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "slug",
      "variableName": "userSlug"
    }
  ],
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
},
v8 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v9 = [
  (v5/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  }
],
v10 = {
  "condition": "onCommunity",
  "kind": "Condition",
  "passingValue": true,
  "selections": [
    {
      "alias": null,
      "args": (v8/*: any*/),
      "concreteType": "Community",
      "kind": "LinkedField",
      "name": "community",
      "plural": false,
      "selections": (v9/*: any*/),
      "storageKey": null
    }
  ]
},
v11 = {
  "condition": "onCollection",
  "kind": "Condition",
  "passingValue": true,
  "selections": [
    {
      "alias": null,
      "args": (v8/*: any*/),
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": (v9/*: any*/),
      "storageKey": null
    }
  ]
},
v12 = {
  "condition": "onItem",
  "kind": "Condition",
  "passingValue": true,
  "selections": [
    {
      "alias": null,
      "args": (v8/*: any*/),
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "item",
      "plural": false,
      "selections": (v9/*: any*/),
      "storageKey": null
    }
  ]
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RoleEditAccessDrawerQuery",
    "selections": [
      (v7/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/),
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RoleEditAccessFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v4/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "RoleEditAccessDrawerQuery",
    "selections": [
      (v7/*: any*/),
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
                "selections": (v6/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/)
    ]
  },
  "params": {
    "cacheID": "b09d71822d8a4d4332e024b26c10e36c",
    "id": null,
    "metadata": {},
    "name": "RoleEditAccessDrawerQuery",
    "operationKind": "query",
    "text": "query RoleEditAccessDrawerQuery(\n  $slug: Slug!\n  $userSlug: Slug!\n  $onCommunity: Boolean!\n  $onCollection: Boolean!\n  $onItem: Boolean!\n) {\n  community(slug: $slug) @include(if: $onCommunity) {\n    id\n    title\n  }\n  collection(slug: $slug) @include(if: $onCollection) {\n    id\n    title\n  }\n  item(slug: $slug) @include(if: $onItem) {\n    id\n    title\n  }\n  user(slug: $userSlug) {\n    id\n    name\n  }\n  ...RoleEditAccessFormFragment\n}\n\nfragment RoleEditAccessFormFragment on Query {\n  ...RoleSelectFragment\n}\n\nfragment RoleSelectFragment on Query {\n  roles {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '9f33fe7375f9684a25e03795ce404a88';
export default node;
