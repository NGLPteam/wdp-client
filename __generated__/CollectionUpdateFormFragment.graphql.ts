/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionUpdateFormFragment = {
    readonly collectionId: string;
    readonly identifier: string;
    readonly " $fragmentRefs": FragmentRefs<"CollectionUpdateFormFieldsFragment">;
    readonly " $refType": "CollectionUpdateFormFragment";
};
export type CollectionUpdateFormFragment$data = CollectionUpdateFormFragment;
export type CollectionUpdateFormFragment$key = {
    readonly " $data"?: CollectionUpdateFormFragment$data;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "identifier",
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
(node as any).hash = 'c9158f220546d3b7e514811d6b4f0ede';
export default node;
