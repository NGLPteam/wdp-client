/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type SearchLayoutFiltersFragment = {
    readonly schemaRanks: ReadonlyArray<{
        readonly identifier: string;
        readonly namespace: string;
        readonly kind: SchemaKind;
        readonly name: string;
    }>;
    readonly " $refType": "SearchLayoutFiltersFragment";
};
export type SearchLayoutFiltersFragment$data = SearchLayoutFiltersFragment;
export type SearchLayoutFiltersFragment$key = {
    readonly " $data"?: SearchLayoutFiltersFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchLayoutFiltersFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchLayoutFiltersFragment",
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
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '1d908f0792ca40a13a2dcb50a2b85cc4';
export default node;
