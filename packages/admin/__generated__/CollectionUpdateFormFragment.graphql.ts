/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionUpdateFormFragment = {
    readonly collectionId: string;
    readonly " $fragmentRefs": FragmentRefs<"CollectionUpdateFormFieldsFragment">;
    readonly " $refType": "CollectionUpdateFormFragment";
};
export type CollectionUpdateFormFragment$data = CollectionUpdateFormFragment;
export type CollectionUpdateFormFragment$key = {
    readonly " $data"?: CollectionUpdateFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionUpdateFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionUpdateFormFragment",
  "selections": [
    {
      "alias": "collectionId",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollectionUpdateFormFieldsFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'bfe0f18f89004f4f24306a6014fe3c14';
export default node;
