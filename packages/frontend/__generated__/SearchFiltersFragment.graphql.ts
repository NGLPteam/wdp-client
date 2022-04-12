/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type SearchFiltersFragment = {
    readonly coreProperties: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"SearchFilterFragment">;
    }>;
    readonly schemas: ReadonlyArray<{
        readonly identifier: string;
        readonly namespace: string;
        readonly kind: SchemaKind;
        readonly name: string;
    }>;
    readonly " $refType": "SearchFiltersFragment";
};
export type SearchFiltersFragment$data = SearchFiltersFragment;
export type SearchFiltersFragment$key = {
    readonly " $data"?: SearchFiltersFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchFiltersFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFiltersFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SearchableCoreProperty",
      "kind": "LinkedField",
      "name": "coreProperties",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SearchFilterFragment"
        }
      ],
      "storageKey": null
    },
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
  "type": "SearchScope",
  "abstractKey": null
};
(node as any).hash = 'cfdd6436708ae2ab1126e9b9ee021691';
export default node;
