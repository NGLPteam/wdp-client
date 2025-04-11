/**
 * @generated SignedSource<<bbcd929344aa0f5e3fe5924a5a9cc625>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestTargetKind = "COLLECTION" | "COMMUNITY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestMappingLayoutFragment$data = {
  readonly harvestSet: {
    readonly identifier: string;
  } | null | undefined;
  readonly harvestSource: {
    readonly name: string;
    readonly slug: string;
  };
  readonly targetEntity: {
    readonly harvestTargetKind: HarvestTargetKind;
    readonly title: string;
  };
  readonly " $fragmentType": "HarvestMappingLayoutFragment";
};
export type HarvestMappingLayoutFragment$key = {
  readonly " $data"?: HarvestMappingLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestMappingLayoutFragment",
  "selections": [
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
          "name": "slug",
          "storageKey": null
        },
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "targetEntity",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "harvestTargetKind",
          "storageKey": null
        },
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
  "type": "HarvestMapping",
  "abstractKey": null
};

(node as any).hash = "105cdb0dd85b94417e30c67474add497";

export default node;
