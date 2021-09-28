/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type FileCreateDrawerQueryVariables = {
    slug: string;
};
export type FileCreateDrawerQueryResponse = {
    readonly item: {
        readonly id: string;
    } | null;
};
export type FileCreateDrawerQuery = {
    readonly response: FileCreateDrawerQueryResponse;
    readonly variables: FileCreateDrawerQueryVariables;
};



/*
query FileCreateDrawerQuery(
  $slug: Slug!
) {
  item(slug: $slug) {
    id
  }
}
*/

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
    "name": "FileCreateDrawerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FileCreateDrawerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "29e3b7943b72d27fb4f4d182be09a4ad",
    "id": null,
    "metadata": {},
    "name": "FileCreateDrawerQuery",
    "operationKind": "query",
    "text": "query FileCreateDrawerQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c5b410a495441e974842d818405ee6cd';
export default node;
