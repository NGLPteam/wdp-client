/**
 * @generated SignedSource<<8e2a14b966d387626953c9a12a429b8b>>
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
  "type": "AnyContributor",
  "abstractKey": "__isAnyContributor"
};

(node as any).hash = "a77f1ff1a5a4354bd6bfc930eabe6549";

export default node;
