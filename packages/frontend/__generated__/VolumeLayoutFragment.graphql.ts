/**
 * @generated SignedSource<<74570b15d4b9f035dfbe3e812e22f9fb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VolumeLayoutFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarFragment" | "EntityNavBarFragment" | "VolumeHeroFragment">;
  readonly " $fragmentType": "VolumeLayoutFragment";
};
export type VolumeLayoutFragment$key = {
  readonly " $data"?: VolumeLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"VolumeLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VolumeLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "VolumeHeroFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntityNavBarFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};

(node as any).hash = "ed5b4852c224de2e70ac8dad9a08cc77";

export default node;
