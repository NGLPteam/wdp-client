/**
 * @generated SignedSource<<0f66300a4e3a568e09debfd9d265e486>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SchemaFormFieldsFragment$data = {
  readonly properties: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"SchemaInstancePropertyFragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaFormFieldsContextFragment" | "SchemaSelectorDataFragment">;
  readonly " $fragmentType": "SchemaFormFieldsFragment";
};
export type SchemaFormFieldsFragment$key = {
  readonly " $data"?: SchemaFormFieldsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaFormFieldsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaFormFieldsFragment",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "SchemaInstancePropertyFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaSelectorDataFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaFormFieldsContextFragment"
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};

(node as any).hash = "4c91bc6d15af2140f890208addefd04d";

export default node;
