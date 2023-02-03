/**
 * @generated SignedSource<<0194708f84d5bedda35d21a29b020b8b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CollectionContributionCreateDrawerQuery$variables = {
  slug: String;
};
export type CollectionContributionCreateDrawerQuery$data = {
  readonly collection: {
    readonly id: string;
    readonly title: string;
  } | null;
};
export type CollectionContributionCreateDrawerQuery = {
  response: CollectionContributionCreateDrawerQuery$data;
  variables: CollectionContributionCreateDrawerQuery$variables;
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
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
    "name": "CollectionContributionCreateDrawerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CollectionContributionCreateDrawerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "50432e98be3aa27d3fb54fe7af64df36",
    "id": null,
    "metadata": {},
    "name": "CollectionContributionCreateDrawerQuery",
    "operationKind": "query",
    "text": "query CollectionContributionCreateDrawerQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "49043874e17c773d5c111ebed08e3466";

export default node;
