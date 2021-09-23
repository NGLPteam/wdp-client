/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CollectionContributionCreateDrawerQueryVariables = {
    slug: string;
};
export type CollectionContributionCreateDrawerQueryResponse = {
    readonly collection: {
        readonly id: string;
        readonly title: string | null;
    } | null;
};
export type CollectionContributionCreateDrawerQuery = {
    readonly response: CollectionContributionCreateDrawerQueryResponse;
    readonly variables: CollectionContributionCreateDrawerQueryVariables;
};



/*
query CollectionContributionCreateDrawerQuery(
  $slug: Slug!
) {
  collection(slug: $slug) {
    id
    title
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
(node as any).hash = '49043874e17c773d5c111ebed08e3466';
export default node;
