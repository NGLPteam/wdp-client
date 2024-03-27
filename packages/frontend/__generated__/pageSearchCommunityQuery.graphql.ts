/**
 * @generated SignedSource<<ff32e7b99b2e8bfc7e4cf580a87f9c39>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityOrder = "OLDEST" | "POSITION_ASCENDING" | "POSITION_DESCENDING" | "PUBLISHED_ASCENDING" | "PUBLISHED_DESCENDING" | "RECENT" | "SCHEMA_NAME_ASCENDING" | "SCHEMA_NAME_DESCENDING" | "TITLE_ASCENDING" | "TITLE_DESCENDING" | "%future added value";
export type SearchPredicateInput = {
  and?: AndOperatorInput | null | undefined;
  dateEquals?: DateEqualsOperatorInput | null | undefined;
  dateGTE?: DateGTEOperatorInput | null | undefined;
  dateLTE?: DateLTEOperatorInput | null | undefined;
  equals?: EqualsOperatorInput | null | undefined;
  inAny?: InAnyOperatorInput | null | undefined;
  matches?: MatchesOperatorInput | null | undefined;
  numericGTE?: NumericGTEOperatorInput | null | undefined;
  numericLTE?: NumericLTEOperatorInput | null | undefined;
  or?: OrOperatorInput | null | undefined;
};
export type AndOperatorInput = {
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
  value: any;
};
export type InAnyOperatorInput = {
  path: string;
  value: ReadonlyArray<string>;
};
export type MatchesOperatorInput = {
  path: string;
  value: string;
};
export type NumericGTEOperatorInput = {
  path: string;
  value: number;
};
export type NumericLTEOperatorInput = {
  path: string;
  value: number;
};
export type OrOperatorInput = {
  left: SearchPredicateInput;
  right: SearchPredicateInput;
};
export type pageSearchCommunityQuery$variables = {
  order?: EntityOrder | null | undefined;
  page?: number | null | undefined;
  predicates?: ReadonlyArray<SearchPredicateInput> | null | undefined;
  query?: string | null | undefined;
  schema?: ReadonlyArray<string> | null | undefined;
  slug: string;
};
export type pageSearchCommunityQuery$data = {
  readonly community: {
    readonly " $fragmentSpreads": FragmentRefs<"SearchLayoutEntityFragment">;
  } | null | undefined;
};
export type pageSearchCommunityQuery = {
  response: pageSearchCommunityQuery$data;
  variables: pageSearchCommunityQuery$variables;
};

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
  "name": "predicates"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "schema"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v6 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
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
  "kind": "Variable",
  "name": "predicates",
  "variableName": "predicates"
},
v10 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v11 = {
  "kind": "Variable",
  "name": "schema",
  "variableName": "schema"
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "searchPath",
  "storageKey": null
},
v18 = {
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
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "searchOperators",
  "storageKey": null
},
v22 = {
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
        (v19/*: any*/),
        (v16/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "SelectProperty",
  "abstractKey": null
};
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
    "name": "pageSearchCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "args": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "SearchLayoutEntityFragment"
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
      (v5/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "pageSearchCommunityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v12/*: any*/),
          {
            "kind": "InlineFragment",
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
                    "args": [
                      (v7/*: any*/),
                      (v8/*: any*/),
                      {
                        "kind": "Literal",
                        "name": "perPage",
                        "value": 20
                      },
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/)
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
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "entity",
                            "plural": false,
                            "selections": [
                              (v13/*: any*/),
                              {
                                "kind": "TypeDiscriminator",
                                "abstractKey": "__isAnyEntity"
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v12/*: any*/)
                                ],
                                "type": "Node",
                                "abstractKey": "__isNode"
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
                                    "kind": "ScalarField",
                                    "name": "summary",
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
                                      (v14/*: any*/),
                                      (v12/*: any*/)
                                    ],
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
                                        "alias": "thumb",
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
                                      (v15/*: any*/)
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
                                          (v16/*: any*/)
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
                          },
                          (v12/*: any*/)
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
                          },
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
                    "concreteType": "SearchableCoreProperty",
                    "kind": "LinkedField",
                    "name": "coreProperties",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v17/*: any*/),
                          (v18/*: any*/),
                          (v19/*: any*/),
                          (v20/*: any*/),
                          (v21/*: any*/),
                          (v22/*: any*/)
                        ],
                        "type": "SearchableProperty",
                        "abstractKey": "__isSearchableProperty"
                      }
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
                      (v14/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SchemaDefinition",
                        "kind": "LinkedField",
                        "name": "schemaDefinition",
                        "plural": false,
                        "selections": [
                          (v15/*: any*/),
                          (v12/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "searchableProperties",
                        "plural": true,
                        "selections": [
                          (v13/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v17/*: any*/),
                              (v19/*: any*/),
                              (v18/*: any*/),
                              (v20/*: any*/),
                              (v21/*: any*/),
                              (v22/*: any*/)
                            ],
                            "type": "SearchableProperty",
                            "abstractKey": "__isSearchableProperty"
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
    "cacheID": "9e16a60de6befa788a54737bb8b723cf",
    "id": null,
    "metadata": {},
    "name": "pageSearchCommunityQuery",
    "operationKind": "query",
    "text": "query pageSearchCommunityQuery(\n  $slug: Slug!\n  $query: String\n  $predicates: [SearchPredicateInput!]\n  $page: Int\n  $order: EntityOrder\n  $schema: [String!]\n) {\n  community(slug: $slug) {\n    ...SearchLayoutEntityFragment_dJrY9\n    id\n  }\n}\n\nfragment PaginationFragment on PageInfo {\n  page\n  pageCount\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment SearchEntityResultFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  summary\n  schemaVersion {\n    name\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  ... on ReferencesGlobalEntityDates {\n    __isReferencesGlobalEntityDates: __typename\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n  }\n}\n\nfragment SearchFilterBooleanFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterDateFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  ... on ScalarProperty {\n    __isScalarProperty: __typename\n    type\n  }\n  ...SearchFilterInputFragment\n  ...SearchFilterSelectFragment\n  ...SearchFilterDateFragment\n  ...SearchFilterNumberFragment\n  ...SearchFilterBooleanFragment\n}\n\nfragment SearchFilterInputFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterNumberFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterSelectFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n  ... on SelectProperty {\n    options {\n      label\n      value\n    }\n  }\n}\n\nfragment SearchFiltersFragment on SearchScope {\n  coreProperties {\n    ... on SearchableProperty {\n      __isSearchableProperty: __typename\n      searchPath\n    }\n    ...SearchFilterFragment\n  }\n  ...SearchSchemaFilterFragment\n  schemas: availableSchemaVersions {\n    searchableProperties {\n      __typename\n      ... on SearchableProperty {\n        __isSearchableProperty: __typename\n        searchPath\n        label\n      }\n      ...SearchFilterFragment\n    }\n    id\n  }\n}\n\nfragment SearchLayoutEntityFragment_dJrY9 on Entity {\n  __isEntity: __typename\n  search {\n    results(query: $query, page: $page, perPage: 20, predicates: $predicates, order: $order, schema: $schema) {\n      ...SearchResultsFragment\n    }\n    ...SearchFiltersFragment\n  }\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n}\n\nfragment SearchResultFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  __typename\n  ...SearchEntityResultFragment\n}\n\nfragment SearchResultsFragment on SearchResultConnection {\n  nodes {\n    entity {\n      __typename\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n      ...SearchResultFactoryFragment\n    }\n    id\n  }\n  pageInfo {\n    totalCount\n    ...PaginationFragment\n  }\n}\n\nfragment SearchSchemaFilterFragment on SearchScope {\n  schemas: availableSchemaVersions {\n    name\n    schemaDefinition {\n      slug\n      id\n    }\n    id\n  }\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  thumb: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d9ea0bf4bd33a4bc06f4925e73457da6";

export default node;
