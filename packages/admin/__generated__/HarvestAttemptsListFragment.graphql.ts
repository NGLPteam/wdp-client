/**
 * @generated SignedSource<<fa3cb97614b800181aa96de8ccef3a5f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestAttemptState = "CANCELLED" | "EXECUTING" | "EXTRACTED" | "PENDING" | "SCHEDULED" | "%future added value";
export type HarvestScheduleMode = "MANUAL" | "SCHEDULED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestAttemptsListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly beganAt: string | null | undefined;
    readonly currentState: HarvestAttemptState;
    readonly endedAt: string | null | undefined;
    readonly harvestSet: {
      readonly identifier: string;
    } | null | undefined;
    readonly harvestSource: {
      readonly name: string;
    };
    readonly id: string;
    readonly mode: HarvestScheduleMode;
    readonly recordCount: number | null | undefined;
    readonly slug: string;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "HarvestAttemptsListFragment";
};
export type HarvestAttemptsListFragment$key = {
  readonly " $data"?: HarvestAttemptsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestAttemptsListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestAttemptsListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestAttempt",
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
          "name": "beganAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endedAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "mode",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "currentState",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HarvestSource",
          "kind": "LinkedField",
          "name": "harvestSource",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HarvestSet",
          "kind": "LinkedField",
          "name": "harvestSet",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "identifier",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "recordCount",
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
  "type": "HarvestAttemptConnection",
  "abstractKey": null
};

(node as any).hash = "75792f31ca2611f5e2f15a42c1b8f4f8";

export default node;
