/**
 * @generated SignedSource<<6d97771d8f2acf7677797871d696d9e4>>
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

(node as any).hash = "fde776a3a4a19ebefb1b262474b47125";

export default node;
