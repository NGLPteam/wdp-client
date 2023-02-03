/**
 * @generated SignedSource<<2d13652f7146b1fa32965b4c20a68317>>
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
    readonly content?: string | null;
  } | null;
  readonly title?: string;
  readonly volumeByName?: {
    readonly title?: string;
  } | null;
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

(node as any).hash = "aa24eecbb68b4ff22227e08be7883fc0";

export default node;
