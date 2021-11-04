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
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectorDataFragment">;
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
      "name": "SchemaSelectorDataFragment"
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};
(node as any).hash = '04c779d4e56e0fe204b8088634bbf8d1';
export default node;
