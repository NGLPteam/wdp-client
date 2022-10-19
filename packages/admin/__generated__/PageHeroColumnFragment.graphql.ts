/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type PageHeroColumnFragment = {
    readonly heroImage: {
        readonly storage: AttachmentStorage | null;
        readonly small: {
            readonly webp: {
                readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
            };
        };
    };
    readonly " $refType": "PageHeroColumnFragment";
};
export type PageHeroColumnFragment$data = PageHeroColumnFragment;
export type PageHeroColumnFragment$key = {
    readonly " $data"?: PageHeroColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PageHeroColumnFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "PageHeroColumnFragment"
};
(node as any).hash = '7652a723554e6939d6453de6ffd779ca';
export default node;
