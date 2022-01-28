/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaFormFieldsFragment = {
    readonly properties: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"SchemaInstancePropertyFragment">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectorDataFragment" | "SchemaFormFieldsContextFragment">;
    readonly " $refType": "SchemaFormFieldsFragment";
};
export type SchemaFormFieldsFragment$data = SchemaFormFieldsFragment;
export type SchemaFormFieldsFragment$key = {
    readonly " $data"?: SchemaFormFieldsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SchemaFormFieldsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaFormFieldsFragment",
  "selections": [
    {
      "alias": "properties",
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperties",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SchemaInstancePropertyFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaSelectorDataFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaFormFieldsContextFragment"
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};
(node as any).hash = '4c91bc6d15af2140f890208addefd04d';
export default node;
