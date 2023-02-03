/**
 * @generated SignedSource<<b8562fafb63f751ce6570a36235d8c80>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SlugToIDCollectionQuery$variables = {
  slug: String;
};
export type SlugToIDCollectionQuery$data = {
  readonly collection: {
    readonly id: string;
  } | null;
};
export type SlugToIDCollectionQuery = {
  response: SlugToIDCollectionQuery$data;
  variables: SlugToIDCollectionQuery$variables;
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
    "concreteType": "Collection",
    "kind": "LinkedField",
    "name": "collection",
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
    "name": "SlugToIDCollectionQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SlugToIDCollectionQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "319e93f257e7b4d49f9e835890c4ac38",
    "id": null,
    "metadata": {},
    "name": "SlugToIDCollectionQuery",
    "operationKind": "query",
    "text": "query SlugToIDCollectionQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c77e31e419f20912bea0be098399f8e5";

export default node;
