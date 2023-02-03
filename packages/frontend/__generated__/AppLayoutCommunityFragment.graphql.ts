/**
 * @generated SignedSource<<ff27e481c00d8c78f2df2c1dbe8ace56>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppLayoutCommunityFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AppBodyCommunityFragment" | "CommunityHTMLHeadFragment" | "CommunityNavBarFragment">;
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
      "name": "CommunityHTMLHeadFragment"
    },
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

(node as any).hash = "744ea63a170b64b94a5e30b99643a508";

export default node;
