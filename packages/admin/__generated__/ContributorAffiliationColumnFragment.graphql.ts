/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorAffiliationColumnFragment = {
    readonly affiliation?: string | null | undefined;
    readonly " $refType": "ContributorAffiliationColumnFragment";
};
export type ContributorAffiliationColumnFragment$data = ContributorAffiliationColumnFragment;
export type ContributorAffiliationColumnFragment$key = {
    readonly " $data"?: ContributorAffiliationColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorAffiliationColumnFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ContributorAffiliationColumnFragment"
};
(node as any).hash = '07954f123b90642c4d9527ee2403cfdd';
export default node;
