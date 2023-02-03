/**
 * @generated SignedSource<<25607c5501ca751af0a536c3ef69fb6e>>
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
    readonly " $fragmentSpreads": FragmentRefs<"VariablePrecisionDateControlFragment">;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
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
          "name": "VariablePrecisionDateControlFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "VariableDateProperty",
  "abstractKey": null
};

(node as any).hash = "a9615f76700b6c97c15c86019adc10b9";

export default node;
