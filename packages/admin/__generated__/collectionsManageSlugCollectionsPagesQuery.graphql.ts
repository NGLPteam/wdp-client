/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityOrder = "OLDEST" | "PUBLISHED_ASCENDING" | "PUBLISHED_DESCENDING" | "RECENT" | "SCHEMA_NAME_ASCENDING" | "SCHEMA_NAME_DESCENDING" | "TITLE_ASCENDING" | "TITLE_DESCENDING" | "%future added value";
export type SearchPredicateInput = {
    and?: AndOperatorInput | null | undefined;
    or?: OrOperatorInput | null | undefined;
    dateEquals?: DateEqualsOperatorInput | null | undefined;
    dateGTE?: DateGTEOperatorInput | null | undefined;
    dateLTE?: DateLTEOperatorInput | null | undefined;
    equals?: EqualsOperatorInput | null | undefined;
    matches?: MatchesOperatorInput | null | undefined;
    inAny?: InAnyOperatorInput | null | undefined;
    numericGTE?: NumericGTEOperatorInput | null | undefined;
    numericLTE?: NumericLTEOperatorInput | null | undefined;
};
export type AndOperatorInput = {
    left: SearchPredicateInput;
    right: SearchPredicateInput;
};
export type OrOperatorInput = {
    left: SearchPredicateInput;
    right: SearchPredicateInput;
};
export type DateEqualsOperatorInput = {
    path: string;
    value: string;
};
export type DateGTEOperatorInput = {
    path: string;
    value: string;
};
export type DateLTEOperatorInput = {
    path: string;
    value: string;
};
export type EqualsOperatorInput = {
    path: string;
    value: unknown;
};
export type MatchesOperatorInput = {
    path: string;
    value: string;
};
export type InAnyOperatorInput = {
    path: string;
    value: Array<string>;
};
export type NumericGTEOperatorInput = {
    path: string;
    value: number;
};
export type NumericLTEOperatorInput = {
    path: string;
    value: number;
};
export type collectionsManageSlugCollectionsPagesQueryVariables = {
    order?: EntityOrder | null | undefined;
    page: number;
    predicates?: Array<SearchPredicateInput> | null | undefined;
    query?: string | null | undefined;
    hasQuery: boolean;
    collectionSlug: string;
};
export type collectionsManageSlugCollectionsPagesQueryResponse = {
    readonly collection: {
        readonly collections: {
            readonly " $fragmentRefs": FragmentRefs<"CollectionListFragment">;
        };
        readonly search?: {
            readonly results: {
                readonly " $fragmentRefs": FragmentRefs<"CollectionListSearchFragment">;
            };
        } | undefined;
        readonly " $fragmentRefs": FragmentRefs<"CollectionLayoutQueryFragment">;
    } | null;
};
export type collectionsManageSlugCollectionsPagesQuery = {
    readonly response: collectionsManageSlugCollectionsPagesQueryResponse;
    readonly variables: collectionsManageSlugCollectionsPagesQueryVariables;
};



