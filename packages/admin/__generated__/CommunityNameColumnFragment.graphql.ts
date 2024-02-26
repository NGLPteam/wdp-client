/**
 * @generated SignedSource<<e1a324e373bb5188f20ac51dba2f2bc4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityNameColumnFragment$data = {
  readonly name: string;
  readonly slug: string;
  readonly " $fragmentType": "CommunityNameColumnFragment";
};
export type CommunityNameColumnFragment$key = {
  readonly " $data"?: CommunityNameColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityNameColumnFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "CommunityNameColumnFragment"
};

(node as any).hash = "1d39e7d2d85dc1b4a7706453a91aca4e";

export default node;
