/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type CommunityThumbnailColumnFragment = {
    readonly slug: string;
    readonly logo: {
        readonly storage: AttachmentStorage | null;
        readonly original: {
            readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
        };
    };
    readonly heroImage: {
        readonly storage: AttachmentStorage | null;
        readonly small: {
            readonly webp: {
                readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
            };
        };
    };
    readonly " $refType": "CommunityThumbnailColumnFragment";
};
export type CommunityThumbnailColumnFragment$data = CommunityThumbnailColumnFragment;
export type CommunityThumbnailColumnFragment$key = {
    readonly " $data"?: CommunityThumbnailColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityThumbnailColumnFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "CommunityThumbnailColumnFragment"
};
(node as any).hash = '81bc0b222d7e2cfe5a8e201b5a01fdc4';
export default node;
