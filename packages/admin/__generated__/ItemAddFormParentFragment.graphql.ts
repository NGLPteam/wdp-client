/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemAddFormParentFragment = {
    readonly id?: string | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectParentFragment">;
    readonly " $refType": "ItemAddFormParentFragment";
};
export type ItemAddFormParentFragment$data = ItemAddFormParentFragment;
export type ItemAddFormParentFragment$key = {
    readonly " $data"?: ItemAddFormParentFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemAddFormParentFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemAddFormParentFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "type": "Node",
      "abstractKey": "__isNode"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaSelectParentFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '6636cf21edc42f428c9904fb82e7dd13';
export default node;
