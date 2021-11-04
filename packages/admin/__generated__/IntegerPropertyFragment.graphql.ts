/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IntegerPropertyFragment = {
    readonly integerValue: number | null;
    readonly defaultInteger: number | null;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "IntegerPropertyFragment";
};
export type IntegerPropertyFragment$data = IntegerPropertyFragment;
export type IntegerPropertyFragment$key = {
    readonly " $data"?: IntegerPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IntegerPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IntegerPropertyFragment",
  "selections": [
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "IntegerProperty",
  "abstractKey": null
};
(node as any).hash = '374bb6253664b25434ebf1d8a37758ba';
export default node;
