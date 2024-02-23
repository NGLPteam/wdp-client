/**
 * @generated SignedSource<<ce6ac968c1c5394f3a6f94df171201f4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityNavBarEntityFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SearchButtonFragment">;
  readonly " $fragmentType": "CommunityNavBarEntityFragment";
};
export type CommunityNavBarEntityFragment$key = {
  readonly " $data"?: CommunityNavBarEntityFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityNavBarEntityFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityNavBarEntityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchButtonFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "a02565b5b08761fe840df4ff365a9c74";

export default node;
