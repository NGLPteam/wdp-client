/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BrowseTreeItemFragment = {
    readonly treeDepth: number | null;
    readonly entry: {
        readonly __typename: string;
        readonly slug?: string | undefined;
        readonly title?: string | undefined;
        readonly schemaVersion?: {
            readonly namespace: string;
            readonly identifier: string;
        } | undefined;
    };
    readonly " $refType": "BrowseTreeItemFragment";
};
export type BrowseTreeItemFragment$data = BrowseTreeItemFragment;
export type BrowseTreeItemFragment$key = {
    readonly " $data"?: BrowseTreeItemFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BrowseTreeItemFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BrowseTreeItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "treeDepth",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entry",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            }
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
                  "name": "namespace",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "identifier",
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
    }
  ],
  "type": "OrderingEntry",
  "abstractKey": null
};
(node as any).hash = '6d81a611d8467390f901cdde86a282fd';
export default node;
