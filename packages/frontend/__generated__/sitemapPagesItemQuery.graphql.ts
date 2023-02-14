/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type sitemapPagesItemQueryVariables = {
    slug: string;
};
export type sitemapPagesItemQueryResponse = {
    readonly item: {
        readonly slug: string;
        readonly updatedAt: string;
        readonly pages: {
            readonly nodes: ReadonlyArray<{
                readonly slug: string;
                readonly updatedAt: string;
            }>;
        };
    } | null;
};
export type sitemapPagesItemQuery = {
    readonly response: sitemapPagesItemQueryResponse;
    readonly variables: sitemapPagesItemQueryVariables;
};



/*
query sitemapPagesItemQuery(
  $slug: Slug!
) {
  item(slug: $slug) {
    slug
    updatedAt
    pages {
      nodes {
        slug
        updatedAt
        id
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "sitemapPagesItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "sitemapPagesItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4a83c95f7c3c745fb751e171effe63c0",
    "id": null,
    "metadata": {},
    "name": "sitemapPagesItemQuery",
    "operationKind": "query",
    "text": "query sitemapPagesItemQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    slug\n    updatedAt\n    pages {\n      nodes {\n        slug\n        updatedAt\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '107bb76df6302b4197738172bb958fce';
export default node;
