/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AssetKind = "audio" | "document" | "image" | "pdf" | "unknown" | "video" | "%future added value";
export type FileListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id?: string;
        readonly slug?: string;
        readonly kind?: AssetKind;
        readonly name?: string;
        readonly downloadUrl?: string | null;
        readonly thumbnail?: {
            readonly image: {
                readonly png: {
                    readonly alt: string;
                    readonly url: string;
                    readonly height: number;
                    readonly width: number;
                } | null;
            };
        } | null;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "FileListFragment";
};
export type FileListFragment$data = FileListFragment;
export type FileListFragment$key = {
    readonly " $data"?: FileListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"FileListFragment">;
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
              "alias": "thumbnail",
              "args": null,
              "concreteType": "AssetPreview",
              "kind": "LinkedField",
              "name": "preview",
              "plural": false,
              "selections": [
                {
                  "alias": "image",
                  "args": null,
                  "concreteType": "PreviewImageMap",
                  "kind": "LinkedField",
                  "name": "medium",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "PreviewImage",
                      "kind": "LinkedField",
                      "name": "png",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "alt",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "url",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "height",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "width",
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
(node as any).hash = '7bb2990dd20324be63f31117e99a37a7';
export default node;
