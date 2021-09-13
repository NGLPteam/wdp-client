/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributionUpdateFormFragment = {
    readonly contributionId?: string;
    readonly " $fragmentRefs": FragmentRefs<"ContributionUpdateFormFieldsFragment">;
    readonly " $refType": "ContributionUpdateFormFragment";
};
export type ContributionUpdateFormFragment$data = ContributionUpdateFormFragment;
export type ContributionUpdateFormFragment$key = {
    readonly " $data"?: ContributionUpdateFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ContributionUpdateFormFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": "contributionId",
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ContributionUpdateFormFieldsFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributionUpdateFormFragment",
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
(node as any).hash = '668cc9c0c88adf1e2349bffd6aa73afd';
export default node;
