/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemAddFormSchemaOptionsFragment = {
    readonly schemaVersionOptions: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    }>;
    readonly " $refType": "ItemAddFormSchemaOptionsFragment";
};
export type ItemAddFormSchemaOptionsFragment$data = ItemAddFormSchemaOptionsFragment;
export type ItemAddFormSchemaOptionsFragment$key = {
    readonly " $data"?: ItemAddFormSchemaOptionsFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ItemAddFormSchemaOptionsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemAddFormSchemaOptionsFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "kind",
          "value": "ITEM"
        }
      ],
      "concreteType": "SchemaVersionOption",
      "kind": "LinkedField",
      "name": "schemaVersionOptions",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "label",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": "schemaVersionOptions(kind:\"ITEM\")"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'acc472ab475c59d81c64da7998965286';
export default node;
