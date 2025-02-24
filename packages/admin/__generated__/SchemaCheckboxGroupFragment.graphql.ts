/**
 * @generated SignedSource<<a75bbffedacf73e9928844c0aa0d50e2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SchemaCheckboxGroupFragment$data = {
  readonly schemaVersions: {
    readonly nodes: ReadonlyArray<{
      readonly identifier: string;
      readonly name: string;
      readonly namespace: string;
    }>;
  };
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
      "concreteType": "SchemaVersionConnection",
      "kind": "LinkedField",
      "name": "schemaVersions",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SchemaVersion",
          "kind": "LinkedField",
          "name": "nodes",
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
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "e3d0d0ccf0c201c3ada894de319e622b";

export default node;
