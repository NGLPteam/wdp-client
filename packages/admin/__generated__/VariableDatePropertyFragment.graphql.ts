/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DatePrecision = "DAY" | "MONTH" | "NONE" | "YEAR" | "%future added value";
export type VariableDatePropertyFragment = {
    readonly dateWithPrecision: {
        readonly precision: DatePrecision;
        readonly value: string | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "VariableDatePropertyFragment";
};
export type VariableDatePropertyFragment$data = VariableDatePropertyFragment;
export type VariableDatePropertyFragment$key = {
    readonly " $data"?: VariableDatePropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"VariableDatePropertyFragment">;
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
      "concreteType": "VariablePrecisionDate",
      "kind": "LinkedField",
      "name": "dateWithPrecision",
      "plural": false,
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
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "VariableDateProperty",
  "abstractKey": null
};
(node as any).hash = '6da1cbc536d74fb1e520e100cb19de12';
export default node;
