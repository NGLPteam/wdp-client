/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type getStaticEntityDataFragment = {
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
    readonly " $refType": "getStaticEntityDataFragment";
};
export type getStaticEntityDataFragment$data = getStaticEntityDataFragment;
export type getStaticEntityDataFragment$key = {
    readonly " $data"?: getStaticEntityDataFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"getStaticEntityDataFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getStaticEntityDataFragment"
};
(node as any).hash = '8111c316d40bff22fa3c310881a0bbd6';
export default node;
