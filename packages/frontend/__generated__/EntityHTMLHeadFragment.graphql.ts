/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityHTMLHeadFragment = {
    readonly title?: string | undefined;
    readonly " $refType": "EntityHTMLHeadFragment";
};
export type EntityHTMLHeadFragment$data = EntityHTMLHeadFragment;
export type EntityHTMLHeadFragment$key = {
    readonly " $data"?: EntityHTMLHeadFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityHTMLHeadFragment">;
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
  "name": "EntityHTMLHeadFragment",
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
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = 'a61d6e6a0ada29ed4e63926b7dc0c906';
export default node;
