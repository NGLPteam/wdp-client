/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemUpdateFormFieldsFragment = {
    readonly title: string | null;
    readonly " $refType": "ItemUpdateFormFieldsFragment";
};
export type ItemUpdateFormFieldsFragment$data = ItemUpdateFormFieldsFragment;
export type ItemUpdateFormFieldsFragment$key = {
    readonly " $data"?: ItemUpdateFormFieldsFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ItemUpdateFormFieldsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemUpdateFormFieldsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = '68cfb73b7be844f071afc355eb49cfa2';
export default node;
