/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutQueryFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutFragment" | "AuthContextFragment">;
    readonly " $refType": "CommunityLayoutQueryFragment";
};
export type CommunityLayoutQueryFragment$data = CommunityLayoutQueryFragment;
export type CommunityLayoutQueryFragment$key = {
    readonly " $data"?: CommunityLayoutQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutQueryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLayoutQueryFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityLayoutFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AuthContextFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '2e9a7134b0c7a8e00eeff19836c8e4e6';
export default node;
