/**
 * @generated SignedSource<<260f07fa0c493ad8da45202facf19bbd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MutationForm_mutationErrors$data = {
  readonly attributeErrors: ReadonlyArray<{
    readonly messages: ReadonlyArray<string>;
    readonly path: string;
    readonly type: string;
  }>;
  readonly errors: ReadonlyArray<{
    readonly message: string;
  }>;
  readonly globalErrors: ReadonlyArray<{
    readonly message: string;
  }>;
  readonly " $fragmentType": "MutationForm_mutationErrors";
};
export type MutationForm_mutationErrors$key = {
  readonly " $data"?: MutationForm_mutationErrors$data;
  readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "MutationForm_mutationErrors"
};

(node as any).hash = "0995e98f6c32f8229802aac5f5e85045";

export default node;
