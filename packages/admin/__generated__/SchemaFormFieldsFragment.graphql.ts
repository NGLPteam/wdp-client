/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import SchemaFormFieldsRefetchQuery from "./SchemaFormFieldsRefetchQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type SchemaFormFieldsFragment = {
    readonly properties: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"SchemaInstancePropertyFragment">;
    }>;
    readonly id?: string | undefined;
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
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": SchemaFormFieldsRefetchQuery,
      "identifierField": "id"
    }
  },
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
(node as any).hash = 'b1e49ae1d4c198d8a55bae7e83c70d8b';
export default node;
