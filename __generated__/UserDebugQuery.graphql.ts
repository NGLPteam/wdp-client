/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserDebugQueryVariables = {};
export type UserDebugQueryResponse = {
    readonly viewer: {
        readonly id: string;
        readonly email: string | null;
        readonly name: string | null;
    } | null;
};
export type UserDebugQuery = {
    readonly response: UserDebugQueryResponse;
    readonly variables: UserDebugQueryVariables;
};



/*
query UserDebugQuery {
  viewer {
    id
    email
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserDebugQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserDebugQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "64baac9493c143ba600e26f9371f1d57",
    "id": null,
    "metadata": {},
    "name": "UserDebugQuery",
    "operationKind": "query",
    "text": "query UserDebugQuery {\n  viewer {\n    id\n    email\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '1f4dc6037f0da92813f081bc34807dad';
export default node;
