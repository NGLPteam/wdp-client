/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type VolumeLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"BreadcrumbsBarFragment" | "VolumeHeroFragment" | "EntityNavBarFragment">;
    readonly " $refType": "VolumeLayoutFragment";
};
export type VolumeLayoutFragment$data = VolumeLayoutFragment;
export type VolumeLayoutFragment$key = {
    readonly " $data"?: VolumeLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"VolumeLayoutFragment">;
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
(node as any).hash = 'ed5b4852c224de2e70ac8dad9a08cc77';
export default node;
