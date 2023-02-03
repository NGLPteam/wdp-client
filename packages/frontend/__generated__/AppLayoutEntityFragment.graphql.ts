/**
 * @generated SignedSource<<f993d5bd23fca3a5ef616856afac9c00>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppLayoutEntityFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AppBodyEntityFragment" | "CommunityNavBarEntityFragment">;
  readonly " $fragmentType": "AppLayoutEntityFragment";
};
export type AppLayoutEntityFragment$key = {
  readonly " $data"?: AppLayoutEntityFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppLayoutEntityFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppLayoutEntityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNavBarEntityFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBodyEntityFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "997a6b71c59e2999fb7d56e69d3739f4";

export default node;
