/**
 * @generated SignedSource<<fef184522fcf0c5077afca8011db4739>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorUpdateOrganizationFormFragment$data = {
  readonly contributorId?: string;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorUpdateOrganizationFormFieldsFragment">;
  readonly " $fragmentType": "ContributorUpdateOrganizationFormFragment";
};
export type ContributorUpdateOrganizationFormFragment$key = {
  readonly " $data"?: ContributorUpdateOrganizationFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorUpdateOrganizationFormFragment">;
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

(node as any).hash = "8aac5d127955ead680077e83080d9d09";

export default node;
