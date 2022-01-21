/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type HeroImageMetadataFragment = {
    readonly alt: string | null;
    readonly " $refType": "HeroImageMetadataFragment";
};
export type HeroImageMetadataFragment$data = HeroImageMetadataFragment;
export type HeroImageMetadataFragment$key = {
    readonly " $data"?: HeroImageMetadataFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"HeroImageMetadataFragment">;
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
(node as any).hash = '7722145c5be0b7f97f1928d970e3cfb0';
export default node;
