/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemAddDrawerMainPageQueryVariables = {};
export type ItemAddDrawerMainPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"MainItemsPageAddFormFragment">;
};
export type ItemAddDrawerMainPageQuery = {
    readonly response: ItemAddDrawerMainPageQueryResponse;
    readonly variables: ItemAddDrawerMainPageQueryVariables;
};



/*
query ItemAddDrawerMainPageQuery {
  ...MainItemsPageAddFormFragment
}

fragment MainItemsPageAddFormFragment on Query {
  schemaVersionOptions(kind: ITEM) {
    label
    value
  }
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemAddDrawerMainPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "MainItemsPageAddFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ItemAddDrawerMainPageQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "kind",
            "value": "ITEM"
          }
        ],
        "concreteType": "SchemaVersionOption",
        "kind": "LinkedField",
        "name": "schemaVersionOptions",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "label",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "value",
            "storageKey": null
          }
        ],
        "storageKey": "schemaVersionOptions(kind:\"ITEM\")"
      }
    ]
  },
  "params": {
    "cacheID": "6719fc1b0244ec1d929b4b174236e95b",
    "id": null,
    "metadata": {},
    "name": "ItemAddDrawerMainPageQuery",
    "operationKind": "query",
    "text": "query ItemAddDrawerMainPageQuery {\n  ...MainItemsPageAddFormFragment\n}\n\nfragment MainItemsPageAddFormFragment on Query {\n  schemaVersionOptions(kind: ITEM) {\n    label\n    value\n  }\n}\n"
  }
};
(node as any).hash = 'b7b234a3b4658db28cdd759ef5b6eef4';
export default node;
