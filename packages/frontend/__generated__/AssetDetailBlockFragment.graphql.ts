/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AssetKind = "audio" | "document" | "image" | "pdf" | "unknown" | "video" | "%future added value";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type AssetDetailBlockFragment = {
    readonly slug?: string | undefined;
    readonly caption?: string | null | undefined;
    readonly kind?: AssetKind | undefined;
    readonly downloadUrl?: string | null | undefined;
    readonly fileSize?: number | undefined;
    readonly name?: string | undefined;
    readonly altText?: string | null | undefined;
    readonly preview?: {
        readonly storage: AttachmentStorage | null;
        readonly " $fragmentRefs": FragmentRefs<"ContentImageFragment">;
    } | undefined;
    readonly updatedAt?: string | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetPDFPreviewFragment">;
    readonly " $refType": "AssetDetailBlockFragment";
};
export type AssetDetailBlockFragment$data = AssetDetailBlockFragment;
export type AssetDetailBlockFragment$key = {
    readonly " $data"?: AssetDetailBlockFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetDetailBlockFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetDetailBlockFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
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
          "name": "caption",
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
          "name": "downloadUrl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fileSize",
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
          "name": "altText",
          "storageKey": null
        },
        {
          "alias": null,
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "ContentImageFragment"
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AssetPDFPreviewFragment"
        }
      ],
      "type": "Asset",
      "abstractKey": "__isAsset"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "updatedAt",
          "storageKey": null
        }
      ],
      "type": "AssetImage",
      "abstractKey": null
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};
(node as any).hash = 'e719c5acd5823d2a8061a8f6236eadb6';
export default node;
