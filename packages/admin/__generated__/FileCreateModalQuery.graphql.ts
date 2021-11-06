/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type FileCreateModalQueryVariables = {
    slug: string;
};
export type FileCreateModalQueryResponse = {
    readonly item: {
        readonly id: string;
    } | null;
    readonly collection: {
        readonly id: string;
    } | null;
};
export type FileCreateModalQuery = {
    readonly response: FileCreateModalQueryResponse;
    readonly variables: FileCreateModalQueryVariables;
};



/*
query FileCreateModalQuery(
  $slug: Slug!
) {
  item(slug: $slug) {
    id
  }
  collection(slug: $slug) {
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
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
],
v3 = [
  {
    "alias": null,
    "args": (v1/*: any*/),
    "concreteType": "Item",
    "kind": "LinkedField",
    "name": "item",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": (v1/*: any*/),
    "concreteType": "Collection",
    "kind": "LinkedField",
    "name": "collection",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FileCreateModalQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FileCreateModalQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "e20b0305523feb5110a388850bb41cd5",
    "id": null,
    "metadata": {},
    "name": "FileCreateModalQuery",
    "operationKind": "query",
    "text": "query FileCreateModalQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    id\n  }\n  collection(slug: $slug) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '06935f6412f672f66f09c05a4a4944eb';
export default node;
