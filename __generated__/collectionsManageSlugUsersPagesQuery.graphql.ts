/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SimpleOrder = "OLDEST" | "RECENT" | "%future added value";
export type collectionsManageSlugUsersPagesQueryVariables = {
    userSlug: string;
    order: SimpleOrder;
    page: number;
};
export type collectionsManageSlugUsersPagesQueryResponse = {
    readonly user: {
        readonly collectionAccessGrants: {
            readonly " $fragmentRefs": FragmentRefs<"UserCollectionsListFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"UserLayoutQueryFragment">;
    } | null;
};
export type collectionsManageSlugUsersPagesQuery = {
    readonly response: collectionsManageSlugUsersPagesQueryResponse;
    readonly variables: collectionsManageSlugUsersPagesQueryVariables;
};



/*
query collectionsManageSlugUsersPagesQuery(
  $userSlug: Slug!
  $order: SimpleOrder!
  $page: Int!
) {
  user(slug: $userSlug) {
    ...UserLayoutQueryFragment
    collectionAccessGrants(order: $order, page: $page, perPage: 20) {
      ...UserCollectionsListFragment
    }
    id
  }
}

fragment ModelListPageFragment on Paginated {
  __isPaginated: __typename
  ...ModelPageCountActionsFragment
  ...ModelPaginationFragment
}

fragment ModelPageCountActionsFragment on Paginated {
  __isPaginated: __typename
  pageInfo {
    page
    pageCount
    perPage
    hasNextPage
    hasPreviousPage
    totalCount
  }
}

fragment ModelPaginationFragment on Paginated {
  __isPaginated: __typename
  pageInfo {
    page
    pageCount
  }
}

fragment UserCollectionsListFragment on UserCollectionAccessGrantConnection {
  edges {
    node {
      id
      collection {
        title
        slug
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
        id
      }
      role {
        name
        id
      }
    }
  }
  ...ModelListPageFragment
}

fragment UserLayoutFragment on User {
  name
  email
}

fragment UserLayoutQueryFragment on User {
  ...UserLayoutFragment
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "order"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userSlug"
},
v3 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "userSlug"
  }
],
v4 = [
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
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "collectionsManageSlugUsersPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "UserCollectionAccessGrantConnection",
            "kind": "LinkedField",
            "name": "collectionAccessGrants",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "UserCollectionsListFragment"
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserLayoutQueryFragment"
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
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "collectionsManageSlugUsersPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "UserCollectionAccessGrantConnection",
            "kind": "LinkedField",
            "name": "collectionAccessGrants",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserCollectionAccessGrantEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserCollectionAccessGrant",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Collection",
                        "kind": "LinkedField",
                        "name": "collection",
                        "plural": false,
                        "selections": [
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
                          },
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Role",
                        "kind": "LinkedField",
                        "name": "role",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v6/*: any*/)
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
                "kind": "InlineFragment",
                "selections": [
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
                        "name": "pageCount",
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "Paginated",
                "abstractKey": "__isPaginated"
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f01f18645ef23bc751ef8487c48e789a",
    "id": null,
    "metadata": {},
    "name": "collectionsManageSlugUsersPagesQuery",
    "operationKind": "query",
    "text": "query collectionsManageSlugUsersPagesQuery(\n  $userSlug: Slug!\n  $order: SimpleOrder!\n  $page: Int!\n) {\n  user(slug: $userSlug) {\n    ...UserLayoutQueryFragment\n    collectionAccessGrants(order: $order, page: $page, perPage: 20) {\n      ...UserCollectionsListFragment\n    }\n    id\n  }\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n\nfragment UserCollectionsListFragment on UserCollectionAccessGrantConnection {\n  edges {\n    node {\n      id\n      collection {\n        title\n        slug\n        thumbnail {\n          image: medium {\n            png {\n              url\n              height\n              width\n              alt\n            }\n          }\n        }\n        id\n      }\n      role {\n        name\n        id\n      }\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment UserLayoutFragment on User {\n  name\n  email\n}\n\nfragment UserLayoutQueryFragment on User {\n  ...UserLayoutFragment\n}\n"
  }
};
})();
(node as any).hash = 'fbcb368c6d567dd8896c9c504f86d6f5';
export default node;
