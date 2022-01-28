/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemUpdateFormFragment = {
    readonly itemId: string;
    readonly " $fragmentRefs": FragmentRefs<"ItemUpdateFormFieldsFragment" | "SchemaFormFieldsFragment" | "useSchemaContextFragment" | "useSchemaPropertiesFragment">;
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
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = '903912b0fd70b77b0eea60f59f19b8f5';
export default node;
