/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ViewerContextQueryVariables = {};
export type ViewerContextQueryResponse = {
    readonly viewer: {
        readonly name: string | null;
        readonly allowedActions: ReadonlyArray<string>;
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
          (v1/*: any*/)
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
    "cacheID": "86c86e9da976f38350221d5db55bb9dc",
    "id": null,
    "metadata": {},
    "name": "ViewerContextQuery",
    "operationKind": "query",
    "text": "query ViewerContextQuery {\n  viewer {\n    name\n    allowedActions\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '390ccdff68826b5158dcc3a11217a4e5';
export default node;
