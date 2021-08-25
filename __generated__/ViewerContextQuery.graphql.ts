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
          (v3/*: any*/)
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
    "cacheID": "0c28a60ea66b6b15e82684a74f804765",
    "id": null,
    "metadata": {},
    "name": "ViewerContextQuery",
    "operationKind": "query",
    "text": "query ViewerContextQuery {\n  viewer {\n    name\n    allowedActions\n    uploadAccess\n    uploadToken\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '882d0f7d47464d05453b02e0f5965f0b';
export default node;
