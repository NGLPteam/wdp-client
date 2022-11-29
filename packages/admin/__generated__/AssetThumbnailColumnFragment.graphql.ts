/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

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



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "AssetThumbnailColumnFragment"
};
(node as any).hash = 'ca0f2009b5f30a8b1aa46c1781dc1775';
export default node;
