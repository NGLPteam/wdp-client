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



const node: ReaderFragment = (function(){
var v0 = [
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
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityLayoutFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = '33a745b3d0abd3671120ac2a3d2333bd';
export default node;
