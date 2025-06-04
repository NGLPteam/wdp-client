/**
 * @generated SignedSource<<4952a552b6b5fa4120b8ae5cc4744397>>
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
    readonly storage: AttachmentStorage | null | undefined;
    readonly thumb: {
      readonly webp: {
        readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
      };
    };
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

(node as any).hash = "0a507695ecf95e26db7b14661e57dfbe";

export default node;
