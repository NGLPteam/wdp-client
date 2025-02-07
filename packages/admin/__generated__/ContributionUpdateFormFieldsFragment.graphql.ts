/**
 * @generated SignedSource<<aca12e74a46d8f8ee4b2efa5e6f2e640>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributionUpdateFormFieldsFragment$data = {
  readonly innerPosition?: number | null | undefined;
  readonly outerPosition?: number | null | undefined;
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
    "name": "innerPosition",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "outerPosition",
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

(node as any).hash = "ad16ce7f22bea3a3ac4993ad4c848152";

export default node;
