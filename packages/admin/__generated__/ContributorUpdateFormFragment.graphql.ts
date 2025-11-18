/**
 * @generated SignedSource<<4f7f5f5a0521cdd2eac2e6c683033756>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorUpdateFormFragment$data = {
  readonly __typename: "OrganizationContributor";
  readonly " $fragmentSpreads": FragmentRefs<"ContributorUpdateOrganizationFormFragment">;
  readonly " $fragmentType": "ContributorUpdateFormFragment";
} | {
  readonly __typename: "PersonContributor";
  readonly " $fragmentSpreads": FragmentRefs<"ContributorUpdatePersonFormFragment">;
  readonly " $fragmentType": "ContributorUpdateFormFragment";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "ContributorUpdateFormFragment";
};
export type ContributorUpdateFormFragment$key = {
  readonly " $data"?: ContributorUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorUpdateFormFragment">;
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
  "type": "Contributor",
  "abstractKey": "__isContributor"
};

(node as any).hash = "1c3cc90493502ee269ced14ae5f6295d";

export default node;
