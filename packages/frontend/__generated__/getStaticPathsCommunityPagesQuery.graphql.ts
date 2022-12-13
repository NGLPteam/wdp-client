/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type getStaticPathsCommunityPagesQueryVariables = {};
export type getStaticPathsCommunityPagesQueryResponse = {
    readonly communities: {
        readonly nodes: ReadonlyArray<{
            readonly slug: string;
            readonly pages: {
                readonly nodes: ReadonlyArray<{
                    readonly slug: string;
                }>;
            };
        }>;
    };
};
export type getStaticPathsCommunityPagesQuery = {
    readonly response: getStaticPathsCommunityPagesQueryResponse;
    readonly variables: getStaticPathsCommunityPagesQueryVariables;
};



/*
query getStaticPathsCommunityPagesQuery {
  communities {
    nodes {
      slug
      pages {
        nodes {
          slug
          id
        }
      }
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
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getStaticPathsCommunityPagesQuery",
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
                "concreteType": "PageConnection",
                "kind": "LinkedField",
                "name": "pages",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Page",
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
    "name": "getStaticPathsCommunityPagesQuery",
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
                "concreteType": "PageConnection",
                "kind": "LinkedField",
                "name": "pages",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Page",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v0/*: any*/),
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2b5987ca95a6ead67c2a139bc33cf636",
    "id": null,
    "metadata": {},
    "name": "getStaticPathsCommunityPagesQuery",
    "operationKind": "query",
    "text": "query getStaticPathsCommunityPagesQuery {\n  communities {\n    nodes {\n      slug\n      pages {\n        nodes {\n          slug\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b72e479857113d4ec69811646260ed96';
export default node;
