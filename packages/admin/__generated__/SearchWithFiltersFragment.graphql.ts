/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchWithFiltersFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SearchFilterDrawerFragment">;
    readonly " $refType": "SearchWithFiltersFragment";
};
export type SearchWithFiltersFragment$data = SearchWithFiltersFragment;
export type SearchWithFiltersFragment$key = {
    readonly " $data"?: SearchWithFiltersFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchWithFiltersFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchWithFiltersFragment",
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
(node as any).hash = '9563a48181dade2f396d5c78fec848ad';
export default node;
