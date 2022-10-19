/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type EntityThumbnailColumnFragment = {
    readonly __typename: string;
    readonly title: string;
    readonly thumbnail: {
        readonly storage: AttachmentStorage | null;
        readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
    };
    readonly id?: string | undefined;
    readonly slug?: string | undefined;
    readonly " $refType": "EntityThumbnailColumnFragment";
};
export type EntityThumbnailColumnFragment$data = EntityThumbnailColumnFragment;
export type EntityThumbnailColumnFragment$key = {
    readonly " $data"?: EntityThumbnailColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityThumbnailColumnFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "EntityThumbnailColumnFragment"
};
(node as any).hash = 'c23a46c731661932cfbc906e63f6b4ff';
export default node;
