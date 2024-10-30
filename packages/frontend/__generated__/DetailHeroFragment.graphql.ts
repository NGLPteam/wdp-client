/**
 * @generated SignedSource<<862c61a889505a414f8624dd94e3b013>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailHeroFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"DetailContentFragment" | "DetailCoverImageFragment" | "DetailSidebarFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DetailSidebarFragment"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};

(node as any).hash = "da9afc4c130a059d18dc085bed93edb4";

export default node;
