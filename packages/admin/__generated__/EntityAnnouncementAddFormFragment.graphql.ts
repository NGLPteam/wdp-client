/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementAddFormFragment = {
    readonly id?: string | undefined;
    readonly " $refType": "EntityAnnouncementAddFormFragment";
};
export type EntityAnnouncementAddFormFragment$data = EntityAnnouncementAddFormFragment;
export type EntityAnnouncementAddFormFragment$key = {
    readonly " $data"?: EntityAnnouncementAddFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityAnnouncementAddFormFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
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
  "name": "EntityAnnouncementAddFormFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Community",
      "abstractKey": null
    },
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
(node as any).hash = 'd1f14fd94b38d522cfd35a18dd70b539';
export default node;
