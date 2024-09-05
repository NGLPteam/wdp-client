/**
 * @generated SignedSource<<1bddcb0ace47fdbd902583bfa54b3f9e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SchemaSelectorModalOptionsFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly identifier: string;
      readonly kind: SchemaKind;
      readonly name: string;
      readonly namespace: string;
      readonly number: string;
      readonly schemaDefinition: {
        readonly slug: string;
      };
      readonly slug: string;
    };
  }>;
  readonly " $fragmentType": "SchemaSelectorModalOptionsFragment";
};
export type SchemaSelectorModalOptionsFragment$key = {
  readonly " $data"?: SchemaSelectorModalOptionsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaSelectorModalOptionsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
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
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "number",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "SchemaDefinition",
              "kind": "LinkedField",
              "name": "schemaDefinition",
              "plural": false,
              "selections": [
                (v0/*: any*/)
              ],
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
})();

(node as any).hash = "fa39c6b24de2bd45f37f395a1b9d5993";

export default node;
