/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type useSchemaPropertiesFragment = {
    readonly properties: ReadonlyArray<{
        readonly fullPath?: string | undefined;
    }>;
    readonly " $refType": "useSchemaPropertiesFragment";
};
export type useSchemaPropertiesFragment$data = useSchemaPropertiesFragment;
export type useSchemaPropertiesFragment$key = {
    readonly " $data"?: useSchemaPropertiesFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"useSchemaPropertiesFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useSchemaPropertiesFragment",
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
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "fullPath",
              "storageKey": null
            }
          ],
          "type": "SchemaProperty",
          "abstractKey": "__isSchemaProperty"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};
(node as any).hash = 'b62cc7097170e00732dd1b54b1cd592e';
export default node;
