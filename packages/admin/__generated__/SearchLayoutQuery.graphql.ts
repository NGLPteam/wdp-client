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
export type SearchLayoutQueryVariables = {
    order?: EntityOrder | null | undefined;
    page?: number | null | undefined;
    predicates?: Array<SearchPredicateInput> | null | undefined;
    query?: string | null | undefined;
};
export type SearchLayoutQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"SearchLayoutQueryFragment">;
};
export type SearchLayoutQuery = {
    readonly response: SearchLayoutQueryResponse;
    readonly variables: SearchLayoutQueryVariables;
};



/*
query SearchLayoutQuery(
  $order: EntityOrder = PUBLISHED_ASCENDING
  $page: Int = 1
  $predicates: [SearchPredicateInput!] = []
  $query: String = ""
) {
  ...SearchLayoutQueryFragment_2QNE8l
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

fragment ModelListPageFragment on Paginated {
  __isPaginated: __typename
  ...ModelPageCountActionsFragment
  ...ModelPaginationFragment
}

fragment ModelListPageSearchFragment on SearchScope {
  ...CurrentSearchFiltersFragment
  ...SearchFragment
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

fragment SearchFragment on SearchScope {
  ...SearchFilterDrawerFragment
}

fragment SearchLayoutFragment_2QNE8l on Searchable {
  __isSearchable: __typename
  search(visibility: ALL) {
    ...SearchResultListFragment_2QNE8l
  }
}

fragment SearchLayoutQueryFragment_2QNE8l on Query {
  ...SearchLayoutFragment_2QNE8l
}

fragment SearchResultListFragment_2QNE8l on SearchScope {
  results(query: $query, page: $page, predicates: $predicates, order: $order, perPage: 20) {
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
            kind
            id
          }
          allowedActions
          ...EntityThumbnailColumnFragment
          ...PublishedDateColumnFragment
        }
      }
    }
    pageInfo {
      totalCount
    }
    ...ModelListPageFragment
  }
  ...ModelListPageSearchFragment
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": "PUBLISHED_ASCENDING",
    "kind": "LocalArgument",
    "name": "order"
  },
  {
    "defaultValue": 1,
    "kind": "LocalArgument",
    "name": "page"
  },
  {
    "defaultValue": ([]/*: any*/),
    "kind": "LocalArgument",
    "name": "predicates"
  },
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "query"
  }
],
v1 = {
  "kind": "Variable",
  "name": "order",
  "variableName": "order"
},
v2 = {
  "kind": "Variable",
  "name": "page",
  "variableName": "page"
},
v3 = {
  "kind": "Variable",
  "name": "predicates",
  "variableName": "predicates"
},
v4 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
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
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v10 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "searchPath",
      "storageKey": null
    },
    (v9/*: any*/),
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
            (v9/*: any*/),
            (v8/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchLayoutQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "SearchLayoutQueryFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchLayoutQuery",
    "selections": [
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "visibility",
                "value": "ALL"
              }
            ],
            "concreteType": "SearchScope",
            "kind": "LinkedField",
            "name": "search",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "perPage",
                    "value": 20
                  },
                  (v3/*: any*/),
                  (v4/*: any*/)
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
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "entity",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v7/*: any*/)
                            ],
                            "type": "Node",
                            "abstractKey": "__isNode"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v5/*: any*/)
                            ],
                            "type": "Sluggable",
                            "abstractKey": "__isSluggable"
                          },
                          {
                            "kind": "InlineFragment",
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
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "kind",
                                    "storageKey": null
                                  },
                                  (v7/*: any*/)
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
                                      (v8/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "type": "ReferencesGlobalEntityDates",
                                "abstractKey": "__isReferencesGlobalEntityDates"
                              }
                            ],
                            "type": "Entity",
                            "abstractKey": "__isEntity"
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
                        "name": "totalCount",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "SearchableCoreProperty",
                "kind": "LinkedField",
                "name": "coreProperties",
                "plural": true,
                "selections": [
                  (v10/*: any*/)
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "searchableProperties",
                    "plural": true,
                    "selections": [
                      (v6/*: any*/),
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "search(visibility:\"ALL\")"
          }
        ],
        "type": "Searchable",
        "abstractKey": "__isSearchable"
      }
    ]
  },
  "params": {
    "cacheID": "49deafdeca966813d925bd106c458c26",
    "id": null,
    "metadata": {},
    "name": "SearchLayoutQuery",
    "operationKind": "query",
    "text": "query SearchLayoutQuery(\n  $order: EntityOrder = PUBLISHED_ASCENDING\n  $page: Int = 1\n  $predicates: [SearchPredicateInput!] = []\n  $query: String = \"\"\n) {\n  ...SearchLayoutQueryFragment_2QNE8l\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  storage\n  medium {\n    webp {\n      ...ImageFragment\n    }\n  }\n}\n\nfragment CurrentSearchFiltersFragment on SearchScope {\n  coreProperties {\n    ... on SearchableProperty {\n      __isSearchableProperty: __typename\n      searchPath\n      label\n    }\n  }\n  schemas: availableSchemaVersions {\n    searchableProperties {\n      __typename\n      ... on SearchableProperty {\n        __isSearchableProperty: __typename\n        searchPath\n        label\n      }\n    }\n    id\n  }\n}\n\nfragment EntityThumbnailColumnFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  thumbnail {\n    storage\n    ...CoverImageFragment\n  }\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelListPageSearchFragment on SearchScope {\n  ...CurrentSearchFiltersFragment\n  ...SearchFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment PublishedDateColumnFragment on ReferencesGlobalEntityDates {\n  __isReferencesGlobalEntityDates: __typename\n  published {\n    ...PrecisionDateFragment\n  }\n}\n\nfragment SearchFilterBooleanFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterDrawerFragment on SearchScope {\n  ...SearchFilterFormFragment\n}\n\nfragment SearchFilterFormFragment on SearchScope {\n  coreProperties {\n    ... on SearchableProperty {\n      __isSearchableProperty: __typename\n      searchPath\n    }\n    ...SearchFilterFragment\n  }\n  schemas: availableSchemaVersions {\n    searchableProperties {\n      __typename\n      ... on SearchableProperty {\n        __isSearchableProperty: __typename\n        searchPath\n        label\n      }\n      ...SearchFilterFragment\n    }\n    id\n  }\n}\n\nfragment SearchFilterFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  ... on ScalarProperty {\n    __isScalarProperty: __typename\n    type\n  }\n  ...SearchFilterInputFragment\n  ...SearchFilterSelectFragment\n  ...SearchFilterBooleanFragment\n}\n\nfragment SearchFilterInputFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterSelectFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n  ... on SelectProperty {\n    options {\n      label\n      value\n    }\n  }\n}\n\nfragment SearchFragment on SearchScope {\n  ...SearchFilterDrawerFragment\n}\n\nfragment SearchLayoutFragment_2QNE8l on Searchable {\n  __isSearchable: __typename\n  search(visibility: ALL) {\n    ...SearchResultListFragment_2QNE8l\n  }\n}\n\nfragment SearchLayoutQueryFragment_2QNE8l on Query {\n  ...SearchLayoutFragment_2QNE8l\n}\n\nfragment SearchResultListFragment_2QNE8l on SearchScope {\n  results(query: $query, page: $page, predicates: $predicates, order: $order, perPage: 20) {\n    nodes {\n      slug\n      entity {\n        __typename\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ... on Entity {\n          __isEntity: __typename\n          title\n          schemaVersion {\n            name\n            number\n            kind\n            id\n          }\n          allowedActions\n          ...EntityThumbnailColumnFragment\n          ...PublishedDateColumnFragment\n        }\n      }\n    }\n    pageInfo {\n      totalCount\n    }\n    ...ModelListPageFragment\n  }\n  ...ModelListPageSearchFragment\n}\n"
  }
};
})();
(node as any).hash = 'efa72a08f6e3f6663047b730d165f790';
export default node;
