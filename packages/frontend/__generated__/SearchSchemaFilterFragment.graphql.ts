/**
 * @generated SignedSource<<6dbab8a404842ecdbf67a82aa5fd431c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchSchemaFilterFragment$data = {
  readonly schemas: ReadonlyArray<{
    readonly name: string;
    readonly schemaDefinition: {
      readonly slug: String;
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

(node as any).hash = "7e9e58440599af9fccb929f5300055c4";

export default node;
