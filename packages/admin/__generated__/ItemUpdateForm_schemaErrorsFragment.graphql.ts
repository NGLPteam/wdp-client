/**
 * @generated SignedSource<<9267806d651af1c73d325e41dde234b6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemUpdateForm_schemaErrorsFragment$data = {
  readonly schemaErrors: ReadonlyArray<{
    readonly hint: boolean;
    readonly message: string;
    readonly metadata: any | null | undefined;
    readonly path: string;
  }>;
  readonly " $fragmentType": "ItemUpdateForm_schemaErrorsFragment";
};
export type ItemUpdateForm_schemaErrorsFragment$key = {
  readonly " $data"?: ItemUpdateForm_schemaErrorsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemUpdateForm_schemaErrorsFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ItemUpdateForm_schemaErrorsFragment"
};

(node as any).hash = "1640f84d874ff8994761f019067fcdc3";

export default node;
