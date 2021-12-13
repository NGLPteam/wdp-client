/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type VariableDatePropertyFragment = {
    readonly fullPath: string;
    readonly label: string;
    readonly dateWithPrecision: {
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    } | null;
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
(node as any).hash = '162dcedd1badf4e34571894c1dbb7f0b';
export default node;
