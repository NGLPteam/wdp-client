/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionListSearchFragment = {
    readonly results?: {
        readonly nodes: ReadonlyArray<{
            readonly slug: string;
            readonly entity: {
                readonly slug?: string | undefined;
                readonly id?: string | undefined;
                readonly title?: string | undefined;
                readonly schemaVersion?: {
                    readonly name: string;
                    readonly number: string;
                } | undefined;
                readonly allowedActions?: ReadonlyArray<string> | undefined;
                readonly createdAt?: string | undefined;
                readonly " $fragmentRefs": FragmentRefs<"PublishedDateColumnFragment" | "EntityThumbnailColumnFragment">;
            };
        }>;
        readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    } | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageSearchFragment">;
    readonly " $refType": "CollectionListSearchFragment";
};
export type CollectionListSearchFragment$data = CollectionListSearchFragment;
export type CollectionListSearchFragment$key = {
    readonly " $data"?: CollectionListSearchFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionListSearchFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = {
  "kind": "InlineFragment",
  "selections": [
    (v0/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v2 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "createdAt",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "hasQuery"
    },
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
      "defaultValue": [],
      "kind": "LocalArgument",
      "name": "predicates"
    },
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "query"
    },
    {
      "defaultValue": [],
      "kind": "LocalArgument",
      "name": "schema"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionListSearchFragment",
  "selections": [
    {
      "condition": "hasQuery",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "alias": null,
          "args": [
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
            },
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
              "kind": "Variable",
              "name": "schema",
              "variableName": "schema"
            },
            {
              "kind": "Literal",
              "name": "scope",
              "value": "COLLECTION"
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
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "entity",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
                    (v2/*: any*/),
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        (v3/*: any*/),
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
                            }
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
                          "kind": "InlineDataFragmentSpread",
                          "name": "PublishedDateColumnFragment",
                          "selections": [
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
                                      "args": null,
                                      "kind": "FragmentSpread",
                                      "name": "PrecisionDateFragment"
                                    }
                                  ],
                                  "storageKey": null
                                }
                              ],
                              "type": "ReferencesGlobalEntityDates",
                              "abstractKey": "__isReferencesGlobalEntityDates"
                            }
                          ]
                        },
                        {
                          "kind": "InlineDataFragmentSpread",
                          "name": "EntityThumbnailColumnFragment",
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "__typename",
                              "storageKey": null
                            },
                            (v3/*: any*/),
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
                                  "args": null,
                                  "kind": "FragmentSpread",
                                  "name": "CoverImageFragment"
                                }
                              ],
                              "storageKey": null
                            },
                            (v2/*: any*/),
                            (v1/*: any*/)
                          ]
                        }
                      ],
                      "type": "Entity",
                      "abstractKey": "__isEntity"
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": (v4/*: any*/),
                      "type": "Collection",
                      "abstractKey": null
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": (v4/*: any*/),
                      "type": "Item",
                      "abstractKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ModelListPageFragment"
            }
          ],
          "storageKey": null
        }
      ]
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageSearchFragment"
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};
})();
(node as any).hash = 'e0126d127b5158ed7a75739334f170e9';
export default node;
