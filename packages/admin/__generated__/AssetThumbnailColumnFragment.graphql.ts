/**
 * @generated SignedSource<<a450f7ad1a68ea188541ca28636f6874>>
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
        readonly url: string | null | undefined;
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

(node as any).hash = "bbdcd72f974a56e651ef9a1551d3c4fd";

export default node;
