/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntitiesPropertyFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "EntitiesPropertyFragment";
};
export type EntitiesPropertyFragment$data = EntitiesPropertyFragment;
export type EntitiesPropertyFragment$key = {
    readonly " $data"?: EntitiesPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntitiesPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntitiesPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "EntitiesProperty",
  "abstractKey": null
};
(node as any).hash = '0ff3c4cc1a4c3560aaa36d59d4d0b4e1';
export default node;
