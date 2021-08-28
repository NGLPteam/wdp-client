/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributorUpdateFormFragment = {
    readonly __typename: "PersonContributor";
    readonly " $fragmentRefs": FragmentRefs<"ContributorUpdatePersonFormFragment">;
    readonly " $refType": "ContributorUpdateFormFragment";
} | {
    readonly __typename: "OrganizationContributor";
    readonly " $fragmentRefs": FragmentRefs<"ContributorUpdateOrganizationFormFragment">;
    readonly " $refType": "ContributorUpdateFormFragment";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "ContributorUpdateFormFragment";
};
export type ContributorUpdateFormFragment$data = ContributorUpdateFormFragment;
export type ContributorUpdateFormFragment$key = {
    readonly " $data"?: ContributorUpdateFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ContributorUpdateFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorUpdateFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorUpdatePersonFormFragment"
        }
      ],
      "type": "PersonContributor",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorUpdateOrganizationFormFragment"
        }
      ],
      "type": "OrganizationContributor",
      "abstractKey": null
    }
  ],
  "type": "AnyContributor",
  "abstractKey": "__isAnyContributor"
};
(node as any).hash = '7833270fdaaf931399f758ef12db259f';
export default node;
