/**
 * @generated SignedSource<<b1031bfd40786d338b37c340e31078aa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VariableDatePropertyFragment$data = {
  readonly dateWithPrecision: {
    readonly value: String | null;
    readonly " $fragmentSpreads": FragmentRefs<"PrecisionDateFragment">;
  } | null;
  readonly fullPath: string;
  readonly label: string;
  readonly " $fragmentType": "VariableDatePropertyFragment";
};
export type VariableDatePropertyFragment$key = {
  readonly " $data"?: VariableDatePropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"VariableDatePropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VariableDatePropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
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
      "concreteType": "VariablePrecisionDate",
      "kind": "LinkedField",
      "name": "dateWithPrecision",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PrecisionDateFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "VariableDateProperty",
  "abstractKey": null
};

(node as any).hash = "1cab2508178f3263dbaa25d1e91fe55a";

export default node;
