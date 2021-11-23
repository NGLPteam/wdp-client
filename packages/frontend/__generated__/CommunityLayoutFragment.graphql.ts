/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityHTMLHeadFragment" | "CommunityNameFragment" | "CommunityNavBarFragment">;
    readonly " $refType": "CommunityLayoutFragment";
};
export type CommunityLayoutFragment$data = CommunityLayoutFragment;
export type CommunityLayoutFragment$key = {
    readonly " $data"?: CommunityLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityHTMLHeadFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNameFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNavBarFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '52894aa37379b009b235344fd68867f0';
export default node;
