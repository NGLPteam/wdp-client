/**
 * @generated SignedSource<<6cd95612804fb1ed9d03929ba1d26617>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserGrantCommunityAccessFormFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CommunitySelectFragment">;
  readonly " $fragmentType": "UserGrantCommunityAccessFormFragment";
};
export type UserGrantCommunityAccessFormFragment$key = {
  readonly " $data"?: UserGrantCommunityAccessFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserGrantCommunityAccessFormFragment">;
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

(node as any).hash = "0a7393bcc73c4cd48db0f981d2fdd6d2";

export default node;
