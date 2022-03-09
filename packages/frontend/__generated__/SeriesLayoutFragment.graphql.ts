/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SeriesLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"EntityHTMLHeadFragment" | "BreadcrumbsBarFragment" | "SeriesHeroFragment" | "EntityNavBarFragment">;
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
      "name": "EntityHTMLHeadFragment"
    },
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
(node as any).hash = '37e272c9ab6891b8ff43906b793aad6a';
export default node;
