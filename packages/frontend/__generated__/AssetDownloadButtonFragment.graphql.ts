/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AssetKind = "audio" | "document" | "image" | "pdf" | "unknown" | "video" | "%future added value";
export type AssetDownloadButtonFragment = {
    readonly name: string;
    readonly downloadUrl: string | null;
    readonly kind: AssetKind;
    readonly contentType: string;
    readonly " $refType": "AssetDownloadButtonFragment";
};
export type AssetDownloadButtonFragment$data = AssetDownloadButtonFragment;
export type AssetDownloadButtonFragment$key = {
    readonly " $data"?: AssetDownloadButtonFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetDownloadButtonFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetDownloadButtonFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "downloadUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "kind",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "contentType",
      "storageKey": null
    }
  ],
  "type": "Asset",
  "abstractKey": "__isAsset"
};
(node as any).hash = 'c32ea4df99da9e57301000b308cf19f2';
export default node;
