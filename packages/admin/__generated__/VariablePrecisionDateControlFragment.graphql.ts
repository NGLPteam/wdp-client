/**
 * @generated SignedSource<<06d72ee4485bb5347fd4ff231af86f63>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type DatePrecision = "DAY" | "MONTH" | "NONE" | "YEAR" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type VariablePrecisionDateControlFragment$data = {
  readonly precision: DatePrecision;
  readonly value: string | null | undefined;
  readonly " $fragmentType": "VariablePrecisionDateControlFragment";
};
export type VariablePrecisionDateControlFragment$key = {
  readonly " $data"?: VariablePrecisionDateControlFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"VariablePrecisionDateControlFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VariablePrecisionDateControlFragment",
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

(node as any).hash = "1862c200c18d6907e7b4a02479d0ca17";

export default node;
