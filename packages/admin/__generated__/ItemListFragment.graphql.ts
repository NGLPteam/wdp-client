/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly slug: string;
        readonly createdAt: string;
        readonly title: string;
        readonly schemaVersion: {
            readonly name: string;
            readonly number: string;
        };
        readonly items: {
            readonly pageInfo: {
                readonly totalCount: number;
            };
        };
        readonly allowedActions: ReadonlyArray<string>;
        readonly " $fragmentRefs": FragmentRefs<"ContributorsColumnFragment" | "EntityThumbnailColumnFragment" | "PublishedDateColumnFragment">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "ItemListFragment";
};
export type ItemListFragment$data = ItemListFragment;
export type ItemListFragment$key = {
    readonly " $data"?: ItemListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Item",
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
          "name": "slug",
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
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "ItemConnection",
  "abstractKey": null
};
(node as any).hash = '857ad597eb85a2416f6d043836013d31';
export default node;
