/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityCondensedNavFragment = {
    readonly " $fragmentRefs": FragmentRefs<"InstallationNameFragment">;
    readonly " $refType": "CommunityCondensedNavFragment";
};
export type CommunityCondensedNavFragment$data = CommunityCondensedNavFragment;
export type CommunityCondensedNavFragment$key = {
    readonly " $data"?: CommunityCondensedNavFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityCondensedNavFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityCondensedNavFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InstallationNameFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '8449d8ed30a04011ed56173e026f717a';
export default node;
