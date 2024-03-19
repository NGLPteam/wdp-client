/**
 * @generated SignedSource<<507604c4b0deab1fdebe9e17fe64e7d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type CommunityThumbnailColumnFragment$data = {
  readonly heroImage: {
    readonly small: {
      readonly webp: {
        readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
      };
    };
    readonly storage: AttachmentStorage | null | undefined;
  };
  readonly logo: {
    readonly original: {
      readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
    };
    readonly storage: AttachmentStorage | null | undefined;
  };
  readonly slug: string;
  readonly " $fragmentType": "CommunityThumbnailColumnFragment";
};
export type CommunityThumbnailColumnFragment$key = {
  readonly " $data"?: CommunityThumbnailColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityThumbnailColumnFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "CommunityThumbnailColumnFragment"
};

(node as any).hash = "81bc0b222d7e2cfe5a8e201b5a01fdc4";

export default node;
