/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityOrder = "OLDEST" | "PUBLISHED_ASCENDING" | "PUBLISHED_DESCENDING" | "RECENT" | "SCHEMA_NAME_ASCENDING" | "SCHEMA_NAME_DESCENDING" | "TITLE_ASCENDING" | "TITLE_DESCENDING" | "%future added value";
export type itemsQueryVariables = {
    order?: EntityOrder | null | undefined;
    page: number;
};
export type itemsQueryResponse = {
    readonly viewer: {
        readonly items: {
            readonly " $fragmentRefs": FragmentRefs<"ItemListFragment">;
        };
    };
};
export type itemsQuery = {
    readonly response: itemsQueryResponse;
    readonly variables: itemsQueryVariables;
};



/*
query itemsQuery(
  $order: EntityOrder
  $page: Int!
) {
  viewer {
    items(order: $order, page: $page, perPage: 20) {
      ...ItemListFragment
    }
    id
  }
}

fragment ContributorsColumnFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Item {
    slug
    contributions(page: 1, perPage: 1) {
      edges {
        node {
          contributor {
            __typename
            ... on OrganizationContributor {
              slug
              legalName
            }
            ... on PersonContributor {
              slug
              givenName
              familyName
            }
            ... on Node {
              __isNode: __typename
              id
            }
          }
          id
        }
      }
      pageInfo {
        totalCount
      }
    }
  }
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

fragment ItemListFragment on ItemConnection {
  nodes {
    id
    slug
    createdAt
    title
    schemaVersion {
      name
      number
      id
    }
    items {
      pageInfo {
        totalCount
      }
    }
    allowedActions
    ...ContributorsColumnFragment
    ...EntityThumbnailColumnFragment
    ...PublishedDateColumnFragment
  }
  ...ModelListPageFragment
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "order"
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
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v4/*: any*/)
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "itemsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "ItemConnection",
            "kind": "LinkedField",
            "name": "items",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ItemListFragment"
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
    "name": "itemsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
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
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
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
                    "name": "title",
                    "storageKey": null
                  },
                  {
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
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemConnection",
                    "kind": "LinkedField",
                    "name": "items",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/)
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
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "page",
                                "value": 1
                              },
                              {
                                "kind": "Literal",
                                "name": "perPage",
                                "value": 1
                              }
                            ],
                            "concreteType": "ItemContributionConnection",
                            "kind": "LinkedField",
                            "name": "contributions",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ItemContributionEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ItemContribution",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": null,
                                        "kind": "LinkedField",
                                        "name": "contributor",
                                        "plural": false,
                                        "selections": [
                                          (v6/*: any*/),
                                          {
                                            "kind": "InlineFragment",
                                            "selections": [
                                              (v3/*: any*/),
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "legalName",
                                                "storageKey": null
                                              }
                                            ],
                                            "type": "OrganizationContributor",
                                            "abstractKey": null
                                          },
                                          {
                                            "kind": "InlineFragment",
                                            "selections": [
                                              (v3/*: any*/),
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "givenName",
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "kind": "ScalarField",
                                                "name": "familyName",
                                                "storageKey": null
                                              }
                                            ],
                                            "type": "PersonContributor",
                                            "abstractKey": null
                                          },
                                          {
                                            "kind": "InlineFragment",
                                            "selections": [
                                              (v2/*: any*/)
                                            ],
                                            "type": "Node",
                                            "abstractKey": "__isNode"
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      (v2/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v5/*: any*/)
                            ],
                            "storageKey": "contributions(page:1,perPage:1)"
                          }
                        ],
                        "type": "Item",
                        "abstractKey": null
                      }
                    ],
                    "type": "AnyEntity",
                    "abstractKey": "__isAnyEntity"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v6/*: any*/),
                      {
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
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isNode"
                      },
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isSluggable"
                      }
                    ],
                    "type": "Entity",
                    "abstractKey": "__isEntity"
                  },
                  {
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
                      (v4/*: any*/)
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
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5c9b4c78d50da89fab5447d8f791a23e",
    "id": null,
    "metadata": {},
    "name": "itemsQuery",
    "operationKind": "query",
    "text": "query itemsQuery(\n  $order: EntityOrder\n  $page: Int!\n) {\n  viewer {\n    items(order: $order, page: $page, perPage: 20) {\n      ...ItemListFragment\n    }\n    id\n  }\n}\n\nfragment ContributorsColumnFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    slug\n    contributions(page: 1, perPage: 1) {\n      edges {\n        node {\n          contributor {\n            __typename\n            ... on OrganizationContributor {\n              slug\n              legalName\n            }\n            ... on PersonContributor {\n              slug\n              givenName\n              familyName\n            }\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          id\n        }\n      }\n      pageInfo {\n        totalCount\n      }\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  storage\n  medium {\n    webp {\n      ...ImageFragment\n    }\n  }\n}\n\nfragment EntityThumbnailColumnFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment ItemListFragment on ItemConnection {\n  nodes {\n    id\n    slug\n    createdAt\n    title\n    schemaVersion {\n      name\n      number\n      id\n    }\n    items {\n      pageInfo {\n        totalCount\n      }\n    }\n    allowedActions\n    ...ContributorsColumnFragment\n    ...EntityThumbnailColumnFragment\n    ...PublishedDateColumnFragment\n  }\n  ...ModelListPageFragment\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PublishedDateColumnFragment on ReferencesGlobalEntityDates {\n  __isReferencesGlobalEntityDates: __typename\n  published {\n    ...PrecisionDateFragment\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f1eb4c05b1e57184e8cf1877deb42da1';
export default node;
