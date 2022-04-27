/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemListSearchFragment = {
    readonly results?: {
        readonly nodes: ReadonlyArray<{
            readonly slug: string;
            readonly entity: {
                readonly id?: string | undefined;
                readonly slug?: string | undefined;
                readonly title?: string | undefined;
                readonly schemaVersion?: {
                    readonly name: string;
                    readonly number: string;
                } | undefined;
                readonly allowedActions?: ReadonlyArray<string> | undefined;
                readonly items?: {
                    readonly pageInfo: {
                        readonly totalCount: number;
                    };
                } | undefined;
                readonly " $fragmentRefs": FragmentRefs<"ContributorsColumnFragment" | "EntityThumbnailColumnFragment" | "PublishedDateColumnFragment">;
            };
        }>;
        readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    } | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageSearchFragment">;
    readonly " $refType": "ItemListSearchFragment";
};
export type ItemListSearchFragment$data = ItemListSearchFragment;
export type ItemListSearchFragment$key = {
    readonly " $data"?: ItemListSearchFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemListSearchFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
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
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemListSearchFragment",
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
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "entity",
                  "plural": false,
                  "selections": [
                    {
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
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        (v0/*: any*/)
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
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "ContributorsColumnFragment"
                        },
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "EntityThumbnailColumnFragment"
                        },
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "PublishedDateColumnFragment"
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
                          "concreteType": "ItemConnection",
                          "kind": "LinkedField",
                          "name": "items",
                          "plural": false,
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
                                  "name": "totalCount",
                                  "storageKey": null
                                }
                              ],
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        }
                      ],
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
(node as any).hash = '2d29c0c118534bfb319f634fb7885efd';
export default node;
