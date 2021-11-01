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
        readonly " $fragmentRefs": FragmentRefs<"UserLayoutQueryFragment">;
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
    ...UserLayoutQueryFragment
    id
  }
}

fragment UserLayoutFragment on User {
  name
  email
}

fragment UserLayoutQueryFragment on User {
  ...UserLayoutFragment
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
            "name": "UserLayoutQueryFragment"
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
    "cacheID": "14f69100a5ed96e707cbf0de124cf3cd",
    "id": null,
    "metadata": {},
    "name": "detailsManageSlugUsersPagesQuery",
    "operationKind": "query",
    "text": "query detailsManageSlugUsersPagesQuery(\n  $userSlug: Slug!\n) {\n  user(slug: $userSlug) {\n    ...UserLayoutQueryFragment\n    id\n  }\n}\n\nfragment UserLayoutFragment on User {\n  name\n  email\n}\n\nfragment UserLayoutQueryFragment on User {\n  ...UserLayoutFragment\n}\n"
  }
};
})();
(node as any).hash = 'cb3fab80f1c17b699fa0915d9693ab19';
export default node;
