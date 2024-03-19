/**
 * @generated SignedSource<<fb75323bd383a7c485a3443ec1c63ecd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type getItemsSitemapFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly __typename: "Item";
    readonly slug: string;
    readonly updatedAt: string;
  }>;
  readonly " $fragmentType": "getItemsSitemapFragment";
};
export type getItemsSitemapFragment$key = {
  readonly " $data"?: getItemsSitemapFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"getItemsSitemapFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getItemsSitemapFragment"
};

(node as any).hash = "9bef693045b4fbff4f0418abe830c499";

export default node;
