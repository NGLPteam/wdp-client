/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ItemTypeaheadQueryVariables = {};
export type ItemTypeaheadQueryResponse = {
    readonly viewer: {
        readonly items: {
            readonly nodes: ReadonlyArray<{
                readonly id: string;
                readonly title: string | null;
            }>;
        };
    };
};
export type ItemTypeaheadQuery = {
    readonly response: ItemTypeaheadQueryResponse;
    readonly variables: ItemTypeaheadQueryVariables;
};



/*
query ItemTypeaheadQuery {
  viewer {
    items {
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
  "concreteType": "ItemConnection",
  "kind": "LinkedField",
  "name": "items",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Item",
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
    "name": "ItemTypeaheadQuery",
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
    "name": "ItemTypeaheadQuery",
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
    "cacheID": "1103286967ead52ccb23c75b7719fef3",
    "id": null,
    "metadata": {},
    "name": "ItemTypeaheadQuery",
    "operationKind": "query",
    "text": "query ItemTypeaheadQuery {\n  viewer {\n    items {\n      nodes {\n        id\n        title\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '14a3efb8a91e8b900a11df83acd39eab';
export default node;
