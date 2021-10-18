/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type accessManageSlugCollectionsPagesQueryVariables = {
    collectionSlug: string;
    page: number;
};
export type accessManageSlugCollectionsPagesQueryResponse = {
    readonly collection: {
        readonly " $fragmentRefs": FragmentRefs<"CollectionLayoutQueryFragment" | "RoleAccessListFragment">;
    } | null;
};
export type accessManageSlugCollectionsPagesQuery = {
    readonly response: accessManageSlugCollectionsPagesQueryResponse;
    readonly variables: accessManageSlugCollectionsPagesQueryVariables;
};



/*
query accessManageSlugCollectionsPagesQuery(
  $collectionSlug: Slug!
  $page: Int!
) {
  collection(slug: $collectionSlug) {
    ...CollectionLayoutQueryFragment
    ...RoleAccessListFragment
    id
  }
}

fragment CollectionLayoutFragment on Collection {
  title
  slug
  ...useBreadcrumbsFragment
}

fragment CollectionLayoutQueryFragment on Collection {
  ...CollectionLayoutFragment
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

fragment RoleAccessListDataFragment on AnyAccessGrantConnection {
  edges {
    node {
      __typename
      ... on UserCollectionAccessGrant {
        id
        slug
        role {
          id
          name
        }
        user {
          id
          slug
          name
          email
        }
        entity: collection {
          id
        }
      }
      ... on UserItemAccessGrant {
        id
        slug
        role {
          id
          name
        }
        user {
          id
          slug
          name
          email
        }
        entity: item {
          id
        }
      }
      ... on UserCommunityAccessGrant {
        id
        slug
        role {
          id
          name
        }
        user {
          id
          slug
          name
          email
        }
        entity: community {
          id
        }
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
  ...ModelListPageFragment
}

fragment RoleAccessListFragment on Entity {
  __isEntity: __typename
  allowedActions
  allAccessGrants(page: $page, perPage: 20) {
    ...RoleAccessListDataFragment
  }
}

fragment useBreadcrumbsFragment on Entity {
  __isEntity: __typename
  breadcrumbs {
    depth
    label
    kind
    slug
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "collectionSlug"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "collectionSlug"
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
  "name": "id",
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
  "concreteType": "Role",
  "kind": "LinkedField",
  "name": "role",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v2/*: any*/),
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = [
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "accessManageSlugCollectionsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CollectionLayoutQueryFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RoleAccessListFragment"
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
    "name": "accessManageSlugCollectionsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "EntityBreadcrumb",
                "kind": "LinkedField",
                "name": "breadcrumbs",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "depth",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "label",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "kind",
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
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
                "args": [
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
                "concreteType": "AnyAccessGrantConnection",
                "kind": "LinkedField",
                "name": "allAccessGrants",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnyAccessGrantEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__typename",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v3/*: any*/),
                              (v2/*: any*/),
                              (v5/*: any*/),
                              (v6/*: any*/),
                              {
                                "alias": "entity",
                                "args": null,
                                "concreteType": "Collection",
                                "kind": "LinkedField",
                                "name": "collection",
                                "plural": false,
                                "selections": (v7/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "UserCollectionAccessGrant",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v3/*: any*/),
                              (v2/*: any*/),
                              (v5/*: any*/),
                              (v6/*: any*/),
                              {
                                "alias": "entity",
                                "args": null,
                                "concreteType": "Item",
                                "kind": "LinkedField",
                                "name": "item",
                                "plural": false,
                                "selections": (v7/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "UserItemAccessGrant",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v3/*: any*/),
                              (v2/*: any*/),
                              (v5/*: any*/),
                              (v6/*: any*/),
                              {
                                "alias": "entity",
                                "args": null,
                                "concreteType": "Community",
                                "kind": "LinkedField",
                                "name": "community",
                                "plural": false,
                                "selections": (v7/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "UserCommunityAccessGrant",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v7/*: any*/),
                            "type": "Node",
                            "abstractKey": "__isNode"
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
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "02db8eaabadc84eae84fec75e6c30695",
    "id": null,
    "metadata": {},
    "name": "accessManageSlugCollectionsPagesQuery",
    "operationKind": "query",
    "text": "query accessManageSlugCollectionsPagesQuery(\n  $collectionSlug: Slug!\n  $page: Int!\n) {\n  collection(slug: $collectionSlug) {\n    ...CollectionLayoutQueryFragment\n    ...RoleAccessListFragment\n    id\n  }\n}\n\nfragment CollectionLayoutFragment on Collection {\n  title\n  slug\n  ...useBreadcrumbsFragment\n}\n\nfragment CollectionLayoutQueryFragment on Collection {\n  ...CollectionLayoutFragment\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n\nfragment RoleAccessListDataFragment on AnyAccessGrantConnection {\n  edges {\n    node {\n      __typename\n      ... on UserCollectionAccessGrant {\n        id\n        slug\n        role {\n          id\n          name\n        }\n        user {\n          id\n          slug\n          name\n          email\n        }\n        entity: collection {\n          id\n        }\n      }\n      ... on UserItemAccessGrant {\n        id\n        slug\n        role {\n          id\n          name\n        }\n        user {\n          id\n          slug\n          name\n          email\n        }\n        entity: item {\n          id\n        }\n      }\n      ... on UserCommunityAccessGrant {\n        id\n        slug\n        role {\n          id\n          name\n        }\n        user {\n          id\n          slug\n          name\n          email\n        }\n        entity: community {\n          id\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment RoleAccessListFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n  allAccessGrants(page: $page, perPage: 20) {\n    ...RoleAccessListDataFragment\n  }\n}\n\nfragment useBreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cda611b77609cdefafdc60796ae1e223';
export default node;
