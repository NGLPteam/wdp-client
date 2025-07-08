/**
 * @generated SignedSource<<3224ff2a308e31bae575eff606ed989e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type getThumbWithFallbackFragment$data = {
  readonly breadcrumbs?: ReadonlyArray<{
    readonly crumb: {
      readonly thumbnail?: {
        readonly image: {
          readonly webp: {
            readonly url: string | null | undefined;
          };
        };
        readonly " $fragmentSpreads": FragmentRefs<"CoverImageFragment">;
      };
    };
  }>;
  readonly thumbnail?: {
    readonly image: {
      readonly webp: {
        readonly url: string | null | undefined;
      };
    };
    readonly " $fragmentSpreads": FragmentRefs<"CoverImageFragment">;
  };
  readonly " $fragmentType": "getThumbWithFallbackFragment";
};
export type getThumbWithFallbackFragment$key = {
  readonly " $data"?: getThumbWithFallbackFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"getThumbWithFallbackFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getThumbWithFallbackFragment"
};

(node as any).hash = "a08ab825500c65250d7c166142e9cf51";

export default node;
