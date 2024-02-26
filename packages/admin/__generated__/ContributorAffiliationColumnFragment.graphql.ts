/**
 * @generated SignedSource<<cf5b3274d5646cc60dd49fe39ee96ba6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorAffiliationColumnFragment$data = {
  readonly affiliation?: string | null | undefined;
  readonly " $fragmentType": "ContributorAffiliationColumnFragment";
};
export type ContributorAffiliationColumnFragment$key = {
  readonly " $data"?: ContributorAffiliationColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorAffiliationColumnFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ContributorAffiliationColumnFragment"
};

(node as any).hash = "07954f123b90642c4d9527ee2403cfdd";

export default node;
