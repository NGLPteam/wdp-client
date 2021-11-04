/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AssetsPropertyFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "AssetsPropertyFragment";
};
export type AssetsPropertyFragment$data = AssetsPropertyFragment;
export type AssetsPropertyFragment$key = {
    readonly " $data"?: AssetsPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetsPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetsPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "AssetsProperty",
  "abstractKey": null
};
(node as any).hash = 'a2a21a4230526467a85e228defd9566d';
export default node;
