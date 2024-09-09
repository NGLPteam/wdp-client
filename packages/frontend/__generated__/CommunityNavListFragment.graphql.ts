/**
 * @generated SignedSource<<64200fcafbc4bcdd3329682f59723230>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityNavListFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CommunityNavListContentFragment">;
  readonly " $fragmentType": "CommunityNavListFragment";
};
export type CommunityNavListFragment$key = {
  readonly " $data"?: CommunityNavListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityNavListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityNavListFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNavListContentFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "d9b860c3e70ee1b0239cfb953d108dfe";

export default node;
