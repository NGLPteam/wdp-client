/**
 * @generated SignedSource<<39bc955b7a8eeead758bed63cc56c469>>
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "f82da6bde36b4909bd5787dcbfb19439";

export default node;
