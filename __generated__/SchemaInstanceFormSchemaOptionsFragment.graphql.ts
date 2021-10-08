/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SchemaInstanceFormSchemaOptionsFragment = {
    readonly schemaVersions: {
        readonly " $fragmentRefs": FragmentRefs<"SchemaSelectorOptionsFragment">;
    };
    readonly " $refType": "SchemaInstanceFormSchemaOptionsFragment";
};
export type SchemaInstanceFormSchemaOptionsFragment$data = SchemaInstanceFormSchemaOptionsFragment;
export type SchemaInstanceFormSchemaOptionsFragment$key = {
    readonly " $data"?: SchemaInstanceFormSchemaOptionsFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"SchemaInstanceFormSchemaOptionsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaInstanceFormSchemaOptionsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SchemaVersionConnection",
      "kind": "LinkedField",
      "name": "schemaVersions",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SchemaSelectorOptionsFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '9655b78c3e0f0fb0387c9d2eff2f9585';
export default node;
