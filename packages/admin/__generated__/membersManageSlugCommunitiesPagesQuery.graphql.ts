/**
 * @generated SignedSource<<341e49bfb96c07eb86604c457bab4803>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type membersManageSlugCommunitiesPagesQuery$variables = {
  communitySlug: string;
  page: number;
};
export type membersManageSlugCommunitiesPagesQuery$data = {
  readonly community: {
    readonly " $fragmentSpreads": FragmentRefs<"CommunityLayoutQueryFragment" | "RoleAccessListFragment">;
  } | null | undefined;
};
export type membersManageSlugCommunitiesPagesQuery = {
  response: membersManageSlugCommunitiesPagesQuery$data;
  variables: membersManageSlugCommunitiesPagesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "communitySlug"
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
    "variableName": "communitySlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v5 = [
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
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "Role",
  "kind": "LinkedField",
  "name": "role",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/)
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
      "kind": "ScalarField",
      "name": "storage",
      "storageKey": null
    },
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
          "name": "webp",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "alt",
                  "storageKey": null
                },
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
                  "name": "width",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "height",
                  "storageKey": null
                }
              ],
              "type": "Image",
              "abstractKey": "__isImage"
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
    (v2/*: any*/),
    (v4/*: any*/),
    (v3/*: any*/),
    (v7/*: any*/),
    (v8/*: any*/)
  ],
  "storageKey": null
},
v10 = [
  (v2/*: any*/)
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
    "name": "membersManageSlugCommunitiesPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityLayoutQueryFragment"
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
    "name": "membersManageSlugCommunitiesPagesQuery",
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
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "allowedActions",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v5/*: any*/),
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
                              (v2/*: any*/),
                              (v4/*: any*/),
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
                              (v2/*: any*/),
                              (v4/*: any*/),
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
                              (v2/*: any*/),
                              (v4/*: any*/),
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
                "args": (v5/*: any*/),
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
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Role",
                            "kind": "LinkedField",
                            "name": "roles",
                            "plural": true,
                            "selections": [
                              (v3/*: any*/),
                              (v2/*: any*/)
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
                              (v2/*: any*/),
                              (v3/*: any*/),
                              (v7/*: any*/),
                              (v4/*: any*/),
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
    "cacheID": "9744c58aa60cf3d145df538baa117942",
    "id": null,
    "metadata": {},
    "name": "membersManageSlugCommunitiesPagesQuery",
    "operationKind": "query",
    "text": "query membersManageSlugCommunitiesPagesQuery(\n  $communitySlug: Slug!\n  $page: Int!\n) {\n  community(slug: $communitySlug) {\n    ...CommunityLayoutQueryFragment\n    ...RoleAccessListFragment\n    id\n  }\n}\n\nfragment AuthContextFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n\nfragment AvatarFragment on ImageAttachment {\n  storage\n  small {\n    webp {\n      ...ImageFragment\n    }\n  }\n}\n\nfragment CommunityLayoutFragment on Community {\n  id\n  name\n  slug\n  allowedActions\n  ...useChildRouteLinksFragment\n}\n\nfragment CommunityLayoutQueryFragment on Community {\n  ...CommunityLayoutFragment\n  ...AuthContextFragment\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n\nfragment RoleAccessGrantsListDataFragment on AnyAccessGrantConnection {\n  edges {\n    node {\n      __typename\n      ... on UserCollectionAccessGrant {\n        id\n        slug\n        role {\n          id\n          name\n        }\n        user {\n          id\n          slug\n          name\n          email\n          ...UserNameColumnFragment\n        }\n        entity: collection {\n          id\n        }\n      }\n      ... on UserItemAccessGrant {\n        id\n        slug\n        role {\n          id\n          name\n        }\n        user {\n          id\n          slug\n          name\n          email\n          ...UserNameColumnFragment\n        }\n        entity: item {\n          id\n        }\n      }\n      ... on UserCommunityAccessGrant {\n        id\n        slug\n        role {\n          id\n          name\n        }\n        user {\n          id\n          slug\n          name\n          email\n          ...UserNameColumnFragment\n        }\n        entity: community {\n          id\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment RoleAccessGrantsListFragment on Entity {\n  __isEntity: __typename\n  allAccessGrants(page: $page, perPage: 20) {\n    ...RoleAccessGrantsListDataFragment\n  }\n}\n\nfragment RoleAccessListFragment on Entity {\n  __isEntity: __typename\n  ...RoleAccessGrantsListFragment\n  ...RoleAssignedUsersListFragment\n}\n\nfragment RoleAssignedUsersListDataFragment on ContextualPermissionConnection {\n  edges {\n    node {\n      id\n      roles {\n        name\n        id\n      }\n      user {\n        id\n        name\n        email\n        slug\n        ...UserNameColumnCellFragment\n      }\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment RoleAssignedUsersListFragment on Entity {\n  __isEntity: __typename\n  assignedUsers(page: $page, perPage: 20) {\n    ...RoleAssignedUsersListDataFragment\n  }\n}\n\nfragment UserAvatarFragment on User {\n  avatar {\n    ...AvatarFragment\n  }\n}\n\nfragment UserNameColumnCellFragment on User {\n  name\n  slug\n  ...UserAvatarFragment\n}\n\nfragment UserNameColumnFragment on User {\n  ...UserNameColumnCellFragment\n}\n\nfragment useChildRouteLinksFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n"
  }
};
})();

(node as any).hash = "f7a42b904fedffdb0a85ad7b65bea97c";

export default node;
