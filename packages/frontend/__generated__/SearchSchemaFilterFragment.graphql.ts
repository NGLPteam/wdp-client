/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchSchemaFilterFragment = {
    readonly schemas: ReadonlyArray<{
        readonly name: string;
        readonly schemaDefinition: {
            readonly slug: string;
        };
    }>;
    readonly " $refType": "SearchSchemaFilterFragment";
};
export type SearchSchemaFilterFragment$data = SearchSchemaFilterFragment;
export type SearchSchemaFilterFragment$key = {
    readonly " $data"?: SearchSchemaFilterFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchSchemaFilterFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchSchemaFilterFragment",
  "selections": [
    {
      "alias": "schemas",
      "args": null,
      "concreteType": "SchemaVersion",
      "kind": "LinkedField",
      "name": "availableSchemaVersions",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SchemaDefinition",
          "kind": "LinkedField",
          "name": "schemaDefinition",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};
(node as any).hash = '7e9e58440599af9fccb929f5300055c4';
export default node;
