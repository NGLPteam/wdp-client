/**
 * @generated SignedSource<<04ed691c7c1367b1b51858ac7e7098a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PublishedDateColumnFragment$data = {
  readonly published: {
    readonly " $fragmentSpreads": FragmentRefs<"PrecisionDateFragment">;
  };
  readonly " $fragmentType": "PublishedDateColumnFragment";
};
export type PublishedDateColumnFragment$key = {
  readonly " $data"?: PublishedDateColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PublishedDateColumnFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "PublishedDateColumnFragment"
};

(node as any).hash = "639d8cee49a6849552ed809202030da0";

export default node;
