/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SearchFilterDrawerFragment">;
    readonly " $refType": "SearchFragment";
};
export type SearchFragment$data = SearchFragment;
export type SearchFragment$key = {
    readonly " $data"?: SearchFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchFilterDrawerFragment"
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};
(node as any).hash = '9e91aacd9edcb0333834a79ff7d98223';
export default node;
