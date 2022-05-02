/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type SearchResultListFragment = {
    readonly results: {
        readonly nodes: ReadonlyArray<{
            readonly slug: string;
            readonly entity: {
                readonly id?: string | undefined;
                readonly slug?: string | undefined;
                readonly title?: string | undefined;
                readonly schemaVersion?: {
                    readonly name: string;
                    readonly number: string;
                    readonly kind: SchemaKind;
                } | undefined;
                readonly allowedActions?: ReadonlyArray<string> | undefined;
                readonly " $fragmentRefs": FragmentRefs<"EntityThumbnailColumnFragment" | "PublishedDateColumnFragment">;
            };
        }>;
        readonly pageInfo: {
            readonly totalCount: number;
        };
        readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageSearchFragment">;
    readonly " $refType": "SearchResultListFragment";
};
export type SearchResultListFragment$data = SearchResultListFragment;
export type SearchResultListFragment$key = {
    readonly " $data"?: SearchResultListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchResultListFragment">;
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
(node as any).hash = 'f34824ebe5c99610a94d9a00953830a4';
export default node;
