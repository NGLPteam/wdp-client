/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AssetInlinePDFFragment = {
    readonly downloadUrl?: string | null | undefined;
    readonly fileSize?: number | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetDownloadButtonFragment">;
    readonly " $refType": "AssetInlinePDFFragment";
};
export type AssetInlinePDFFragment$data = AssetInlinePDFFragment;
export type AssetInlinePDFFragment$key = {
    readonly " $data"?: AssetInlinePDFFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetInlinePDFFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetInlinePDFFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
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
          "name": "fileSize",
          "storageKey": null
        }
      ],
      "type": "AssetPDF",
      "abstractKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AssetDownloadButtonFragment"
    }
  ],
  "type": "Asset",
  "abstractKey": "__isAsset"
};
(node as any).hash = '79262486c2651a3b8733ba3a0564fabe';
export default node;
