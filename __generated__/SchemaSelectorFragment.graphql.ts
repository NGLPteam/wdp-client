/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "METADATA" | "%future added value";
export type SchemaSelectorFragment = {
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
    readonly " $refType": "SchemaSelectorFragment";
};
export type SchemaSelectorFragment$data = SchemaSelectorFragment;
export type SchemaSelectorFragment$key = {
    readonly " $data"?: SchemaSelectorFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectorFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaSelectorFragment",
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
(node as any).hash = 'e05aac11a144b74ea7d90e461510d1ea';
export default node;
