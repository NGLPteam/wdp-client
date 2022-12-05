/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type sitemapItemQueryVariables = {
    slug: string;
};
export type sitemapItemQueryResponse = {
    readonly item: {
        readonly slug: string;
        readonly updatedAt: string;
        readonly schemaVersion: {
            readonly identifier: string;
        };
        readonly items: {
            readonly nodes: ReadonlyArray<{
                readonly slug: string;
                readonly updatedAt: string;
            }>;
        };
        readonly pages: {
            readonly nodes: ReadonlyArray<{
                readonly slug: string;
                readonly updatedAt: string;
            }>;
        };
    } | null;
};
export type sitemapItemQuery = {
    readonly response: sitemapItemQueryResponse;
    readonly variables: sitemapItemQueryVariables;
};



/*
query sitemapItemQuery(
  $slug: Slug!
) {
  item(slug: $slug) {
    slug
    updatedAt
    schemaVersion {
      identifier
      id
    }
    items(perPage: 50) {
      nodes {
        slug
        updatedAt
        id
      }
    }
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
  "name": "identifier",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "perPage",
    "value": 50
  }
],
v6 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v7/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "sitemapItemQuery",
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
            "concreteType": "SchemaVersion",
            "kind": "LinkedField",
            "name": "schemaVersion",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
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
                "selections": (v6/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": "items(perPage:50)"
          },
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
                "selections": (v6/*: any*/),
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
    "name": "sitemapItemQuery",
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
            "concreteType": "SchemaVersion",
            "kind": "LinkedField",
            "name": "schemaVersion",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
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
                "selections": (v8/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": "items(perPage:50)"
          },
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
                "selections": (v8/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "457ae804ebd8496657d7dad9762ff85c",
    "id": null,
    "metadata": {},
    "name": "sitemapItemQuery",
    "operationKind": "query",
    "text": "query sitemapItemQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    slug\n    updatedAt\n    schemaVersion {\n      identifier\n      id\n    }\n    items(perPage: 50) {\n      nodes {\n        slug\n        updatedAt\n        id\n      }\n    }\n    pages {\n      nodes {\n        slug\n        updatedAt\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '207d9078cd17576d0dac532e1ef91926';
export default node;
