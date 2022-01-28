/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaFormFieldsContextFragment = {
    readonly context: {
        readonly " $fragmentRefs": FragmentRefs<"useSchemaContextFragment">;
    };
    readonly " $refType": "SchemaFormFieldsContextFragment";
};
export type SchemaFormFieldsContextFragment$data = SchemaFormFieldsContextFragment;
export type SchemaFormFieldsContextFragment$key = {
    readonly " $data"?: SchemaFormFieldsContextFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SchemaFormFieldsContextFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaFormFieldsContextFragment",
  "selections": [
    {
      "alias": "context",
      "args": null,
      "concreteType": "SchemaInstanceContext",
      "kind": "LinkedField",
      "name": "schemaInstanceContext",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "useSchemaContextFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};
(node as any).hash = '1cc988b90238da79ef8c9b201058afed';
export default node;
