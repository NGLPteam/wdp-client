/**
 * @generated SignedSource<<4ba6617f45ce9ba0a0e11e02de30c83f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SlugToIDItemQuery$variables = {
  slug: String;
};
export type SlugToIDItemQuery$data = {
  readonly item: {
    readonly id: string;
  } | null;
};
export type SlugToIDItemQuery = {
  response: SlugToIDItemQuery$data;
  variables: SlugToIDItemQuery$variables;
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
    "concreteType": "Item",
    "kind": "LinkedField",
    "name": "item",
    "plural": false,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SlugToIDItemQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SlugToIDItemQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8b03027cb27a455eda90e2a9bdf5b8a1",
    "id": null,
    "metadata": {},
    "name": "SlugToIDItemQuery",
    "operationKind": "query",
    "text": "query SlugToIDItemQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "dad65e8bf546de547c0c7ff4747dedf2";

export default node;
