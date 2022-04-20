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

fragment FileUploadFragment on ImageAttachment {
  storage
  thumb {
    png {
      alt
      url
    }
  }
}

fragment UserProfileUpdateFormFragment on User {
  givenName
  familyName
  email
  username
  avatar {
    ...FileUploadFragment
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
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "avatar",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "storage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageSize",
                "kind": "LinkedField",
                "name": "thumb",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageDerivative",
                    "kind": "LinkedField",
                    "name": "png",
                    "plural": false,
                    "selections": [
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
                        "name": "url",
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
    "cacheID": "39e51d90ff017cbca6cc8fdd0c249f01",
    "id": null,
    "metadata": {},
    "name": "UserProfileUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query UserProfileUpdateDrawerQuery {\n  viewer {\n    name\n    ...UserProfileUpdateFormFragment\n    id\n  }\n}\n\nfragment FileUploadFragment on ImageAttachment {\n  storage\n  thumb {\n    png {\n      alt\n      url\n    }\n  }\n}\n\nfragment UserProfileUpdateFormFragment on User {\n  givenName\n  familyName\n  email\n  username\n  avatar {\n    ...FileUploadFragment\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e7efc74c97cd06f44c38f7e7a266fa33';
export default node;
