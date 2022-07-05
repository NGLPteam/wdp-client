/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ItemContributionCreateDrawerQueryVariables = {
    slug: string;
};
export type ItemContributionCreateDrawerQueryResponse = {
    readonly item: {
        readonly id: string;
        readonly title: string;
    } | null;
};
export type ItemContributionCreateDrawerQuery = {
    readonly response: ItemContributionCreateDrawerQueryResponse;
    readonly variables: ItemContributionCreateDrawerQueryVariables;
};



/*
query ItemContributionCreateDrawerQuery(
  $slug: Slug!
) {
  item(slug: $slug) {
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
    "name": "ItemContributionCreateDrawerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ItemContributionCreateDrawerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "313acec6960ef1b9b9912099949f26ac",
    "id": null,
    "metadata": {},
    "name": "ItemContributionCreateDrawerQuery",
    "operationKind": "query",
    "text": "query ItemContributionCreateDrawerQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    id\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fa86f8218d0b5c7b51a12ba0966d6c5d';
export default node;
