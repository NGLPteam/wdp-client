/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionUpdateFormFieldsFragment = {
    readonly title: string | null;
    readonly " $refType": "CollectionUpdateFormFieldsFragment";
};
export type CollectionUpdateFormFieldsFragment$data = CollectionUpdateFormFieldsFragment;
export type CollectionUpdateFormFieldsFragment$key = {
    readonly " $data"?: CollectionUpdateFormFieldsFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"CollectionUpdateFormFieldsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionUpdateFormFieldsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'fcc9e58da6bac8c5ce13f64b8ba4ffa1';
export default node;
