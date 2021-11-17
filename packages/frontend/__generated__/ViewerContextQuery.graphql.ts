/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ViewerContextQueryVariables = {};
export type ViewerContextQueryResponse = {
    readonly viewer: {
        readonly name: string | null;
        readonly allowedActions: ReadonlyArray<string>;
        readonly uploadAccess: boolean;
        readonly uploadToken: string | null;
        readonly avatar: {
            readonly small: {
                readonly png: {
                    readonly url: string;
                    readonly alt: string;
                } | null;
            };
        } | null;
    };
};
export type ViewerContextQuery = {
    readonly response: ViewerContextQueryResponse;
    readonly variables: ViewerContextQueryVariables;
};



/*
query ViewerContextQuery {
  viewer {
    name
    allowedActions
    uploadAccess
    uploadToken
    avatar {
      small {
        png {
          url
          alt
        }
      }
    }
    id
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
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "allowedActions",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "uploadAccess",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "uploadToken",
  "storageKey": null
},
v4 = {
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewerContextQuery",
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
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "ViewerContextQuery",
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
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
    "cacheID": "e79ed5cc85e653dd6a664e1a060a8b4d",
    "id": null,
    "metadata": {},
    "name": "ViewerContextQuery",
    "operationKind": "query",
    "text": "query ViewerContextQuery {\n  viewer {\n    name\n    allowedActions\n    uploadAccess\n    uploadToken\n    avatar {\n      small {\n        png {\n          url\n          alt\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '528925913ab97b03fca19eba9afa867b';
export default node;
