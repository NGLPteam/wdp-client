/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityNameFragment = {
    readonly title: string;
    readonly slug: string;
    readonly " $refType": "CommunityNameFragment";
};
export type CommunityNameFragment$data = CommunityNameFragment;
export type CommunityNameFragment$key = {
    readonly " $data"?: CommunityNameFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityNameFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityNameFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '47ff1a4556acdd342acdf87394112c7b';
export default node;
