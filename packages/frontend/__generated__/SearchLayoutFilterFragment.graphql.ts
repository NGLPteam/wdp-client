/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type SearchLayoutFilterFragment = {
    readonly schemaRanks: ReadonlyArray<{
        readonly identifier: string;
        readonly namespace: string;
        readonly kind: SchemaKind;
        readonly name: string;
    }>;
    readonly " $refType": "SearchLayoutFilterFragment";
};
export type SearchLayoutFilterFragment$data = SearchLayoutFilterFragment;
export type SearchLayoutFilterFragment$key = {
    readonly " $data"?: SearchLayoutFilterFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchLayoutFilterFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchLayoutFilterFragment",
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
(node as any).hash = '29e69181a4685a2b100368a1d5e91b35';
export default node;
