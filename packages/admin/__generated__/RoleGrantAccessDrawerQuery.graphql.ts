/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RoleGrantAccessDrawerQueryVariables = {
    slug: string;
    onCommunity: boolean;
    onCollection: boolean;
    onItem: boolean;
};
export type RoleGrantAccessDrawerQueryResponse = {
    readonly community?: {
        readonly id: string;
        readonly title: string;
        readonly " $fragmentRefs": FragmentRefs<"RoleGrantAccessFormRolesFragment">;
    } | null | undefined;
    readonly collection?: {
        readonly id: string;
        readonly title: string;
        readonly " $fragmentRefs": FragmentRefs<"RoleGrantAccessFormRolesFragment">;
    } | null | undefined;
    readonly item?: {
        readonly id: string;
        readonly title: string;
        readonly " $fragmentRefs": FragmentRefs<"RoleGrantAccessFormRolesFragment">;
    } | null | undefined;
};
export type RoleGrantAccessDrawerQuery = {
    readonly response: RoleGrantAccessDrawerQueryResponse;
    readonly variables: RoleGrantAccessDrawerQueryVariables;
};



/*
query RoleGrantAccessDrawerQuery(
  $slug: Slug!
  $onCommunity: Boolean!
  $onCollection: Boolean!
  $onItem: Boolean!
) {
  community(slug: $slug) @include(if: $onCommunity) {
    id
    title
    ...RoleGrantAccessFormRolesFragment
  }
  collection(slug: $slug) @include(if: $onCollection) {
    id
    title
    ...RoleGrantAccessFormRolesFragment
  }
  item(slug: $slug) @include(if: $onItem) {
    id
    title
    ...RoleGrantAccessFormRolesFragment
  }
}

fragment RoleGrantAccessFormRolesFragment on Entity {
  __isEntity: __typename
  ...RoleSelectFragment
}

fragment RoleSelectFragment on Entity {
  __isEntity: __typename
  assignableRoles {
    id
    name
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
v4 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v7 = [
  (v5/*: any*/),
  (v6/*: any*/),
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "RoleGrantAccessFormRolesFragment"
  }
],
v8 = [
  (v5/*: any*/),
  (v6/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Role",
        "kind": "LinkedField",
        "name": "assignableRoles",
        "plural": true,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Entity",
    "abstractKey": "__isEntity"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RoleGrantAccessDrawerQuery",
    "selections": [
      {
        "condition": "onCommunity",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          }
        ]
      },
      {
        "condition": "onCollection",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          }
        ]
      },
      {
        "condition": "onItem",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "RoleGrantAccessDrawerQuery",
    "selections": [
      {
        "condition": "onCommunity",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": (v8/*: any*/),
            "storageKey": null
          }
        ]
      },
      {
        "condition": "onCollection",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": (v8/*: any*/),
            "storageKey": null
          }
        ]
      },
      {
        "condition": "onItem",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": (v8/*: any*/),
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "c0a73e6824a0151be55d0352b7beefc2",
    "id": null,
    "metadata": {},
    "name": "RoleGrantAccessDrawerQuery",
    "operationKind": "query",
    "text": "query RoleGrantAccessDrawerQuery(\n  $slug: Slug!\n  $onCommunity: Boolean!\n  $onCollection: Boolean!\n  $onItem: Boolean!\n) {\n  community(slug: $slug) @include(if: $onCommunity) {\n    id\n    title\n    ...RoleGrantAccessFormRolesFragment\n  }\n  collection(slug: $slug) @include(if: $onCollection) {\n    id\n    title\n    ...RoleGrantAccessFormRolesFragment\n  }\n  item(slug: $slug) @include(if: $onItem) {\n    id\n    title\n    ...RoleGrantAccessFormRolesFragment\n  }\n}\n\nfragment RoleGrantAccessFormRolesFragment on Entity {\n  __isEntity: __typename\n  ...RoleSelectFragment\n}\n\nfragment RoleSelectFragment on Entity {\n  __isEntity: __typename\n  assignableRoles {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '3e30d586254cb02f19f0c838ae31f6c6';
export default node;
