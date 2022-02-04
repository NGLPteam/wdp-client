/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionAddFormParentFragment = {
    readonly id?: string | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectParentFragment">;
    readonly " $refType": "CollectionAddFormParentFragment";
};
export type CollectionAddFormParentFragment$data = CollectionAddFormParentFragment;
export type CollectionAddFormParentFragment$key = {
    readonly " $data"?: CollectionAddFormParentFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionAddFormParentFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionAddFormParentFragment",
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
(node as any).hash = 'b3c6d9573fce5565aea2ef54a369316e';
export default node;
