/**
 * @generated SignedSource<<a962294b3c98b324c906b57b16cf2dcc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AssetsBlockFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly " $fragmentSpreads": FragmentRefs<"AssetBlockItemFragment">;
    };
  }>;
  readonly " $fragmentType": "AssetsBlockFragment";
};
export type AssetsBlockFragment$key = {
  readonly " $data"?: AssetsBlockFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AssetsBlockFragment">;
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

(node as any).hash = "207dd06b9edb73a6f266bb6b82dc2529";

export default node;
