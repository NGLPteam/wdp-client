/**
 * @generated SignedSource<<92252cc5121457af4257b7e8ac4389ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestRecordStatus = "ACTIVE" | "DELETED" | "PENDING" | "SKIPPED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestRecordsListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly createdAt: string;
    readonly entityCount: number | null | undefined;
    readonly harvestErrors: ReadonlyArray<{
      readonly code: string | null | undefined;
    }>;
    readonly id: string;
    readonly identifier: string;
    readonly status: HarvestRecordStatus;
    readonly updatedAt: string;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "HarvestRecordsListFragment";
};
export type HarvestRecordsListFragment$key = {
  readonly " $data"?: HarvestRecordsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestRecordsListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestRecordsListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestRecord",
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
          "name": "updatedAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "entityCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "identifier",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HarvestError",
          "kind": "LinkedField",
          "name": "harvestErrors",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "code",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "status",
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
  "type": "HarvestRecordConnection",
  "abstractKey": null
};

(node as any).hash = "978a2c9d57af881f5a159d40470a55e3";

export default node;
