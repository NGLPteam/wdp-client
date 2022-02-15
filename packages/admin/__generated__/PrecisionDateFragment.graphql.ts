/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DatePrecision = "DAY" | "MONTH" | "NONE" | "YEAR" | "%future added value";
export type PrecisionDateFragment = {
    readonly precision: DatePrecision;
    readonly value: string | null;
    readonly " $refType": "PrecisionDateFragment";
};
export type PrecisionDateFragment$data = PrecisionDateFragment;
export type PrecisionDateFragment$key = {
    readonly " $data"?: PrecisionDateFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
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
(node as any).hash = '1b8425f9d45c5f5476b4873281a08037';
export default node;
