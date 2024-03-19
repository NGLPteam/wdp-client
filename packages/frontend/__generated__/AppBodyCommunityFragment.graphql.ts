/**
 * @generated SignedSource<<191cf7cea98b92bc28bf7feda0256663>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppBodyCommunityFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AppFooterCommunityFragment" | "AppHeaderCommunityFragment">;
  readonly " $fragmentType": "AppBodyCommunityFragment";
};
export type AppBodyCommunityFragment$key = {
  readonly " $data"?: AppBodyCommunityFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppBodyCommunityFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppBodyCommunityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppHeaderCommunityFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppFooterCommunityFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "596f7e5b47415c229efd257b9cdf05ce";

export default node;
