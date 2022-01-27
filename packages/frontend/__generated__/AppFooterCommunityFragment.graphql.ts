/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppFooterCommunityFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityPickerActiveFragment" | "CommunityNameFragment">;
    readonly " $refType": "AppFooterCommunityFragment";
};
export type AppFooterCommunityFragment$data = AppFooterCommunityFragment;
export type AppFooterCommunityFragment$key = {
    readonly " $data"?: AppFooterCommunityFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppFooterCommunityFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppFooterCommunityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityPickerActiveFragment"
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
(node as any).hash = '665b7c717bc4267d58cb01b819da440f';
export default node;
