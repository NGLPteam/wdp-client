/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "METADATA" | "%future added value";
export type SchemaSelectorOptionsFragment = {
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
    readonly " $refType": "SchemaSelectorOptionsFragment";
};
export type SchemaSelectorOptionsFragment$data = SchemaSelectorOptionsFragment;
export type SchemaSelectorOptionsFragment$key = {
    readonly " $data"?: SchemaSelectorOptionsFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectorOptionsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaSelectorOptionsFragment",
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
(node as any).hash = '27020fa52a7192daad5ee15b339586d0';
export default node;
