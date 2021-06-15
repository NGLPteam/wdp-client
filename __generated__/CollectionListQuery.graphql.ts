/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CollectionListQueryVariables = {};
export type CollectionListQueryResponse = {
    readonly collection: {
        readonly title: string | null;
    } | null;
};
export type CollectionListQuery = {
    readonly response: CollectionListQueryResponse;
    readonly variables: CollectionListQueryVariables;
};



/*
query CollectionListQuery {
  collection(slug: "24XzMKrs0Z3nTMZysbo7OIxe0vwM1xB") {
    title
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "slug",
    "value": "24XzMKrs0Z3nTMZysbo7OIxe0vwM1xB"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "collection(slug:\"24XzMKrs0Z3nTMZysbo7OIxe0vwM1xB\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CollectionListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "collection(slug:\"24XzMKrs0Z3nTMZysbo7OIxe0vwM1xB\")"
      }
    ]
  },
  "params": {
    "cacheID": "9dcbf333515d4b2f1f137b6a028549fc",
    "id": null,
    "metadata": {},
    "name": "CollectionListQuery",
    "operationKind": "query",
    "text": "query CollectionListQuery {\n  collection(slug: \"24XzMKrs0Z3nTMZysbo7OIxe0vwM1xB\") {\n    title\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '2c9f87f0ebb97bad254da31d82d68024';
export default node;
