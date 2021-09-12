/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type detailsManageSlugUsersPagesQueryVariables = {
    userSlug: string;
};
export type detailsManageSlugUsersPagesQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"UserLayoutFragment">;
    } | null;
};
export type detailsManageSlugUsersPagesQuery = {
    readonly response: detailsManageSlugUsersPagesQueryResponse;
    readonly variables: detailsManageSlugUsersPagesQueryVariables;
};



/*
query detailsManageSlugUsersPagesQuery(
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
    "name": "detailsManageSlugUsersPagesQuery",
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
    "name": "detailsManageSlugUsersPagesQuery",
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
    "cacheID": "d0dc3d8c6b73de092f1130c90ef2bd4d",
    "id": null,
    "metadata": {},
    "name": "detailsManageSlugUsersPagesQuery",
    "operationKind": "query",
    "text": "query detailsManageSlugUsersPagesQuery(\n  $userSlug: Slug!\n) {\n  user(slug: $userSlug) {\n    ...UserLayoutFragment\n    id\n  }\n}\n\nfragment UserLayoutFragment on User {\n  name\n  email\n}\n"
  }
};
})();
(node as any).hash = '401274222984c85021060cffde313fe7';
export default node;
