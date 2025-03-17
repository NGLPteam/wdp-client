/**
 * @generated SignedSource<<3dc66b4a16421584eec4c2afa89e0ac0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestMappingsListDataFragment$data = {
  readonly harvestMappings: ReadonlyArray<{
    readonly harvestSet: {
      readonly name: string;
    } | null | undefined;
    readonly id: string;
    readonly targetEntity: {
      readonly title: string;
    };
  }>;
  readonly " $fragmentType": "HarvestMappingsListDataFragment";
};
export type HarvestMappingsListDataFragment$key = {
  readonly " $data"?: HarvestMappingsListDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingsListDataFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestMappingsListDataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestMapping",
      "kind": "LinkedField",
      "name": "harvestMappings",
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
          "concreteType": "HarvestSet",
          "kind": "LinkedField",
          "name": "harvestSet",
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
          "concreteType": null,
          "kind": "LinkedField",
          "name": "targetEntity",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HarvestSource",
  "abstractKey": null
};

(node as any).hash = "f08853769fee26748b04e3bda1a5b339";

export default node;
