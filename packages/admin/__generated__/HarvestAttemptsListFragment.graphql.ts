/**
 * @generated SignedSource<<1ea56006064f11a8d35e2d81b75f9037>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestScheduleMode = "MANUAL" | "SCHEDULED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestAttemptsListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly beganAt: string | null | undefined;
    readonly endedAt: string | null | undefined;
    readonly harvestErrors: ReadonlyArray<{
      readonly code: string | null | undefined;
    }>;
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

(node as any).hash = "3be8c2fb4bf0ed8fd93a35742fb54ed8";

export default node;
