/**
 * @generated SignedSource<<4f072a4df77a98531846034c19280ec7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoleEditAccessDrawerQuery$variables = {
  onCollection: boolean;
  onCommunity: boolean;
  onItem: boolean;
  slug: string;
  userSlug: string;
};
export type RoleEditAccessDrawerQuery$data = {
  readonly collection?: {
    readonly id: string;
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"RoleEditAccessFormFragment">;
  } | null | undefined;
  readonly community?: {
    readonly id: string;
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"RoleEditAccessFormFragment">;
  } | null | undefined;
  readonly item?: {
    readonly id: string;
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"RoleEditAccessFormFragment">;
  } | null | undefined;
  readonly user: {
    readonly id: string;
    readonly name: string | null | undefined;
  } | null | undefined;
};
export type RoleEditAccessDrawerQuery = {
  response: RoleEditAccessDrawerQuery$data;
  variables: RoleEditAccessDrawerQuery$variables;
};

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
v5 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v8 = [
  (v6/*: any*/),
  (v7/*: any*/),
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "RoleEditAccessFormFragment"
  }
],
v9 = [
  (v6/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v10 = {
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
  "selections": (v9/*: any*/),
  "storageKey": null
},
v11 = [
  (v6/*: any*/),
  (v7/*: any*/),
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
        "selections": (v9/*: any*/),
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
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RoleEditAccessDrawerQuery",
    "selections": [
      {
        "condition": "onCommunity",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v5/*: any*/),
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
            "args": (v5/*: any*/),
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
            "args": (v5/*: any*/),
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": (v8/*: any*/),
            "storageKey": null
          }
        ]
      },
      (v10/*: any*/)
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
      {
        "condition": "onCommunity",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": (v11/*: any*/),
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
            "args": (v5/*: any*/),
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": (v11/*: any*/),
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
            "args": (v5/*: any*/),
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": null
          }
        ]
      },
      (v10/*: any*/)
    ]
  },
  "params": {
    "cacheID": "3e715728c4e7e152e883cee6c9b56e32",
    "id": null,
    "metadata": {},
    "name": "RoleEditAccessDrawerQuery",
    "operationKind": "query",
    "text": "query RoleEditAccessDrawerQuery(\n  $slug: Slug!\n  $userSlug: Slug!\n  $onCommunity: Boolean!\n  $onCollection: Boolean!\n  $onItem: Boolean!\n) {\n  community(slug: $slug) @include(if: $onCommunity) {\n    id\n    title\n    ...RoleEditAccessFormFragment\n  }\n  collection(slug: $slug) @include(if: $onCollection) {\n    id\n    title\n    ...RoleEditAccessFormFragment\n  }\n  item(slug: $slug) @include(if: $onItem) {\n    id\n    title\n    ...RoleEditAccessFormFragment\n  }\n  user(slug: $userSlug) {\n    id\n    name\n  }\n}\n\nfragment RoleEditAccessFormFragment on Entity {\n  __isEntity: __typename\n  ...RoleSelectFragment\n}\n\nfragment RoleSelectFragment on Entity {\n  __isEntity: __typename\n  assignableRoles {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "a10d821a96b78929dedffbbadb896df2";

export default node;
