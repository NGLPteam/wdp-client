/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type collectionsManageSlugUsersPagesQueryVariables = {
    userSlug: string;
};
export type collectionsManageSlugUsersPagesQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"UserLayoutFragment">;
    } | null;
};
export type collectionsManageSlugUsersPagesQuery = {
    readonly response: collectionsManageSlugUsersPagesQueryResponse;
    readonly variables: collectionsManageSlugUsersPagesQueryVariables;
};



/*
query collectionsManageSlugUsersPagesQuery(
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
    "name": "collectionsManageSlugUsersPagesQuery",
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
    "name": "collectionsManageSlugUsersPagesQuery",
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
    "cacheID": "625de890074966247eef15513bc9f42f",
    "id": null,
    "metadata": {},
    "name": "collectionsManageSlugUsersPagesQuery",
    "operationKind": "query",
    "text": "query collectionsManageSlugUsersPagesQuery(\n  $userSlug: Slug!\n) {\n  user(slug: $userSlug) {\n    ...UserLayoutFragment\n    id\n  }\n}\n\nfragment UserLayoutFragment on User {\n  name\n  email\n}\n"
  }
};
})();
(node as any).hash = '47ba2039a625171a9b140909d6dfe130';
export default node;
