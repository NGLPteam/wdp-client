/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingAddFormFragment = {
    readonly id?: string;
    readonly " $refType": "EntityOrderingAddFormFragment";
};
export type EntityOrderingAddFormFragment$data = EntityOrderingAddFormFragment;
export type EntityOrderingAddFormFragment$key = {
    readonly " $data"?: EntityOrderingAddFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"EntityOrderingAddFormFragment">;
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
  "name": "EntityOrderingAddFormFragment",
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
(node as any).hash = '7532242ca2e242a69ded0c6077c0c7d1';
export default node;
