/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserGrantCommunityAccessFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunitySelectFragment">;
    readonly " $refType": "UserGrantCommunityAccessFormFragment";
};
export type UserGrantCommunityAccessFormFragment$data = UserGrantCommunityAccessFormFragment;
export type UserGrantCommunityAccessFormFragment$key = {
    readonly " $data"?: UserGrantCommunityAccessFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserGrantCommunityAccessFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserGrantCommunityAccessFormFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunitySelectFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '0a7393bcc73c4cd48db0f981d2fdd6d2';
export default node;
