/**
 * @generated SignedSource<<ba45ee10773204a02f19d8d8e3bd104f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestMappingLayoutFragment$data = {
  readonly harvestSource: {
    readonly name: string;
    readonly slug: string;
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
    }
  ],
  "type": "HarvestMapping",
  "abstractKey": null
};

(node as any).hash = "1567ef07c4747faeeea99851aa313f0f";

export default node;
