/**
 * @generated SignedSource<<3a8958d42dfb66ddcc07ff927df6ec3f>>
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
  "type": "Contributor",
  "abstractKey": "__isContributor"
};

(node as any).hash = "1882a586ce5435d112539298ca862632";

export default node;