/*
query collectionsManageSlugCollectionsPagesQuery(
  $order: EntityOrder
  $page: Int!
  $predicates: [SearchPredicateInput!]
  $query: String
  $hasQuery: Boolean!
  $collectionSlug: Slug!
) {
  collection(slug: $collectionSlug) {
    ...CollectionLayoutQueryFragment
    collections(order: $order, page: $page, perPage: 20) {
      ...CollectionListFragment
    }
    search @include(if: $hasQuery) {
      results(query: $query, page: $page, perPage: 20, predicates: $predicates, order: $order, scope: COLLECTION) {
        ...CollectionListSearchFragment
      }
    }
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
  ...useChildRouteLinksFragment
}

fragment CollectionLayoutQueryFragment on Collection {
  ...CollectionLayoutFragment
  ...AuthContextFragment
}

fragment CollectionListFragment on CollectionConnection {
  nodes {
    id
    createdAt
    title
    slug
    schemaVersion {
      name
      number
      id
    }
    allowedActions
    ...EntityThumbnailColumnFragment
    ...PublishedDateColumnFragment
  }
  ...ModelListPageFragment
}

fragment CollectionListSearchFragment on SearchResultConnection {
  nodes {
    slug
    entity {
      __typename
      ... on Sluggable {
        __isSluggable: __typename
        slug
      }
      ... on Node {
        __isNode: __typename
        id
      }
      ... on Entity {
        __isEntity: __typename
        title
        schemaVersion {
          name
          number
          id
        }
        allowedActions
        ...PublishedDateColumnFragment
        ...EntityThumbnailColumnFragment
      }
      ... on Collection {
        createdAt
      }
      ... on Item {
        createdAt
      }
    }
  }
  ...ModelListPageFragment
}

fragment CoverImageFragment on ImageAttachment {
  storage
  medium {
    webp {
      ...ImageFragment
    }
  }
}

fragment EntityThumbnailColumnFragment on Entity {
  __isEntity: __typename
  __typename
  title
  thumbnail {
    storage
    ...CoverImageFragment
  }
  ... on Node {
    __isNode: __typename
    id
  }
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
}

fragment ImageFragment on Image {
  __isImage: __typename
  alt
  url
  width
  height
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

fragment PrecisionDateFragment on VariablePrecisionDate {
  precision
  value
}

fragment PublishedDateColumnFragment on ReferencesGlobalEntityDates {
  __isReferencesGlobalEntityDates: __typename
  published {
    ...PrecisionDateFragment
  }
}

fragment useBreadcrumbsFragment on Entity {
  __isEntity: __typename
  __typename
  title
  breadcrumbs {
    depth
    label
    kind
    slug
    id
  }
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
}

fragment useChildRouteLinksFragment on Entity {
  __isEntity: __typename
  allowedActions
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "collectionSlug"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "hasQuery"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "order"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "predicates"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v6 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "collectionSlug"
  }
],
v7 = {
  "kind": "Variable",
  "name": "order",
  "variableName": "order"
},
v8 = {
  "kind": "Variable",
  "name": "page",
  "variableName": "page"
},
v9 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 20
},
v10 = [
  (v7/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/)
],
v11 = [
  (v7/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/),
  {
    "kind": "Variable",
    "name": "predicates",
    "variableName": "predicates"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  },
  {
    "kind": "Literal",
    "name": "scope",
    "value": "COLLECTION"
  }
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaVersion",
  "kind": "LinkedField",
  "name": "schemaVersion",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "number",
      "storageKey": null
    },
    (v14/*: any*/)
  ],
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "allowedActions",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
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
      "name": "medium",
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
v20 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isSluggable"
},
v21 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "VariablePrecisionDate",
      "kind": "LinkedField",
      "name": "published",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "precision",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ReferencesGlobalEntityDates",
  "abstractKey": "__isReferencesGlobalEntityDates"
},
v22 = {
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
},
v23 = [
  (v15/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "collectionsManageSlugCollectionsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v10/*: any*/),
            "concreteType": "CollectionConnection",
            "kind": "LinkedField",
            "name": "collections",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CollectionListFragment"
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CollectionLayoutQueryFragment"
          },
          {
            "condition": "hasQuery",
            "kind": "Condition",
            "passingValue": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SearchScope",
                "kind": "LinkedField",
                "name": "search",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": (v11/*: any*/),
                    "concreteType": "SearchResultConnection",
                    "kind": "LinkedField",
                    "name": "results",
                    "plural": false,
                    "selections": [
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "CollectionListSearchFragment"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ]
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
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "collectionsManageSlugCollectionsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          {
            "alias": null,
            "args": (v10/*: any*/),
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
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v18/*: any*/),
                      (v19/*: any*/),
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isNode"
                      },
                      (v20/*: any*/)
                    ],
                    "type": "Entity",
                    "abstractKey": "__isEntity"
                  },
                  (v21/*: any*/)
                ],
                "storageKey": null
              },
              (v22/*: any*/)
            ],
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v18/*: any*/),
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
                  (v13/*: any*/),
                  (v14/*: any*/)
                ],
                "storageKey": null
              },
              (v17/*: any*/),
              (v20/*: any*/)
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          {
            "condition": "hasQuery",
            "kind": "Condition",
            "passingValue": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SearchScope",
                "kind": "LinkedField",
                "name": "search",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": (v11/*: any*/),
                    "concreteType": "SearchResultConnection",
                    "kind": "LinkedField",
                    "name": "results",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SearchResult",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v13/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "entity",
                            "plural": false,
                            "selections": [
                              (v18/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v13/*: any*/)
                                ],
                                "type": "Sluggable",
                                "abstractKey": "__isSluggable"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v14/*: any*/)
                                ],
                                "type": "Node",
                                "abstractKey": "__isNode"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v12/*: any*/),
                                  (v16/*: any*/),
                                  (v17/*: any*/),
                                  (v19/*: any*/),
                                  (v21/*: any*/)
                                ],
                                "type": "Entity",
                                "abstractKey": "__isEntity"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v23/*: any*/),
                                "type": "Collection",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v23/*: any*/),
                                "type": "Item",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v22/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7f12667ec240a9594694915c5e686489",
    "id": null,
    "metadata": {},
    "name": "collectionsManageSlugCollectionsPagesQuery",
    "operationKind": "query",
    "text": "query collectionsManageSlugCollectionsPagesQuery(\n  $order: EntityOrder\n  $page: Int!\n  $predicates: [SearchPredicateInput!]\n  $query: String\n  $hasQuery: Boolean!\n  $collectionSlug: Slug!\n) {\n  collection(slug: $collectionSlug) {\n    ...CollectionLayoutQueryFragment\n    collections(order: $order, page: $page, perPage: 20) {\n      ...CollectionListFragment\n    }\n    search @include(if: $hasQuery) {\n      results(query: $query, page: $page, perPage: 20, predicates: $predicates, order: $order, scope: COLLECTION) {\n        ...CollectionListSearchFragment\n      }\n    }\n    id\n  }\n}\n\nfragment AuthContextFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n\nfragment CollectionLayoutFragment on Collection {\n  title\n  slug\n  id\n  ...useBreadcrumbsFragment\n  ...useChildRouteLinksFragment\n}\n\nfragment CollectionLayoutQueryFragment on Collection {\n  ...CollectionLayoutFragment\n  ...AuthContextFragment\n}\n\nfragment CollectionListFragment on CollectionConnection {\n  nodes {\n    id\n    createdAt\n    title\n    slug\n    schemaVersion {\n      name\n      number\n      id\n    }\n    allowedActions\n    ...EntityThumbnailColumnFragment\n    ...PublishedDateColumnFragment\n  }\n  ...ModelListPageFragment\n}\n\nfragment CollectionListSearchFragment on SearchResultConnection {\n  nodes {\n    slug\n    entity {\n      __typename\n      ... on Sluggable {\n        __isSluggable: __typename\n        slug\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n      ... on Entity {\n        __isEntity: __typename\n        title\n        schemaVersion {\n          name\n          number\n          id\n        }\n        allowedActions\n        ...PublishedDateColumnFragment\n        ...EntityThumbnailColumnFragment\n      }\n      ... on Collection {\n        createdAt\n      }\n      ... on Item {\n        createdAt\n      }\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  storage\n  medium {\n    webp {\n      ...ImageFragment\n    }\n  }\n}\n\nfragment EntityThumbnailColumnFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PublishedDateColumnFragment on ReferencesGlobalEntityDates {\n  __isReferencesGlobalEntityDates: __typename\n  published {\n    ...PrecisionDateFragment\n  }\n}\n\nfragment useBreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment useChildRouteLinksFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n"
  }
};
})();
(node as any).hash = '75326207697547efee44c65f2e9ab49f';
export default node;
