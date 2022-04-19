/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemListSearchFragment = {
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemListSearchFragment",
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
  "type": "SearchResultConnection",
  "abstractKey": null
};
})();
(node as any).hash = '2cc8299057ac501c0bf08f9fa61dd549';
export default node;
