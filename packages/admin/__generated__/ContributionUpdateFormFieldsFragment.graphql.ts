/**
 * @generated SignedSource<<3842c78d7006eaec5db9f5969c9e314f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributionUpdateFormFieldsFragment$data = {
  readonly role?: string | null;
  readonly " $fragmentType": "ContributionUpdateFormFieldsFragment";
};
export type ContributionUpdateFormFieldsFragment$key = {
  readonly " $data"?: ContributionUpdateFormFieldsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributionUpdateFormFieldsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "role",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributionUpdateFormFieldsFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "CollectionContribution",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "ItemContribution",
      "abstractKey": null
    }
  ],
  "type": "AnyContribution",
  "abstractKey": "__isAnyContribution"
};
})();

(node as any).hash = "2f7c3e330b6e704fb3e0e8d315360615";

export default node;
