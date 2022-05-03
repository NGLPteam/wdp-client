/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"BreadcrumbsBarFragment" | "EntityHeroFragment" | "EntityNavBarFragment">;
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
      "kind": "InlineFragment",
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityNavBarFragment"
        }
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
(node as any).hash = 'e51b807675235641156d9a8ede418c1d';
export default node;
