/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorAffiliationColumnFragment = {
    readonly affiliation?: string | null | undefined;
    readonly " $refType": "ContributorAffiliationColumnFragment";
};
export type ContributorAffiliationColumnFragment$data = ContributorAffiliationColumnFragment;
export type ContributorAffiliationColumnFragment$key = {
    readonly " $data"?: ContributorAffiliationColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorAffiliationColumnFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorAffiliationColumnFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "affiliation",
          "storageKey": null
        }
      ],
      "type": "PersonContributor",
      "abstractKey": null
    }
  ],
  "type": "Contributor",
  "abstractKey": "__isContributor"
};
(node as any).hash = '2b4be539052d794072973adfb1a77ff7';
export default node;
