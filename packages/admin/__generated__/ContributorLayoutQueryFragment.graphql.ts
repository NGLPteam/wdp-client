/**
 * @generated SignedSource<<95e7126717625e40a16ddd90c9410912>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorLayoutQueryFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ContributorLayoutFragment">;
  readonly " $fragmentType": "ContributorLayoutQueryFragment";
};
export type ContributorLayoutQueryFragment$key = {
  readonly " $data"?: ContributorLayoutQueryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorLayoutQueryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorLayoutQueryFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContributorLayoutFragment"
    }
  ],
  "type": "Contributor",
  "abstractKey": "__isContributor"
};

(node as any).hash = "9240691ef8449e30077bbb54709122ff";

export default node;
