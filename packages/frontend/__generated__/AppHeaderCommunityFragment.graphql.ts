/**
 * @generated SignedSource<<5c3db418b61eceaf14ddc6c95467948d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppHeaderCommunityFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CommunityNameFragment" | "CommunityNavListFragment" | "CommunityPickerActiveFragment">;
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
      "name": "CommunityPickerActiveFragment"
    },
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

(node as any).hash = "f9c37e04cd55ab0e004fb58e161357a9";

export default node;
