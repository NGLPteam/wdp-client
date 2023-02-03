/**
 * @generated SignedSource<<4efdb6a23f2148c68a99e6a27ce3ac64>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type getEntityVolumeNumberFragment$data = {
  readonly volumeByName?: {
    readonly number?: {
      readonly content?: string | null;
    } | null;
  } | null;
  readonly volumeNumber?: {
    readonly content?: string | null;
  } | null;
  readonly " $fragmentType": "getEntityVolumeNumberFragment";
};
export type getEntityVolumeNumberFragment$key = {
  readonly " $data"?: getEntityVolumeNumberFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"getEntityVolumeNumberFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getEntityVolumeNumberFragment"
};

(node as any).hash = "f4bb28141866f1e19a62f08415980a1c";

export default node;
