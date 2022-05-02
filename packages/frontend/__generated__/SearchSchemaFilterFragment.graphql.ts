/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchSchemaFilterFragment = {
    readonly schemas: ReadonlyArray<{
        readonly namespace: string;
        readonly identifier: string;
        readonly name: string;
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
          "name": "namespace",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "identifier",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};
(node as any).hash = 'db462319016f76f94ca8cd1671446a97';
export default node;
