/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppFooterCommunityFragment = {
    readonly slug: string;
    readonly title: string;
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
      "name": "title",
      "storageKey": null
    },
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
(node as any).hash = '2e0081a1626aed7bde3b1bfc9692a34f';
export default node;
