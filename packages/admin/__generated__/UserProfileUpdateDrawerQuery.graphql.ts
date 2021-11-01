/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserProfileUpdateDrawerQueryVariables = {};
export type UserProfileUpdateDrawerQueryResponse = {
    readonly viewer: {
        readonly name: string | null;
        readonly " $fragmentRefs": FragmentRefs<"UserProfileUpdateFormFragment">;
    };
};
export type UserProfileUpdateDrawerQuery = {
    readonly response: UserProfileUpdateDrawerQueryResponse;
    readonly variables: UserProfileUpdateDrawerQueryVariables;
};



/*
query UserProfileUpdateDrawerQuery {
  viewer {
    name
    ...UserProfileUpdateFormFragment
    id
  }
}

fragment UserProfileUpdateFormFragment on User {
  givenName
  familyName
  email
  username
  avatar {
    small {
      png {
        url
        alt
        height
        width
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserProfileUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserProfileUpdateFormFragment"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserProfileUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "givenName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "familyName",
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
            "name": "username",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AssetPreview",
            "kind": "LinkedField",
            "name": "avatar",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PreviewImageMap",
                "kind": "LinkedField",
                "name": "small",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PreviewImage",
                    "kind": "LinkedField",
                    "name": "png",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "alt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "height",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "width",
                        "storageKey": null
                      }
                    ],
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
    "cacheID": "a3d5ffc724e758c80e06e53638ffd60b",
    "id": null,
    "metadata": {},
    "name": "UserProfileUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query UserProfileUpdateDrawerQuery {\n  viewer {\n    name\n    ...UserProfileUpdateFormFragment\n    id\n  }\n}\n\nfragment UserProfileUpdateFormFragment on User {\n  givenName\n  familyName\n  email\n  username\n  avatar {\n    small {\n      png {\n        url\n        alt\n        height\n        width\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e7efc74c97cd06f44c38f7e7a266fa33';
export default node;
