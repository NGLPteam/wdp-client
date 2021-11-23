/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityHeroFragment = {
    readonly title?: string | undefined;
    readonly " $refType": "EntityHeroFragment";
};
export type EntityHeroFragment$data = EntityHeroFragment;
export type EntityHeroFragment$key = {
    readonly " $data"?: EntityHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityHeroFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityHeroFragment",
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
      "type": "Community",
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
(node as any).hash = '931ed9956b2953766333ca1f895bee87';
export default node;
