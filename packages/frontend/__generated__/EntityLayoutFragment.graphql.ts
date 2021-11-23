/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"EntityHeroFragment">;
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
      "name": "EntityHeroFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'c998993bf868f79e7542d8ca64fdec5c';
export default node;
