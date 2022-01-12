/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalHeroMetadataFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ISSNFragment" | "OpenAccessFragment" | "CCLicenseFragment" | "PeerReviewedFragment">;
    readonly " $refType": "JournalHeroMetadataFragment";
};
export type JournalHeroMetadataFragment$data = JournalHeroMetadataFragment;
export type JournalHeroMetadataFragment$key = {
    readonly " $data"?: JournalHeroMetadataFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"JournalHeroMetadataFragment">;
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
(node as any).hash = 'e4518a28c0d479880d1ab18998d6b559';
export default node;
