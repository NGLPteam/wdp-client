/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppFooterFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityPickerFragment">;
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '45645150c8e3db08fa6a32f3e47905e6';
export default node;
