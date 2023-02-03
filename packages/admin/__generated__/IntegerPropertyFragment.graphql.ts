/**
 * @generated SignedSource<<530fcac8ec6db3912bae484200707ef9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IntegerPropertyFragment$data = {
  readonly defaultInteger: number | null;
  readonly integerValue: number | null;
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
  readonly " $fragmentType": "IntegerPropertyFragment";
};
export type IntegerPropertyFragment$key = {
  readonly " $data"?: IntegerPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"IntegerPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IntegerPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "integerValue",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultInteger",
      "storageKey": null
    }
  ],
  "type": "IntegerProperty",
  "abstractKey": null
};

(node as any).hash = "374bb6253664b25434ebf1d8a37758ba";

export default node;
