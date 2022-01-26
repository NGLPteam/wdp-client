/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type AssetThumbnailColumnFragment = {
    readonly thumbnail: {
        readonly storage: AttachmentStorage | null;
        readonly image: {
            readonly png: {
                readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
            };
        };
    };
    readonly " $refType": "AssetThumbnailColumnFragment";
};
export type AssetThumbnailColumnFragment$data = AssetThumbnailColumnFragment;
export type AssetThumbnailColumnFragment$key = {
    readonly " $data"?: AssetThumbnailColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetThumbnailColumnFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetThumbnailColumnFragment",
  "selections": [
    {
      "alias": "thumbnail",
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "preview",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "storage",
          "storageKey": null
        },
        {
          "alias": "image",
          "args": null,
          "concreteType": "ImageSize",
          "kind": "LinkedField",
          "name": "medium",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageDerivative",
              "kind": "LinkedField",
              "name": "png",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ImageFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Asset",
  "abstractKey": "__isAsset"
};
(node as any).hash = '89b55acca6de415f3a1dbf2704d57906';
export default node;
