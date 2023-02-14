/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type sitemapQueryVariables = {};
export type sitemapQueryResponse = {
    readonly communities: {
        readonly nodes: ReadonlyArray<{
            readonly slug: string;
        }>;
    };
};
export type sitemapQuery = {
    readonly response: sitemapQueryResponse;
    readonly variables: sitemapQueryVariables;
};



/*
query sitemapQuery {
  communities {
    nodes {
      slug
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "sitemapQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*: any*/)
            ],
            "storageKey": null
          }
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
    "name": "sitemapQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fe665dc4c52d7a823fa8f25b80e7a36d",
    "id": null,
    "metadata": {},
    "name": "sitemapQuery",
    "operationKind": "query",
    "text": "query sitemapQuery {\n  communities {\n    nodes {\n      slug\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1433ccefc890328acf03e14f8e09ee2d';
export default node;
