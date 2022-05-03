/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SeriesLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"BreadcrumbsBarFragment" | "SeriesHeroFragment" | "EntityNavBarFragment">;
    readonly " $refType": "SeriesLayoutFragment";
};
export type SeriesLayoutFragment$data = SeriesLayoutFragment;
export type SeriesLayoutFragment$key = {
    readonly " $data"?: SeriesLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SeriesLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SeriesLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SeriesHeroFragment"
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
(node as any).hash = '813ebc1958f3a40b77dfa5883ddc6668';
export default node;
