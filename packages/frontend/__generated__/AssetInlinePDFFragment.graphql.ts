/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AssetInlinePDFFragment = {
    readonly downloadUrl?: string | null | undefined;
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
(node as any).hash = 'b63d9ec38520d0c9138a89259863724d';
export default node;
