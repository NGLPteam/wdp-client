/**
 * @generated SignedSource<<45e8ebf7bcd725aade62ed48173307f9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type AssetThumbnailColumnFragment$data = {
  readonly thumbnail: {
    readonly image: {
      readonly png: {
        readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
      };
    };
    readonly storage: AttachmentStorage | null | undefined;
  };
  readonly " $fragmentType": "AssetThumbnailColumnFragment";
};
export type AssetThumbnailColumnFragment$key = {
  readonly " $data"?: AssetThumbnailColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AssetThumbnailColumnFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "AssetThumbnailColumnFragment"
};

(node as any).hash = "ca0f2009b5f30a8b1aa46c1781dc1775";

export default node;
