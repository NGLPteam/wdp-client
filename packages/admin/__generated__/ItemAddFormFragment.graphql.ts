/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemAddFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectFragment">;
    readonly " $refType": "ItemAddFormFragment";
};
export type ItemAddFormFragment$data = ItemAddFormFragment;
export type ItemAddFormFragment$key = {
    readonly " $data"?: ItemAddFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemAddFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemAddFormFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaSelectFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '14ce4d800b035fc366efe37077b1dd47';
export default node;
