/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type CollectionCreateButtonFragment = {
    readonly slug?: string | undefined;
    readonly schemaRanks: ReadonlyArray<{
        readonly kind: SchemaKind;
    }>;
    readonly " $refType": "CollectionCreateButtonFragment";
};
export type CollectionCreateButtonFragment$data = CollectionCreateButtonFragment;
export type CollectionCreateButtonFragment$key = {
    readonly " $data"?: CollectionCreateButtonFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionCreateButtonFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionCreateButtonFragment",
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
(node as any).hash = '278fa368fda5b861a10d12dabb17c1d4';
export default node;
