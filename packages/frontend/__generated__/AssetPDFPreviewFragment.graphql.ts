/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AssetPDFPreviewFragment = {
    readonly downloadUrl?: string | null | undefined;
    readonly " $refType": "AssetPDFPreviewFragment";
};
export type AssetPDFPreviewFragment$data = AssetPDFPreviewFragment;
export type AssetPDFPreviewFragment$key = {
    readonly " $data"?: AssetPDFPreviewFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetPDFPreviewFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetPDFPreviewFragment",
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
        }
      ],
      "type": "AssetPDF",
      "abstractKey": null
    }
  ],
  "type": "Asset",
  "abstractKey": "__isAsset"
};
(node as any).hash = '18863ef29e020d7be73bb76ddcf95b8a';
export default node;
