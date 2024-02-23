/**
 * @generated SignedSource<<3caa675f053ff68bb72bf87ae2e491ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeroImageMetadataFragment$data = {
  readonly alt: string | null | undefined;
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
