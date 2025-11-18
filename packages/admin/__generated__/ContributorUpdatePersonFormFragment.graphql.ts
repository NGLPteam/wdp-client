/**
 * @generated SignedSource<<4e2e2eddb5117e855a55aa93161d9f7d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorUpdatePersonFormFragment$data = {
  readonly contributorId?: string;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorUpdatePersonFormFieldsFragment">;
  readonly " $fragmentType": "ContributorUpdatePersonFormFragment";
};
export type ContributorUpdatePersonFormFragment$key = {
  readonly " $data"?: ContributorUpdatePersonFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorUpdatePersonFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorUpdatePersonFormFragment",
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
          "name": "ContributorUpdatePersonFormFieldsFragment"
        }
      ],
      "type": "PersonContributor",
      "abstractKey": null
    }
  ],
  "type": "Contributor",
  "abstractKey": "__isContributor"
};

(node as any).hash = "073f3350fbf8ed9c7fe5774842757117";

export default node;
