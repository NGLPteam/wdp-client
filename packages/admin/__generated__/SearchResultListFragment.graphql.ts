/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type SearchResultListFragment = {
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchResultListFragment",
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
  "type": "SearchResultConnection",
  "abstractKey": null
};
})();
(node as any).hash = '16c187fd6baf0fcce2bf1400dd36e474';
export default node;
