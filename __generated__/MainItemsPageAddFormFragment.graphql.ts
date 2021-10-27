/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MainItemsPageAddFormFragment = {
    readonly schemaVersionOptions: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    }>;
    readonly " $refType": "MainItemsPageAddFormFragment";
};
export type MainItemsPageAddFormFragment$data = MainItemsPageAddFormFragment;
export type MainItemsPageAddFormFragment$key = {
    readonly " $data"?: MainItemsPageAddFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"MainItemsPageAddFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MainItemsPageAddFormFragment",
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
(node as any).hash = 'f838ab1ddcf09bfc5b35c5457805fb18';
export default node;
