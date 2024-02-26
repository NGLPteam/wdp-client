/**
 * @generated SignedSource<<d90b63552f3886557aa2fbcc3555332b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type PageHeroColumnFragment$data = {
  readonly heroImage: {
    readonly small: {
      readonly webp: {
        readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
      };
    };
    readonly storage: AttachmentStorage | null | undefined;
  };
  readonly " $fragmentType": "PageHeroColumnFragment";
};
export type PageHeroColumnFragment$key = {
  readonly " $data"?: PageHeroColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PageHeroColumnFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "PageHeroColumnFragment"
};

(node as any).hash = "7652a723554e6939d6453de6ffd779ca";

export default node;
