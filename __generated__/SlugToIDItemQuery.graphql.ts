/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SlugToIDItemQueryVariables = {
    slug: string;
};
export type SlugToIDItemQueryResponse = {
    readonly item: {
        readonly id: string;
    } | null;
};
export type SlugToIDItemQuery = {
    readonly response: SlugToIDItemQueryResponse;
    readonly variables: SlugToIDItemQueryVariables;
};



/*
query SlugToIDItemQuery(
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
(node as any).hash = 'dad65e8bf546de547c0c7ff4747dedf2';
export default node;
