/**
 * @generated SignedSource<<2d99c0f79837db55a1b0110679396365>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useResetOrderingFragment$data = {
  readonly destroyed?: boolean | null | undefined;
  readonly disabled?: boolean | null | undefined;
  readonly globalErrors?: ReadonlyArray<{
    readonly message: string;
    readonly type: string;
  }>;
  readonly revoked?: boolean | null | undefined;
  readonly " $fragmentType": "useResetOrderingFragment";
};
export type useResetOrderingFragment$key = {
  readonly " $data"?: useResetOrderingFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useResetOrderingFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "useResetOrderingFragment"
};

(node as any).hash = "d502755a7f3ac40e9d562924a78666f2";

export default node;
