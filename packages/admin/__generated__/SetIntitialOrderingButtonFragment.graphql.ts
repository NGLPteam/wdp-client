/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SetIntitialOrderingButtonFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SetIntitialOrderingModalFragment">;
    readonly " $refType": "SetIntitialOrderingButtonFragment";
};
export type SetIntitialOrderingButtonFragment$data = SetIntitialOrderingButtonFragment;
export type SetIntitialOrderingButtonFragment$key = {
    readonly " $data"?: SetIntitialOrderingButtonFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SetIntitialOrderingButtonFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "SetIntitialOrderingModalFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SetIntitialOrderingButtonFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Item",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();
(node as any).hash = '6b3e10faee90de3d6667c1cb0dbf2208';
export default node;
