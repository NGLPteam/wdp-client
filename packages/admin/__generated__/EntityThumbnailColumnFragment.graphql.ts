/**
 * @generated SignedSource<<0d29d5376b7f54e71e6aa5ac508d64d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityThumbnailColumnFragment$data = {
  readonly __typename: string;
  readonly id?: string;
  readonly slug?: string;
  readonly thumbnail: {
    readonly storage: AttachmentStorage | null | undefined;
    readonly thumb: {
      readonly webp: {
        readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
      };
    };
  };
  readonly title: string;
  readonly " $fragmentType": "EntityThumbnailColumnFragment";
};
export type EntityThumbnailColumnFragment$key = {
  readonly " $data"?: EntityThumbnailColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityThumbnailColumnFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "EntityThumbnailColumnFragment"
};

(node as any).hash = "28a3ccbf1848f57bac96107083e96ec8";

export default node;
