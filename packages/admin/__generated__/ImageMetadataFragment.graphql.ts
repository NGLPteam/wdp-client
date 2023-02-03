/**
 * @generated SignedSource<<0174358cb65b871e5d3696fb69658d07>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ImageMetadataFragment$data = {
  readonly alt: string | null;
  readonly " $fragmentType": "ImageMetadataFragment";
};
export type ImageMetadataFragment$key = {
  readonly " $data"?: ImageMetadataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ImageMetadataFragment">;
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

(node as any).hash = "35ee66c24c36a87d91df782b910bc4d3";

export default node;
