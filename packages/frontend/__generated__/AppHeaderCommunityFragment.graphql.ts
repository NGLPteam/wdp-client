/**
 * @generated SignedSource<<25614e53c1f28f1fd6a2d8ab0ddc89ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppHeaderCommunityFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CommunityNameFragment" | "CommunityNavListFragment">;
  readonly " $fragmentType": "AppHeaderCommunityFragment";
};
export type AppHeaderCommunityFragment$key = {
  readonly " $data"?: AppHeaderCommunityFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppHeaderCommunityFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppHeaderCommunityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNavListFragment"
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

(node as any).hash = "119e397a7f7b6e681275c4912cc4ba08";

export default node;
