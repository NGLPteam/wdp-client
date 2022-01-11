/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DOIFragment = {
    readonly doi: string | null;
    readonly " $refType": "DOIFragment";
};
export type DOIFragment$data = DOIFragment;
export type DOIFragment$key = {
    readonly " $data"?: DOIFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"DOIFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DOIFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "doi",
      "storageKey": null
    }
  ],
  "type": "HasDOI",
  "abstractKey": "__isHasDOI"
};
(node as any).hash = '586c0e3d3461b608c941d3acf6b5f731';
export default node;
