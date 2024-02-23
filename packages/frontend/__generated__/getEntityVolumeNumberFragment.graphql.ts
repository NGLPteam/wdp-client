/**
 * @generated SignedSource<<62c999a372fdbcd154ab519d9f433cad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type getEntityVolumeNumberFragment$data = {
  readonly vol?: {
    readonly number?: {
      readonly content?: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly volumeNumber?: {
    readonly content?: string | null | undefined;
  } | null | undefined;
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

(node as any).hash = "35316fb38f2a80efb61403d98ab59794";

export default node;
