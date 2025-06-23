/**
 * @generated SignedSource<<1e24cf347f2c5c35beae868f926f5b75>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useDestroyerFragment$data = {
  readonly destroyed?: boolean | null | undefined;
  readonly destroyedId?: string | null | undefined;
  readonly disabled?: boolean | null | undefined;
  readonly globalErrors?: ReadonlyArray<{
    readonly message: string;
    readonly type: string;
  }>;
  readonly revoked?: boolean | null | undefined;
  readonly " $fragmentType": "useDestroyerFragment";
};
export type useDestroyerFragment$key = {
  readonly " $data"?: useDestroyerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useDestroyerFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "useDestroyerFragment"
};

(node as any).hash = "9515b6df545dc2616ff21ed263a0f12d";

export default node;
