/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionUpdateFormFragment = {
    readonly collectionId: string;
    readonly " $fragmentRefs": FragmentRefs<"CollectionUpdateFormFieldsFragment" | "SchemaFormFieldsFragment" | "useSchemaContextFragment" | "useSchemaPropertiesFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaFormFieldsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useSchemaContextFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useSchemaPropertiesFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '394df4aca190b3e5ace127d8c1ac7a70';
export default node;
