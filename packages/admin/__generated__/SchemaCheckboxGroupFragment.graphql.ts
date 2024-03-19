/**
 * @generated SignedSource<<273caf4fe1e61223df21a7e2b37723d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SchemaCheckboxGroupFragment$data = {
  readonly schemaRanks: ReadonlyArray<{
    readonly identifier: string;
    readonly name: string;
    readonly namespace: string;
  }>;
  readonly " $fragmentType": "SchemaCheckboxGroupFragment";
};
export type SchemaCheckboxGroupFragment$key = {
  readonly " $data"?: SchemaCheckboxGroupFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaCheckboxGroupFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaCheckboxGroupFragment",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "05485b1a214e0d1f8d41643035900594";

export default node;
