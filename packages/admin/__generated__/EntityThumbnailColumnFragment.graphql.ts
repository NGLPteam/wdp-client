/**
 * @generated SignedSource<<4d0632d235c97bc3a4017884d3f03681>>
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
    readonly " $fragmentSpreads": FragmentRefs<"CoverImageFragment">;
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

(node as any).hash = "c23a46c731661932cfbc906e63f6b4ff";

export default node;
