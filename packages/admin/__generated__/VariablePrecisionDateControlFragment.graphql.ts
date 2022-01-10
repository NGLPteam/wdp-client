/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DatePrecision = "DAY" | "MONTH" | "NONE" | "YEAR" | "%future added value";
export type VariablePrecisionDateControlFragment = {
    readonly precision: DatePrecision;
    readonly value: string | null;
    readonly " $refType": "VariablePrecisionDateControlFragment";
};
export type VariablePrecisionDateControlFragment$data = VariablePrecisionDateControlFragment;
export type VariablePrecisionDateControlFragment$key = {
    readonly " $data"?: VariablePrecisionDateControlFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"VariablePrecisionDateControlFragment">;
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
(node as any).hash = '1862c200c18d6907e7b4a02479d0ca17';
export default node;
