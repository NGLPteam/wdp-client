/**
 * @generated SignedSource<<d76689b406fee2af45a9d8cc59f7d175>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleContributorFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly role: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ContributionAuthorBlockFragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ContributionsBlockFragment">;
  readonly " $fragmentType": "ArticleContributorFragment";
};
export type ArticleContributorFragment$key = {
  readonly " $data"?: ArticleContributorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleContributorFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ArticleContributorFragment"
};

(node as any).hash = "6251e5b7c7bd238b39af00b84963a3e1";

export default node;
