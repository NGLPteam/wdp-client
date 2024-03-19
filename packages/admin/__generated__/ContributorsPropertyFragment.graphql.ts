/**
 * @generated SignedSource<<9c93be2d59f86a24930691bc02db71e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorsPropertyFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
  readonly " $fragmentType": "ContributorsPropertyFragment";
};
export type ContributorsPropertyFragment$key = {
  readonly " $data"?: ContributorsPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorsPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorsPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "ContributorsProperty",
  "abstractKey": null
};

(node as any).hash = "9b0bc1b2159365fce4b9d32ab50c93a6";

export default node;
