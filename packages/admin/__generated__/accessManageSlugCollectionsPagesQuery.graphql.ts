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

fragment AuthContextFragment on Entity {
  __isEntity: __typename
  allowedActions
}

fragment CollectionLayoutFragment on Collection {
  title
  slug
  id
  ...useBreadcrumbsFragment
}

fragment CollectionLayoutQueryFragment on Collection {
  ...CollectionLayoutFragment
  ...AuthContextFragment
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

fragment RoleAccessGrantsListDataFragment on AnyAccessGrantConnection {
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
          ...UserNameColumnCellFragment
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
          ...UserNameColumnCellFragment
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
          ...UserNameColumnCellFragment
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

fragment RoleAccessGrantsListFragment on Entity {
  __isEntity: __typename
  allAccessGrants(page: $page, perPage: 20) {
    ...RoleAccessGrantsListDataFragment
  }
}

fragment RoleAccessListFragment on Entity {
  __isEntity: __typename
  ...RoleAccessGrantsListFragment
  ...RoleAssignedUsersListFragment
}

fragment RoleAssignedUsersListDataFragment on ContextualPermissionConnection {
  edges {
    node {
      id
      roles {
        name
        id
      }
      user {
        id
        name
        email
        slug
        ...UserNameColumnCellFragment
      }
    }
  }
  ...ModelListPageFragment
}

fragment RoleAssignedUsersListFragment on Entity {
  __isEntity: __typename
  assignedUsers(page: $page, perPage: 20) {
    ...RoleAssignedUsersListDataFragment
  }
}

fragment UserAvatarFragment on User {
  avatar {
    small {
      png {
        url
        alt
      }
    }
  }
}

fragment UserNameColumnCellFragment on User {
  name
  slug
  ...UserAvatarFragment
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
v4 = [
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
  "concreteType": "Role",
  "kind": "LinkedField",
  "name": "role",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v5/*: any*/)
  ],
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "avatar",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "small",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageDerivative",
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
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v2/*: any*/),
    (v5/*: any*/),
    (v7/*: any*/),
    (v8/*: any*/)
  ],
  "storageKey": null
},
v10 = [
  (v3/*: any*/)
],
v11 = {
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
};
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
                "args": (v4/*: any*/),
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
                              (v6/*: any*/),
                              (v9/*: any*/),
                              {
                                "alias": "entity",
                                "args": null,
                                "concreteType": "Collection",
                                "kind": "LinkedField",
                                "name": "collection",
                                "plural": false,
                                "selections": (v10/*: any*/),
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
                              (v6/*: any*/),
                              (v9/*: any*/),
                              {
                                "alias": "entity",
                                "args": null,
                                "concreteType": "Item",
                                "kind": "LinkedField",
                                "name": "item",
                                "plural": false,
                                "selections": (v10/*: any*/),
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
                              (v6/*: any*/),
                              (v9/*: any*/),
                              {
                                "alias": "entity",
                                "args": null,
                                "concreteType": "Community",
                                "kind": "LinkedField",
                                "name": "community",
                                "plural": false,
                                "selections": (v10/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "type": "UserCommunityAccessGrant",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v10/*: any*/),
                            "type": "Node",
                            "abstractKey": "__isNode"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v11/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "ContextualPermissionConnection",
                "kind": "LinkedField",
                "name": "assignedUsers",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ContextualPermissionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ContextualPermission",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Role",
                            "kind": "LinkedField",
                            "name": "roles",
                            "plural": true,
                            "selections": [
                              (v5/*: any*/),
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "User",
                            "kind": "LinkedField",
                            "name": "user",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v5/*: any*/),
                              (v7/*: any*/),
                              (v2/*: any*/),
                              (v8/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v11/*: any*/)
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
    "cacheID": "0069350b31fe3c8363c4746b4af67ebc",
    "id": null,
    "metadata": {},
    "name": "accessManageSlugCollectionsPagesQuery",
    "operationKind": "query",
    "text": "query accessManageSlugCollectionsPagesQuery(\n  $collectionSlug: Slug!\n  $page: Int!\n) {\n  collection(slug: $collectionSlug) {\n    ...CollectionLayoutQueryFragment\n    ...RoleAccessListFragment\n    id\n  }\n}\n\nfragment AuthContextFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n\nfragment CollectionLayoutFragment on Collection {\n  title\n  slug\n  id\n  ...useBreadcrumbsFragment\n}\n\nfragment CollectionLayoutQueryFragment on Collection {\n  ...CollectionLayoutFragment\n  ...AuthContextFragment\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n\nfragment RoleAccessGrantsListDataFragment on AnyAccessGrantConnection {\n  edges {\n    node {\n      __typename\n      ... on UserCollectionAccessGrant {\n        id\n        slug\n        role {\n          id\n          name\n        }\n        user {\n          id\n          slug\n          name\n          email\n          ...UserNameColumnCellFragment\n        }\n        entity: collection {\n          id\n        }\n      }\n      ... on UserItemAccessGrant {\n        id\n        slug\n        role {\n          id\n          name\n        }\n        user {\n          id\n          slug\n          name\n          email\n          ...UserNameColumnCellFragment\n        }\n        entity: item {\n          id\n        }\n      }\n      ... on UserCommunityAccessGrant {\n        id\n        slug\n        role {\n          id\n          name\n        }\n        user {\n          id\n          slug\n          name\n          email\n          ...UserNameColumnCellFragment\n        }\n        entity: community {\n          id\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment RoleAccessGrantsListFragment on Entity {\n  __isEntity: __typename\n  allAccessGrants(page: $page, perPage: 20) {\n    ...RoleAccessGrantsListDataFragment\n  }\n}\n\nfragment RoleAccessListFragment on Entity {\n  __isEntity: __typename\n  ...RoleAccessGrantsListFragment\n  ...RoleAssignedUsersListFragment\n}\n\nfragment RoleAssignedUsersListDataFragment on ContextualPermissionConnection {\n  edges {\n    node {\n      id\n      roles {\n        name\n        id\n      }\n      user {\n        id\n        name\n        email\n        slug\n        ...UserNameColumnCellFragment\n      }\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment RoleAssignedUsersListFragment on Entity {\n  __isEntity: __typename\n  assignedUsers(page: $page, perPage: 20) {\n    ...RoleAssignedUsersListDataFragment\n  }\n}\n\nfragment UserAvatarFragment on User {\n  avatar {\n    small {\n      png {\n        url\n        alt\n      }\n    }\n  }\n}\n\nfragment UserNameColumnCellFragment on User {\n  name\n  slug\n  ...UserAvatarFragment\n}\n\nfragment useBreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cda611b77609cdefafdc60796ae1e223';
export default node;
