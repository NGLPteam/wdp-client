/**
 * @generated SignedSource<<fbf178eca23ad5c2b28bce419196f58a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type getEntityDisplayNumberFragment$data = {
  readonly issueNumber?: {
    readonly content?: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"getEntityVolumeNumberFragment">;
  readonly " $fragmentType": "getEntityDisplayNumberFragment";
};
export type getEntityDisplayNumberFragment$key = {
  readonly " $data"?: getEntityDisplayNumberFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"getEntityDisplayNumberFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getEntityDisplayNumberFragment"
};

(node as any).hash = "b09c02fae8afe1e9c24fb0ccf9352a54";

export default node;
