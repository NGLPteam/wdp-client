/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityLinksAddFormFragment = {
    readonly entityId?: string;
    readonly " $refType": "EntityLinksAddFormFragment";
};
export type EntityLinksAddFormFragment$data = EntityLinksAddFormFragment;
export type EntityLinksAddFormFragment$key = {
    readonly " $data"?: EntityLinksAddFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"EntityLinksAddFormFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": "entityId",
    "args": null,
    "kind": "ScalarField",
    "name": "id",
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
(node as any).hash = 'f4059854edd4080bfd7eab9b697fd2ff';
export default node;
