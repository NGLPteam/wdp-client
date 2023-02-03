/**
 * @generated SignedSource<<97c2c329ed02cb8cdfd009191aa334bd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardCollectionsListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly id: string;
    readonly schemaVersion: {
      readonly name: string;
      readonly number: string;
    };
    readonly slug: String;
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"EntityThumbnailColumnFragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelPageCountActionsFragment" | "ModelPaginationFragment">;
  readonly " $fragmentType": "DashboardCollectionsListFragment";
};
export type DashboardCollectionsListFragment$key = {
  readonly " $data"?: DashboardCollectionsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DashboardCollectionsListFragment">;
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityThumbnailColumnFragment"
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

(node as any).hash = "3ae7ad822317ef51c8e1ca4a023e3220";

export default node;
