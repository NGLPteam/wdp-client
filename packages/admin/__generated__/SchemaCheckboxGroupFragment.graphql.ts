/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaCheckboxGroupFragment = {
    readonly schemaRanks: ReadonlyArray<{
        readonly name: string;
        readonly namespace: string;
        readonly identifier: string;
    }>;
    readonly " $refType": "SchemaCheckboxGroupFragment";
};
export type SchemaCheckboxGroupFragment$data = SchemaCheckboxGroupFragment;
export type SchemaCheckboxGroupFragment$key = {
    readonly " $data"?: SchemaCheckboxGroupFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SchemaCheckboxGroupFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaCheckboxGroupFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HierarchicalSchemaRank",
      "kind": "LinkedField",
      "name": "schemaRanks",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '05485b1a214e0d1f8d41643035900594';
export default node;
