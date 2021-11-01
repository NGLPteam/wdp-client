/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributorUpdatePersonFormFragment = {
    readonly contributorId?: string;
    readonly " $fragmentRefs": FragmentRefs<"ContributorUpdatePersonFormFieldsFragment">;
    readonly " $refType": "ContributorUpdatePersonFormFragment";
};
export type ContributorUpdatePersonFormFragment$data = ContributorUpdatePersonFormFragment;
export type ContributorUpdatePersonFormFragment$key = {
    readonly " $data"?: ContributorUpdatePersonFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ContributorUpdatePersonFormFragment">;
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
(node as any).hash = 'a77f1ff1a5a4354bd6bfc930eabe6549';
export default node;
