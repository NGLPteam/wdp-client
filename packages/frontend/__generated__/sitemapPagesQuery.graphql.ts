/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type sitemapPagesQueryVariables = {};
export type sitemapPagesQueryResponse = {
    readonly communities: {
        readonly nodes: ReadonlyArray<{
            readonly slug: string;
        }>;
    };
};
export type sitemapPagesQuery = {
    readonly response: sitemapPagesQueryResponse;
    readonly variables: sitemapPagesQueryVariables;
};



/*
query sitemapPagesQuery {
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
    "name": "sitemapPagesQuery",
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
    "name": "sitemapPagesQuery",
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
    "cacheID": "b8e3d82c75b45814984e8848002dd165",
    "id": null,
    "metadata": {},
    "name": "sitemapPagesQuery",
    "operationKind": "query",
    "text": "query sitemapPagesQuery {\n  communities {\n    nodes {\n      slug\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '21b0cf498e56f5dd78aa4a56dbfc683e';
export default node;
