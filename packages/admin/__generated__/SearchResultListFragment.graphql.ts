/**
 * @generated SignedSource<<51ceffaaa9058dacbb2408438b19521c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SearchResultListFragment$data = {
  readonly results: {
    readonly nodes: ReadonlyArray<{
      readonly entity: {
        readonly allowedActions?: ReadonlyArray<string>;
        readonly id?: string;
        readonly schemaVersion?: {
          readonly kind: SchemaKind;
          readonly name: string;
          readonly number: string;
        };
        readonly slug?: string;
        readonly title?: string;
        readonly " $fragmentSpreads": FragmentRefs<"EntityThumbnailColumnFragment" | "PublishedDateColumnFragment">;
      };
      readonly slug: string;
    }>;
    readonly pageInfo: {
      readonly totalCount: number;
    };
    readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageSearchFragment">;
  readonly " $fragmentType": "SearchResultListFragment";
};
export type SearchResultListFragment$key = {
  readonly " $data"?: SearchResultListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchResultListFragment">;
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
v2 = {
  "kind": "InlineFragment",
  "selections": [
    (v0/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "argumentDefinitions": [
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
  "name": "SearchResultListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "access",
          "value": "UPDATE"
        },
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
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "kind",
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
                              "alias": null,
                              "args": null,
                              "concreteType": "ImageSize",
                              "kind": "LinkedField",
                              "name": "thumb",
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
                                      "args": null,
                                      "kind": "FragmentSpread",
                                      "name": "ImageFragment"
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
                        (v1/*: any*/),
                        (v2/*: any*/)
                      ],
                      "args": null,
                      "argumentDefinitions": []
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
                      ],
                      "args": null,
                      "argumentDefinitions": []
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "ModelListPageFragment"
        }
      ],
      "storageKey": null
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

(node as any).hash = "3502e043b0fc9e1c3c463d436791bc8f";

export default node;
