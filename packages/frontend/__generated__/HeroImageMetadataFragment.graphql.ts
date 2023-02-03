/**
 * @generated SignedSource<<865f0236c6eb898b0169a2a38822a371>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeroImageMetadataFragment$data = {
  readonly alt: string | null;
  readonly " $fragmentType": "HeroImageMetadataFragment";
};
export type HeroImageMetadataFragment$key = {
  readonly " $data"?: HeroImageMetadataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeroImageMetadataFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeroImageMetadataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "alt",
      "storageKey": null
    }
  ],
  "type": "ImageMetadata",
  "abstractKey": null
};

(node as any).hash = "7722145c5be0b7f97f1928d970e3cfb0";

export default node;
