/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly createdAt: string;
        readonly title: string;
        readonly slug: string;
        readonly schemaVersion: {
            readonly name: string;
            readonly number: string;
        };
        readonly allowedActions: ReadonlyArray<string>;
        readonly " $fragmentRefs": FragmentRefs<"EntityThumbnailColumnFragment" | "PublishedDateColumnFragment">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "CollectionListFragment";
};
export type CollectionListFragment$data = CollectionListFragment;
export type CollectionListFragment$key = {
    readonly " $data"?: CollectionListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
          "storageKey": null
        },
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
          "name": "slug",
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
          "name": "EntityThumbnailColumnFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PublishedDateColumnFragment"
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
  "type": "CollectionConnection",
  "abstractKey": null
};
(node as any).hash = 'fbfabfa98bae8db0f147e8e492f0cf39';
export default node;
