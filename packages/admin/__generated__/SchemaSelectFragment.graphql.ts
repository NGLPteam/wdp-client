/**
 * @generated SignedSource<<d3e27e67c95f3e309593d09e7c5b135f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SchemaSelectFragment$data = {
  readonly schemaVersionOptions: ReadonlyArray<{
    readonly label: string;
    readonly schemaDefinition: {
      readonly slug: string;
    };
    readonly value: string;
  }>;
  readonly " $fragmentType": "SchemaSelectFragment";
};
export type SchemaSelectFragment$key = {
  readonly " $data"?: SchemaSelectFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaSelectFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "schemaKind"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaSelectFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "kind",
          "variableName": "schemaKind"
        }
      ],
      "concreteType": "SchemaVersionOption",
      "kind": "LinkedField",
      "name": "schemaVersionOptions",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "label",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
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
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "98aa1b8330db2b49515a734792160574";

export default node;
