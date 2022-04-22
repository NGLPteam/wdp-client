/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionListSearchFragment = {
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
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "createdAt",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionListSearchFragment",
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
                  "name": "PublishedDateColumnFragment"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "EntityThumbnailColumnFragment"
                }
              ],
              "type": "Entity",
              "abstractKey": "__isEntity"
            },
            {
              "kind": "InlineFragment",
              "selections": (v1/*: any*/),
              "type": "Collection",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": (v1/*: any*/),
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
(node as any).hash = '7d8d9d3f737c2eba4c3af354942fb77a';
export default node;
