/**
 * @generated SignedSource<<9b265a8d711f5d5cee894d832a4f1104>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type UserGrantCollectionAccessDrawerQuery$variables = {
  slug: String;
};
export type UserGrantCollectionAccessDrawerQuery$data = {
  readonly user: {
    readonly id: string;
    readonly name: string | null;
  } | null;
};
export type UserGrantCollectionAccessDrawerQuery = {
  response: UserGrantCollectionAccessDrawerQuery$data;
  variables: UserGrantCollectionAccessDrawerQuery$variables;
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
    "name": "UserGrantCollectionAccessDrawerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserGrantCollectionAccessDrawerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4edc4c3e7ae26d4c067dd333f63a7111",
    "id": null,
    "metadata": {},
    "name": "UserGrantCollectionAccessDrawerQuery",
    "operationKind": "query",
    "text": "query UserGrantCollectionAccessDrawerQuery(\n  $slug: Slug!\n) {\n  user(slug: $slug) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "7f8afaf236935af9d29848136162a410";

export default node;
