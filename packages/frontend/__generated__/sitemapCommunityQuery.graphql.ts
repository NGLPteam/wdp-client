/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type sitemapCommunityQueryVariables = {
    slug: string;
};
export type sitemapCommunityQueryResponse = {
    readonly community: {
        readonly slug: string;
        readonly updatedAt: string;
        readonly schemaRanks: ReadonlyArray<{
            readonly slug: string;
            readonly name: string;
            readonly count: number;
            readonly kind: SchemaKind;
        }>;
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
    } | null;
};
export type sitemapCommunityQuery = {
    readonly response: sitemapCommunityQueryResponse;
    readonly variables: sitemapCommunityQueryVariables;
};



/*
query sitemapCommunityQuery(
  $slug: Slug!
) {
  community(slug: $slug) {
    slug
    updatedAt
    schemaRanks {
      slug
      name
      count
      kind
      id
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
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "perPage",
    "value": 50
  }
],
v8 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
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
    "name": "sitemapCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "HierarchicalSchemaRank",
            "kind": "LinkedField",
            "name": "schemaRanks",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
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
                "selections": (v8/*: any*/),
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
                "selections": (v8/*: any*/),
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
    "name": "sitemapCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "HierarchicalSchemaRank",
            "kind": "LinkedField",
            "name": "schemaRanks",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
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
          (v9/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "655f7b355aea67681f806da04e996119",
    "id": null,
    "metadata": {},
    "name": "sitemapCommunityQuery",
    "operationKind": "query",
    "text": "query sitemapCommunityQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    slug\n    updatedAt\n    schemaRanks {\n      slug\n      name\n      count\n      kind\n      id\n    }\n    collections(perPage: 50) {\n      nodes {\n        slug\n        updatedAt\n        id\n      }\n    }\n    pages {\n      nodes {\n        slug\n        updatedAt\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '86a138891a8be26478da3bda9d07359c';
export default node;
