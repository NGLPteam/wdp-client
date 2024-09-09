/**
 * @generated SignedSource<<d7b6500deacfdbfb249777c6f527f3f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PortalCommunityNavListFragment$data = {
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityNavListContentFragment">;
  readonly " $fragmentType": "PortalCommunityNavListFragment";
};
export type PortalCommunityNavListFragment$key = {
  readonly " $data"?: PortalCommunityNavListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PortalCommunityNavListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PortalCommunityNavListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNavListContentFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "08f39126f5cf1d8453c2d28bc5b75732";

export default node;
