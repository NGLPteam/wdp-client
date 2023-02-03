/**
 * @generated SignedSource<<ce3b7d0ab6a904dbca676cc32e951dc1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityNavBarFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CommunityNameFragment" | "CommunityNavListFragment">;
  readonly " $fragmentType": "CommunityNavBarFragment";
};
export type CommunityNavBarFragment$key = {
  readonly " $data"?: CommunityNavBarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityNavBarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityNavBarFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNameFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNavListFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "649aea35b64e4fb89635566ca85ccc97";

export default node;
