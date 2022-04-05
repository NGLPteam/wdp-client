/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppFooterFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityPickerFragment" | "InstallationNameFragment">;
    readonly " $refType": "AppFooterFragment";
};
export type AppFooterFragment$data = AppFooterFragment;
export type AppFooterFragment$key = {
    readonly " $data"?: AppFooterFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppFooterFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppFooterFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityPickerFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InstallationNameFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '821c4c616d50ae16778470e4de7037f1';
export default node;
