/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AssetInlinePDFFragment = {
    readonly asset: {
        readonly downloadUrl?: string | null | undefined;
    } | null;
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
              "name": "downloadUrl",
              "storageKey": null
            }
          ],
          "type": "AssetPDF",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AssetProperty",
  "abstractKey": null
};
(node as any).hash = '300e0bef10ea131f3d7e1781321d784e';
export default node;
