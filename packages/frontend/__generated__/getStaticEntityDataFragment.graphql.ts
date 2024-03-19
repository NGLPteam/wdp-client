/**
 * @generated SignedSource<<68369c1465aeaed2e3e3b6c760f26872>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type getStaticEntityDataFragment$data = {
  readonly heroImage?: {
    readonly medium: {
      readonly webp: {
        readonly height: number | null | undefined;
        readonly url: string | null | undefined;
        readonly width: number | null | undefined;
      };
    };
    readonly storage: AttachmentStorage | null | undefined;
  };
  readonly heroImageMetadata?: {
    readonly alt: string | null | undefined;
  } | null | undefined;
  readonly summary?: string | null | undefined;
  readonly thumbnail?: {
    readonly medium: {
      readonly webp: {
        readonly height: number | null | undefined;
        readonly url: string | null | undefined;
        readonly width: number | null | undefined;
      };
    };
    readonly storage: AttachmentStorage | null | undefined;
  };
  readonly thumbnailMetadata?: {
    readonly alt: string | null | undefined;
  } | null | undefined;
  readonly title?: string;
  readonly " $fragmentType": "getStaticEntityDataFragment";
};
export type getStaticEntityDataFragment$key = {
  readonly " $data"?: getStaticEntityDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"getStaticEntityDataFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getStaticEntityDataFragment"
};

(node as any).hash = "8111c316d40bff22fa3c310881a0bbd6";

export default node;
