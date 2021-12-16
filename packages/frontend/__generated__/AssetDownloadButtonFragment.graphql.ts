/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AssetKind = "audio" | "document" | "image" | "pdf" | "unknown" | "video" | "%future added value";
export type AssetDownloadButtonFragment = {
    readonly asset: {
        readonly name?: string | undefined;
        readonly downloadUrl?: string | null | undefined;
        readonly kind?: AssetKind | undefined;
        readonly contentType?: string | undefined;
    } | null;
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "asset",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AssetProperty",
  "abstractKey": null
};
(node as any).hash = 'f17b610b6eccae86c929576de75bcc69';
export default node;
