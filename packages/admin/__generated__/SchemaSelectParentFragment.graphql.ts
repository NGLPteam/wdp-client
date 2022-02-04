/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type SchemaSelectParentFragment = {
    readonly schemaRanks: ReadonlyArray<{
        readonly identifier: string;
        readonly namespace: string;
        readonly kind: SchemaKind;
    }>;
    readonly " $refType": "SchemaSelectParentFragment";
};
export type SchemaSelectParentFragment$data = SchemaSelectParentFragment;
export type SchemaSelectParentFragment$key = {
    readonly " $data"?: SchemaSelectParentFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectParentFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaSelectParentFragment",
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
          "name": "identifier",
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
          "name": "kind",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '35a61d961412e29fc07b25ba8a4a6fd4';
export default node;
