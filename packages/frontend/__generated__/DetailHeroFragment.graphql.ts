/**
 * @generated SignedSource<<9b292c2c0c1572aa65c0e1a0ba24a45a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailHeroFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"DetailContentFragment" | "DetailCoverImageFragment">;
  readonly " $fragmentType": "DetailHeroFragment";
};
export type DetailHeroFragment$key = {
  readonly " $data"?: DetailHeroFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DetailHeroFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailHeroFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DetailCoverImageFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DetailContentFragment"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};

(node as any).hash = "e47bf1d6b427ecaf98c88a365a6b2825";

export default node;
