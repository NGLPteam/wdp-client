/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemUpdateFormFragment = {
    readonly itemId: string;
    readonly identifier: string;
    readonly " $fragmentRefs": FragmentRefs<"ItemUpdateFormFieldsFragment">;
    readonly " $refType": "ItemUpdateFormFragment";
};
export type ItemUpdateFormFragment$data = ItemUpdateFormFragment;
export type ItemUpdateFormFragment$key = {
    readonly " $data"?: ItemUpdateFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ItemUpdateFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemUpdateFormFragment",
  "selections": [
    {
      "alias": "itemId",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "identifier",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemUpdateFormFieldsFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = 'd45f3814b23037b66f01d5165aea5147';
export default node;
