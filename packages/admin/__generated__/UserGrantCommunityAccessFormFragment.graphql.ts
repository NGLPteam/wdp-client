/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserGrantCommunityAccessFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunitySelectFragment" | "RoleSelectFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoleSelectFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '76be01bd8f014c2a91cd991207c05eb4';
export default node;
