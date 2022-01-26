/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserAvatarFragment = {
    readonly avatar: {
        readonly " $fragmentRefs": FragmentRefs<"AvatarFragment">;
    };
    readonly " $refType": "UserAvatarFragment";
};
export type UserAvatarFragment$data = UserAvatarFragment;
export type UserAvatarFragment$key = {
    readonly " $data"?: UserAvatarFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserAvatarFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserAvatarFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "avatar",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AvatarFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '57aacf14b38aad4da4a0d5341c457530';
export default node;
