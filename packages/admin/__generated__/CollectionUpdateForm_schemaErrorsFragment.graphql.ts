/**
 * @generated SignedSource<<e3eb725bbef35cbf2d043e540160d71b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionUpdateForm_schemaErrorsFragment$data = {
  readonly schemaErrors: ReadonlyArray<{
    readonly hint: boolean;
    readonly message: string;
    readonly metadata: any | null;
    readonly path: string;
  }>;
  readonly " $fragmentType": "CollectionUpdateForm_schemaErrorsFragment";
};
export type CollectionUpdateForm_schemaErrorsFragment$key = {
  readonly " $data"?: CollectionUpdateForm_schemaErrorsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionUpdateForm_schemaErrorsFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "CollectionUpdateForm_schemaErrorsFragment"
};

(node as any).hash = "ad269a8a7c1848707e489b9c31a9e98a";

export default node;
