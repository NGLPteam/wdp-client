/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type accessManageSlugItemsPagesQueryVariables = {
    itemSlug: string;
    page: number;
};
export type accessManageSlugItemsPagesQueryResponse = {
    readonly item: {
        readonly " $fragmentRefs": FragmentRefs<"ItemLayoutQueryFragment" | "ItemAccessListFragment">;
    } | null;
};
export type accessManageSlugItemsPagesQuery = {
    readonly response: accessManageSlugItemsPagesQueryResponse;
    readonly variables: accessManageSlugItemsPagesQueryVariables;
};



/*
query accessManageSlugItemsPagesQuery(
  $itemSlug: Slug!
  $page: Int!
) {
  item(slug: $itemSlug) {
    ...ItemLayoutQueryFragment
    ...ItemAccessListFragment
    id
  }
}

fragment ItemAccessListDataFragment on ContextualPermissionConnection {
  edges {
    node {
      id
      roles {
        name
        id
      }
      user {
        name
        email
        id
      }
    }
  }
  ...ModelListPageFragment
}

fragment ItemAccessListFragment on Entity {
  __isEntity: __typename
  allowedActions
  assignedUsers(order: USER_NAME_ASC, page: $page, perPage: 20) {
    ...ItemAccessListDataFragment
  }
}

fragment ItemLayoutFragment on Item {
  title
  slug
  ...useBreadcrumbsFragment
}

fragment ItemLayoutQueryFragment on Item {
  ...ItemLayoutFragment
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
    "name": "itemSlug"
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
    "variableName": "itemSlug"
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "accessManageSlugItemsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemLayoutQueryFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemAccessListFragment"
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
    "name": "accessManageSlugItemsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
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
                    "kind": "Literal",
                    "name": "order",
                    "value": "USER_NAME_ASC"
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
                              (v4/*: any*/),
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
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "email",
                                "storageKey": null
                              },
                              (v3/*: any*/)
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
    "cacheID": "1e326f306e747cb32a12e37a198a961a",
    "id": null,
    "metadata": {},
    "name": "accessManageSlugItemsPagesQuery",
    "operationKind": "query",
    "text": "query accessManageSlugItemsPagesQuery(\n  $itemSlug: Slug!\n  $page: Int!\n) {\n  item(slug: $itemSlug) {\n    ...ItemLayoutQueryFragment\n    ...ItemAccessListFragment\n    id\n  }\n}\n\nfragment ItemAccessListDataFragment on ContextualPermissionConnection {\n  edges {\n    node {\n      id\n      roles {\n        name\n        id\n      }\n      user {\n        name\n        email\n        id\n      }\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment ItemAccessListFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n  assignedUsers(order: USER_NAME_ASC, page: $page, perPage: 20) {\n    ...ItemAccessListDataFragment\n  }\n}\n\nfragment ItemLayoutFragment on Item {\n  title\n  slug\n  ...useBreadcrumbsFragment\n}\n\nfragment ItemLayoutQueryFragment on Item {\n  ...ItemLayoutFragment\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n\nfragment useBreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '4111ad01a529a6ad1e71bf36861e8df6';
export default node;
