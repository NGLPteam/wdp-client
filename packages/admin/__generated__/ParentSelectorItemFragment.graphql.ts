/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ParentSelectorItemFragment = {
    readonly id?: string | undefined;
    readonly title?: string | undefined;
    readonly " $refType": "ParentSelectorItemFragment";
};
export type ParentSelectorItemFragment$data = ParentSelectorItemFragment;
export type ParentSelectorItemFragment$key = {
    readonly " $data"?: ParentSelectorItemFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ParentSelectorItemFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
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
  "name": "ParentSelectorItemFragment",
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
  "type": "ItemParent",
  "abstractKey": "__isItemParent"
};
})();
(node as any).hash = '29010dfb1fb29e9a2edc3effb992143b';
export default node;
