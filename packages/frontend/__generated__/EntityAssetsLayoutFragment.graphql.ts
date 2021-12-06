/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityAssetsLayoutFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id?: string | undefined;
        };
    }>;
    readonly " $refType": "EntityAssetsLayoutFragment";
};
export type EntityAssetsLayoutFragment$data = EntityAssetsLayoutFragment;
export type EntityAssetsLayoutFragment$key = {
    readonly " $data"?: EntityAssetsLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityAssetsLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityAssetsLayoutFragment",
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
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                }
              ],
              "type": "AssetAudio",
              "abstractKey": null
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
(node as any).hash = '071bee28daa5e1d502abc04a0b0bed33';
export default node;
