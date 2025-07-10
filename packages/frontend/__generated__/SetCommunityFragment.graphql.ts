/**
 * @generated SignedSource<<307d5abefa062536ea163acbbae5bd17>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SetCommunityFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CommunityContextFragment">;
  readonly " $fragmentType": "SetCommunityFragment";
};
export type SetCommunityFragment$key = {
  readonly " $data"?: SetCommunityFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SetCommunityFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SetCommunityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityContextFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "67a5fa179a37cdb5272c853f3744ced9";

export default node;
