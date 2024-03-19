/**
 * @generated SignedSource<<9d443501158b49a27c5a8a8d658e80cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserAvatarFragment$data = {
  readonly avatar: {
    readonly " $fragmentSpreads": FragmentRefs<"AvatarFragment">;
  };
  readonly " $fragmentType": "UserAvatarFragment";
};
export type UserAvatarFragment$key = {
  readonly " $data"?: UserAvatarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserAvatarFragment">;
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

(node as any).hash = "57aacf14b38aad4da4a0d5341c457530";

export default node;
