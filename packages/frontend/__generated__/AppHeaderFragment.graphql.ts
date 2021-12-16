/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppHeaderFragment = {
    readonly " $fragmentRefs": FragmentRefs<"InstallationNameFragment" | "CommunityPickerFragment">;
    readonly " $refType": "AppHeaderFragment";
};
export type AppHeaderFragment$data = AppHeaderFragment;
export type AppHeaderFragment$key = {
    readonly " $data"?: AppHeaderFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppHeaderFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppHeaderFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InstallationNameFragment"
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
(node as any).hash = '963c7fa8b2162e083be95011b1b7e821';
export default node;
