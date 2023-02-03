/**
 * @generated SignedSource<<843c05152b3159d09d2c39f110ca6140>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type UserGrantItemAccessDrawerQuery$variables = {
  slug: String;
};
export type UserGrantItemAccessDrawerQuery$data = {
  readonly user: {
    readonly id: string;
    readonly name: string | null;
  } | null;
};
export type UserGrantItemAccessDrawerQuery = {
  response: UserGrantItemAccessDrawerQuery$data;
  variables: UserGrantItemAccessDrawerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "slug",
        "variableName": "slug"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
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
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserGrantItemAccessDrawerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserGrantItemAccessDrawerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "58ef9bfb1c103bb7ccbe2e3917d71a59",
    "id": null,
    "metadata": {},
    "name": "UserGrantItemAccessDrawerQuery",
    "operationKind": "query",
    "text": "query UserGrantItemAccessDrawerQuery(\n  $slug: Slug!\n) {\n  user(slug: $slug) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "d0d6359140c4b94da464948912273332";

export default node;
