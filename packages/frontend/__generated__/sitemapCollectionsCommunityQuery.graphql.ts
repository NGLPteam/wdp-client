/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type sitemapCollectionsCommunityQueryVariables = {
    slug: string;
    page: number;
};
export type sitemapCollectionsCommunityQueryResponse = {
    readonly community: {
        readonly collections: {
            readonly " $fragmentRefs": FragmentRefs<"getCollectionsSitemapFragment">;
        };
    } | null;
};
export type sitemapCollectionsCommunityQuery = {
    readonly response: sitemapCollectionsCommunityQueryResponse;
    readonly variables: sitemapCollectionsCommunityQueryVariables;
};



/*
query sitemapCollectionsCommunityQuery(
  $slug: Slug!
  $page: Int!
) {
  community(slug: $slug) {
    collections(page: $page, perPage: 50) {
      ...getCollectionsSitemapFragment
    }
    id
  }
}

fragment getCollectionsSitemapFragment on CollectionConnection {
  nodes {
    __typename
    slug
    updatedAt
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v2 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v3 = [
  {
    "kind": "Variable",
    "name": "page",
    "variableName": "page"
  },
  {
    "kind": "Literal",
    "name": "perPage",
    "value": 50
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "sitemapCollectionsCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "CollectionConnection",
            "kind": "LinkedField",
            "name": "collections",
            "plural": false,
            "selections": [
              {
                "kind": "InlineDataFragmentSpread",
                "name": "getCollectionsSitemapFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ]
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "sitemapCollectionsCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/)
                ],
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
    "cacheID": "47f7cfc813cc772ffcf59f92103e584f",
    "id": null,
    "metadata": {},
    "name": "sitemapCollectionsCommunityQuery",
    "operationKind": "query",
    "text": "query sitemapCollectionsCommunityQuery(\n  $slug: Slug!\n  $page: Int!\n) {\n  community(slug: $slug) {\n    collections(page: $page, perPage: 50) {\n      ...getCollectionsSitemapFragment\n    }\n    id\n  }\n}\n\nfragment getCollectionsSitemapFragment on CollectionConnection {\n  nodes {\n    __typename\n    slug\n    updatedAt\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '494df6c08c64621a74b451858dce0cc5';
export default node;
