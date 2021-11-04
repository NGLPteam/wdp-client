/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorUpdateOrganizationFormFragment = {
    readonly contributorId?: string | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorUpdateOrganizationFormFieldsFragment">;
    readonly " $refType": "ContributorUpdateOrganizationFormFragment";
};
export type ContributorUpdateOrganizationFormFragment$data = ContributorUpdateOrganizationFormFragment;
export type ContributorUpdateOrganizationFormFragment$key = {
    readonly " $data"?: ContributorUpdateOrganizationFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorUpdateOrganizationFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorUpdateOrganizationFormFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": "contributorId",
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorUpdateOrganizationFormFieldsFragment"
        }
      ],
      "type": "OrganizationContributor",
      "abstractKey": null
    }
  ],
  "type": "AnyContributor",
  "abstractKey": "__isAnyContributor"
};
(node as any).hash = '8aac5d127955ead680077e83080d9d09';
export default node;
