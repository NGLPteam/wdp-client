/**
 * @generated SignedSource<<07fcc25bcb67d7cc641d6c9ffb0c142f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorAffiliationColumnFragment$data = {
  readonly affiliation?: string | null;
  readonly " $fragmentType": "ContributorAffiliationColumnFragment";
};
export type ContributorAffiliationColumnFragment$key = {
  readonly " $data"?: ContributorAffiliationColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorAffiliationColumnFragment">;
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

(node as any).hash = "2b4be539052d794072973adfb1a77ff7";

export default node;
