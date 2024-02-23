/**
 * @generated SignedSource<<594f3ad48b0fd8f4e17ca769ddaf78bf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type getCollectionsSitemapFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly __typename: "Collection";
    readonly slug: string;
    readonly updatedAt: string;
  }>;
  readonly " $fragmentType": "getCollectionsSitemapFragment";
};
export type getCollectionsSitemapFragment$key = {
  readonly " $data"?: getCollectionsSitemapFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"getCollectionsSitemapFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getCollectionsSitemapFragment"
};

(node as any).hash = "e4a72caa3455bec3dbcf5df33432e3ff";

export default node;
