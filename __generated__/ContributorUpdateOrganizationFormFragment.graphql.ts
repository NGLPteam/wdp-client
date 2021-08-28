/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributorUpdateOrganizationFormFragment = {
    readonly contributorId?: string;
    readonly " $fragmentRefs": FragmentRefs<"ContributorOrganizationFormFragment">;
    readonly " $refType": "ContributorUpdateOrganizationFormFragment";
};
export type ContributorUpdateOrganizationFormFragment$data = ContributorUpdateOrganizationFormFragment;
export type ContributorUpdateOrganizationFormFragment$key = {
    readonly " $data"?: ContributorUpdateOrganizationFormFragment$data;
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
          "name": "ContributorOrganizationFormFragment"
        }
      ],
      "type": "OrganizationContributor",
      "abstractKey": null
    }
  ],
  "type": "AnyContributor",
  "abstractKey": "__isAnyContributor"
};
(node as any).hash = 'f55496787fe2fe34e30a04ac2c3d4456';
export default node;
