/**
 * @generated SignedSource<<7a526f866eedb14f3aea209ac7c7f5e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type getEntityDisplayNameFragment$data = {
  readonly issueNumber?: {
    readonly content?: string | null | undefined;
  } | null | undefined;
  readonly title?: string;
  readonly vol?: {
    readonly title?: string;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"getEntityVolumeNumberFragment">;
  readonly " $fragmentType": "getEntityDisplayNameFragment";
};
export type getEntityDisplayNameFragment$key = {
  readonly " $data"?: getEntityDisplayNameFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"getEntityDisplayNameFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getEntityDisplayNameFragment"
};

(node as any).hash = "5700f256fee3b182bb4c3859fcf9873f";

export default node;
