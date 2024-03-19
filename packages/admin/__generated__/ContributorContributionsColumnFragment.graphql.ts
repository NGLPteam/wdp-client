/**
 * @generated SignedSource<<22d7c2a906c4fd307d0d9c9b4ad403b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorContributionsColumnFragment$data = {
  readonly contributionCount: number;
  readonly " $fragmentType": "ContributorContributionsColumnFragment";
};
export type ContributorContributionsColumnFragment$key = {
  readonly " $data"?: ContributorContributionsColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorContributionsColumnFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ContributorContributionsColumnFragment"
};

(node as any).hash = "43dabd25860fb4425ed3a9f052de53f5";

export default node;
