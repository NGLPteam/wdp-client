/**
 * @generated SignedSource<<b0187b18d1c693b9d835c8aac4655811>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestRecordStatus = "ACTIVE" | "DELETED" | "PENDING" | "SKIPPED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityHarvestRecordsListFragment$data = {
  readonly harvestRecords: ReadonlyArray<{
    readonly createdAt: string;
    readonly entityCount: number | null | undefined;
    readonly harvestErrors: ReadonlyArray<{
      readonly code: string | null | undefined;
    }>;
    readonly id: string;
    readonly identifier: string;
    readonly slug: string;
    readonly status: HarvestRecordStatus;
    readonly updatedAt: string;
  }>;
  readonly " $fragmentType": "EntityHarvestRecordsListFragment";
};
export type EntityHarvestRecordsListFragment$key = {
  readonly " $data"?: EntityHarvestRecordsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityHarvestRecordsListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityHarvestRecordsListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestRecord",
      "kind": "LinkedField",
      "name": "harvestRecords",
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
    }
  ],
  "type": "ChildEntity",
  "abstractKey": "__isChildEntity"
};

(node as any).hash = "b28d6973a037c679fac03ed748b2468a";

export default node;
