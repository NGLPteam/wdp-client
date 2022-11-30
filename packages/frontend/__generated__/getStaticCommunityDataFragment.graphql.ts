/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type getStaticCommunityDataFragment = {
    readonly title?: string | undefined;
    readonly summary?: string | null | undefined;
    readonly thumbnail?: {
        readonly storage: AttachmentStorage | null;
        readonly medium: {
            readonly webp: {
                readonly url: string | null;
                readonly width: number | null;
                readonly height: number | null;
            };
        };
    } | undefined;
    readonly thumbnailMetadata?: {
        readonly alt: string | null;
    } | null | undefined;
    readonly heroImage?: {
        readonly storage: AttachmentStorage | null;
        readonly medium: {
            readonly webp: {
                readonly url: string | null;
                readonly width: number | null;
                readonly height: number | null;
            };
        };
    } | undefined;
    readonly heroImageMetadata?: {
        readonly alt: string | null;
    } | null | undefined;
    readonly " $refType": "getStaticCommunityDataFragment";
};
export type getStaticCommunityDataFragment$data = getStaticCommunityDataFragment;
export type getStaticCommunityDataFragment$key = {
    readonly " $data"?: getStaticCommunityDataFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"getStaticCommunityDataFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getStaticCommunityDataFragment"
};
(node as any).hash = '914bc834e85c92ab3f20787f839038b7';
export default node;
