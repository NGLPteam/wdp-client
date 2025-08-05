/**
 * @generated SignedSource<<b6705e1f33ed7f973e9a7a0b766ed3ea>>
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
export type SearchLayoutQuery$variables = {
  order?: EntityOrder | null | undefined;
  page?: number | null | undefined;
  predicates?: ReadonlyArray<SearchPredicateInput> | null | undefined;
  query?: string | null | undefined;
  schema?: ReadonlyArray<string> | null | undefined;
};
export type SearchLayoutQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SearchLayoutFragment">;
};
export type SearchLayoutQuery = {
  response: SearchLayoutQuery$data;
  variables: SearchLayoutQuery$variables;
};

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
  },
  {
    "defaultValue": ([]/*: any*/),
    "kind": "LocalArgument",
    "name": "schema"
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
  "kind": "Variable",
  "name": "schema",
  "variableName": "schema"
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
v8 = [
  (v7/*: any*/)
],
v9 = {
  "kind": "InlineFragment",
  "selections": (v8/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hierarchicalDepth",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v17 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v14/*: any*/),
      (v15/*: any*/)
    ],
    "storageKey": null
  }
],
v18 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "large",
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
            (v13/*: any*/),
            (v14/*: any*/),
            (v15/*: any*/),
            (v16/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "medium",
      "plural": false,
      "selections": (v17/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "thumb",
      "plural": false,
      "selections": (v17/*: any*/),
      "storageKey": null
    }
  ],
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
      "alias": "image",
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
            (v14/*: any*/),
            (v13/*: any*/),
            (v15/*: any*/),
            (v16/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v20 = [
  (v19/*: any*/)
],
v21 = {
  "kind": "InlineFragment",
  "selections": (v20/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v23 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ControlledVocabularyItem",
    "kind": "LinkedField",
    "name": "roles",
    "plural": true,
    "selections": [
      (v22/*: any*/),
      (v7/*: any*/)
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "contributor",
    "plural": false,
    "selections": [
      (v6/*: any*/),
      (v10/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "familyName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "givenName",
                "storageKey": null
              }
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
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
          }
        ],
        "type": "AnyContributor",
        "abstractKey": "__isAnyContributor"
      },
      (v9/*: any*/)
    ],
    "storageKey": null
  }
],
v24 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v19/*: any*/),
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
              "concreteType": null,
              "kind": "LinkedField",
              "name": "crumb",
              "plural": false,
              "selections": [
                (v6/*: any*/),
                (v21/*: any*/),
                (v9/*: any*/)
              ],
              "storageKey": null
            },
            (v7/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CollectionAttribution",
          "kind": "LinkedField",
          "name": "attributions",
          "plural": true,
          "selections": (v23/*: any*/),
          "storageKey": null
        }
      ],
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v19/*: any*/),
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
              "concreteType": null,
              "kind": "LinkedField",
              "name": "crumb",
              "plural": false,
              "selections": [
                (v6/*: any*/),
                (v21/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": (v20/*: any*/),
                  "type": "Item",
                  "abstractKey": null
                },
                (v9/*: any*/)
              ],
              "storageKey": null
            },
            (v7/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemAttribution",
          "kind": "LinkedField",
          "name": "attributions",
          "plural": true,
          "selections": (v23/*: any*/),
          "storageKey": null
        }
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "empty",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "valid",
  "storageKey": null
},
v29 = [
  (v25/*: any*/),
  (v26/*: any*/),
  (v27/*: any*/),
  (v28/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hidesTemplate",
    "storageKey": null
  }
],
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "searchPath",
  "storageKey": null
},
v31 = {
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
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "searchOperators",
  "storageKey": null
},
v34 = {
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
        (v22/*: any*/),
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
  "type": "SelectProperty",
  "abstractKey": null
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
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "SearchLayoutFragment"
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
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "kind": "Literal",
                "name": "perPage",
                "value": 20
              },
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
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
                      (v6/*: any*/),
                      (v9/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "EntityLayouts",
                            "kind": "LinkedField",
                            "name": "layouts",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ListItemLayoutInstance",
                                "kind": "LinkedField",
                                "name": "listItem",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ListItemTemplateInstance",
                                    "kind": "LinkedField",
                                    "name": "template",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ListItemTemplateDefinition",
                                        "kind": "LinkedField",
                                        "name": "definition",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "seeAllOrderingIdentifier",
                                            "storageKey": null
                                          },
                                          (v7/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
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
                                              (v7/*: any*/),
                                              (v10/*: any*/),
                                              (v11/*: any*/),
                                              (v12/*: any*/),
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "CollectionAttribution",
                                                "kind": "LinkedField",
                                                "name": "attributions",
                                                "plural": true,
                                                "selections": (v8/*: any*/),
                                                "storageKey": null
                                              },
                                              (v18/*: any*/),
                                              (v24/*: any*/)
                                            ],
                                            "type": "Collection",
                                            "abstractKey": null
                                          },
                                          {
                                            "kind": "InlineFragment",
                                            "selections": [
                                              (v7/*: any*/),
                                              (v10/*: any*/),
                                              (v11/*: any*/),
                                              (v12/*: any*/),
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "ItemAttribution",
                                                "kind": "LinkedField",
                                                "name": "attributions",
                                                "plural": true,
                                                "selections": (v8/*: any*/),
                                                "storageKey": null
                                              },
                                              (v18/*: any*/),
                                              (v24/*: any*/)
                                            ],
                                            "type": "Item",
                                            "abstractKey": null
                                          },
                                          (v9/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ListItemTemplateInstanceSlots",
                                        "kind": "LinkedField",
                                        "name": "slots",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "contextFull",
                                            "plural": false,
                                            "selections": (v29/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "contextAbbr",
                                            "plural": false,
                                            "selections": (v29/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "contextC",
                                            "plural": false,
                                            "selections": (v29/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotBlockInstance",
                                            "kind": "LinkedField",
                                            "name": "description",
                                            "plural": false,
                                            "selections": [
                                              (v25/*: any*/),
                                              (v26/*: any*/),
                                              (v27/*: any*/),
                                              (v28/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "header",
                                            "plural": false,
                                            "selections": (v29/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "metaA",
                                            "plural": false,
                                            "selections": (v29/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "metaB",
                                            "plural": false,
                                            "selections": (v29/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "subheader",
                                            "plural": false,
                                            "selections": (v29/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "nestedHeader",
                                            "plural": false,
                                            "selections": (v29/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "nestedSubheader",
                                            "plural": false,
                                            "selections": (v29/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "nestedContext",
                                            "plural": false,
                                            "selections": (v29/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "nestedMetadata",
                                            "plural": false,
                                            "selections": (v29/*: any*/),
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      (v7/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v7/*: any*/)
                                ],
                                "storageKey": null
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
                  },
                  (v7/*: any*/)
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
                  (v30/*: any*/),
                  (v31/*: any*/),
                  (v22/*: any*/),
                  (v32/*: any*/),
                  (v33/*: any*/),
                  (v34/*: any*/)
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
                "concreteType": "SchemaDefinition",
                "kind": "LinkedField",
                "name": "schemaDefinition",
                "plural": false,
                "selections": [
                  (v10/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "searchableProperties",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v30/*: any*/),
                      (v22/*: any*/),
                      (v31/*: any*/),
                      (v32/*: any*/),
                      (v33/*: any*/),
                      (v34/*: any*/)
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
    ]
  },
  "params": {
    "cacheID": "448067d68c4ca97fce04f84cf4f63c09",
    "id": null,
    "metadata": {},
    "name": "SearchLayoutQuery",
    "operationKind": "query",
    "text": "query SearchLayoutQuery(\n  $order: EntityOrder = PUBLISHED_ASCENDING\n  $page: Int = 1\n  $predicates: [SearchPredicateInput!] = []\n  $query: String = \"\"\n  $schema: [String!] = []\n) {\n  ...SearchLayoutFragment_dJrY9\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    attributions {\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        slug\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on Collection {\n    attributions {\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        slug\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: medium {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment EntitySummaryFragment on Entity {\n  __isEntity: __typename\n  __typename\n  layouts {\n    listItem {\n      template {\n        ...sharedListItemTemplateFragment\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment PaginationFragment on PageInfo {\n  page\n  pageCount\n}\n\nfragment SearchFilterBooleanFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterDateFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  ... on ScalarProperty {\n    __isScalarProperty: __typename\n    type\n  }\n  ...SearchFilterInputFragment\n  ...SearchFilterSelectFragment\n  ...SearchFilterDateFragment\n  ...SearchFilterNumberFragment\n  ...SearchFilterBooleanFragment\n}\n\nfragment SearchFilterInputFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterNumberFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterSelectFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n  ... on SelectProperty {\n    options {\n      label\n      value\n    }\n  }\n}\n\nfragment SearchFiltersFragment on SearchScope {\n  coreProperties {\n    ... on SearchableProperty {\n      __isSearchableProperty: __typename\n      searchPath\n    }\n    ...SearchFilterFragment\n  }\n  ...SearchSchemaFilterFragment\n  schemas: availableSchemaVersions {\n    searchableProperties {\n      __typename\n      ... on SearchableProperty {\n        __isSearchableProperty: __typename\n        searchPath\n        label\n      }\n      ...SearchFilterFragment\n    }\n    id\n  }\n}\n\nfragment SearchLayoutFragment_dJrY9 on Query {\n  search {\n    results(query: $query, page: $page, perPage: 20, predicates: $predicates, order: $order, schema: $schema) {\n      ...SearchResultsFragment\n    }\n    ...SearchFiltersFragment\n  }\n}\n\nfragment SearchResultsFragment on SearchResultConnection {\n  nodes {\n    entity {\n      __typename\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n      ...EntitySummaryFragment\n    }\n    id\n  }\n  pageInfo {\n    totalCount\n    ...PaginationFragment\n  }\n}\n\nfragment SearchSchemaFilterFragment on SearchScope {\n  schemas: availableSchemaVersions {\n    name\n    schemaDefinition {\n      slug\n      id\n    }\n    id\n  }\n}\n\nfragment getThumbWithFallbackFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    thumbnail {\n      image: medium {\n        webp {\n          url\n        }\n      }\n      ...CoverImageFragment\n    }\n    breadcrumbs {\n      crumb {\n        __typename\n        ... on Collection {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on Item {\n    thumbnail {\n      image: medium {\n        webp {\n          url\n        }\n      }\n      ...CoverImageFragment\n    }\n    breadcrumbs {\n      crumb {\n        __typename\n        ... on Collection {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Item {\n          thumbnail {\n            image: medium {\n              webp {\n                url\n              }\n            }\n            ...CoverImageFragment\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment sharedBlockSlotFragment on TemplateSlotBlockInstance {\n  empty\n  content\n  kind\n  valid\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  empty\n  content\n  kind\n  valid\n  hidesTemplate\n}\n\nfragment sharedListItemTemplateFragment on ListItemTemplateInstance {\n  definition {\n    seeAllOrderingIdentifier\n    id\n  }\n  entity {\n    __typename\n    ... on Collection {\n      __typename\n      id\n      slug\n      title\n      hierarchicalDepth\n      ...getThumbWithFallbackFragment\n      attributions {\n        id\n      }\n      ...ContributorsListFragment\n      heroImage {\n        large {\n          webp {\n            alt\n            url\n            width\n            height\n          }\n        }\n        medium {\n          webp {\n            url\n            width\n          }\n        }\n        thumb {\n          webp {\n            url\n            width\n          }\n        }\n      }\n    }\n    ... on Item {\n      __typename\n      id\n      slug\n      title\n      hierarchicalDepth\n      attributions {\n        id\n      }\n      ...getThumbWithFallbackFragment\n      ...ContributorsListFragment\n      heroImage {\n        large {\n          webp {\n            alt\n            url\n            width\n            height\n          }\n        }\n        medium {\n          webp {\n            url\n            width\n          }\n        }\n        thumb {\n          webp {\n            url\n            width\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  slots {\n    contextFull {\n      ...sharedInlineSlotFragment\n    }\n    contextAbbr {\n      ...sharedInlineSlotFragment\n    }\n    contextC {\n      ...sharedInlineSlotFragment\n    }\n    description {\n      ...sharedBlockSlotFragment\n    }\n    header {\n      ...sharedInlineSlotFragment\n    }\n    metaA {\n      ...sharedInlineSlotFragment\n    }\n    metaB {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n    nestedHeader {\n      ...sharedInlineSlotFragment\n    }\n    nestedSubheader {\n      ...sharedInlineSlotFragment\n    }\n    nestedContext {\n      ...sharedInlineSlotFragment\n    }\n    nestedMetadata {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "dc941a3abeaf5905ff94e64ebc2b1319";

export default node;
