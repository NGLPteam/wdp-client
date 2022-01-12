/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutAppFragment = {
    readonly " $fragmentRefs": FragmentRefs<"AppBodyFragment" | "CommunityCondensedNavAppFragment" | "CommunityPickerFragment">;
    readonly " $refType": "CommunityLayoutAppFragment";
};
export type CommunityLayoutAppFragment$data = CommunityLayoutAppFragment;
export type CommunityLayoutAppFragment$key = {
    readonly " $data"?: CommunityLayoutAppFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutAppFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLayoutAppFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBodyFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityCondensedNavAppFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityPickerFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'ed7e5465c573945fc2c91e04f0c3e9f1';
export default node;
