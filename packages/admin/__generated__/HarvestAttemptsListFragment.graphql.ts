/**
 * @generated SignedSource<<431ef4a18490f74aadd03c9342a31186>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
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
    readonly id: string;
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

(node as any).hash = "e6b4949b94e2ebbbd11344d03b847f8b";

export default node;
