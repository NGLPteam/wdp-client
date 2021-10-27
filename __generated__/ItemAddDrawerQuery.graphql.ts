/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemAddDrawerQueryVariables = {};
export type ItemAddDrawerQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ItemAddFormSchemaOptionsFragment">;
};
export type ItemAddDrawerQuery = {
    readonly response: ItemAddDrawerQueryResponse;
    readonly variables: ItemAddDrawerQueryVariables;
};



/*
query ItemAddDrawerQuery {
  ...ItemAddFormSchemaOptionsFragment
}

fragment ItemAddFormSchemaOptionsFragment on Query {
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
    "name": "ItemAddDrawerQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ItemAddFormSchemaOptionsFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ItemAddDrawerQuery",
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
    "cacheID": "4375955e625c2090efc8ee58c32a56a0",
    "id": null,
    "metadata": {},
    "name": "ItemAddDrawerQuery",
    "operationKind": "query",
    "text": "query ItemAddDrawerQuery {\n  ...ItemAddFormSchemaOptionsFragment\n}\n\nfragment ItemAddFormSchemaOptionsFragment on Query {\n  schemaVersionOptions(kind: ITEM) {\n    label\n    value\n  }\n}\n"
  }
};
(node as any).hash = 'e4dcf12a8143e83077e2728c32c78179';
export default node;
