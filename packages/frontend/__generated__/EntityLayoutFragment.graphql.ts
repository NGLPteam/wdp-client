/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"EntityHTMLHeadFragment" | "BreadcrumbsBarFragment" | "EntityHeroFragment" | "EntityNavBarFragment">;
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
      "name": "EntityHTMLHeadFragment"
    },
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
(node as any).hash = '97647f02ee9a968732a7450d68830718';
export default node;
