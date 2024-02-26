/**
 * @generated SignedSource<<d2942e28bf20f25dab29e4cc54a0f4fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useSchemaPropertiesFragment$data = {
  readonly properties: ReadonlyArray<{
    readonly fullPath?: string;
  }>;
  readonly " $fragmentType": "useSchemaPropertiesFragment";
};
export type useSchemaPropertiesFragment$key = {
  readonly " $data"?: useSchemaPropertiesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useSchemaPropertiesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useSchemaPropertiesFragment",
  "selections": [
    {
      "alias": "properties",
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperties",
      "plural": true,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "fullPath",
              "storageKey": null
            }
          ],
          "type": "SchemaProperty",
          "abstractKey": "__isSchemaProperty"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};

(node as any).hash = "b62cc7097170e00732dd1b54b1cd592e";

export default node;
