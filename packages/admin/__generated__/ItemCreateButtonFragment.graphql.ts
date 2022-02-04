/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type ItemCreateButtonFragment = {
    readonly slug?: string | undefined;
    readonly schemaRanks: ReadonlyArray<{
        readonly kind: SchemaKind;
    }>;
    readonly " $refType": "ItemCreateButtonFragment";
};
export type ItemCreateButtonFragment$data = ItemCreateButtonFragment;
export type ItemCreateButtonFragment$key = {
    readonly " $data"?: ItemCreateButtonFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemCreateButtonFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemCreateButtonFragment",
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
          "name": "kind",
          "storageKey": null
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
          "name": "slug",
          "storageKey": null
        }
      ],
      "type": "Sluggable",
      "abstractKey": "__isSluggable"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '8b969e1f031ee3be8abfbb7177092095';
export default node;
