/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ImageMetadataFragment = {
    readonly alt: string | null;
    readonly " $refType": "ImageMetadataFragment";
};
export type ImageMetadataFragment$data = ImageMetadataFragment;
export type ImageMetadataFragment$key = {
    readonly " $data"?: ImageMetadataFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ImageMetadataFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImageMetadataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "alt",
      "storageKey": null
    }
  ],
  "type": "Image",
  "abstractKey": "__isImage"
};
(node as any).hash = '35ee66c24c36a87d91df782b910bc4d3';
export default node;
