/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type VariableDatePropertyFragment = {
    readonly dateWithPrecision: {
        readonly " $fragmentRefs": FragmentRefs<"VariablePrecisionDateControlFragment">;
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "VariablePrecisionDateControlFragment"
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
(node as any).hash = 'a9615f76700b6c97c15c86019adc10b9';
export default node;
