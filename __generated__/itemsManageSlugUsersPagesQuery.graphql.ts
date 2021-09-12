/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type itemsManageSlugUsersPagesQueryVariables = {
    userSlug: string;
};
export type itemsManageSlugUsersPagesQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"UserLayoutFragment">;
    } | null;
};
export type itemsManageSlugUsersPagesQuery = {
    readonly response: itemsManageSlugUsersPagesQueryResponse;
    readonly variables: itemsManageSlugUsersPagesQueryVariables;
};



/*
query itemsManageSlugUsersPagesQuery(
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
    "name": "itemsManageSlugUsersPagesQuery",
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
    "name": "itemsManageSlugUsersPagesQuery",
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
    "cacheID": "777cb0172fc739c2c254ba5de80bf907",
    "id": null,
    "metadata": {},
    "name": "itemsManageSlugUsersPagesQuery",
    "operationKind": "query",
    "text": "query itemsManageSlugUsersPagesQuery(\n  $userSlug: Slug!\n) {\n  user(slug: $userSlug) {\n    ...UserLayoutFragment\n    id\n  }\n}\n\nfragment UserLayoutFragment on User {\n  name\n  email\n}\n"
  }
};
})();
(node as any).hash = 'bd5aa81d118d17dd503b6679be914b48';
export default node;
