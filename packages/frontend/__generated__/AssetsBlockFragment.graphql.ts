/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AssetsBlockFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly " $fragmentRefs": FragmentRefs<"AssetBlockItemFragment">;
        };
    }>;
    readonly " $refType": "AssetsBlockFragment";
};
export type AssetsBlockFragment$data = AssetsBlockFragment;
export type AssetsBlockFragment$key = {
    readonly " $data"?: AssetsBlockFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetsBlockFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetsBlockFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AnyAssetEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "AssetBlockItemFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AnyAssetConnection",
  "abstractKey": null
};
(node as any).hash = '207dd06b9edb73a6f266bb6b82dc2529';
export default node;
