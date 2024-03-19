/**
 * @generated SignedSource<<9d84f967cf5c3cc22649296e20d8028e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AssetKind = "audio" | "document" | "image" | "pdf" | "unknown" | "video" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type AssetDownloadButtonFragment$data = {
  readonly contentType: string;
  readonly downloadUrl: string | null | undefined;
  readonly kind: AssetKind;
  readonly name: string;
  readonly " $fragmentType": "AssetDownloadButtonFragment";
};
export type AssetDownloadButtonFragment$key = {
  readonly " $data"?: AssetDownloadButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AssetDownloadButtonFragment">;
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

(node as any).hash = "c32ea4df99da9e57301000b308cf19f2";

export default node;
