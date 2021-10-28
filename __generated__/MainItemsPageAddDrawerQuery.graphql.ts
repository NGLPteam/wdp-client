/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MainItemsPageAddDrawerQueryVariables = {};
export type MainItemsPageAddDrawerQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"MainItemsPageAddFormFragment">;
};
export type MainItemsPageAddDrawerQuery = {
    readonly response: MainItemsPageAddDrawerQueryResponse;
    readonly variables: MainItemsPageAddDrawerQueryVariables;
};



/*
query MainItemsPageAddDrawerQuery {
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
    "name": "MainItemsPageAddDrawerQuery",
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
    "name": "MainItemsPageAddDrawerQuery",
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
    "cacheID": "2f560f85745eb351bdc9dca622481355",
    "id": null,
    "metadata": {},
    "name": "MainItemsPageAddDrawerQuery",
    "operationKind": "query",
    "text": "query MainItemsPageAddDrawerQuery {\n  ...MainItemsPageAddFormFragment\n}\n\nfragment MainItemsPageAddFormFragment on Query {\n  schemaVersionOptions(kind: ITEM) {\n    label\n    value\n  }\n}\n"
  }
};
(node as any).hash = '7592a8918c2e5fe6ad18ed7c9307975a';
export default node;
