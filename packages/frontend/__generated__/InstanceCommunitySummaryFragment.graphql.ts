/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type InstanceCommunitySummaryFragment = {
    readonly slug: string;
    readonly tagline: string | null;
    readonly " $fragmentRefs": FragmentRefs<"CommunityNameFragment">;
    readonly " $refType": "InstanceCommunitySummaryFragment";
};
export type InstanceCommunitySummaryFragment$data = InstanceCommunitySummaryFragment;
export type InstanceCommunitySummaryFragment$key = {
    readonly " $data"?: InstanceCommunitySummaryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"InstanceCommunitySummaryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InstanceCommunitySummaryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tagline",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNameFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '47da2db98e3a51de9eb7ee776753115b';
export default node;
