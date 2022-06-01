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
export type itemsSlugItemsPagesQueryVariables = {
    order?: EntityOrder | null | undefined;
    page: number;
    predicates?: Array<SearchPredicateInput> | null | undefined;
    query?: string | null | undefined;
    hasQuery: boolean;
    itemSlug: string;
    schema?: Array<string> | null | undefined;
};
export type itemsSlugItemsPagesQueryResponse = {
    readonly item: {
        readonly items: {
            readonly " $fragmentRefs": FragmentRefs<"ItemListFragment">;
        };
        readonly search: {
            readonly " $fragmentRefs": FragmentRefs<"ItemListSearchFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"ItemLayoutQueryFragment">;
    } | null;
};
export type itemsSlugItemsPagesQuery = {
    readonly response: itemsSlugItemsPagesQueryResponse;
    readonly variables: itemsSlugItemsPagesQueryVariables;
};



/*
query itemsSlugItemsPagesQuery(
  $order: EntityOrder
  $page: Int!
  $predicates: [SearchPredicateInput!]
  $query: String
  $hasQuery: Boolean!
  $itemSlug: Slug!
  $schema: [String!]
) {
  item(slug: $itemSlug) {
    ...ItemLayoutQueryFragment
    items(order: $order, page: $page, perPage: 20) {
      ...ItemListFragment
    }
    search(visibility: ALL, maxDepth: 1) {
      ...ItemListSearchFragment_1V70IR
    }
    id
  }
}

fragment AuthContextFragment on Entity {
  __isEntity: __typename
  allowedActions
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

fragment CurrentSearchFiltersFragment on SearchScope {
  coreProperties {
    ... on SearchableProperty {
      __isSearchableProperty: __typename
      searchPath
      label
    }
  }
  schemas: availableSchemaVersions {
    name
    schemaDefinition {
      slug
      id
    }
    searchableProperties {
      __typename
      ... on SearchableProperty {
        __isSearchableProperty: __typename
        searchPath
        label
      }
    }
    id
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

fragment ItemLayoutFragment on Item {
  title
  slug
  id
  ...useBreadcrumbsFragment
  ...useChildRouteLinksFragment
}

fragment ItemLayoutQueryFragment on Item {
  ...ItemLayoutFragment
  ...AuthContextFragment
}

fragment ItemListFragment on ItemConnection {
  nodes {
    id
    slug
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

fragment ItemListSearchFragment_1V70IR on SearchScope {
  results(query: $query, page: $page, perPage: 20, predicates: $predicates, order: $order, scope: ITEM, schema: $schema) @include(if: $hasQuery) {
    nodes {
      slug
      entity {
        __typename
        ... on Node {
          __isNode: __typename
          id
        }
        ... on Sluggable {
          __isSluggable: __typename
          slug
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
          ...ContributorsColumnFragment
          ...EntityThumbnailColumnFragment
          ...PublishedDateColumnFragment
        }
        ... on Item {
          items {
            pageInfo {
              totalCount
            }
          }
        }
      }
      id
    }
    ...ModelListPageFragment
  }
  ...ModelListPageSearchFragment
}

fragment ModelListPageFragment on Paginated {
  __isPaginated: __typename
  ...ModelPageCountActionsFragment
  ...ModelPaginationFragment
}

fragment ModelListPageSearchFragment on SearchScope {
  ...CurrentSearchFiltersFragment
  ...SearchWithFiltersFragment
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

fragment SearchFilterBooleanFragment on SearchableProperty {
  __isSearchableProperty: __typename
  label
  description
  searchPath
  searchOperators
}

fragment SearchFilterDrawerFragment on SearchScope {
  ...SearchFilterFormFragment
}

fragment SearchFilterFormFragment on SearchScope {
  coreProperties {
    ... on SearchableProperty {
      __isSearchableProperty: __typename
      searchPath
    }
    ...SearchFilterFragment
  }
  schemas: availableSchemaVersions {
    searchableProperties {
      __typename
      ... on SearchableProperty {
        __isSearchableProperty: __typename
        searchPath
        label
      }
      ...SearchFilterFragment
    }
    id
  }
  ...SearchSchemaFilterFragment
}

fragment SearchFilterFragment on SearchableProperty {
  __isSearchableProperty: __typename
  ... on ScalarProperty {
    __isScalarProperty: __typename
    type
  }
  ...SearchFilterInputFragment
  ...SearchFilterSelectFragment
  ...SearchFilterBooleanFragment
}

fragment SearchFilterInputFragment on SearchableProperty {
  __isSearchableProperty: __typename
  label
  description
  searchPath
  searchOperators
}

fragment SearchFilterSelectFragment on SearchableProperty {
  __isSearchableProperty: __typename
  label
  description
  searchPath
  searchOperators
  ... on SelectProperty {
    options {
      label
      value
    }
  }
}

fragment SearchSchemaFilterFragment on SearchScope {
  schemas: availableSchemaVersions {
    name
    schemaDefinition {
      slug
      id
    }
    id
  }
}

fragment SearchWithFiltersFragment on SearchScope {
  ...SearchFilterDrawerFragment
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
  "name": "hasQuery"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "itemSlug"
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
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "schema"
},
v7 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "itemSlug"
  }
],
v8 = {
  "kind": "Variable",
  "name": "order",
  "variableName": "order"
},
v9 = {
  "kind": "Variable",
  "name": "page",
  "variableName": "page"
},
v10 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 20
},
v11 = [
  (v8/*: any*/),
  (v9/*: any*/),
  (v10/*: any*/)
],
v12 = [
  {
    "kind": "Literal",
    "name": "maxDepth",
    "value": 1
  },
  {
    "kind": "Literal",
    "name": "visibility",
    "value": "ALL"
  }
],
v13 = {
  "kind": "Variable",
  "name": "predicates",
  "variableName": "predicates"
},
v14 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v15 = {
  "kind": "Variable",
  "name": "schema",
  "variableName": "schema"
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaVersion",
  "kind": "LinkedField",
  "name": "schemaVersion",
  "plural": false,
  "selections": [
    (v19/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "number",
      "storageKey": null
    },
    (v18/*: any*/)
  ],
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v21/*: any*/)
  ],
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "concreteType": "ItemConnection",
  "kind": "LinkedField",
  "name": "items",
  "plural": false,
  "selections": [
    (v22/*: any*/)
  ],
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "allowedActions",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v26 = {
  "kind": "InlineFragment",
  "selections": [
    (v18/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v27 = {
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
                (v25/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v17/*: any*/),
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
                    (v17/*: any*/),
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
                (v26/*: any*/)
              ],
              "storageKey": null
            },
            (v18/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v22/*: any*/)
  ],
  "storageKey": "contributions(page:1,perPage:1)"
},
v28 = {
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
v29 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isSluggable"
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v31 = {
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
        (v30/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "ReferencesGlobalEntityDates",
  "abstractKey": "__isReferencesGlobalEntityDates"
},
v32 = {
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
        (v21/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Paginated",
  "abstractKey": "__isPaginated"
},
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v34 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "searchPath",
      "storageKey": null
    },
    (v33/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "searchOperators",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        }
      ],
      "type": "ScalarProperty",
      "abstractKey": "__isScalarProperty"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SelectOption",
          "kind": "LinkedField",
          "name": "options",
          "plural": true,
          "selections": [
            (v33/*: any*/),
            (v30/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "SelectProperty",
      "abstractKey": null
    }
  ],
  "type": "SearchableProperty",
  "abstractKey": "__isSearchableProperty"
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "itemsSlugItemsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v11/*: any*/),
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
          },
          {
            "alias": null,
            "args": (v12/*: any*/),
            "concreteType": "SearchScope",
            "kind": "LinkedField",
            "name": "search",
            "plural": false,
            "selections": [
              {
                "args": [
                  {
                    "kind": "Variable",
                    "name": "hasQuery",
                    "variableName": "hasQuery"
                  },
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/)
                ],
                "kind": "FragmentSpread",
                "name": "ItemListSearchFragment"
              }
            ],
            "storageKey": "search(maxDepth:1,visibility:\"ALL\")"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemLayoutQueryFragment"
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
      (v0/*: any*/),
      (v1/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Operation",
    "name": "itemsSlugItemsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v16/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
          {
            "alias": null,
            "args": (v11/*: any*/),
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
                  (v18/*: any*/),
                  (v17/*: any*/),
                  (v16/*: any*/),
                  (v20/*: any*/),
                  (v23/*: any*/),
                  (v24/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v27/*: any*/)
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
                      (v25/*: any*/),
                      (v28/*: any*/),
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isNode"
                      },
                      (v29/*: any*/)
                    ],
                    "type": "Entity",
                    "abstractKey": "__isEntity"
                  },
                  (v31/*: any*/)
                ],
                "storageKey": null
              },
              (v32/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v12/*: any*/),
            "concreteType": "SearchScope",
            "kind": "LinkedField",
            "name": "search",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SearchableCoreProperty",
                "kind": "LinkedField",
                "name": "coreProperties",
                "plural": true,
                "selections": [
                  (v34/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": "schemas",
                "args": null,
                "concreteType": "SchemaVersion",
                "kind": "LinkedField",
                "name": "availableSchemaVersions",
                "plural": true,
                "selections": [
                  (v19/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SchemaDefinition",
                    "kind": "LinkedField",
                    "name": "schemaDefinition",
                    "plural": false,
                    "selections": [
                      (v17/*: any*/),
                      (v18/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "searchableProperties",
                    "plural": true,
                    "selections": [
                      (v25/*: any*/),
                      (v34/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v18/*: any*/)
                ],
                "storageKey": null
              },
              {
                "condition": "hasQuery",
                "kind": "Condition",
                "passingValue": true,
                "selections": [
                  {
                    "alias": null,
                    "args": [
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
                      {
                        "kind": "Literal",
                        "name": "scope",
                        "value": "ITEM"
                      }
                    ],
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
                          (v17/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "entity",
                            "plural": false,
                            "selections": [
                              (v25/*: any*/),
                              (v26/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v17/*: any*/)
                                ],
                                "type": "Sluggable",
                                "abstractKey": "__isSluggable"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v16/*: any*/),
                                  (v20/*: any*/),
                                  (v24/*: any*/),
                                  (v28/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v17/*: any*/),
                                          (v27/*: any*/)
                                        ],
                                        "type": "Item",
                                        "abstractKey": null
                                      }
                                    ],
                                    "type": "AnyEntity",
                                    "abstractKey": "__isAnyEntity"
                                  },
                                  (v31/*: any*/)
                                ],
                                "type": "Entity",
                                "abstractKey": "__isEntity"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v23/*: any*/)
                                ],
                                "type": "Item",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v18/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v32/*: any*/)
                    ],
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": "search(maxDepth:1,visibility:\"ALL\")"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v25/*: any*/),
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
                  (v33/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "kind",
                    "storageKey": null
                  },
                  (v17/*: any*/),
                  (v18/*: any*/)
                ],
                "storageKey": null
              },
              (v24/*: any*/),
              (v29/*: any*/)
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
    "cacheID": "62bbca49b3090bcba9140a336c9dcba8",
    "id": null,
    "metadata": {},
    "name": "itemsSlugItemsPagesQuery",
    "operationKind": "query",
    "text": "query itemsSlugItemsPagesQuery(\n  $order: EntityOrder\n  $page: Int!\n  $predicates: [SearchPredicateInput!]\n  $query: String\n  $hasQuery: Boolean!\n  $itemSlug: Slug!\n  $schema: [String!]\n) {\n  item(slug: $itemSlug) {\n    ...ItemLayoutQueryFragment\n    items(order: $order, page: $page, perPage: 20) {\n      ...ItemListFragment\n    }\n    search(visibility: ALL, maxDepth: 1) {\n      ...ItemListSearchFragment_1V70IR\n    }\n    id\n  }\n}\n\nfragment AuthContextFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n\nfragment ContributorsColumnFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    slug\n    contributions(page: 1, perPage: 1) {\n      edges {\n        node {\n          contributor {\n            __typename\n            ... on OrganizationContributor {\n              slug\n              legalName\n            }\n            ... on PersonContributor {\n              slug\n              givenName\n              familyName\n            }\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          id\n        }\n      }\n      pageInfo {\n        totalCount\n      }\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  storage\n  medium {\n    webp {\n      ...ImageFragment\n    }\n  }\n}\n\nfragment CurrentSearchFiltersFragment on SearchScope {\n  coreProperties {\n    ... on SearchableProperty {\n      __isSearchableProperty: __typename\n      searchPath\n      label\n    }\n  }\n  schemas: availableSchemaVersions {\n    name\n    schemaDefinition {\n      slug\n      id\n    }\n    searchableProperties {\n      __typename\n      ... on SearchableProperty {\n        __isSearchableProperty: __typename\n        searchPath\n        label\n      }\n    }\n    id\n  }\n}\n\nfragment EntityThumbnailColumnFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment ItemLayoutFragment on Item {\n  title\n  slug\n  id\n  ...useBreadcrumbsFragment\n  ...useChildRouteLinksFragment\n}\n\nfragment ItemLayoutQueryFragment on Item {\n  ...ItemLayoutFragment\n  ...AuthContextFragment\n}\n\nfragment ItemListFragment on ItemConnection {\n  nodes {\n    id\n    slug\n    title\n    schemaVersion {\n      name\n      number\n      id\n    }\n    items {\n      pageInfo {\n        totalCount\n      }\n    }\n    allowedActions\n    ...ContributorsColumnFragment\n    ...EntityThumbnailColumnFragment\n    ...PublishedDateColumnFragment\n  }\n  ...ModelListPageFragment\n}\n\nfragment ItemListSearchFragment_1V70IR on SearchScope {\n  results(query: $query, page: $page, perPage: 20, predicates: $predicates, order: $order, scope: ITEM, schema: $schema) @include(if: $hasQuery) {\n    nodes {\n      slug\n      entity {\n        __typename\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ... on Entity {\n          __isEntity: __typename\n          title\n          schemaVersion {\n            name\n            number\n            id\n          }\n          allowedActions\n          ...ContributorsColumnFragment\n          ...EntityThumbnailColumnFragment\n          ...PublishedDateColumnFragment\n        }\n        ... on Item {\n          items {\n            pageInfo {\n              totalCount\n            }\n          }\n        }\n      }\n      id\n    }\n    ...ModelListPageFragment\n  }\n  ...ModelListPageSearchFragment\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelListPageSearchFragment on SearchScope {\n  ...CurrentSearchFiltersFragment\n  ...SearchWithFiltersFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PublishedDateColumnFragment on ReferencesGlobalEntityDates {\n  __isReferencesGlobalEntityDates: __typename\n  published {\n    ...PrecisionDateFragment\n  }\n}\n\nfragment SearchFilterBooleanFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterDrawerFragment on SearchScope {\n  ...SearchFilterFormFragment\n}\n\nfragment SearchFilterFormFragment on SearchScope {\n  coreProperties {\n    ... on SearchableProperty {\n      __isSearchableProperty: __typename\n      searchPath\n    }\n    ...SearchFilterFragment\n  }\n  schemas: availableSchemaVersions {\n    searchableProperties {\n      __typename\n      ... on SearchableProperty {\n        __isSearchableProperty: __typename\n        searchPath\n        label\n      }\n      ...SearchFilterFragment\n    }\n    id\n  }\n  ...SearchSchemaFilterFragment\n}\n\nfragment SearchFilterFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  ... on ScalarProperty {\n    __isScalarProperty: __typename\n    type\n  }\n  ...SearchFilterInputFragment\n  ...SearchFilterSelectFragment\n  ...SearchFilterBooleanFragment\n}\n\nfragment SearchFilterInputFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterSelectFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n  ... on SelectProperty {\n    options {\n      label\n      value\n    }\n  }\n}\n\nfragment SearchSchemaFilterFragment on SearchScope {\n  schemas: availableSchemaVersions {\n    name\n    schemaDefinition {\n      slug\n      id\n    }\n    id\n  }\n}\n\nfragment SearchWithFiltersFragment on SearchScope {\n  ...SearchFilterDrawerFragment\n}\n\nfragment useBreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment useChildRouteLinksFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n"
  }
};
})();
(node as any).hash = 'cd9618fd6bc80cfe8e80014d006cd20d';
export default node;
