/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributorUpdatePersonFormFragment = {
    readonly contributorId?: string;
    readonly " $fragmentRefs": FragmentRefs<"ContributorPersonFormFragment">;
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
          "name": "ContributorPersonFormFragment"
        }
      ],
      "type": "PersonContributor",
      "abstractKey": null
    }
  ],
  "type": "AnyContributor",
  "abstractKey": "__isAnyContributor"
};
(node as any).hash = '0a69e376607c55700f87e60b6632f4c5';
export default node;
