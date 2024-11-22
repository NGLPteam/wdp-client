/**
 * @generated SignedSource<<499094c5c2a0ff7315c4b8959ca0344e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityContextFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CommunityNameFragment" | "CommunityNavListFragment" | "CommunityPickerCommunityNameFragment">;
  readonly " $fragmentType": "CommunityContextFragment";
};
export type CommunityContextFragment$key = {
  readonly " $data"?: CommunityContextFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityContextFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityContextFragment",
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityPickerCommunityNameFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "477c6e98d6c648923d0c58d6762f6908";

export default node;
