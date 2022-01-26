/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaInstanceFormFragment = {
    readonly context: {
        readonly " $fragmentRefs": FragmentRefs<"SchemaInstanceProviderFragment">;
    };
    readonly properties: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"SchemaInstancePropertyFragment">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"SchemaFormFieldsFragment" | "SchemaSelectorDataFragment">;
    readonly " $refType": "SchemaInstanceFormFragment";
};
export type SchemaInstanceFormFragment$data = SchemaInstanceFormFragment;
export type SchemaInstanceFormFragment$key = {
    readonly " $data"?: SchemaInstanceFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SchemaInstanceFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaInstanceFormFragment",
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
          "name": "SchemaInstanceProviderFragment"
        }
      ],
      "storageKey": null
    },
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
      "name": "SchemaFormFieldsFragment"
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
(node as any).hash = '083ca8be2d9c353b3973c5f3c9d13bba';
export default node;
