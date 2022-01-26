/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaFormFieldsFragment = {
    readonly properties: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"SchemaInstancePropertyFragment">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectorDataFragment">;
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
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};
(node as any).hash = '8371275b0805f3e614c2e8c3132db73c';
export default node;
