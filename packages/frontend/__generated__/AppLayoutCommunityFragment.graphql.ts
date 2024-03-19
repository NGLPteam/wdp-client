/**
 * @generated SignedSource<<062337f09d91c7f50f7166bf00eb263b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppLayoutCommunityFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AppBodyCommunityFragment" | "CommunityNavBarFragment">;
  readonly " $fragmentType": "AppLayoutCommunityFragment";
};
export type AppLayoutCommunityFragment$key = {
  readonly " $data"?: AppLayoutCommunityFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppLayoutCommunityFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppLayoutCommunityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNavBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBodyCommunityFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "98ba507729ff46964d2690205d713cdf";

export default node;
