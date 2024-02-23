/**
 * @generated SignedSource<<6a0e1522f92fab412a7a0a650539e350>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type searchQuery$variables = Record<PropertyKey, never>;
export type searchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"searchQueryFragment">;
};
export type searchQuery = {
  response: searchQuery$data;
  variables: searchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
  "name": "value",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "searchPath",
  "storageKey": null
},
v6 = {
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
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "searchOperators",
  "storageKey": null
},
v10 = {
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
        (v7/*: any*/),
        (v4/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "SelectProperty",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "searchQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "searchQueryFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "searchQuery",
    "selections": [
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
                  {
                    "kind": "Literal",
                    "name": "order",
                    "value": "PUBLISHED_ASCENDING"
                  },
                  {
                    "kind": "Literal",
                    "name": "page",
                    "value": 1
                  },
                  {
                    "kind": "Literal",
                    "name": "perPage",
                    "value": 20
                  },
                  {
                    "kind": "Literal",
                    "name": "predicates",
                    "value": []
                  },
                  {
                    "kind": "Literal",
                    "name": "query",
                    "value": ""
                  },
                  {
                    "kind": "Literal",
                    "name": "schema",
                    "value": []
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
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "entity",
                        "plural": false,
                        "selections": [
                          (v0/*: any*/),
                          {
                            "kind": "TypeDiscriminator",
                            "abstractKey": "__isAnyEntity"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v1/*: any*/)
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
                                  (v2/*: any*/),
                                  (v1/*: any*/)
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
                                  (v3/*: any*/)
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
                                      (v4/*: any*/)
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
                      (v1/*: any*/)
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
                "storageKey": "results(order:\"PUBLISHED_ASCENDING\",page:1,perPage:20,predicates:[],query:\"\",schema:[])"
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
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/)
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
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SchemaDefinition",
                    "kind": "LinkedField",
                    "name": "schemaDefinition",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "searchableProperties",
                    "plural": true,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v5/*: any*/),
                          (v7/*: any*/),
                          (v6/*: any*/),
                          (v8/*: any*/),
                          (v9/*: any*/),
                          (v10/*: any*/)
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
          }
        ],
        "type": "Searchable",
        "abstractKey": "__isSearchable"
      }
    ]
  },
  "params": {
    "cacheID": "f8cb4b559ab4b61e0a3df9f1c846d9d3",
    "id": null,
    "metadata": {},
    "name": "searchQuery",
    "operationKind": "query",
    "text": "query searchQuery {\n  ...searchQueryFragment\n}\n\nfragment PaginationFragment on PageInfo {\n  page\n  pageCount\n}\n\nfragment PrecisionDateFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment SearchEntityResultFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  summary\n  schemaVersion {\n    name\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n  thumbnail {\n    storage\n    ...SquareThumbnailFragment\n  }\n  ... on ReferencesGlobalEntityDates {\n    __isReferencesGlobalEntityDates: __typename\n    published {\n      ...PrecisionDateFragment\n      value\n    }\n  }\n}\n\nfragment SearchFilterBooleanFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterDateFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  ... on ScalarProperty {\n    __isScalarProperty: __typename\n    type\n  }\n  ...SearchFilterInputFragment\n  ...SearchFilterSelectFragment\n  ...SearchFilterDateFragment\n  ...SearchFilterNumberFragment\n  ...SearchFilterBooleanFragment\n}\n\nfragment SearchFilterInputFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterNumberFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterSelectFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n  ... on SelectProperty {\n    options {\n      label\n      value\n    }\n  }\n}\n\nfragment SearchFiltersFragment on SearchScope {\n  coreProperties {\n    ... on SearchableProperty {\n      __isSearchableProperty: __typename\n      searchPath\n    }\n    ...SearchFilterFragment\n  }\n  ...SearchSchemaFilterFragment\n  schemas: availableSchemaVersions {\n    searchableProperties {\n      __typename\n      ... on SearchableProperty {\n        __isSearchableProperty: __typename\n        searchPath\n        label\n      }\n      ...SearchFilterFragment\n    }\n    id\n  }\n}\n\nfragment SearchLayoutFragment_281H7Z on Searchable {\n  __isSearchable: __typename\n  search {\n    results(query: \"\", page: 1, perPage: 20, predicates: [], order: PUBLISHED_ASCENDING, schema: []) {\n      ...SearchResultsFragment\n    }\n    ...SearchFiltersFragment\n  }\n}\n\nfragment SearchResultFactoryFragment on AnyEntity {\n  __isAnyEntity: __typename\n  __typename\n  ...SearchEntityResultFragment\n}\n\nfragment SearchResultsFragment on SearchResultConnection {\n  nodes {\n    entity {\n      __typename\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n      ...SearchResultFactoryFragment\n    }\n    id\n  }\n  pageInfo {\n    totalCount\n    ...PaginationFragment\n  }\n}\n\nfragment SearchSchemaFilterFragment on SearchScope {\n  schemas: availableSchemaVersions {\n    name\n    schemaDefinition {\n      slug\n      id\n    }\n    id\n  }\n}\n\nfragment SquareThumbnailFragment on ImageAttachment {\n  thumb: medium {\n    webp {\n      alt\n      url\n    }\n  }\n}\n\nfragment searchQueryFragment on Query {\n  ...SearchLayoutFragment_281H7Z\n}\n"
  }
};
})();

(node as any).hash = "4b634ef363bf5de2a5ea350d8c09ad75";

export default node;
