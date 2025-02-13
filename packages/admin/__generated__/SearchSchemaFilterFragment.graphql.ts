/**
 * @generated SignedSource<<18175dbf5145d65a86dc59b03977c6a3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SearchSchemaFilterFragment$data = {
  readonly schemas: ReadonlyArray<{
    readonly kind: SchemaKind;
    readonly name: string;
    readonly schemaDefinition: {
      readonly slug: string;
    };
  }>;
  readonly " $fragmentType": "SearchSchemaFilterFragment";
};
export type SearchSchemaFilterFragment$key = {
  readonly " $data"?: SearchSchemaFilterFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchSchemaFilterFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchSchemaFilterFragment",
  "selections": [
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
          "name": "name",
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
          "concreteType": "SchemaDefinition",
          "kind": "LinkedField",
          "name": "schemaDefinition",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};

(node as any).hash = "c3ddce057930dffc64f94c1d642d5f47";

export default node;
