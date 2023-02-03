/**
 * @generated SignedSource<<7d3e57bda5e92ea519f389b24b8d9d87>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type AssetThumbnailColumnFragment$data = {
  readonly thumbnail: {
    readonly image: {
      readonly png: {
        readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
      };
    };
    readonly storage: AttachmentStorage | null;
  };
  readonly " $fragmentType": "AssetThumbnailColumnFragment";
};
export type AssetThumbnailColumnFragment$key = {
  readonly " $data"?: AssetThumbnailColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AssetThumbnailColumnFragment">;
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

(node as any).hash = "89b55acca6de415f3a1dbf2704d57906";

export default node;
