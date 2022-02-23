/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type SchemaSelectorModalOptionsFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly name: string;
            readonly namespace: string;
            readonly identifier: string;
            readonly kind: SchemaKind;
            readonly slug: string;
            readonly number: string;
        };
    }>;
    readonly " $refType": "SchemaSelectorModalOptionsFragment";
};
export type SchemaSelectorModalOptionsFragment$data = SchemaSelectorModalOptionsFragment;
export type SchemaSelectorModalOptionsFragment$key = {
    readonly " $data"?: SchemaSelectorModalOptionsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectorModalOptionsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaSelectorModalOptionsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SchemaVersionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SchemaVersion",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
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
              "name": "slug",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "number",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SchemaVersionConnection",
  "abstractKey": null
};
(node as any).hash = 'a1d8ededc84a8d4c6a451f2dedab1bdd';
export default node;
