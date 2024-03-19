/**
 * @generated SignedSource<<1f47934c3302c3be2abffdfbc545388d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JournalHeroMetadataFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CCLicenseFragment" | "ISSNFragment" | "OpenAccessFragment" | "PeerReviewedFragment">;
  readonly " $fragmentType": "JournalHeroMetadataFragment";
};
export type JournalHeroMetadataFragment$key = {
  readonly " $data"?: JournalHeroMetadataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"JournalHeroMetadataFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalHeroMetadataFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ISSNFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "OpenAccessFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CCLicenseFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PeerReviewedFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};

(node as any).hash = "e4518a28c0d479880d1ab18998d6b559";

export default node;
