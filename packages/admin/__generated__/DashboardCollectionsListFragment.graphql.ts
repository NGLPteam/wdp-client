/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DashboardCollectionsListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
        readonly slug: string;
        readonly schemaVersion: {
            readonly name: string;
            readonly number: string;
        };
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelPageCountActionsFragment" | "ModelPaginationFragment">;
    readonly " $refType": "DashboardCollectionsListFragment";
};
export type DashboardCollectionsListFragment$data = DashboardCollectionsListFragment;
export type DashboardCollectionsListFragment$key = {
    readonly " $data"?: DashboardCollectionsListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"DashboardCollectionsListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashboardCollectionsListFragment",
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
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelPageCountActionsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelPaginationFragment"
    }
  ],
  "type": "CollectionConnection",
  "abstractKey": null
};
(node as any).hash = '81aa9a1deb9ab78b42eadca340689f74';
export default node;
