/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"BreadcrumbsBarFragment" | "EntityHeroFragment">;
    readonly " $refType": "EntityLayoutFragment";
};
export type EntityLayoutFragment$data = EntityLayoutFragment;
export type EntityLayoutFragment$key = {
    readonly " $data"?: EntityLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntityHeroFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'cd7ce517cc7a9cf2d1ac16fa874b87dd';
export default node;
