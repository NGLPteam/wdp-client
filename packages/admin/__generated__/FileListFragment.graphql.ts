/**
 * @generated SignedSource<<d3457e77353f40b2f6431d423f18f33b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AssetKind = "audio" | "document" | "image" | "pdf" | "unknown" | "video" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type FileListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly downloadUrl?: string | null | undefined;
    readonly id?: string;
    readonly kind?: AssetKind;
    readonly name?: string;
    readonly slug?: string;
    readonly " $fragmentSpreads": FragmentRefs<"AssetThumbnailColumnFragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "FileListFragment";
};
export type FileListFragment$key = {
  readonly " $data"?: FileListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FileListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FileListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
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
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
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
              "kind": "InlineDataFragmentSpread",
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
                      "name": "thumb",
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
                            },
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "url",
                              "storageKey": null
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
              "args": null,
              "argumentDefinitions": []
            }
          ],
          "type": "Asset",
          "abstractKey": "__isAsset"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "AnyAssetConnection",
  "abstractKey": null
};

(node as any).hash = "cdbeccbc4ed8a1ec3d8c5c860f452204";

export default node;
