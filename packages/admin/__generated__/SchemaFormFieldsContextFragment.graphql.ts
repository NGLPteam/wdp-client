/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import SchemaFormFieldsContextRefetchQuery from "./SchemaFormFieldsContextRefetchQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type SchemaFormFieldsContextFragment = {
    readonly context: {
        readonly " $fragmentRefs": FragmentRefs<"useSchemaContextFragment">;
    };
    readonly id?: string | undefined;
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
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": SchemaFormFieldsContextRefetchQuery,
      "identifierField": "id"
    }
  },
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
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "type": "Node",
      "abstractKey": "__isNode"
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};
(node as any).hash = '75dc0b6c8d2f888306f0edc89b661b52';
export default node;
