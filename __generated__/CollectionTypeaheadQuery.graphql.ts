/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CollectionTypeaheadQueryVariables = {};
export type CollectionTypeaheadQueryResponse = {
    readonly viewer: {
        readonly collections: {
            readonly nodes: ReadonlyArray<{
                readonly id: string;
                readonly title: string | null;
            }>;
        };
    };
};
export type CollectionTypeaheadQuery = {
    readonly response: CollectionTypeaheadQueryResponse;
    readonly variables: CollectionTypeaheadQueryVariables;
};



/*
query CollectionTypeaheadQuery {
  viewer {
    collections {
      nodes {
        id
        title
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "CollectionConnection",
  "kind": "LinkedField",
  "name": "collections",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v0/*: any*/),
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
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionTypeaheadQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CollectionTypeaheadQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a12a60e8068eb4e2c67f449dd5dd25b8",
    "id": null,
    "metadata": {},
    "name": "CollectionTypeaheadQuery",
    "operationKind": "query",
    "text": "query CollectionTypeaheadQuery {\n  viewer {\n    collections {\n      nodes {\n        id\n        title\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e46c729d6abb7eef7e529fd7ea0cad14';
export default node;
