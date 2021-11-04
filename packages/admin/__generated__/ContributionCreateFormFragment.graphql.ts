/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributionCreateFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ItemTypeaheadFragment" | "CollectionTypeaheadFragment" | "ContributorTypeaheadFragment">;
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
      "name": "ItemTypeaheadFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollectionTypeaheadFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContributorTypeaheadFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'a7a25a0632d8130e4ba083385e905b63';
export default node;
