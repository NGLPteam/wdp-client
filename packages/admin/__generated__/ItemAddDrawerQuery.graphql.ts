/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemAddDrawerQueryVariables = {
    entitySlug: string;
};
export type ItemAddDrawerQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ItemAddFormFragment">;
};
export type ItemAddDrawerQuery = {
    readonly response: ItemAddDrawerQueryResponse;
    readonly variables: ItemAddDrawerQueryVariables;
};



/*
query ItemAddDrawerQuery(
  $entitySlug: Slug!
) {
  ...ItemAddFormFragment
}

fragment ItemAddFormFragment on Query {
  schemaVersionOptions(kind: ITEM) {
    label
    value
  }
  item(slug: $entitySlug) {
    id
  }
  collection(slug: $entitySlug) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "entitySlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "entitySlug"
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemAddDrawerQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ItemAddFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
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
      },
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
    ]
  },
  "params": {
    "cacheID": "391a368e17b3188318b584d35d0beb7a",
    "id": null,
    "metadata": {},
    "name": "ItemAddDrawerQuery",
    "operationKind": "query",
    "text": "query ItemAddDrawerQuery(\n  $entitySlug: Slug!\n) {\n  ...ItemAddFormFragment\n}\n\nfragment ItemAddFormFragment on Query {\n  schemaVersionOptions(kind: ITEM) {\n    label\n    value\n  }\n  item(slug: $entitySlug) {\n    id\n  }\n  collection(slug: $entitySlug) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '48b13b369c533b110e3e03d973e503e1';
export default node;
