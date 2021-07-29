/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SimpleOrder = "OLDEST" | "RECENT" | "%future added value";
export type collectionsCommunityChildQueryVariables = {
    order: SimpleOrder;
    page: number;
    communitySlug: string;
};
export type collectionsCommunityChildQueryResponse = {
    readonly community: {
        readonly collections: {
            readonly nodes: ReadonlyArray<{
                readonly __typename: string;
                readonly id: string;
                readonly identifier: string;
                readonly createdAt: string;
                readonly updatedAt: string;
                readonly title: string | null;
                readonly slug: string;
                readonly allowedActions: ReadonlyArray<string>;
                readonly hierarchicalDepth: number;
                readonly thumbnail: {
                    readonly image: {
                        readonly png: {
                            readonly url: string;
                            readonly height: number;
                            readonly width: number;
                            readonly alt: string;
                        } | null;
                    };
                } | null;
            }>;
            readonly pageInfo: {
                readonly page: number | null;
                readonly perPage: number | null;
                readonly pageCount: number | null;
                readonly hasNextPage: boolean;
                readonly hasPreviousPage: boolean;
                readonly totalCount: number;
                readonly totalUnfilteredCount: number;
            };
        };
    } | null;
};
export type collectionsCommunityChildQuery = {
    readonly response: collectionsCommunityChildQueryResponse;
    readonly variables: collectionsCommunityChildQueryVariables;
};



/*
query collectionsCommunityChildQuery(
  $order: SimpleOrder!
  $page: Int!
  $communitySlug: Slug!
) {
  community(slug: $communitySlug) {
    collections(order: $order, page: $page, perPage: 20) {
      nodes {
        __typename
        id
        identifier
        createdAt
        updatedAt
        title
        slug
        allowedActions
        hierarchicalDepth
        thumbnail {
          image: medium {
            png {
              url
              height
              width
              alt
            }
          }
        }
      }
      pageInfo {
        page
        perPage
        pageCount
        hasNextPage
        hasPreviousPage
        totalCount
        totalUnfilteredCount
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "communitySlug"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "order"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v3 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "communitySlug"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "order",
      "variableName": "order"
    },
    {
      "kind": "Variable",
      "name": "page",
      "variableName": "page"
    },
    {
      "kind": "Literal",
      "name": "perPage",
      "value": 20
    }
  ],
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "identifier",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "updatedAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "allowedActions",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hierarchicalDepth",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AssetPreview",
          "kind": "LinkedField",
          "name": "thumbnail",
          "plural": false,
          "selections": [
            {
              "alias": "image",
              "args": null,
              "concreteType": "PreviewImageMap",
              "kind": "LinkedField",
              "name": "medium",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "PreviewImage",
                  "kind": "LinkedField",
                  "name": "png",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "url",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "height",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "width",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "alt",
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
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "kind": "LinkedField",
      "name": "pageInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "page",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "perPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "pageCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasNextPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasPreviousPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalUnfilteredCount",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "collectionsCommunityChildQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v5/*: any*/)
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
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "collectionsCommunityChildQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "36ea3eca9d3b9216f83ce2803dbbaf3b",
    "id": null,
    "metadata": {},
    "name": "collectionsCommunityChildQuery",
    "operationKind": "query",
    "text": "query collectionsCommunityChildQuery(\n  $order: SimpleOrder!\n  $page: Int!\n  $communitySlug: Slug!\n) {\n  community(slug: $communitySlug) {\n    collections(order: $order, page: $page, perPage: 20) {\n      nodes {\n        __typename\n        id\n        identifier\n        createdAt\n        updatedAt\n        title\n        slug\n        allowedActions\n        hierarchicalDepth\n        thumbnail {\n          image: medium {\n            png {\n              url\n              height\n              width\n              alt\n            }\n          }\n        }\n      }\n      pageInfo {\n        page\n        perPage\n        pageCount\n        hasNextPage\n        hasPreviousPage\n        totalCount\n        totalUnfilteredCount\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cd23199c438152af37032d42fcad441c';
export default node;
