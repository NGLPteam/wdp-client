/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type ItemAddDrawerQueryVariables = {
    entitySlug: string;
    schemaKind: SchemaKind;
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
  $schemaKind: SchemaKind!
) {
  ...ItemAddFormFragment
}

fragment ItemAddFormFragment on Query {
  ...SchemaSelectFragment
  item(slug: $entitySlug) {
    id
  }
  collection(slug: $entitySlug) {
    id
  }
}

fragment SchemaSelectFragment on Query {
  schemaVersionOptions(kind: $schemaKind) {
    label
    value
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "entitySlug"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "schemaKind"
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
            "kind": "Variable",
            "name": "kind",
            "variableName": "schemaKind"
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
        "storageKey": null
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
    "cacheID": "ab1189109bc16bd37378f0195d822811",
    "id": null,
    "metadata": {},
    "name": "ItemAddDrawerQuery",
    "operationKind": "query",
    "text": "query ItemAddDrawerQuery(\n  $entitySlug: Slug!\n  $schemaKind: SchemaKind!\n) {\n  ...ItemAddFormFragment\n}\n\nfragment ItemAddFormFragment on Query {\n  ...SchemaSelectFragment\n  item(slug: $entitySlug) {\n    id\n  }\n  collection(slug: $entitySlug) {\n    id\n  }\n}\n\nfragment SchemaSelectFragment on Query {\n  schemaVersionOptions(kind: $schemaKind) {\n    label\n    value\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b7d176c59104608d3a3064da9981b59d';
export default node;
