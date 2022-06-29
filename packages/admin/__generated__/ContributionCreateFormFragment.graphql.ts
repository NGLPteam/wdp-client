/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributionCreateFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ContributorTypeaheadFragment">;
    readonly " $refType": "ContributionCreateFormFragment";
};
export type ContributionCreateFormFragment$data = ContributionCreateFormFragment;
export type ContributionCreateFormFragment$key = {
    readonly " $data"?: ContributionCreateFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributionCreateFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributionCreateFormFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContributorTypeaheadFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '61c8f9abe05a5a20b259afb8273a25d3';
export default node;
