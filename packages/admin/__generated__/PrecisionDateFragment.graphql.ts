/**
 * @generated SignedSource<<0c06609152f1276a2a09044a33781b91>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type DatePrecision = "DAY" | "MONTH" | "NONE" | "YEAR" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type PrecisionDateFragment$data = {
  readonly precision: DatePrecision;
  readonly value: String | null;
  readonly " $fragmentType": "PrecisionDateFragment";
};
export type PrecisionDateFragment$key = {
  readonly " $data"?: PrecisionDateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PrecisionDateFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PrecisionDateFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "precision",
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
  "type": "VariablePrecisionDate",
  "abstractKey": null
};

(node as any).hash = "1b8425f9d45c5f5476b4873281a08037";

export default node;
