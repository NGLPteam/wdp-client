/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type sitemapCollectionQueryVariables = {
    slug: string;
};
export type sitemapCollectionQueryResponse = {
    readonly collection: {
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
        readonly collections: {
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
        readonly announcements: {
            readonly nodes: ReadonlyArray<{
                readonly slug: string;
                readonly updatedAt: string;
            }>;
        };
        readonly orderings: {
            readonly nodes: ReadonlyArray<{
                readonly identifier: string;
                readonly count: number;
                readonly updatedAt: string;
            }>;
        };
    } | null;
};
export type sitemapCollectionQuery = {
    readonly response: sitemapCollectionQueryResponse;
    readonly variables: sitemapCollectionQueryVariables;
};



/*
query sitemapCollectionQuery(
  $slug: Slug!
) {
  collection(slug: $slug) {
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
    collections(perPage: 50) {
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
    announcements {
      nodes {
        slug
        updatedAt
        id
      }
    }
    orderings(availability: ENABLED) {
      nodes {
        identifier
        count
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
v7 = [
  {
    "kind": "Literal",
    "name": "availability",
    "value": "ENABLED"
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v10 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v9/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "sitemapCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
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
            "args": (v5/*: any*/),
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
                "selections": (v6/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": "collections(perPage:50)"
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AnnouncementConnection",
            "kind": "LinkedField",
            "name": "announcements",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Announcement",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": (v6/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "concreteType": "OrderingConnection",
            "kind": "LinkedField",
            "name": "orderings",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Ordering",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v8/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "orderings(availability:\"ENABLED\")"
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
    "name": "sitemapCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
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
              (v9/*: any*/)
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
                "selections": (v10/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": "items(perPage:50)"
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
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
                "selections": (v10/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": "collections(perPage:50)"
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
                "selections": (v10/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AnnouncementConnection",
            "kind": "LinkedField",
            "name": "announcements",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Announcement",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": (v10/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "concreteType": "OrderingConnection",
            "kind": "LinkedField",
            "name": "orderings",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Ordering",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v8/*: any*/),
                  (v3/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "orderings(availability:\"ENABLED\")"
          },
          (v9/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6da5c5540d51d4a5541398673f74b76f",
    "id": null,
    "metadata": {},
    "name": "sitemapCollectionQuery",
    "operationKind": "query",
    "text": "query sitemapCollectionQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    slug\n    updatedAt\n    schemaVersion {\n      identifier\n      id\n    }\n    items(perPage: 50) {\n      nodes {\n        slug\n        updatedAt\n        id\n      }\n    }\n    collections(perPage: 50) {\n      nodes {\n        slug\n        updatedAt\n        id\n      }\n    }\n    pages {\n      nodes {\n        slug\n        updatedAt\n        id\n      }\n    }\n    announcements {\n      nodes {\n        slug\n        updatedAt\n        id\n      }\n    }\n    orderings(availability: ENABLED) {\n      nodes {\n        identifier\n        count\n        updatedAt\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b7133a4c4a24cde38d3010a351131256';
export default node;
