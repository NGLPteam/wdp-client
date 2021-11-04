/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityLinksAddFormFragment = {
    readonly id?: string | undefined;
    readonly title?: string | undefined;
    readonly slug?: string | undefined;
    readonly " $refType": "EntityLinksAddFormFragment";
};
export type EntityLinksAddFormFragment$data = EntityLinksAddFormFragment;
export type EntityLinksAddFormFragment$key = {
    readonly " $data"?: EntityLinksAddFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityLinksAddFormFragment">;
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
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "slug",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityLinksAddFormFragment",
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
(node as any).hash = 'bf1726f2b094fd23d19a7d72ca3b6c04';
export default node;
