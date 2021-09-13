/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributionUpdateFormFieldsFragment = {
    readonly role?: string | null;
    readonly " $refType": "ContributionUpdateFormFieldsFragment";
};
export type ContributionUpdateFormFieldsFragment$data = ContributionUpdateFormFieldsFragment;
export type ContributionUpdateFormFieldsFragment$key = {
    readonly " $data"?: ContributionUpdateFormFieldsFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ContributionUpdateFormFieldsFragment">;
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
(node as any).hash = '2f7c3e330b6e704fb3e0e8d315360615';
export default node;
