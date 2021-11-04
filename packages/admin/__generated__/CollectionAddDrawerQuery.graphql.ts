/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionAddDrawerQueryVariables = {
    parentSlug: string;
};
export type CollectionAddDrawerQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"CollectionAddFormFragment">;
};
export type CollectionAddDrawerQuery = {
    readonly response: CollectionAddDrawerQueryResponse;
    readonly variables: CollectionAddDrawerQueryVariables;
};



/*
query CollectionAddDrawerQuery(
  $parentSlug: Slug!
) {
  ...CollectionAddFormFragment
}

fragment CollectionAddFormFragment on Query {
  schemaVersionOptions(kind: COLLECTION) {
    label
    value
  }
  collection(slug: $parentSlug) {
    id
  }
  community(slug: $parentSlug) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "parentSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "parentSlug"
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
    "name": "CollectionAddDrawerQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CollectionAddFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CollectionAddDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "kind",
            "value": "COLLECTION"
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
        "storageKey": "schemaVersionOptions(kind:\"COLLECTION\")"
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
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "29612911c05ef966118dae1b260940b4",
    "id": null,
    "metadata": {},
    "name": "CollectionAddDrawerQuery",
    "operationKind": "query",
    "text": "query CollectionAddDrawerQuery(\n  $parentSlug: Slug!\n) {\n  ...CollectionAddFormFragment\n}\n\nfragment CollectionAddFormFragment on Query {\n  schemaVersionOptions(kind: COLLECTION) {\n    label\n    value\n  }\n  collection(slug: $parentSlug) {\n    id\n  }\n  community(slug: $parentSlug) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c543553e0a9afb3900c191877361c750';
export default node;
