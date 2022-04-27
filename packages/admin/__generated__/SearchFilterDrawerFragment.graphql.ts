/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchFilterDrawerFragment = {
    readonly " $fragmentRefs": FragmentRefs<"SearchFilterFormFragment">;
    readonly " $refType": "SearchFilterDrawerFragment";
};
export type SearchFilterDrawerFragment$data = SearchFilterDrawerFragment;
export type SearchFilterDrawerFragment$key = {
    readonly " $data"?: SearchFilterDrawerFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchFilterDrawerFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFilterDrawerFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchFilterFormFragment"
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};
(node as any).hash = '420a03db0d9cfb17060d93955af81c87';
export default node;
