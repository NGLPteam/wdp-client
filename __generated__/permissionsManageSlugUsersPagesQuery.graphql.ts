/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type permissionsManageSlugUsersPagesQueryVariables = {
    userSlug: string;
};
export type permissionsManageSlugUsersPagesQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"UserLayoutFragment">;
    } | null;
};
export type permissionsManageSlugUsersPagesQuery = {
    readonly response: permissionsManageSlugUsersPagesQueryResponse;
    readonly variables: permissionsManageSlugUsersPagesQueryVariables;
};



/*
query permissionsManageSlugUsersPagesQuery(
  $userSlug: Slug!
) {
  user(slug: $userSlug) {
    ...UserLayoutFragment
    id
  }
}

fragment UserLayoutFragment on User {
  name
  email
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "userSlug"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "permissionsManageSlugUsersPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserLayoutFragment"
          }
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
    "name": "permissionsManageSlugUsersPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dba0b52e13da5ac19f3285ddf0bc11e2",
    "id": null,
    "metadata": {},
    "name": "permissionsManageSlugUsersPagesQuery",
    "operationKind": "query",
    "text": "query permissionsManageSlugUsersPagesQuery(\n  $userSlug: Slug!\n) {\n  user(slug: $userSlug) {\n    ...UserLayoutFragment\n    id\n  }\n}\n\nfragment UserLayoutFragment on User {\n  name\n  email\n}\n"
  }
};
})();
(node as any).hash = '532b7a3d2a4f8ffb882f3516f2cd04c9';
export default node;
