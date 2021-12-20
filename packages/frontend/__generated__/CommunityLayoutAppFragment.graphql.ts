/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutAppFragment = {
    readonly " $fragmentRefs": FragmentRefs<"AppBodyFragment" | "CommunityCondensedNavAppFragment">;
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '23d4bad6f8ccaa44977ef928729826c4';
export default node;
