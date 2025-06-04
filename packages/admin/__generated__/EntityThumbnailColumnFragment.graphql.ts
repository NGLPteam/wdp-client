/**
 * @generated SignedSource<<0eef65cc1ec5e3e6df1031b98e4c960d>>
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

(node as any).hash = "8cfdc161b88d9fa22070700d29d25794";

export default node;
