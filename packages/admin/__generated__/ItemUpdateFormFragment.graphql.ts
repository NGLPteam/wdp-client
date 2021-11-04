/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemUpdateFormFragment = {
    readonly itemId: string;
    readonly " $fragmentRefs": FragmentRefs<"ItemUpdateFormFieldsFragment">;
    readonly " $refType": "ItemUpdateFormFragment";
};
export type ItemUpdateFormFragment$data = ItemUpdateFormFragment;
export type ItemUpdateFormFragment$key = {
    readonly " $data"?: ItemUpdateFormFragment$data | undefined;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemUpdateFormFieldsFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = 'f2949d9ae34f571f61df0687bf558b17';
export default node;
